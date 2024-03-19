import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { Modal } from '@/(components)/(modal)/main';
import { useContext } from 'react';
import { ProfileModalContext } from '../main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ImagePreview } from '@/(components)/(form)/image-preview/main';

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
          <ImagePreview file={user.profilePicture} />
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
