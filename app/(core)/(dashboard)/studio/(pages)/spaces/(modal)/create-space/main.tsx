import { ButtonVariant, FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { createContext, useContext, useEffect, useState } from 'react';
import { exampleFileElem, FileElem } from '@/(server)/(model)/elements/file/main';
import {
  getSpaceTemplates,
  SpaceTemplate,
  TemplateChapterObj,
  TemplateSpaceObj,
} from '@/(server)/(templates)/space/main';
import { PageOne } from './page-1/main';
import { PageTwo } from './page-2/main';
import { ContextForPagable } from '@/(logic)/contexts/pagination/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForSpaceList } from '@/(server)/(controller)/space/list';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { useControllerForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { useControllerForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { useControllerForChapterVerseMain } from '@/(server)/(controller)/space/chapter/verse/main';
import { useControllerForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { useControllerForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ChapterChatObj } from '@/(server)/(model)/space/chapter/chat/main';
import { SpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { SpaceObj } from '@/(server)/(model)/space/main';

export interface PageOneContextInterface {
  title: string;
  updateTitle: (title: string) => void;
  category: string;
  updateCategory: (category: string) => void;
  description: string;
  updateDescription: (description: string) => void;
  thumbnail: FileElem;
  updateThumbnail: (thumbnail: FileElem) => void;
}

export interface PageTwoContextInterface {
  variant: string;
  updateVariant: (variant: string) => void;
  templateSpaceChapters: TemplateChapterObj[];
  updateTemplateSpaceChapters: (templates: TemplateChapterObj[]) => void;
}

export const ContextForPageOne = createContext({} as PageOneContextInterface);
export const ContextForPageTwo = createContext({} as PageTwoContextInterface);

export function CreateSpaceModalView() {
  const spaceListController = useContext(ContextForSpaceList);
  const chapterListController = useControllerForSpaceChapterList('');
  const chatListController = useControllerForChapterChatList('');
  const sceneListController = useControllerForChapterSceneList('');
  const verseListController = useControllerForChapterVerseList('');

  const pagableController = useContext(ContextForPagable);
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [category, changeCategory] = useState('');
  const [thumbnail, changeThumbnail] = useState(exampleFileElem as FileElem);
  const [template, changeTemplate] = useState(SpaceTemplate.DEFAULT);
  const [templateSpaceChapters, changeTemplateSpaceChapters] = useState(
    [] as TemplateChapterObj[],
  );

  useEffect(() => {
    changeTemplateSpaceChapters(getSpaceTemplates(template).chapters);
  }, [template]);

  const pageOne: PageOneContextInterface = {
    title,
    updateTitle: (title: string) => changeTitle(title),
    description,
    category,
    updateCategory: (category: string) => changeCategory(category),
    updateDescription: (description: string) => changeDescription(description),
    thumbnail,
    updateThumbnail: (thumbnail: FileElem) => changeThumbnail(thumbnail),
  };

  const pageTwo: PageTwoContextInterface = {
    variant: template,
    updateVariant: (variant: string) =>
      changeTemplate(variant as SpaceTemplate),
    templateSpaceChapters: templateSpaceChapters,
    updateTemplateSpaceChapters: (templates: TemplateChapterObj[]) =>
      changeTemplateSpaceChapters(templates),
  };

  async function createChapters(space: SpaceObj, templateSpaceChapters: TemplateChapterObj[]) {
    const chapters = await Promise.all(
      templateSpaceChapters.map(async (templateChapter) => {
        const chapter =
          await chapterListController.actions.createActions.createChapter(
            templateChapter.title,
            templateChapter.description,
            user.id,
            space.id,
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
              const chat = await chatListController.actions.createActions.createChat(
                templateChat.title,
                templateChat.description,
                user.id,
                chapter.id,
              );
              return chat;
            }),
          );
          return chats;
        } else {
          const chat = await chatListController.actions.createActions.createChat(
            chapter.title,
            chapter.description,
            user.id,
            chapter.id,
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
              return scene;
            }),
          );
          return scenes;
        } else {
          const scene = await sceneListController.actions.createActions.createScene(
            chapter.title,
            chapter.description,
            user.id,
            chapter.id,
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
              return verse;
            }),
          );
          return verses;
        } else {
          const verse = await verseListController.actions.createActions.createVerse(
            chapter.title,
            chapter.description,
            user.id,
            chapter.id,
          );
          return [verse];
        }
      }),
    );

    return verses;
  }

  async function createSpace() {
    spaceListController.actions.createActions
      .createFromTemplate(title, description, user.id, thumbnail, category)
      .then(async (space) => {
        console.log("SPACE CREATED", space)
        const chapters = await createChapters(space, templateSpaceChapters);
        console.log("CHAPTERS CREATED", chapters)
        const scenes = await createScenes(chapters, templateSpaceChapters);
        console.log("SCENES CREATED", scenes)
        const verses = await createVerses(chapters, templateSpaceChapters);
        console.log("VERSES CREATED", verses)
        const chats = await createChats(chapters, templateSpaceChapters);
        console.log("CHATS CREATED", chats)
      });
    openableController.close();
  }

  function ModalFooter() {
    switch (pagableController.page) {
      case 0:
        return (
          <FormFooter>
            <FormButton
              onClick={() => {
                pagableController.updatePage(1);
              }}
            >
              Next
            </FormButton>
          </FormFooter>
        );
      case 1:
        return (
          <FormFooter>
            <FormButton
              variant={ButtonVariant.SECONDARY}
              onClick={() => {
                pagableController.updatePage(0);
              }}
            >
              Prev
            </FormButton>
            <FormButton onClick={createSpace}>Create</FormButton>
          </FormFooter>
        );
    }
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <ContextForPagable.Provider value={pagableController}>
        <PolaroidModal>
          <FormContainer>
            <FormTitle>Create Space</FormTitle>
            <>
              {pagableController.page === 0 && (
                <ContextForPageOne.Provider value={pageOne}>
                  <PageOne />
                </ContextForPageOne.Provider>
              )}
              {pagableController.page === 1 && (
                <ContextForPageTwo.Provider value={pageTwo}>
                  <PageTwo />
                </ContextForPageTwo.Provider>
              )}
            </>
            <ModalFooter />
          </FormContainer>
        </PolaroidModal>
      </ContextForPagable.Provider>
    </ContextForOpenable.Provider>
  );
}
