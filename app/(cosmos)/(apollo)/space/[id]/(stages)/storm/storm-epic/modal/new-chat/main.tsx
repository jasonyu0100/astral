import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useState } from 'react';
import { StormContext } from '../../../page';
import { StormModalContext } from '../main';

export function StormNewChatModal() {
  const { newChat } = useContext(StormModalContext);
  const { chatHandler } = useContext(StormContext);
  const [title, changeTitle] = useState('');
  const [summary, changeSummary] = useState('');

  return (
    <Modal isOpen={newChat.showModal} onClose={() => newChat.closeModal()}>
      <FormContainer>
        <FormTitle>Add Chat</FormTitle>
        <FormBody>
          <FormDescription>Add your chat here</FormDescription>
          <FormInput
            placeholder='Title'
            title='Title'
            value={title}
            onChange={(e) => changeTitle(e.target.value)}
          />
          <FormTextArea
            title='Summary'
            rows={5}
            value={summary}
            onChange={(e) => changeSummary(e.target.value)}
            style={{ resize: 'none' }}
          />
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              chatHandler.queryCreateChat(title, summary);
              newChat.closeModal();
              alert('Add Chat');
            }}
          >
            Add Chat
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
