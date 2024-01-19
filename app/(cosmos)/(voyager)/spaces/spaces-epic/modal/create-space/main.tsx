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
import { SpacesContext } from '../../../(stages)/now/page';
import { SpacesModalContext } from '../main';

export function CreateSpaceModal() {
  const { spacesHandler } = useContext(SpacesContext);
  const { createSpaceModal } = useContext(SpacesModalContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');

  return (
    <Modal isOpen={createSpaceModal.showModal} onClose={() => createSpaceModal.openModal()}>
      <FormContainer>
        <FormTitle>Create Space</FormTitle>
        <FormBody>
          <FormDescription>Create your space here</FormDescription>
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
              spacesHandler.queryCreateSpace(title, description);
              createSpaceModal.closeModal();
              alert('Submit Idea');
            }}
          >
            Submit Idea
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
