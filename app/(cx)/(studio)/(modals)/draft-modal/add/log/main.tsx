import { FormTextArea } from '@/(lib)/(form)/area/main';
import { FormBody } from '@/(lib)/(form)/body/main';
import { FormButton } from '@/(lib)/(form)/button/main';
import { FormDescription } from '@/(lib)/(form)/description/main';
import { FormFooter } from '@/(lib)/(form)/footer/main';
import { FormInput } from '@/(lib)/(form)/input/main';
import { FormContainer } from '@/(lib)/(form)/main';
import { FormTitle } from '@/(lib)/(form)/title/main';
import { Modal } from '@/(lib)/(modal)/main';
import { useContext, useState } from 'react';
import { DraftModalContext } from '../../main';
import { MomentsHandlerContext } from '@/(lgx)/internal/handler/moments/main';

export function DraftAddLogModal() {
  const momentsHandler = useContext(MomentsHandlerContext);
  const modalContext = useContext(DraftModalContext);
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
