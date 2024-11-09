import { useContext } from 'react';
import {
  ContextForUserProfileConnections,
  UserProfileConnectionsPage,
} from '../controller/main';

export function UserProfileCollaboratorsFooter() {
  const collaboratorController = useContext(ContextForUserProfileConnections);

  return (
    <div className='flex h-[4rem] w-full flex-shrink-0 flex-row items-center justify-between px-[2rem]'>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between pt-[1rem]'
        onClick={() =>
          collaboratorController.actions.updatePage(
            UserProfileConnectionsPage.Following,
          )
        }
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {UserProfileConnectionsPage.Following}
        </p>
        <div
          className={`h-[3px] w-full animate-pulse-slow bg-opacity-30 ${collaboratorController.state.page === UserProfileConnectionsPage.Following ? 'bg-slate-300' : 'bg-transparent'}`}
        />
      </div>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between pt-[1rem]'
        onClick={() =>
          collaboratorController.actions.updatePage(
            UserProfileConnectionsPage.Followers,
          )
        }
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {UserProfileConnectionsPage.Followers}
        </p>
        <div
          className={`h-[3px] w-full animate-pulse-slow bg-opacity-30 ${collaboratorController.state.page === UserProfileConnectionsPage.Followers ? 'bg-slate-300' : 'bg-transparent'}`}
        />
      </div>
    </div>
  );
}
