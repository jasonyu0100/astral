import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useState } from 'react';
import { DraftContext } from '../../../(apollo)/space/[id]/(stages)/draft/page';
import { DraftModalContext } from '../main';

export function DraftAddChapterModal() {
  const { chapters, chapterHandler } = useContext(DraftContext);
  const { addChapterModal } = useContext(DraftModalContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');

  return (
    <Modal isOpen={addChapterModal.opened} onClose={() => addChapterModal.close()}>
      <FormContainer>
        <FormTitle>Add Chapter</FormTitle>
        <FormBody>
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
              chapterHandler.queryCreateChapter(title, description, chapters.length);
              addChapterModal.close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
