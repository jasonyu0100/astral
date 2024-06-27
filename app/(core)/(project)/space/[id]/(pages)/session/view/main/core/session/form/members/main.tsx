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
import { ContextForSessionForm } from '../../main';
import { SpaceSessionAddCollaborator } from './add/main';
import { SpaceSessionCollaboratorList } from './list/main';
import { SpaceSessionCollaborator } from './member/main';

export function SpaceSessionUpdateFormContributors() {
  const updateEditController = useContext(ContextForSessionForm);
  const { contributorIds, setContributorIds } = updateEditController;
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
        <SpaceSessionAddCollaborator onClick={togglableController.toggle} />
        {contributorIds.map((connectedId) => (
          <SpaceSessionCollaborator
            connectedId={connectedId}
            onClick={() => {
              setContributorIds(
                contributorIds.filter((id) => id !== connectedId),
              );
            }}
          />
        ))}
      </div>
      {togglableController.toggled && (
        <ContextForUserConnectionList.Provider value={connectListController}>
          <ContextForTogglable.Provider value={togglableController}>
            <SpaceSessionCollaboratorList />
          </ContextForTogglable.Provider>
        </ContextForUserConnectionList.Provider>
      )}
    </div>
  );
}
