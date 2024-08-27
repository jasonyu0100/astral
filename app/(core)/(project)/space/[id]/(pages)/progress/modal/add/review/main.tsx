import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForChapterReviewList } from '@/(server)/controller/space/chapter/review/list';
import { useControllerForSessionUpdateOfChapterList } from '@/(server)/controller/space/chapter/session/update/chapter-list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { FileElem } from '@/(server)/model/elements/file/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormUploadFile } from '@/ui/form/file/upload/upload-file/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';

export function SpaceProgressAddReviewModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const reviewListController = useContext(ContextForChapterReviewList);
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const [file, changeFile] = useState({} as FileElem);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const updateListController = useControllerForSessionUpdateOfChapterList('');

  async function createReview() {
    const review =
      await reviewListController.actions.createActions.createReviewFromFile(
        title,
        description,
        user.id,
        chapterListController.state.objId,
        file,
      );
    await updateListController.actions.createActions.createFromChapterReview(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      review.id,
    );
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Add Review</FormTitle>
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
            <FormUploadFile
              label='File'
              onChange={(file) => changeFile(file)}
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
