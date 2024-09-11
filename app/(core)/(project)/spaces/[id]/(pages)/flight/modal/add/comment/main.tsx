import { ContextForSpotlightCommentList } from '@/(server)/controller/space/chapter/spotlight/comment/list';
import { ContextForChapterSpotlightListFromChapter } from '@/(server)/controller/space/chapter/spotlight/list-from-chapter';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';

export function SpacesFlightAddCommentModal() {
  const spotlightListController = useContext(
    ContextForChapterSpotlightListFromChapter,
  );
  const commentListController = useContext(ContextForSpotlightCommentList);
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const [message, changeMessage] = useState('');

  async function createComment() {
    commentListController.actions.createActions.createComment(
      user.id,
      spotlightListController.state.objId,
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
