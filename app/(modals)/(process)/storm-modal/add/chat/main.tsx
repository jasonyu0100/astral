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
import { StormContext } from '../../../../../(cx)/(process)/space/[id]/(process-stages)/storm/page';
import { StormModalContext } from '../../main';

export function StormAddChatModal() {
  const { addChatModal: newChat } = useContext(StormModalContext);
  const { chatHandler } = useContext(StormContext);
  const [title, changeTitle] = useState('');
  const [summary, changeSummary] = useState('');

  return (
    <Modal isOpen={newChat.opened} onClose={() => newChat.close()}>
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
              newChat.close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
