import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext } from 'react';
import { ProfileModalContext } from '../main';

export function EditProfileModal() {
  const { editProfile } = useContext(ProfileModalContext);

  return (
    <Modal isOpen={editProfile.opened} onClose={() => editProfile.close()}>
      <FormContainer>
        <FormTitle>Edit Profile</FormTitle>
        <FormBody>
          <h1>EDIT PROFILE</h1>
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
