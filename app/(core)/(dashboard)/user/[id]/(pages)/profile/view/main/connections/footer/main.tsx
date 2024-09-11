import { useContext } from 'react';
import { ConnectionsView, ContextForConnections } from '../main';

export function UserProfileConnnectionsFooter() {
  const backerController = useContext(ContextForConnections);

  return (
    <div className='flex w-full flex-shrink-0 flex-row items-center justify-between px-[2rem] py-[0.5rem]'>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between space-y-[0.5rem]'
        onClick={() => backerController.setView(ConnectionsView.Collaborators)}
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {ConnectionsView.Collaborators}
        </p>
        <div
          className={`h-[3px] w-full animate-pulse-slow bg-opacity-30 ${backerController.view === ConnectionsView.Collaborators ? 'bg-slate-300' : 'bg-transparent'}`}
        />
      </div>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between space-y-[0.5rem]'
        onClick={() => backerController.setView(ConnectionsView.Links)}
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {ConnectionsView.Links}
        </p>
        <div
          className={`h-[3px] w-full animate-pulse-slow bg-opacity-30 ${backerController.view === ConnectionsView.Links ? 'bg-slate-300' : 'bg-transparent'}`}
        />
      </div>
    </div>
  );
}
