import { useState, useMemo, createContext } from 'react';
import { SpaceObj } from '@/(logic)/internal/model/space/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { ChapterTemplateObj } from '@/(logic)/internal/model/space/templates/main';
import { toast } from 'sonner';
import { spacesGqlHelper } from '../../gql/spaces/main';
import { chaptersGqlHelper } from '../../gql/chapters/main';
import { chatsGqlHelper } from '../../gql/chats/main';
import { constellationsGqlHelper } from '../../gql/constellations/main';
import { messagesGqlHelper } from '../../gql/messages/main';
import { starsGqlHelper } from '../../gql/stars/main';

export interface SpaceActions {
  listSpaces: () => Promise<void>;
  createSpace: (
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
  spaceActions: SpaceActions;
}

export const SpacesHandlerContext = createContext({} as SpacesHandler);

export const useSpacesHandler = (userId: string): SpacesHandler => {
  const [spaces, changeSpaces] = useState<SpaceObj[]>([]);
  const [spaceId, changeSpaceId] = useState('');

  const space = spaces.find((space) => space.id === spaceId);

  const spaceActions: SpaceActions = {
    listSpaces: async () => {
      const spaces = await spacesGqlHelper.listFromUser(userId);
      changeSpaces(spaces);
      changeSpaceId(spaces[0]?.id || '');
    },
    createSpace: async (
      title: string,
      description: string,
      thumbnail: FileObj,
      variant: string,
      chapterTemplates: ChapterTemplateObj[],
    ) => {
      const space = await spacesGqlHelper.create(
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
          const chapter = await chaptersGqlHelper.create(
            template.title,
            template.description,
            idx,
            space.id,
          );
          if (template.chatTemplate) {
            const chatObj = await chatsGqlHelper
              .create(
                chapter.id,
                template.chatTemplate.title,
                template.chatTemplate.description,
              )
              .then(async (chat) => {
                if (template?.chatTemplate?.messages) {
                  const messageTemplates = template.chatTemplate.messages;
                  await Promise.all(
                    messageTemplates.map(async (message) => {
                      const messageObj = messagesGqlHelper.createFromAgent(
                        chat.id,
                        message.message,
                      );
                      return messageObj;
                    }),
                  );
                }
                return chat;
              });
          }

          if (template.constellationTemplate) {
            const constellationObj = await constellationsGqlHelper
              .create(
                chapter.id,
                template.constellationTemplate.title,
                template.constellationTemplate.description,
                template.constellationTemplate.variant,
              )
              .then(async (constellation) => {
                if (template?.constellationTemplate?.stars) {
                  const starTemplates = template.constellationTemplate.stars;
                  await Promise.all(
                    starTemplates.map((star) => {
                      const starObj = starsGqlHelper.create.createFromFile(
                        constellation.id, star.title, star.description, star.x, star.y, star.file || ({} as FileObj),
                      )
                      return starObj;
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
    spaceActions.listSpaces();
  }, [userId]);

  return {
    space,
    spaceId,
    spaces,
    spaceActions,
  };
};
