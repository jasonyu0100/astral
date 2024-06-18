import { ButtonVariant, FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForPagable } from '@/(logic)/contexts/pagination/main';
import { useContext } from 'react';
import {
  ContextForPageOne,
  ContextForPageThree,
  ContextForPageTwo,
  useControllerForCreateSpace,
} from './(controller)/create-space/main';
import { CreateSpaceModalPageOne } from './page-1/main';
import { CreateSpaceModalPageTwo } from './page-2/main';
import { CreateSpaceModalPageThree } from './page-3/main';

export function CreateSpaceModalView() {
  const { pageOne, pageTwo, pageThree, createSpace } =
    useControllerForCreateSpace();
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
                pagableController.updatePage(2);
              }}
            >
              Next
            </FormButton>
          </FormFooter>
        );
      case 2:
        return (
          <FormFooter>
            <FormButton
              variant={ButtonVariant.SECONDARY}
              onClick={() => {
                pagableController.updatePage(1);
              }}
            >
              Prev
            </FormButton>
            <FormButton
              onClick={() => {
                createSpace().then((spaceObj) => {
                  openableController.close();
                  window.open(spaceMap.space.id.storm.link(spaceObj.id));
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
              {pagableController.page === 2 && (
                <ContextForPageThree.Provider value={pageThree}>
                  <CreateSpaceModalPageThree />
                </ContextForPageThree.Provider>
              )}
            </>
            <ModalFooter />
          </FormContainer>
        </PolaroidModal>
      </ContextForPagable.Provider>
    </ContextForOpenable.Provider>
  );
}
