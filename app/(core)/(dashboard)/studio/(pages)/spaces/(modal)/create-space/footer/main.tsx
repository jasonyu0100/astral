import { ButtonVariant, FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForPagable } from '@/(logic)/contexts/pagination/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../(controller)/create-space/main';

export function CreateSpaceModalFooter() {
  const pagableController = useContext(ContextForPagable);
  const openableController = useContext(ContextForOpenable);
  const { createSpace } = useContext(ContextForCreateSpace);

  function renderFooter() {
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
                  window.open(spaceMap.space.id.chat.link(spaceObj.id));
                });
              }}
            >
              Create
            </FormButton>
          </FormFooter>
        );
    }
  }

  return <>{renderFooter()}</>;
}
