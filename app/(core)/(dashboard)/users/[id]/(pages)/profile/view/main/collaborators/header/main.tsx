import { ContextForUserConnectionList } from '@/(server)/controller/user/connection/list';
import { useContext } from 'react';
import {
  ContextForUserProfile,
  UserProfilePage,
} from '../../../../controller/main';
import { ContextForCollaborators } from '../controller/main';

export function UserProfileCollaboratorsHeader() {
  const collaboratorController = useContext(ContextForCollaborators);
  const profileController = useContext(ContextForUserProfile);
  const userConectionList = useContext(ContextForUserConnectionList);

  return (
    <div className='flex h-[4rem] flex-shrink-0 shadow-glow'>
      <div className='flex h-full w-full flex-row items-center justify-center'>
        <div className='flex w-full flex-row px-[2rem]'>
          <div className='flex w-1/3 flex-row'>
            <p
              className='text-md cursor-pointer font-bold text-slate-500'
              onClick={() => {
                profileController.actions.updatePage(UserProfilePage.Overview);
              }}
            >
              Back
            </p>
          </div>
          <div className='flex w-1/3 flex-row justify-center'>
            <p className='text-md font-bold text-slate-500'>
              {collaboratorController.state.page}
            </p>
          </div>
          <div className='flex w-1/3 flex-row justify-end'>
            <p className='text-md font-bold text-slate-500'>
              {userConectionList.state.objs.length} / 100
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
