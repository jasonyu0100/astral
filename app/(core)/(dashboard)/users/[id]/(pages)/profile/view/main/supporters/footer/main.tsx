import { useContext } from 'react';
import { ContextForSupporters, ProfileSupporterPage } from '../controller/main';

export function UserProfileSupportersFooter() {
  const supportersController = useContext(ContextForSupporters);

  return (
    <div className='flex h-[4rem] w-full flex-shrink-0 flex-row items-center justify-between px-[2rem]'>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between pt-[1rem]'
        onClick={() =>
          supportersController.actions.updatePage(
            ProfileSupporterPage.Supporters,
          )
        }
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {ProfileSupporterPage.Supporters}
        </p>
        <div
          className={`h-[3px] w-full animate-pulse-slow bg-opacity-30 ${supportersController.state.page === ProfileSupporterPage.Supporters ? 'bg-slate-300' : 'bg-transparent'}`}
        />
      </div>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between pt-[1rem]'
        onClick={() =>
          supportersController.actions.updatePage(
            ProfileSupporterPage.Proposals,
          )
        }
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {ProfileSupporterPage.Proposals}
        </p>
        <div
          className={`h-[3px] w-full animate-pulse-slow bg-opacity-30 ${supportersController.state.page === ProfileSupporterPage.Proposals ? 'bg-slate-300' : 'bg-transparent'}`}
        />
      </div>
    </div>
  );
}
