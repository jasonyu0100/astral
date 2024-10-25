import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { FormTextArea } from '@/components/form/area/main';
import { FormBody } from '@/components/form/body/main';
import { FormButton, FormButtonVariant } from '@/components/form/button/main';
import { FormSearchImage } from '@/components/form/file/search/search-image/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormInput } from '@/components/form/input/main';
import { FormContainer } from '@/components/form/main';
import { FormTitle } from '@/components/form/title/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext, useEffect, useState } from 'react';

export function SpacesBoardAddChapterModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.currentObj?.id || '',
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [objective, setObjective] = useState('');
  const [background, setBackground] = useState(exampleFileElem);

  useEffect(() => {
    if (chapterListController.state.currentObj) {
      setTitle(chapterListController.state.currentObj.title);
      setDescription(chapterListController.state.currentObj.description);
      setObjective(chapterListController.state.currentObj.objective);
    }
  }, [chapterListController.state.currentObj]);

  async function createChapter() {
    const chapter =
      await chapterListController.actions.createActions.createChapter(
        title,
        description,
        objective,
        background.src || '',
        user.id,
        spaceController.state.objId,
      );
    await activityListController.actions.createActions.createFromChapter(
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormTextArea
              title='Objective'
              rows={5}
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              style={{ resize: 'none' }}
            />
            <FormTextArea
              title='Description'
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ resize: 'none' }}
            />
            <FormSearchImage
              fileElem={background}
              label='Background (optional)'
              onChange={(file) => setBackground(file)}
            ></FormSearchImage>
          </FormBody>
          <FormFooter>
            <FormButton
              variant={FormButtonVariant.PRIMARY}
              onClick={createChapter}
            >
              Add
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
