import { useContext } from 'react';
import { BackingView, ContextForBacking } from '../main';

export function UserProfileBackersFooter() {
  const backerController = useContext(ContextForBacking);

  return (
    <div className='flex w-full flex-shrink-0 flex-row items-center justify-between px-[2rem] py-[0.5rem]'>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between space-y-[0.5rem]'
        onClick={() => backerController.setView(BackingView.Backers)}
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {BackingView.Backers}
        </p>
        <div
          className={`h-[3px] w-full animate-pulse-slow bg-opacity-30 ${backerController.view === BackingView.Backers ? 'bg-slate-300' : 'bg-transparent'}`}
        />
      </div>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between space-y-[0.5rem]'
        onClick={() => backerController.setView(BackingView.Backed)}
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {BackingView.Backed}
        </p>
        <div
          className={`h-[3px] w-full animate-pulse-slow bg-opacity-30 ${backerController.view === BackingView.Backed ? 'bg-slate-300' : 'bg-transparent'}`}
        />
      </div>
    </div>
  );
}
