import { useState, useEffect, useMemo } from 'react';
import { SpaceObj } from '@/tables/space/main';
import { amplifyClient } from '@/client';
import { listSpaceObjs } from '@/graphql/queries';
import {
  createChapterObj,
  createChatObj,
  createConstellationObj,
  createMessageObj,
  createSpaceObj,
  createStarObj,
} from '@/graphql/mutations';
import { FileObj } from '@/tables/resource/file/main';
import { ChapterTemplateObj } from '@/tables/space/templates/main';
import { ChapterObj } from '@/tables/space/chapter/main';
import { toast } from 'sonner';
import { ChatObj } from '@/tables/storm/chat/main';
import {
  ConstellationObj,
  ConstellationVariant,
} from '@/tables/draft/constellation/main';
import { MessageObj, MessageSource } from '@/tables/storm/chat/message/main';
import { ResourceVariant } from '@/tables/resource/main';
import { StarObj } from '@/tables/draft/constellation/star/main';

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
      const spaces = (payload?.data?.listSpaceObjs?.items as SpaceObj[]) || [];
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
    queryCreateChatWithinChapter: async (
      title: string,
      summary: string,
      chapterId: string,
    ) => {
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
      chapterId: string,
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
    queryCreateAgentMessageWithinChat: async (text: string, chatId: string) => {
      const payload = await amplifyClient.graphql({
        query: createMessageObj,
        variables: {
          input: {
            chatId: chatId,
            source: MessageSource.AGENT,
            time: new Date().toISOString(),
            message: text,
          },
        },
      });
      const message = payload.data?.createMessageObj as MessageObj;
      return message;
    },
    queryCreateFileStarWithinConstellation: async (
      title: string,
      x: number,
      y: number,
      file: FileObj,
      constellationId: string,
    ) => {
      const payload = await amplifyClient.graphql({
        query: createStarObj,
        variables: {
          input: {
            constellationId: constellationId,
            title: title,
            description: '',
            x,
            y,
            file: {
              id: file.id,
              src: file.src,
              title: file.title,
              size: file.size,
              fileType: file.fileType,
              variant: file.variant,
            },
            variant: ResourceVariant.FILE,
          },
        },
      });
      console.log(payload)
      const star = payload?.data.createStarObj as StarObj;
      console.log(star);
      return star;
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
          );

          if (template.chatTemplate) {
            const chat = await gqlHelper
              .queryCreateChatWithinChapter(
                template.chatTemplate.title,
                template.chatTemplate?.description,
                chapter.id,
              )
              .then(async (chat) => {
                if (template?.chatTemplate?.messages) {
                  const messageTemplates = template.chatTemplate.messages;
                  await Promise.all(
                    messageTemplates.map(async (message) => {
                      return gqlHelper.queryCreateAgentMessageWithinChat(
                        message.message,
                        chat.id,
                      );
                    }),
                  );
                }
                return chat;
              });
          }

          if (template.constellationTemplate) {
            const constellation = await gqlHelper
              .queryCreateConstellationWithinChapter(
                template.constellationTemplate.title,
                template.constellationTemplate.description,
                template.constellationTemplate.variant,
                chapter.id,
              )
              .then(async (constellation) => {
                if (template?.constellationTemplate?.stars) {
                  const starTemplates = template.constellationTemplate.stars;
                  console.log(starTemplates);
                  await Promise.all(
                    starTemplates.map((star) => {
                      return gqlHelper.queryCreateFileStarWithinConstellation(
                        star.title,
                        star.x,
                        star.y,
                        star.file || ({} as FileObj),
                        constellation.id,
                      );
                    }),
                  );
                }
                return constellation;
              });
          }
        }),
      );
      toast('Space has been created.');
      return space;
    },
  };

  useMemo(() => {
    if (!userId) {
      changeSpaces([]);
      return;
    }
    _spacesHandler.queryListSpaces();
  }, [userId]);

  return {
    space,
    spaceId,
    spaces,
    _spacesHandler,
  };
};
