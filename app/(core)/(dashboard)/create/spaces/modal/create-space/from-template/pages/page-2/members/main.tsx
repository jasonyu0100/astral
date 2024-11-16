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
import { ContextForCreateSpacesCreateSpace } from '../../../../controller/main';
import { CreateSpacesSpaceAddCollaborator } from './add/main';
import { CreateSpacesCreateSpaceCollaboratorList } from './list/main';
import { CreateSpacesCreateSpaceCollaborator } from './member/main';

export function CreateSpacesCreateSpaceMembers() {
  const createSpaceController = useContext(ContextForCreateSpacesCreateSpace);
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
        <CreateSpacesSpaceAddCollaborator
          onClick={togglableController.toggle}
        />
        {createSpaceController.state.memberIds.map((connectedId) => (
          <CreateSpacesCreateSpaceCollaborator
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
            <CreateSpacesCreateSpaceCollaboratorList />
          </ContextForTogglable.Provider>
        </ContextForUserConnectionListFromSource.Provider>
      )}
    </>
  );
}
