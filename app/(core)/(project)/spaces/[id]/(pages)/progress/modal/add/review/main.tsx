import { FormTextArea } from '@/components/form/area/main';
import { FormBody } from '@/components/form/body/main';
import { FormButton } from '@/components/form/button/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormInput } from '@/components/form/input/main';
import { FormContainer } from '@/components/form/main';
import { FormTitle } from '@/components/form/title/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { useControllerForReviewUpdateListFromChapter } from '@/server/controller/update/list-from-chapter';
import { useContext, useState } from 'react';

export function SpacesProgressAddPostModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const activityListController = useControllerForReviewUpdateListFromChapter(
    chapterListController.state.objId,
  );

  async function createReview() {
    const post = await postListController.actions.createActions.createPost(
      title,
      description,
      user.id,
      chapterListController.state.objId,
    );
    await activityListController.actions.createActions.createFromChapterPost(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      post.id,
    );
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Add Post</FormTitle>
          <FormBody>
            <FormInput
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
            <FormButton onClick={createReview}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
