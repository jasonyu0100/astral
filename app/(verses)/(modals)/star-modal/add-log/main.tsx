import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useState } from 'react';
import { StarModalContext } from '../main';
import { DraftContext } from '@/(verses)/(apollo)/space/[id]/(stages)/draft/page';
import { FormInput } from '@/(common)/form/input/main';

export function AddLogStarModal() {
  const modalContext = useContext(StarModalContext);
  const { starHandler } = useContext(DraftContext);
  const { opened, close, logObj } = modalContext.addLogStarModal;
  const [title, changeTitle] = useState<string>("");

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Log Element</FormTitle>
        <FormBody>
          <FormInput placeholder="Title" title="Title" value={title} onChange={(e) => changeTitle(e.target.value)} />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              starHandler.queryCreateLogStar(title, 0, 0, logObj);
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

