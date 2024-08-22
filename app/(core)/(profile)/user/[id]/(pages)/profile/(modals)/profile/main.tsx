import { FormBody } from '@/(components)/(form)/body/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { ImagePreview } from '@/(components)/(form)/image-preview/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { HorizontalDivider } from '@/(components)/(indicator)/divider/horizontal/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useControllerForUserMain } from '@/(server)/(controller)/user/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext, useState } from 'react';

export function EditProfileModal() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const userController = useControllerForUserMain(loggedInUser.id);
  const user = userController.state.obj;
  const openableController = useContext(ContextForOpenable);
  const [enabled, setEnabled] = useState(user?.private);

  const handleToggle = () => {
    setEnabled(!enabled);
    userController.actions.editActions.edit({
      ...user,
      private: !enabled,
    });
  };

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Profile {user?.fname}</FormTitle>
          <FormBody>
            <ImagePreview fileElem={user?.dp} />
            <HorizontalDivider />
            <p className='font-bold'>Display Name: {user?.displayName}</p>
            <p className='font-bold'>Email: {user?.email}</p>
            <p className='font-bold'>Bio: {user?.bio}</p>
            <HorizontalDivider />
            <p className='font-bold'>
              Joined: {getFormattedDate(new Date(user?.created))}
            </p>
            <HorizontalDivider />
            <p className='font-bold'>
              Status: {user?.private ? 'Private' : 'Public'}
            </p>
            <button
              className='w-[15rem] rounded bg-slate-300 p-[1rem] font-bold'
              onClick={handleToggle}
            >
              {user?.private ? 'Switch to Public' : 'Switch to Private'}
            </button>
          </FormBody>
          <FormFooter>
            {/* <FormButton
              onClick={() => {
                alert('Logging out');
                window.location.href = portalMap.portal.login.link;
                logout();
              }}
            >
              Logout
            </FormButton> */}
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
