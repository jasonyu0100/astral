import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { useControllerForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { useControllerForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { useControllerForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { useControllerForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useControllerForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { ContextForSpaceList } from '@/(server)/(controller)/space/list';
import { useControllerForSpaceMemberList } from '@/(server)/(controller)/space/member/list';
import { useControllerForSpaceMemberTermsList } from '@/(server)/(controller)/space/member/terms/list';
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
  thumbnail: FileElem;
  updateThumbnail: (thumbnail: FileElem) => void;
  memberIds: string[];
  updateMemberIds: (memberIds: string[]) => void;
  category: string;
  updateCategory: (category: string) => void;
}

export interface PageTwo {
  variant: string;
  updateTemplateProject: (variant: string) => void;
  templateProjectChapters: TemplateChapterObj[];
  updateTemplateProjectChapters: (templates: TemplateChapterObj[]) => void;
}

export interface PageThree {
  description: string;
  updateDescription: (description: string) => void;
  hours: number;
  updateHours: (hours: number) => void;
  target: string;
  updateTarget: (target: string) => void;
  thumbnail: FileElem;
  updateThumbnail: (thumbnail: FileElem) => void;
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
  const sessionUpdateListController =
    useControllerForSessionUpdateOfChapterList('');
  const spaceMembersListController = useControllerForSpaceMemberList('');
  const spaceMembersTermsListController =
    useControllerForSpaceMemberTermsList('');

  const user = useGlobalUser((state) => state.user);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [category, changeCategory] = useState('');
  const [thumbnail, changeThumbnail] = useState(exampleFileElem as FileElem);
  const [hours, changeHours] = useState(100);
  const [target, changeTarget] = useState(
    moment(new Date()).add(1, 'week').toISOString(),
  );
  const [memberIds, changeMemberIds] = useState<string[]>([]);
  const [templateProject, changeTemplateProject] = useState(
    SpaceTemplate.Project,
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
        await sessionUpdateListController.actions.createActions.createFromChapter(
          user.id,
          space.id,
          chapter.id,
        );
        return chapter;
      }),
    );

    return chapters;
  }

  async function createChats(
    space: SpaceObj,
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
          const chats = await Promise.all(
            templateChapter.chatTemplates.map(async (templateChat) => {
              const chat =
                await chatListController.actions.createActions.createChat(
                  templateChat.title,
                  templateChat.description,
                  user.id,
                  chapter.id,
                );
              await sessionUpdateListController.actions.createActions.createFromChapterChat(
                user.id,
                space.id,
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
          await sessionUpdateListController.actions.createActions.createFromChapterChat(
            user.id,
            space.id,
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
    space: SpaceObj,
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
          const scenes = await Promise.all(
            templateChapter.sceneTemplates.map(async (templateScene) => {
              const scene =
                await sceneListController.actions.createActions.createScene(
                  templateScene.title,
                  templateScene.description,
                  user.id,
                  chapter.id,
                );
              await sessionUpdateListController.actions.createActions.createFromChapterScene(
                user.id,
                space.id,
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
          await sessionUpdateListController.actions.createActions.createFromChapterScene(
            user.id,
            space.id,
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
    space: SpaceObj,
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
          const verses = await Promise.all(
            templateChapter.verseTemplates.map(async (templateVerse) => {
              const verse =
                await verseListController.actions.createActions.createVerseFromFile(
                  templateVerse.title,
                  templateVerse.description,
                  user.id,
                  chapter.id,
                  exampleFileElem,
                );
              await sessionUpdateListController.actions.createActions.createFromChapterVerse(
                user.id,
                space.id,
                chapter.id,
                verse.id,
              );
              return verse;
            }),
          );
          return verses;
        } else {
          const verse =
            await verseListController.actions.createActions.createVerseFromFile(
              'untitled',
              '',
              user.id,
              chapter.id,
              exampleFileElem,
            );
          await sessionUpdateListController.actions.createActions.createFromChapterVerse(
            user.id,
            space.id,
            chapter.id,
            verse.id,
          );
          return [verse];
        }
      }),
    );

    return verses;
  }

  async function createMembers(space: SpaceObj, members: string[]) {
    const memberObjs = await Promise.all(
      members.map(async (memberId) => {
        const terms =
          await spaceMembersTermsListController.actions.createActions.createTerms(
            'Member terms',
            '1 year',
            moment().add(1, 'year').toISOString(),
          );
        const member =
          await spaceMembersListController.actions.createActions.createMember(
            memberId,
            space.id,
            terms.id,
          );
        return member;
      }),
    );
    return memberObjs;
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
        category,
        gallery.id,
        hours,
        target,
      );

    console.log('SPACE CREATED', space);
    const chapters = await createChapters(space, templateSpaceChapters);
    console.log('CHAPTERS CREATED', chapters);
    const members = await createMembers(space, memberIds);
    console.log('MEMBERS CREATED', members);
    const scenes = await createScenes(space, chapters, templateSpaceChapters);
    console.log('SCENES CREATED', scenes);
    const verses = await createVerses(space, chapters, templateSpaceChapters);
    console.log('VERSES CREATED', verses);
    const chats = await createChats(space, chapters, templateSpaceChapters);
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
    category,
    updateCategory: (category: string) => changeCategory(category),
    thumbnail,
    updateThumbnail: (thumbnail: FileElem) => changeThumbnail(thumbnail),
    memberIds: memberIds,
    updateMemberIds: (members: string[]) => changeMemberIds(members),
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
    description,
    updateDescription: (description: string) => changeDescription(description),
    hours: hours,
    updateHours: (hours: number) => changeHours(hours),
    target: target,
    updateTarget: (target: string) => changeTarget(target),
    thumbnail,
    updateThumbnail: (thumbnail: FileElem) => changeThumbnail(thumbnail),
  };

  return {
    pageOne,
    pageTwo,
    pageThree,
    createSpace,
  };
};
