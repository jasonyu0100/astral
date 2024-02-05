import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext } from 'react';
import { CartModalContext } from '../main';

export function EditProfileModal() {
  const { editCart: editProfile } = useContext(CartModalContext);

  return (
    <Modal isOpen={editProfile.opened} onClose={() => editProfile.close()}>
      <FormContainer>
        <FormTitle>Edit Cart</FormTitle>
        <FormBody>
          <h1>EDIT Cart</h1>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              editProfile.close();
            }}
          >
            Create
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
