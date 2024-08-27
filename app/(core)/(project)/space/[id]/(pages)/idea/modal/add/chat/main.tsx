import { ContextForChapterChatList } from '@/(server)/controller/space/chapter/chat/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForSessionUpdateOfChapterList } from '@/(server)/controller/space/chapter/session/update/chapter-list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';

export function SpaceIdeaAddChatModal() {
  const user = useGlobalUser((state) => state.user);
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useContext(ContextForOpenable);
  const chatListController = useContext(ContextForChapterChatList);
  const [title, changeTitle] = useState('');
  const [summary, changeSummary] = useState('');
  const updateListController = useControllerForSessionUpdateOfChapterList('');

  async function createChat() {
    const chat = await chatListController.actions.createActions.createChat(
      title,
      summary,
      user.id,
      chapterListController.state.objId,
    );
    await updateListController.actions.createActions.createFromChapterChat(
      user.id,
      spaceController.state.objId,
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
