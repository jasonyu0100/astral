import { FormBody } from '@/(lib)/(form)/body/main';
import { FormButton } from '@/(lib)/(form)/button/main';
import { FormFooter } from '@/(lib)/(form)/footer/main';
import { FormContainer } from '@/(lib)/(form)/main';
import { FormTitle } from '@/(lib)/(form)/title/main';
import { Modal } from '@/(lib)/(modal)/main';
import { useContext, useState } from 'react';
import { StarModalContext } from '../../main';
import { FormInput } from '@/(lib)/(form)/input/main';
import { FullLoomVideo } from '@/(lib)/(loom)/full-video/main';
import { LogObjContext } from '@/(lgx)/internal/model/resource/log/main';
import { StarsHandlerContext } from '@/(lgx)/internal/handler/stars/main';

export function AddLogStarModal() {
  const modalContext = useContext(StarModalContext);
  const starsHandler = useContext(StarsHandlerContext);
  const { opened, close, logObj } = modalContext.addLogStarModal;
  const [title, changeTitle] = useState<string>('');
  const [description, changeDescription] = useState<string>('');

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Log Element</FormTitle>
        <FormBody>
          <FormInput
            placeholder='Title'
            title='Title'
            value={title}
            onChange={(e) => changeTitle(e.target.value)}
          />
          <FormInput
            placeholder='Description'
            title='Description'
            value={description}
            onChange={(e) => changeDescription(e.target.value)}
          />
          <LogObjContext.Provider value={logObj}>
            <FullLoomVideo />
          </LogObjContext.Provider>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              starsHandler.starActions.createFromLog(title, description, 0, 0, logObj);
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
