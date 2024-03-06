import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { Modal } from '@/(components)/(modal)/main';
import { useContext, useState } from 'react';
import { StarModalContext } from '../../main';
import { FormInput } from '@/(components)/(form)/input/main';
import { StarsHandlerContext } from '@/(logic)/internal/handler/draft/stars/main';
import { FormTextArea } from '@/(components)/(form)/area/main';

export function AddLogStarModal() {
  const modalContext = useContext(StarModalContext);
  const starsHandler = useContext(StarsHandlerContext);
  const { opened, close, logObj } = modalContext.addLogStarModal;
  const [title, changeTitle] = useState<string>("");
  const [description, changeDescription] = useState<string>("");

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Log Element</FormTitle>
        <FormBody>
          <FormInput placeholder="Title" title="Title" value={title} onChange={(e) => changeTitle(e.target.value)} />
          <FormTextArea placeholder="Description" title="Description" value={description} onChange={(e) => changeDescription(e.target.value)} />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              starsHandler.starActions.queryCreateLogStar(title, description,0, 0, logObj);
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

