import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForReviewCommentList } from '@/(server)/(controller)/space/chapter/review/comment/list';
import { ContextForChapterReviewList } from '@/(server)/(controller)/space/chapter/review/list';
import { useContext, useState } from 'react';

export function SpaceReviewAddCommentModal() {
  const reviewListController = useContext(ContextForChapterReviewList);
  const commentListController = useContext(ContextForReviewCommentList);
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const [message, changeMessage] = useState('');

  async function createComment() {
    commentListController.actions.createActions.createComment(
      user.id,
      reviewListController.state.objId,
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
