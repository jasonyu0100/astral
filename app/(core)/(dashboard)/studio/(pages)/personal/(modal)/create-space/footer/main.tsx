import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { FormButton, FormButtonVariant } from '@/components/form/button/main';
import { FormFooter } from '@/components/form/footer/main';
import { ContextForLoading } from '@/components/loading/controller/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { ContextForPagable } from '@/logic/contexts/pagination/main';
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
              variant={FormButtonVariant.PRIMARY}
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
              variant={FormButtonVariant.SECONDARY}
              onClick={() => {
                pagableController.updatePage(0);
              }}
            >
              Prev
            </FormButton>
            <FormButton
              variant={FormButtonVariant.PRIMARY}
              onClick={() => {
                loadingController.loadingController.open();
                createSpace().then((spaceObj) => {
                  openableController.close();
                  window.open(spacesMap.spaces.id.chat.link(spaceObj.id));
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
