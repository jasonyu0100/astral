import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { useControllerForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { useControllerForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { useControllerForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { useControllerForChapterUpdateItemListFromChapters } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import { useControllerForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { ContextForSpaceList } from '@/(server)/(controller)/space/list';
import {
  exampleFileElem,
  FileElem,
} from '@/(server)/(model)/elements/file/main';
import { SpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { SpaceObj } from '@/(server)/(model)/space/main';
import {
  getSpaceTemplates,
  SpaceTemplate,
  TemplateChapterObj,
} from '@/(server)/(templates)/space/main';
import moment from 'moment';
import { createContext, useContext, useEffect, useState } from 'react';
export interface PageOne {
  title: string;
  updateTitle: (title: string) => void;
  description: string;
  updateDescription: (description: string) => void;
  thumbnail: FileElem;
  updateThumbnail: (thumbnail: FileElem) => void;
}

export interface PageTwo {
  variant: string;
  updateTemplateProject: (variant: string) => void;
  templateProjectChapters: TemplateChapterObj[];
  updateTemplateProjectChapters: (templates: TemplateChapterObj[]) => void;
}

export interface PageThree {
  hours: number;
  updateHours: (hours: number) => void;
  target: string;
  updateTarget: (target: string) => void;
  collaborators: string[];
  updateCollaborators: (collaborators: string[]) => void;
}

export const ContextForPageOne = createContext({} as PageOne);
export const ContextForPageTwo = createContext({} as PageTwo);
export const ContextForPageThree = createContext({} as PageThree);

interface CreateSpaceController {
  pageOne: PageOne;
  pageTwo: PageTwo;
  pageThree: PageThree;
  createSpace: () => Promise<SpaceObj>;
}

export const ContextForCreateSpace = createContext({} as CreateSpaceController);

export const useControllerForCreateSpace = (): CreateSpaceController => {
  const spaceListController = useContext(ContextForSpaceList);
  const galleryListController = useContext(ContextForGalleryList);
  const chapterListController = useControllerForSpaceChapterList('');
  const chatListController = useControllerForChapterChatList('');
  const sceneListController = useControllerForChapterSceneList('');
  const verseListController = useControllerForChapterVerseList('');
  const updateItemListController =
    useControllerForChapterUpdateItemListFromChapters('');

  const user = useGlobalUser((state) => state.user);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState(exampleFileElem as FileElem);
  const [hours, changeHours] = useState(100);
  const [target, changeTarget] = useState(
    moment(new Date()).add(1, 'week').toISOString(),
  );
  const [collaborators, changeCollaborators] = useState<string[]>([]);
  const [templateProject, changeTemplateProject] = useState(
    SpaceTemplate.DEFAULT,
  );
  const [templateSpaceChapters, changeTemplateSpaceChapters] = useState(
    [] as TemplateChapterObj[],
  );

  async function createChapters(
    space: SpaceObj,
    templateSpaceChapters: TemplateChapterObj[],
  ) {
    const chapters = await Promise.all(
      templateSpaceChapters.map(async (templateChapter, index) => {
        const chapter =
          await chapterListController.actions.createActions.createChapter(
            templateChapter.title,
            templateChapter.description,
            user.id,
            space.id,
            index,
          );
        await updateItemListController.actions.createActions.createFromChapter(
          user.id,
          chapter.id,
        );
        return chapter;
      }),
    );

    return chapters;
  }

  async function createChats(
    chapters: SpaceChapterObj[],
    templateSpaceChapters: TemplateChapterObj[],
  ) {
    console.assert(
      chapters.length === templateSpaceChapters.length,
      'Chapters and template chapters must be the same length',
    );
    const chats = await Promise.all(
      chapters.map(async (chapter, index) => {
        const templateChapter = templateSpaceChapters.at(index);
        if (templateChapter && templateChapter.chatTemplates.length > 0) {
          console.assert(false, 'not implemented');
          const chats = await Promise.all(
            templateChapter.chatTemplates.map(async (templateChat) => {
              const chat =
                await chatListController.actions.createActions.createChat(
                  templateChat.title,
                  templateChat.description,
                  user.id,
                  chapter.id,
                );
              await updateItemListController.actions.createActions.createFromChapterChat(
                user.id,
                chapter.id,
                chat.id,
              );
              return chat;
            }),
          );
          return chats;
        } else {
          const chat =
            await chatListController.actions.createActions.createChat(
              'untitled',
              '',
              user.id,
              chapter.id,
            );
          await updateItemListController.actions.createActions.createFromChapterChat(
            user.id,
            chapter.id,
            chat.id,
          );
          return [chat];
        }
      }),
    );

    return chats;
  }

  async function createScenes(
    chapters: SpaceChapterObj[],
    templateSpaceChapters: TemplateChapterObj[],
  ) {
    console.assert(
      chapters.length === templateSpaceChapters.length,
      'Chapters and template chapters must be the same length',
    );
    const scenes = await Promise.all(
      chapters.map(async (chapter, index) => {
        const templateChapter = templateSpaceChapters.at(index);
        if (templateChapter && templateChapter.sceneTemplates.length > 0) {
          console.assert(false, 'not implemented');
          const scenes = await Promise.all(
            templateChapter.sceneTemplates.map(async (templateScene) => {
              const scene =
                await sceneListController.actions.createActions.createScene(
                  templateScene.title,
                  templateScene.description,
                  user.id,
                  chapter.id,
                );
              await updateItemListController.actions.createActions.createFromChapterScene(
                user.id,
                chapter.id,
                scene.id,
              );
              return scene;
            }),
          );
          return scenes;
        } else {
          const scene =
            await sceneListController.actions.createActions.createScene(
              'untitled',
              '',
              user.id,
              chapter.id,
            );
          await updateItemListController.actions.createActions.createFromChapterScene(
            user.id,
            chapter.id,
            scene.id,
          );
          return [scene];
        }
      }),
    );

    return scenes;
  }

  async function createVerses(
    chapters: SpaceChapterObj[],
    templateSpaceChapters: TemplateChapterObj[],
  ) {
    console.assert(
      chapters.length === templateSpaceChapters.length,
      'Chapters and template chapters must be the same length',
    );
    const verses = await Promise.all(
      chapters.map(async (chapter, index) => {
        const templateChapter = templateSpaceChapters.at(index);
        if (templateChapter && templateChapter.verseTemplates.length > 0) {
          console.assert(false, 'not implemented');
          const verses = await Promise.all(
            templateChapter.verseTemplates.map(async (templateVerse) => {
              const verse =
                await verseListController.actions.createActions.createVerse(
                  templateVerse.title,
                  templateVerse.description,
                  user.id,
                  chapter.id,
                );
              await updateItemListController.actions.createActions.createFromChapterVerse(
                user.id,
                chapter.id,
                verse.id,
              );
              return verse;
            }),
          );
          return verses;
        } else {
          const verse =
            await verseListController.actions.createActions.createVerse(
              chapter.title,
              chapter.description,
              user.id,
              chapter.id,
            );
          await updateItemListController.actions.createActions.createFromChapterVerse(
            user.id,
            chapter.id,
            verse.id,
          );
          return [verse];
        }
      }),
    );

    return verses;
  }

  async function createSpace() {
    const gallery =
      await galleryListController.actions.createActions.createGallery(
        user.id,
        title,
        description,
        thumbnail,
      );
    console.log('GALLERY CREATED', gallery);
    const space =
      await spaceListController.actions.createActions.createFromTemplate(
        title,
        description,
        user.id,
        thumbnail,
        templateProject,
        gallery.id,
        hours,
        target,
      );

    console.log('SPACE CREATED', space);
    const chapters = await createChapters(space, templateSpaceChapters);
    console.log('CHAPTERS CREATED', chapters);
    const scenes = await createScenes(chapters, templateSpaceChapters);
    console.log('SCENES CREATED', scenes);
    const verses = await createVerses(chapters, templateSpaceChapters);
    console.log('VERSES CREATED', verses);
    const chats = await createChats(chapters, templateSpaceChapters);
    console.log('chats created', chats);
    console.log('GALLERY CREATED', verses);
    console.log('chats created', chats);

    return space;
  }

  useEffect(() => {
    changeTemplateSpaceChapters(getSpaceTemplates(templateProject).chapters);
  }, [templateProject]);

  const pageOne: PageOne = {
    title,
    updateTitle: (title: string) => changeTitle(title),
    description,
    updateDescription: (description: string) => changeDescription(description),
    thumbnail,
    updateThumbnail: (thumbnail: FileElem) => changeThumbnail(thumbnail),
  };

  const pageTwo: PageTwo = {
    variant: templateProject,
    updateTemplateProject: (variant: string) =>
      changeTemplateProject(variant as SpaceTemplate),
    templateProjectChapters: templateSpaceChapters,
    updateTemplateProjectChapters: (templates: TemplateChapterObj[]) =>
      changeTemplateSpaceChapters(templates),
  };

  const pageThree: PageThree = {
    hours: hours,
    updateHours: (hours: number) => changeHours(hours),
    target: target,
    updateTarget: (target: string) => changeTarget(target),
    collaborators,
    updateCollaborators: (collaborators: string[]) =>
      changeCollaborators(collaborators),
  };

  return {
    pageOne,
    pageTwo,
    pageThree,
    createSpace,
  };
};
