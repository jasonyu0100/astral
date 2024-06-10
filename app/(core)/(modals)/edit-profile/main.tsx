import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { useContext } from 'react';
import { ProfileModalContext } from '../profile-modal/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ImagePreview } from '@/(components)/(form)/image-preview/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';

export function EditProfileModal() {
  const user = useGlobalUser((state) => state.user);
  const logout = useGlobalUser((state) => state.logout);
  const openableCOntroller = useContext(ContextForOpenable);

  return (
    <ContextForOpenable.Provider value={openableCOntroller}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Profile</FormTitle>
          <FormBody>
            <ImagePreview fileElem={user.dp} />
            <h1 className='font-bold'>First Name: {user.fname}</h1>
            <h1 className='font-bold'>Last Name: {user.lname}</h1>
            <h1 className='font-bold'>Email: {user.email}</h1>
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
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
