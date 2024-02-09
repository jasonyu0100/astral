import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext } from 'react';
import { StarModalContext } from '../main';

export function AddFileStarModal() {
  const modalContext = useContext(StarModalContext);
  const { opened, close } = modalContext.addNoteStarModal;

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Add Note</FormTitle>
        <FormBody>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}


