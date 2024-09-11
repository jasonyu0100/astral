import { useContext } from 'react';
import { CollaboratorsPage, ContextForCollaborators } from '../controller/main';

export function UserProfileCollaboratorsFooter() {
  const collaboratorController = useContext(ContextForCollaborators);

  return (
    <div className='flex h-[4rem] w-full flex-shrink-0 flex-row items-center justify-between px-[2rem]'>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between pt-[1rem]'
        onClick={() =>
          collaboratorController.actions.updatePage(
            CollaboratorsPage.Collaborators,
          )
        }
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {CollaboratorsPage.Collaborators}
        </p>
        <div
          className={`h-[3px] w-full animate-pulse-slow bg-opacity-30 ${collaboratorController.state.page === CollaboratorsPage.Collaborators ? 'bg-slate-300' : 'bg-transparent'}`}
        />
      </div>
      <div
        className='flex h-full w-1/2 cursor-pointer flex-col items-center justify-between pt-[1rem]'
        onClick={() =>
          collaboratorController.actions.updatePage(CollaboratorsPage.Links)
        }
      >
        <p className='text-md justify-end font-light text-slate-300'>
          {CollaboratorsPage.Links}
        </p>
        <div
          className={`h-[3px] w-full animate-pulse-slow bg-opacity-30 ${collaboratorController.state.page === CollaboratorsPage.Links ? 'bg-slate-300' : 'bg-transparent'}`}
        />
      </div>
    </div>
  );
}
