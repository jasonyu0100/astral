import { portalMap } from '@/(portal)/map';
import { FormBody } from '@/components/form/body/main';
import { FormButton, FormButtonVariant } from '@/components/form/button/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormContainer } from '@/components/form/main';
import { FormTitle } from '@/components/form/title/main';
import { AstralUploadFile } from '@/components/form/upload/upload-file/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useControllerForUserMain } from '@/server/controller/user/main';
import { FileElement } from '@/server/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext, useState } from 'react';

export function EditProfileModal() {
  const logout = useGlobalUser((state) => state.logout);
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const userController = useControllerForUserMain(loggedInUser?.id);
  const userObj = userController.state.obj;
  const openableController = useContext(ContextForOpenable);
  const [enabled, setEnabled] = useState(userObj?.private);
  const [file, changeFile] = useState({} as FileElement);

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
            <AstralUploadFile
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
              variant={FormButtonVariant.PRIMARY}
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
              variant={FormButtonVariant.SECONDARY}
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
