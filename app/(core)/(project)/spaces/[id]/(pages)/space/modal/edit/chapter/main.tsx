import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';

export function SpacesSpaceEditChapterModal() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [objective, changeObjective] = useState('');

  async function editChapter() {
    const chapter = await chapterListController.actions.editActions.edit(
      chapterListController.state.objId,
      {
        title,
        description,
        objective,
      },
    );
    console.log(chapter);
    openableController.close();
  }

  async function deleteChapter() {
    const chapter = await chapterListController.actions.deleteActions.delete(
      chapterListController.state.objId,
    );
    console.log(chapter);
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Edit Chapter</FormTitle>
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
            <FormButton onClick={editChapter}>Edit</FormButton>
            <FormButton onClick={deleteChapter}>Delete</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
