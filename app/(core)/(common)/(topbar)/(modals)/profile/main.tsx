import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { ImagePreview } from '@/(components)/(form)/image-preview/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { portalMap } from '@/(portal)/map';
import { UserObj } from '@/(server)/(model)/user/main';
import { useContext, useEffect, useState } from 'react';

export function EditProfileModal() {
  const user = useGlobalUser((state) => state.user);
  const logout = useGlobalUser((state) => state.logout);
  const openableController = useContext(ContextForOpenable);

  const [stateUser, setStateUser] = useState({} as UserObj);
  useEffect(() => {
    setStateUser(user);
  }, [user]);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Profile {stateUser.fname}</FormTitle>
          <FormBody>
            <ImagePreview fileElem={stateUser.dp} />
            <h1 className='font-bold'>First Name: {stateUser.fname}</h1>
            <h1 className='font-bold'>Last Name: {stateUser.lname}</h1>
            <h1 className='font-bold'>Email: {stateUser.email}</h1>
          </FormBody>
          <FormFooter>
            <FormButton
              onClick={() => {
                logout();
                window.location.href = portalMap.portal.login.link;
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
