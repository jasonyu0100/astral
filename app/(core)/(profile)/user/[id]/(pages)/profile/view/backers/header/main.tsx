import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForUserBackerList } from '@/(server)/(controller)/user/backer/list';
import { useContext } from 'react';
import { ContextForProfilePage, ProfilePage } from '../../../page';
import { ContextForBacking } from '../main';

export function UserProfileBackersHeader() {
  const backingController = useContext(ContextForBacking);
  const profilePage = useContext(ContextForProfilePage);
  const userBackerList = useContext(ContextForUserBackerList);

  return (
    <GlassWindowFrame className='flex py-[1rem]'>
      <GlassWindowContents className='flex h-full w-full flex-row items-center justify-center'>
        <div className='flex w-full flex-row px-[2rem]'>
          <div className='flex w-1/3 flex-row'>
            <p
              className='text-md cursor-pointer font-light text-slate-700'
              onClick={() => {
                profilePage.setPage(ProfilePage.General);
              }}
            >
              Back
            </p>
          </div>
          <div className='flex w-1/3 flex-row justify-center'>
            <p className='text-md font-light text-slate-700'>
              {backingController.view}
            </p>
          </div>
          <div className='flex w-1/3 flex-row justify-end'>
            <p className='text-md font-light text-slate-700'>
              {userBackerList.state.objs.length} / 100
            </p>
          </div>
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
