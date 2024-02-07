import { useState, useEffect } from 'react';
import { SpaceObj } from '@/tables/space/main';
import { amplifyClient } from '@/client';
import { listSpaceObjs } from '@/graphql/queries';
import { createChapterObj, createChatObj, createConstellationObj, createSpaceObj } from '@/graphql/mutations';
import { FileObj } from '@/tables/resource/file/main';
import { ChapterTemplateObj } from '@/tables/space/templates/main';
import { ChapterObj } from '@/tables/space/chapter/main';
import { toast } from 'sonner';
import { ChatObj } from '@/tables/storm/chat/main';
import { ConstellationObj, ConstellationVariant } from '@/tables/draft/constellation/main';

export interface SpacesHandler {
  queryListSpaces: () => Promise<void>;
  queryCreateSpace: (
    title: string,
    description: string,
    thumbnail: FileObj,
    variant: string,
    chapterTemplates: ChapterTemplateObj[],
  ) => Promise<SpaceObj>;
}

interface useSpacesInterface {
  space: SpaceObj | undefined;
  spaceId: string;
  spaces: SpaceObj[];
  _spacesHandler: SpacesHandler;
}

export const useSpaces = (userId: string): useSpacesInterface => {
  const [spaces, changeSpaces] = useState<SpaceObj[]>([]);
  const [spaceId, changeSpaceId] = useState('');

  const space = spaces.find((space) => space.id === spaceId);

  useEffect(() => {
    if (!userId) {
      changeSpaces([]);
      return;
    }
    _spacesHandler.queryListSpaces();
  }, [userId]);

  const gqlHelper = {
    queryCreateSpace: async (
      title: string,
      description: string,
      thumbnail: FileObj,
      variant: string,
    ) => {
      const payload = await amplifyClient.graphql({
        query: createSpaceObj,
        variables: {
          input: {
            userId: userId,
            title,
            description,
            time: new Date().toISOString(),
            thumbnail,
            variant: variant,
          },
        },
      });
      const space = payload?.data?.createSpaceObj as SpaceObj;
      return space;
    },
    queryListSpaces: async () => {
      const payload = await amplifyClient.graphql({
        query: listSpaceObjs,
        variables: {
          filter: {
            userId: {
              eq: userId,
            },
          },
        },
      });
      const spaces = payload?.data?.listSpaceObjs?.items as SpaceObj[] || [];
      return spaces;
    },
    queryCreateChapterWithinSpace: async (
      title: string,
      description: string,
      idx: number,
      spaceId: string,
    ) => {
      const payload = await amplifyClient.graphql({
        query: createChapterObj,
        variables: {
          input: {
            title,
            description,
            spaceId,
            idx,
          },
        },
      });
      const chapter = payload.data?.createChapterObj as ChapterObj;
      return chapter;
    },
    queryCreateChatWithinChapter: async (title: string, summary: string, chapterId: string) => {
      const payload = await amplifyClient.graphql({
        query: createChatObj,
        variables: {
          input: {
            title: title,
            summary: summary,
            chapterId: chapterId,
            time: new Date().toISOString(),
          },
        },
      });
      const chat = payload.data?.createChatObj as ChatObj;
      return chat;
    },
    queryCreateConstellationWithinChapter: async (
      title: string,
      description: string,
      variant: string,
      chapterId: string
    ) => {
      const payload = await amplifyClient.graphql({
        query: createConstellationObj,
        variables: {
          input: {
            chapterId,
            title,
            description,
            variant,
          },
        },
      });
      const constellation = payload?.data
        .createConstellationObj as ConstellationObj;
      return constellation;
    },
  };

  const _spacesHandler: SpacesHandler = {
    queryListSpaces: async () => {
      const spaces = await gqlHelper.queryListSpaces();
      changeSpaces(spaces);
      changeSpaceId(spaces[0]?.id || '');
    },
    queryCreateSpace: async (
      title: string,
      description: string,
      thumbnail: FileObj,
      variant: string,
      chapterTemplates: ChapterTemplateObj[],
    ) => {
      const space = await gqlHelper.queryCreateSpace(
        title,
        description,
        thumbnail,
        variant,
      );
      changeSpaces((prev) => [...prev, space]);
      changeSpaceId(space.id);
      const _ = await Promise.all(
        chapterTemplates.map(async (template, idx) => {

          const chapter = await gqlHelper.queryCreateChapterWithinSpace(
            template.title,
            template.description,
            idx,
            space.id,
          )
          const chat = await gqlHelper.queryCreateChatWithinChapter(
            "CHAT TITLE",
            "SUMMARY",
            chapter.id,
          )
          const constellation = await gqlHelper.queryCreateConstellationWithinChapter(
            "CONSTELLATION TITLE",
            "CONSTELLATION DESCRIPTION",
            ConstellationVariant.VISUAL,
            chapter.id,
          )
        }),
      );
      toast('Space has been created.');
      return space;
    },
  };

  return {
    space,
    spaceId,
    spaces,
    _spacesHandler,
  };
};
