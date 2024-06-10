import { ButtonVariant, FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { createContext, useContext, useEffect, useState } from 'react';
import { FileElem } from '@/(server)/(model)/elements/file/main';
import {
  SpaceTemplate,
  TemplateChapterObj,
} from '@/(server)/(templates)/space/main';
import { PageOne } from './page-1/main';
import { PageTwo } from './page-2/main';
import { ContextForPagable } from '@/(logic)/contexts/pagination/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';

export interface PageOneContextInterface {
  title: string;
  updateTitle: (title: string) => void;
  description: string;
  updateDescription: (description: string) => void;
  thumbnail: FileElem;
  updateThumbnail: (thumbnail: FileElem) => void;
}

export interface PageTwoContextInterface {
  variant: string;
  updateVariant: (variant: string) => void;
  chapterTemplates: TemplateChapterObj[];
  updateChapterTemplates: (templates: TemplateChapterObj[]) => void;
}

export const ContextForPageOne = createContext({} as PageOneContextInterface);
export const ContextForPageTwo = createContext({} as PageTwoContextInterface);

export function CreateSpaceModalView() {
  const pagableController = useContext(ContextForPagable);
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileElem);
  const [variant, changeVariant] = useState(SpaceTemplate.SONG);
  const [chapterTemplates, changeChapterTemplates] = useState(
    [] as TemplateChapterObj[],
  );

  useEffect(() => {
    // changeChapterTemplates(getSpaceTemplates(variant));
  }, [variant]);

  const pageOne: PageOneContextInterface = {
    title,
    updateTitle: (title: string) => changeTitle(title),
    description,
    updateDescription: (description: string) => changeDescription(description),
    thumbnail,
    updateThumbnail: (thumbnail: FileElem) => changeThumbnail(thumbnail),
  };

  const pageTwo: PageTwoContextInterface = {
    variant,
    updateVariant: (variant: string) => changeVariant(variant as SpaceTemplate),
    chapterTemplates,
    updateChapterTemplates: (templates: TemplateChapterObj[]) =>
      changeChapterTemplates(templates),
  };

  function createSpace() {
    // spaceListController.actions.createActions.createEmpty(
    //   title,
    //   description,
    //   thumbnail,
    //   variant,
    //   chapterTemplates,
    // );
    close();
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
