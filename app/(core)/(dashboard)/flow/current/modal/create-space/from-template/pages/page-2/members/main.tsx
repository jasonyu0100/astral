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
import { ContextForFlowCurrentCreateSpace } from '../../../../controller/main';
import { FlowCurrentSpaceAddCollaborator } from './add/main';
import { FlowCurrentCreateSpaceCollaboratorList } from './list/main';
import { FlowCurrentCreateSpaceCollaborator } from './member/main';

export function FlowCurrentCreateSpaceMembers() {
  const createSpaceController = useContext(ContextForFlowCurrentCreateSpace);
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
        <FlowCurrentSpaceAddCollaborator onClick={togglableController.toggle} />
        {createSpaceController.state.memberIds.map((connectedId) => (
          <FlowCurrentCreateSpaceCollaborator
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
            <FlowCurrentCreateSpaceCollaboratorList />
          </ContextForTogglable.Provider>
        </ContextForUserConnectionListFromSource.Provider>
      )}
    </>
  );
}
