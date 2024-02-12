import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext } from 'react';
import { ProfileModalContext } from '../main';
import { useGlobalUser } from '@/state/main';
import { SelectedImage } from '@/(common)/form/selected-image/main';

export function EditProfileModal() {
  const user = useGlobalUser((state) => state.user)
  const logout = useGlobalUser((state) => state.logout);
  const modalContext = useContext(ProfileModalContext);
  const { opened, close } = modalContext.editProfileModal;

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Profile</FormTitle>
        <FormBody>
          <SelectedImage selected={user.profilePicture} />
          <h1 className="font-bold">First Name: {user.fname}</h1>
          <h1 className="font-bold">Last Name: {user.lname}</h1>
          <h1 className="font-bold">Email: {user.email}</h1>
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              logout();
            }}
          >
            Logout
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
