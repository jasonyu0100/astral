import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { ButtonVariant, FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { ContextForLoading } from '@/ui/loading/controller/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../(controller)/create-space/main';

export function CreateSpaceModalFooter() {
  const loadingController = useContext(ContextForLoading);
  const pagableController = useContext(ContextForPagable);
  const openableController = useContext(ContextForOpenable);
  const { createSpace } = useContext(ContextForCreateSpace);

  function renderFooter() {
    switch (pagableController.page) {
      case 0:
        return (
          <FormFooter>
            <FormButton
              variant={ButtonVariant.PRIMARY}
              onClick={() => {
                pagableController.updatePage(1);
              }}
            >
              Next
            </FormButton>
          </FormFooter>
        );
      case 1: {
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
              variant={ButtonVariant.PRIMARY}
              onClick={() => {
                loadingController.loadingController.open();
                createSpace().then((spaceObj) => {
                  openableController.close();
                  window.open(
                    spacesMap.spaces.id.conversation.link(spaceObj.id),
                  );
                  loadingController.loadingController.close();
                });
              }}
            >
              Create
            </FormButton>
          </FormFooter>
        );
      }
    }
  }

  return <>{renderFooter()}</>;
}
