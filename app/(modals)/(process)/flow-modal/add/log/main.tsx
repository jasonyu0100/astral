import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormDescription } from '@/(components)/(form)/description/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { Modal } from '@/(components)/(modal)/main';
import { useContext, useState } from 'react';
import { FlowModalContext } from '../../main';
import { MomentsHandlerContext } from '@/(logic)/internal/handler/moments/main';

export function FlowAddLogModal() {
  const momentsHandler = useContext(MomentsHandlerContext);
  const modalContext = useContext(FlowModalContext);
  const { opened, close, log } = modalContext.addLogMomentModal;
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Add Moment</FormTitle>
        <FormBody>
          <FormDescription>Add your moment here</FormDescription>
          <FormInput
            placeholder='Name'
            title='Name'
            value={title}
            onChange={(e) => changeTitle(e.target.value)}
          />
          <FormTextArea
            title='Description'
            rows={5}
            value={description}
            onChange={(e) => changeDescription(e.target.value)}
            style={{ resize: 'none' }}
          />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              close();
              momentsHandler.momentActions.createMomentFromLog(title, description, log);
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
