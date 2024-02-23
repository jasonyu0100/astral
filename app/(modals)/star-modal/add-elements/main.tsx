import { FormBody } from '@/(components)/form/body/main';
import { FormButton } from '@/(components)/form/button/main';
import { FormFooter } from '@/(components)/form/footer/main';
import { FormContainer } from '@/(components)/form/main';
import { FormTitle } from '@/(components)/form/title/main';
import { Modal } from '@/(components)/modal/main';
import { useContext } from 'react';
import { StarModalContext } from '../main';

export function AddElementsStarModal() {
  const modalContext = useContext(StarModalContext);
  const { opened, close } = modalContext.addElementsStarModal;

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
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}

