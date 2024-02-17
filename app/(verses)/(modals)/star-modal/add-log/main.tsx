import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext } from 'react';
import { StarModalContext } from '../main';
import { DraftContext } from '@/(verses)/(apollo)/space/[id]/(stages)/draft/page';

export function AddLogStarModal() {
  const modalContext = useContext(StarModalContext);
  const { starHandler } = useContext(DraftContext);
  const { opened, close, logObj } = modalContext.addLogStarModal;

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Log Element</FormTitle>
        <FormBody>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              starHandler.queryCreateLogStar("hello", 0, 0, logObj);
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

