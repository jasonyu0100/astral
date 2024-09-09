import { useContext } from 'react';
import { ConnectionsView, ContextForConnections } from '../main';

export function UserProfileConnnectionsFooter() {
  const backerController = useContext(ContextForConnections);

  return (
    <div className='flex w-full flex-shrink-0 flex-row items-center justify-between px-[2rem] py-[0.5rem]'>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between space-y-[0.5rem]'
        onClick={() => backerController.setView(ConnectionsView.Connected)}
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {ConnectionsView.Connected}
        </p>
        <div
          className={`h-[3px] w-full animate-pulse-slow bg-opacity-30 ${backerController.view === ConnectionsView.Connected ? 'bg-slate-300' : 'bg-transparent'}`}
        />
      </div>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between space-y-[0.5rem]'
        onClick={() => backerController.setView(ConnectionsView.Collabs)}
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {ConnectionsView.Collabs}
        </p>
        <div
          className={`h-[3px] w-full animate-pulse-slow bg-opacity-30 ${backerController.view === ConnectionsView.Collabs ? 'bg-slate-300' : 'bg-transparent'}`}
        />
      </div>
    </div>
  );
}
