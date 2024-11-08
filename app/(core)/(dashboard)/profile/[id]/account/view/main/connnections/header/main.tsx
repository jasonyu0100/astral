import { ContextForUserConnectionListFromSource } from '@/architecture/controller/user/connection/list-from-source';
import { useContext } from 'react';
import { ContextForProfile, ProfilePage } from '../../../../controller/main';
import { ContextForConnections } from '../controller/main';

export function ProfileCollaboratorsHeader() {
  const collaboratorController = useContext(ContextForConnections);
  const profileController = useContext(ContextForProfile);
  const userConectionList = useContext(ContextForUserConnectionListFromSource);

  return (
    <div className='flex h-[4rem] flex-shrink-0 shadow-glow'>
      <div className='flex h-full w-full flex-row items-center justify-center'>
        <div className='flex w-full flex-row px-[2rem]'>
          <div className='flex w-1/3 flex-row'>
            <p
              className='text-md cursor-pointer font-bold text-slate-500'
              onClick={() => {
                profileController.actions.updatePage(ProfilePage.Overview);
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
