import { ButtonVariant, FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForPagable } from '@/(logic)/contexts/pagination/main';
import { FileElem } from '@/(server)/(model)/elements/file/main';
import { TemplateChapterObj } from '@/(server)/(templates)/space/main';
import { createContext, useContext } from 'react';
import { useControllerForCreateSpace } from './(controller)/create-space/main';
import { CreateSpaceModalPageOne } from './page-1/main';
import { CreateSpaceModalPageTwo } from './page-2/main';

export interface PageOneInterface {
  title: string;
  updateTitle: (title: string) => void;
  category: string;
  updateCategory: (category: string) => void;
  description: string;
  updateDescription: (description: string) => void;
  thumbnail: FileElem;
  updateThumbnail: (thumbnail: FileElem) => void;
}

export interface PageTwoInterface {
  variant: string;
  updateVariant: (variant: string) => void;
  templateSpaceChapters: TemplateChapterObj[];
  updateTemplateSpaceChapters: (templates: TemplateChapterObj[]) => void;
}

export const ContextForPageOne = createContext({} as PageOneInterface);
export const ContextForPageTwo = createContext({} as PageTwoInterface);

export function CreateSpaceModalView() {
  const { pageOne, pageTwo, createSpace } = useControllerForCreateSpace();
  const pagableController = useContext(ContextForPagable);
  const openableController = useContext(ContextForOpenable);

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
            <FormButton
              onClick={() => {
                createSpace().then(() => {
                  openableController.close();
                });
              }}
            >
              Create
            </FormButton>
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
                  <CreateSpaceModalPageOne />
                </ContextForPageOne.Provider>
              )}
              {pagableController.page === 1 && (
                <ContextForPageTwo.Provider value={pageTwo}>
                  <CreateSpaceModalPageTwo />
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
