import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { ContextForProfilePage, ProfilePage } from '../../../page';

export function UserProfileFollowersHeader() {
  const profilePage = useContext(ContextForProfilePage);

  return (
    <GlassWindowFrame className='flex h-[4rem]'>
      <GlassWindowContents className='flex h-full w-full flex-row items-center justify-center'>
        <div className='flex w-full flex-row px-[2rem]'>
          <div className='flex w-1/3 flex-row'>
            <p
              className='cursor-pointer text-lg font-light text-slate-300'
              onClick={() => {
                profilePage.setPage(ProfilePage.General);
              }}
            >
              Back
            </p>
          </div>
          <div className='flex w-1/3 flex-row justify-center'>
            <p className='text-lg font-light text-slate-300'>
              {ProfilePage.Backers}
            </p>
          </div>
          <div className='flex w-1/3 flex-row'></div>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
