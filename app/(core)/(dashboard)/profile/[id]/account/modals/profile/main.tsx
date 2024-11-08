import { portalMap } from '@/(portal)/map';
import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { FileElement } from '@/architecture/model/elements/file/main';
import {
  ContextForLoggedInUserObj,
  UserProfileVisibility,
} from '@/architecture/model/user/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralUploadFile } from '@/components/form/upload/upload-file/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { AstralLogoutIcon } from '@/icons/logout/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext, useState } from 'react';

export function EditProfileModal() {
  const logout = useGlobalUser((state) => state.logout);
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const userController = useControllerForUserMain(loggedInUser?.id);
  const userObj = userController.state.obj;
  const openableController = useContext(ContextForOpenable);
  const [file, changeFile] = useState({} as FileElement);

  const updateVisibility = (visibility: ProfileVisibility) => {
    userController.actions.editActions.edit({
      ...userObj,
      visibility: visibility,
    });
  };

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Profile Settings</AstralModalTitle>
              <AstralUploadFile
                defaultFileElem={userObj?.dp}
                label='Attachments'
                onChange={(file) => {
                  changeFile(file);
                }}
              />
              <p className='font-bold text-slate-300'>
                Display Name: {userObj?.displayName}
              </p>
              <p className='font-bold text-slate-300'>
                Email: {userObj?.email}
              </p>
              <p className='font-bold text-slate-300'>Bio: {userObj?.bio}</p>
              <p className='font-bold text-slate-300'>
                Joined: {getFormattedDate(new Date(userObj?.created))}
              </p>
              <div className='flex flex-row space-x-[1rem]'>
                <select
                  value={userObj.visibility}
                  onChange={(e) =>
                    updateVisibility(e.target.value as UserProfileVisibility)
                  }
                >
                  <option value={UserProfileVisibility.PUBLIC}>Public</option>
                  <option value={UserProfileVisibility.PRIVATE}>Private</option>
                </select>
              </div>
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton
                onClick={() => {
                  userController.actions.editActions.edit({
                    ...userObj,
                    dp: file,
                    visibility: userObj.visibility,
                  });
                  openableController.close();
                }}
              >
                <AstralCheckIcon />
              </AstralRoundedActionButton>
              <AstralRoundedActionButton
                className='from-slate-500 to-slate-600'
                onClick={() => {
                  alert('Logging out');
                  window.location.href = portalMap.portal.login.link;
                  logout();
                }}
              >
                <AstralLogoutIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
