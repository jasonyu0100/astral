import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForProfile, ProfilePage } from '../controller/main';

export function UserProfileFooter() {
  const profileController = useContext(ContextForProfile);

  return (
    <div className='flex h-[4rem] w-full flex-shrink-0 flex-row items-center justify-between px-[2rem]'>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between pt-[1rem]'
        onClick={() => profileController.actions.updatePage(ProfilePage.Spaces)}
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {ProfilePage.Spaces}
        </p>
        <div
          className={ctwn(
            `h-[3px] w-full animate-pulse-slow bg-transparent bg-opacity-30`,
            {
              'bg-slate-300':
                profileController.state.page === ProfilePage.Spaces,
            },
          )}
        />
      </div>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between pt-[1rem]'
        onClick={() =>
          profileController.actions.updatePage(ProfilePage.Highlights)
        }
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {ProfilePage.Highlights}
        </p>
        <div
          className={ctwn(
            `h-[3px] w-full animate-pulse-slow bg-transparent bg-opacity-30`,
            {
              'bg-slate-300':
                profileController.state.page === ProfilePage.Highlights,
            },
          )}
        />
      </div>
    </div>
  );
}
