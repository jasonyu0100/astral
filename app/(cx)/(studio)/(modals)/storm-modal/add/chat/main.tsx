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
import { StormModalContext } from '../../main';
import { ChatsHandlerContext } from '@/(lgx)/internal/handler/storm/chats/main';

export function StormAddChatModal() {
  const modalContext = useContext(StormModalContext);
  const chatsHandler = useContext(ChatsHandlerContext);
  const [title, changeTitle] = useState('');
  const [summary, changeSummary] = useState('');

  return (
    <Modal
      isOpen={modalContext.addChatModal.opened}
      onClose={() => modalContext.addChatModal.close()}
    >
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
              chatsHandler.chatActions.createChat(title, summary);
              modalContext.addChatModal.close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
