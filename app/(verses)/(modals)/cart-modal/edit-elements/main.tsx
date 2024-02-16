import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext } from 'react';
import { ElementsModalContext } from '../main';

export function EditElementsModal() {
  const modalContext = useContext(ElementsModalContext);
  const { opened, close } = modalContext.elementsModal;

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Elements</FormTitle>
        <FormBody>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              close();
            }}
          >
            Create
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
