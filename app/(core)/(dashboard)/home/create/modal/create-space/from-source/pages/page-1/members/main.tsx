import {
  ContextForUserConnectionListFromSource,
  useControllerForUserConnectionListFromSource,
} from '@/architecture/controller/user/connection/list-from-source';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import {
  ContextForTogglable,
  useControllerForTogglable,
} from '@/logic/contexts/togglable/main';
import { useContext } from 'react';
import { ContextForHomeCreateCreateSpace } from '../../../../controller/main';
import { HomeCreateSpaceAddCollaborator } from './add/main';
import { HomeCreateCreateFromSourceCollaboratorList } from './list/main';
import { HomeCreateCreateFromSourceCollaborator } from './member/main';

export function HomeCreateCreateFromSourceMembers() {
  const createSpaceController = useContext(ContextForHomeCreateCreateSpace);
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const connectListController = useControllerForUserConnectionListFromSource(
    loggedInUser?.id,
  );

  const togglableController = useControllerForTogglable();

  return (
    <>
      <label className='mb-1 text-xs font-bold text-slate-400'>
        Members (optional)
      </label>
      <div className='flex flex-row space-x-[1rem]'>
        <HomeCreateSpaceAddCollaborator onClick={togglableController.toggle} />
        {createSpaceController.state.memberIds.map((connectedId) => (
          <HomeCreateCreateFromSourceCollaborator
            connectedId={connectedId}
            onClick={() => {
              createSpaceController.actions.updateMemberIds(
                createSpaceController.state.memberIds.filter(
                  (id) => id !== connectedId,
                ),
              );
            }}
          />
        ))}
      </div>
      {togglableController.toggled && (
        <ContextForUserConnectionListFromSource.Provider
          value={connectListController}
        >
          <ContextForTogglable.Provider value={togglableController}>
            <HomeCreateCreateFromSourceCollaboratorList />
          </ContextForTogglable.Provider>
        </ContextForUserConnectionListFromSource.Provider>
      )}
    </>
  );
}
