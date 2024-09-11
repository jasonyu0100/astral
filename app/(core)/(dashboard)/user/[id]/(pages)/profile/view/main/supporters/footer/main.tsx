import { useContext } from 'react';
import { ContextForBacking, ProfileSupporterPage } from '../main';

export function UserProfileBackersFooter() {
  const backerController = useContext(ContextForBacking);

  return (
    <div className='flex w-full flex-shrink-0 flex-row items-center justify-between px-[2rem] py-[0.5rem]'>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between space-y-[0.5rem]'
        onClick={() =>
          backerController.setView(ProfileSupporterPage.Supporters)
        }
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {ProfileSupporterPage.Supporters}
        </p>
        <div
          className={`h-[3px] w-full animate-pulse-slow bg-opacity-30 ${backerController.view === ProfileSupporterPage.Supporters ? 'bg-slate-300' : 'bg-transparent'}`}
        />
      </div>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between space-y-[0.5rem]'
        onClick={() => backerController.setView(ProfileSupporterPage.Proposals)}
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {ProfileSupporterPage.Proposals}
        </p>
        <div
          className={`h-[3px] w-full animate-pulse-slow bg-opacity-30 ${backerController.view === ProfileSupporterPage.Proposals ? 'bg-slate-300' : 'bg-transparent'}`}
        />
      </div>
    </div>
  );
}
