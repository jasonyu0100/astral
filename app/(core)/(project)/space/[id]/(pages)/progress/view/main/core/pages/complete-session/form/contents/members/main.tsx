import { ContextForSessionForm } from '@/(core)/(project)/space/[id]/(pages)/progress/(controller)/complete-session-form/main';
import {
  ContextForTogglable,
  useControllerForTogglable,
} from '@/(logic)/contexts/togglable/main';
import {
  ContextForUserConnectionList,
  useControllerForUserConnectionList,
} from '@/(server)/(controller)/user/connection/list';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';
import { SpaceProgressAddCollaborator } from './add/main';
import { SpaceProgressCollaboratorList } from './list/main';
import { SpaceProgressCollaborator } from './member/main';

export function SpaceProgressCompleteSessionFormContributors() {
  const sessionFormController = useContext(ContextForSessionForm);
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const connectListController = useControllerForUserConnectionList(
    loggedInUser.id,
  );

  const togglableController = useControllerForTogglable();

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <label className='mb-1 text-xs font-bold text-slate-400'>
        Contributors
      </label>
      <div className='flex flex-row space-x-[1rem]'>
        <SpaceProgressAddCollaborator onClick={togglableController.toggle} />
        {sessionFormController.contributorIds.map((connectedId) => (
          <SpaceProgressCollaborator
            connectedId={connectedId}
            onClick={() => {
              sessionFormController.setContributorIds(
                sessionFormController.contributorIds.filter(
                  (id) => id !== connectedId,
                ),
              );
            }}
          />
        ))}
      </div>
      {togglableController.toggled && (
        <ContextForUserConnectionList.Provider value={connectListController}>
          <ContextForTogglable.Provider value={togglableController}>
            <SpaceProgressCollaboratorList />
          </ContextForTogglable.Provider>
        </ContextForUserConnectionList.Provider>
      )}
    </div>
  );
}
