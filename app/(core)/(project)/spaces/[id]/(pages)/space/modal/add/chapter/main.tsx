import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForReviewUpdateListFromChapter } from '@/(server)/controller/space/chapter/session/update/list-from-chapter';
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

export function SpacesSpaceAddChapterModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const reviewUpdateListController =
    useControllerForReviewUpdateListFromChapter('');
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [objective, changeObjective] = useState('');

  async function createChapter() {
    const chapter =
      await chapterListController.actions.createActions.createChapter(
        title,
        description,
        objective,
        objective,
        user.id,
        spaceController.state.objId,
      );
    await reviewUpdateListController.actions.createActions.createFromChapter(
      user.id,
      spaceController.state.objId,
      chapter.id,
    );
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Add Chapter</FormTitle>
          <FormBody>
            <FormInput
              title='Title'
              placeholder='Set a title for your chapter'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormTextArea
              title='Objective'
              placeholder='Set an objective for your chapter'
              rows={3}
              value={objective}
              onChange={(e) => changeObjective(e.target.value)}
              style={{ resize: 'none' }}
            />
            <FormTextArea
              title='Description'
              placeholder='Describe your chapter'
              rows={5}
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
              style={{ resize: 'none' }}
            />
          </FormBody>
          <FormFooter>
            <FormButton onClick={createChapter}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
