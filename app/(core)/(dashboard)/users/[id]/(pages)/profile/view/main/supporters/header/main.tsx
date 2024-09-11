import { ContextForUserBackerList } from '@/(server)/controller/user/backer/list';
import { useContext } from 'react';
import {
  ContextForUserProfile,
  UserProfilePage,
} from '../../../../controller/main';
import { ContextForSupporters } from '../controller/main';

export function UserProfileSupportersHeader() {
  const supportersController = useContext(ContextForSupporters);
  const {
    actions: { updatePage },
  } = useContext(ContextForUserProfile);
  const userBackerList = useContext(ContextForUserBackerList);

  return (
    <div className='flex h-[4rem] shadow-glow'>
      <div className='flex h-full w-full flex-row items-center justify-center'>
        <div className='flex w-full flex-row px-[2rem]'>
          <div className='flex w-1/3 flex-row'>
            <p
              className='text-md cursor-pointer font-bold text-slate-500'
              onClick={() => {
                updatePage(UserProfilePage.Overview);
              }}
            >
              Back
            </p>
          </div>
          <div className='flex w-1/3 flex-row justify-center'>
            <p className='text-md font-bold text-slate-500'>
              {supportersController.state.page}
            </p>
          </div>
          <div className='flex w-1/3 flex-row justify-end'>
            <p className='text-md font-bold text-slate-500'>
              {userBackerList.state.objs.length} / 100
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
