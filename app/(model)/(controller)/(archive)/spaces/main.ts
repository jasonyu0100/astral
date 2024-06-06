import { useState, useMemo, createContext } from 'react';
import { SpaceObj } from '@/(model)/space/main';
import { FileElem } from '@/(model)/elements/file/main';
import { TemplateChapterObj } from '@/(model)/(templates)/space/main';
import { toast } from 'sonner';
// import { spacesGqlHelper } from '../../(db)/(archive-db)/spaces/main';
// import { chaptersGqlHelper } from '../../(db)/(archive-db)/chapters/main';
// import { chatsGqlHelper } from '../../(db)/(archive-db)/chats/main';
// import { partsGqlHelper } from '../../(db)/(archive-db)/scenes/main';
// import { messagesGqlHelper } from '../../(db)/(archive-db)/messages/main';
// import { ideasGqlHelper } from '../../(db)/(archive-db)/ideas/main';

export interface SpaceActions {
  listSpaces: () => Promise<void>;
  createSpace: (
    title: string,
    description: string,
    thumbnail: FileElem,
    variant: string,
    chapterTemplates: TemplateChapterObj[],
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
      // const spaces = await spacesGqlHelper.list(userId);
      changeSpaces(spaces);
      changeSpaceId(spaces[0]?.id || '');
    },
    createSpace: async (
      title: string,
      description: string,
      thumbnail: FileElem,
      variant: string,
      chapterTemplates: TemplateChapterObj[],
    ) => {
      // const space = await spacesGqlHelper.create(
      //   userId,
      //   title,
      //   description,
      //   thumbnail,
      //   variant,
      // );
      // changeSpaces((prev) => [...prev, space]);
      // changeSpaceId(space.id);
      // const _ = await Promise.all(
      //   chapterTemplates.map(async (template, idx) => {
      //     const chapter = await chaptersGqlHelper.create(
      //       template.title,
      //       template.summary,
      //       idx,
      //       space.id,
      //     );
          // if (template.chatTemplates) {
          //   const chatObj = await chatsGqlHelper
          //     .create(
          //       chapter.id,
          //       template.chatTemplates.title,
          //       template.chatTemplates.description,
          //     )
          //     .then(async (chat) => {
          //       if (template?.chatTemplates?.messages) {
          //         const messageTemplates = template.chatTemplates.messages;
          //         await Promise.all(
          //           messageTemplates.map(async (message) => {
          //             const messageObj = messagesGqlHelper.createFromAgent(
          //               chat.id,
          //               message.message,
          //             );
          //             return messageObj;
          //           }),
          //         );
          //       }
          //       return chat;
          //     });
          // }

          // if (template.sceneTemplates) {
          //   const partObj = await partsGqlHelper
          //     .create(
          //       chapter.id,
          //       template.sceneTemplates.title,
          //       template.sceneTemplates.description,
          //       template.sceneTemplates.variant,
          //     )
          //     .then(async (part) => {
          //       if (template?.sceneTemplates?.ideas) {
          //         const ideaTemplates = template.sceneTemplates.ideas;
          //         await Promise.all(
          //           ideaTemplates.map((idea) => {
          //             const ideaObj = ideasGqlHelper.create.createFromFile(
          //               part.id, idea.title, idea.description, idea.x, idea.y, idea.file || ({} as FileObj),
          //             )
          //             return ideaObj;
          //           }),
          //         );
          //       }
          //       return part;
          //     });
          // }
      //   }),
      // );
      // toast('Space has been created.');
      // return space;
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
