import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormDescription } from '@/(components)/(form)/description/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { useControllerForChapterItemList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useContext, useState } from 'react';

export function StormAddChatModal() {
  const user = useGlobalUser((state) => state.user);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useContext(ContextForOpenable);
  const chatListController = useContext(ContextForChapterChatList);
  const [title, changeTitle] = useState('');
  const [summary, changeSummary] = useState('');
  const updateListController = useControllerForChapterItemList('');

  async function createChat() {
    const chat = await chatListController.actions.createActions.createChat(
      title,
      summary,
      user.id,
      chapterListController.state.objId,
    );
    await updateListController.actions.createActions.createFromChapterChat(
      user.id,
      chapterListController.state.objId,
      chat.id,
    );
    openableController.close();
  }
  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
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
            <FormButton onClick={createChat}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
