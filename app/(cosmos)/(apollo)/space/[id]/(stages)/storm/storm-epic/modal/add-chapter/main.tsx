import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useState } from 'react';
import { StormContext } from '../../../page';
import { StormModalContext } from '../main';

export function StormAddChapterModal() {
  const { chapterHandler } = useContext(StormContext);
  const { addChapter } = useContext(StormModalContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');

  return (
    <Modal isOpen={addChapter.showModal} onClose={() => addChapter.closeModal()}>
      <FormContainer>
        <FormTitle>Add Chapter</FormTitle>
        <FormBody>
          <FormDescription>Add your chapter here</FormDescription>
          <FormInput
            placeholder='Name'
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
          <FormButton
            onClick={() => {
              chapterHandler.queryCreateChapter(title, description);
              addChapter.closeModal();
              alert('Add Chapter');
            }}
          >
            Add Chapter
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}

