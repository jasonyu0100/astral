import { portalMap } from '@/(portal)/map';
import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { FileElem } from '@/(server)/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormUploadFile } from '@/ui/form/file/upload/upload-file/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext, useState } from 'react';

export function EditProfileModal() {
  const logout = useGlobalUser((state) => state.logout);
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const userController = useControllerForUserMain(loggedInUser.id);
  const userObj = userController.state.obj;
  const openableController = useContext(ContextForOpenable);
  const [enabled, setEnabled] = useState(userObj?.private);
  const [file, changeFile] = useState({} as FileElem);

  const handleToggle = () => {
    setEnabled(!enabled);
    userController.actions.editActions.edit({
      ...userObj,
      private: !enabled,
    });
  };

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Profile {userObj?.fname}</FormTitle>
          <FormBody>
            <FormUploadFile
              defaultFileElem={userObj?.dp}
              label='Attachments'
              onChange={(file) => {
                changeFile(file);
              }}
            />
            <HorizontalDivider />
            <p className='font-bold'>Display Name: {userObj?.displayName}</p>
            <p className='font-bold'>Email: {userObj?.email}</p>
            <p className='font-bold'>Bio: {userObj?.bio}</p>
            <HorizontalDivider />
            <p className='font-bold'>
              Joined: {getFormattedDate(new Date(userObj?.created))}
            </p>
            <HorizontalDivider />
            <p className='font-bold'>
              Status: {userObj?.private ? 'Private' : 'Public'}
            </p>
            <button
              className='w-[100px] rounded bg-slate-300 p-[1rem] font-bold'
              onClick={handleToggle}
            >
              {userObj?.private ? 'Switch to Public' : 'Switch to Private'}
            </button>
          </FormBody>
          <FormFooter>
            <FormButton
              onClick={() => {
                userController.actions.editActions.edit({
                  ...userObj,
                  dp: file,
                });
              }}
            >
              Save
            </FormButton>
            <FormButton
              onClick={() => {
                alert('Logging out');
                window.location.href = portalMap.portal.login.link;
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
