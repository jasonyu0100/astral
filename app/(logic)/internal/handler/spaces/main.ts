import { useState, useMemo, createContext } from 'react';
import { SpaceObj } from '@/(logic)/internal/data/infra/model/space/main';
import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { ChapterTemplateObj } from '@/(logic)/internal/data/infra/model/space/templates/main';
import { toast } from 'sonner';
import { gqlHelper } from '../../gql/spaces/main';

export interface SpaceActions {
  queryListSpaces: () => Promise<void>;
  queryCreateSpace: (
    title: string,
    description: string,
    thumbnail: FileObj,
    variant: string,
    chapterTemplates: ChapterTemplateObj[],
  ) => Promise<SpaceObj>;
}

interface SpacesHandler {
  space: SpaceObj | undefined;
  spaceId: string;
  spaces: SpaceObj[];
  _spacesHandler: SpaceActions;
}

export const SpacesHanlderContext = createContext({} as SpacesHandler);

export const useSpacesHandler = (userId: string): SpacesHandler => {
  const [spaces, changeSpaces] = useState<SpaceObj[]>([]);
  const [spaceId, changeSpaceId] = useState('');

  const space = spaces.find((space) => space.id === spaceId);

  const _spacesHandler: SpaceActions = {
    queryListSpaces: async () => {
      const spaces = await gqlHelper.queryListSpaces(userId);
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
        userId,
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
