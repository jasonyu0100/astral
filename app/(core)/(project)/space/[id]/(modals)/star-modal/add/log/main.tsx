import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { useContext, useState } from 'react';
import { StarModalContext } from '../../main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FullLoomVideo } from '@/(components)/(loom)/full-video/main';
import { LogElemContext } from '@/(model)/elements/log/main';
import { IdeasHandlerContext } from '@/(controller)/(archive)/ideas/main';

export function AddLogStarModal() {
  const modalContext = useContext(StarModalContext);
  const ideasHandler = useContext(IdeasHandlerContext);
  const { opened, close, logObj } = modalContext.addLogStarModal;
  const [title, changeTitle] = useState<string>('');
  const [description, changeDescription] = useState<string>('');

  return (
    <PolaroidModal isOpen={opened} onClose={() => close()}>
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
          <LogElemContext.Provider value={logObj}>
            <FullLoomVideo />
          </LogElemContext.Provider>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              ideasHandler.ideaActions.createFromLog(title, description, 0, 0, logObj);
              close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </PolaroidModal>
  );
}
