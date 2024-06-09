import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormDescription } from '@/(components)/(form)/description/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { useContext, useState } from 'react';
import { StormModalContext } from '../../main';
import { ContextForChapterChatList } from '@/(model)/(controller)/space/chapter/chat/list';

export function StormAddChatModal() {
  const modalContext = useContext(StormModalContext);
  const chatListController = useContext(ContextForChapterChatList);
  const [title, changeTitle] = useState('');
  const [summary, changeSummary] = useState('');

  return (
    <PolaroidModal
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
              chatListController.actions.createActions.createChat(title, summary);
              modalContext.addChatModal.close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </PolaroidModal>
  );
}
