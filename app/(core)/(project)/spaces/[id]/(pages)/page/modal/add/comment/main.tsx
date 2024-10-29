import { FormTextArea } from '@/components/form/area/main';
import { FormBody } from '@/components/form/body/main';
import { FormButton } from '@/components/form/button/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormContainer } from '@/components/form/main';
import { FormTitle } from '@/components/form/title/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ContextForPostCommentList } from '@/server/controller/post/comment/list';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { useContext, useState } from 'react';

export function SpacesPageAddCommentModal() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const commentListController = useContext(ContextForPostCommentList);
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const [message, changeMessage] = useState('');

  async function createComment() {
    commentListController.actions.createActions.createComment(
      user.id,
      postListController.state.objId,
      message,
    );
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Add Comment</FormTitle>
          <FormBody>
            <FormTextArea
              title='Message'
              rows={5}
              value={message}
              onChange={(e) => changeMessage(e.target.value)}
              style={{ resize: 'none' }}
            />
          </FormBody>
          <FormFooter>
            <FormButton onClick={createComment}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
