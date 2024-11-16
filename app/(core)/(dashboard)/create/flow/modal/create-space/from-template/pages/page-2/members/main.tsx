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
import { ContextForCreateFlowCreateSpace } from '../../../../controller/main';
import { CreateFlowSpaceAddCollaborator } from './add/main';
import { CreateFlowCreateSpaceCollaboratorList } from './list/main';
import { CreateFlowCreateSpaceCollaborator } from './member/main';

export function CreateFlowCreateSpaceMembers() {
  const createSpaceController = useContext(ContextForCreateFlowCreateSpace);
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
        <CreateFlowSpaceAddCollaborator onClick={togglableController.toggle} />
        {createSpaceController.state.memberIds.map((connectedId) => (
          <CreateFlowCreateSpaceCollaborator
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
            <CreateFlowCreateSpaceCollaboratorList />
          </ContextForTogglable.Provider>
        </ContextForUserConnectionListFromSource.Provider>
      )}
    </>
  );
}
