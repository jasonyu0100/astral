import { ContextForUserConnectionListFromSource } from '@/architecture/controller/user/connection/list-from-source';
import { ContextForUserConnectionObj } from '@/architecture/model/user/connection/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { ContextForTogglable } from '@/logic/contexts/togglable/main';
import { useContext } from 'react';
import { ContextForCreateFlowCreateSpace } from '../../../../../controller/main';
import { CreateFlowSpaceCollaboratorRow } from './row/main';

export function CreateFlowCreateSpaceCollaboratorList() {
  const createSpaceController = useContext(ContextForCreateFlowCreateSpace);
  const connectListController = useContext(
    ContextForUserConnectionListFromSource,
  );
  const togglableController = useContext(ContextForTogglable);

  return (
    <>
      <HorizontalDivider />
      <div className='flex w-full flex-col space-y-[1rem]'>
        {connectListController.state.objs.length === 0 && (
          <div className='text-center text-slate-400'>No connections found</div>
        )}
        {connectListController.state.objs.map((connection) => (
          <ContextForUserConnectionObj.Provider value={connection}>
            <CreateFlowSpaceCollaboratorRow
              onClick={() => {
                if (
                  !createSpaceController.actions.memberIds.includes(
                    connection.destinationId,
                  )
                ) {
                  createSpaceController.actions.updateMemberIds([
                    ...createSpaceController.actions.memberIds,
                    connection.destinationId,
                  ]);
                }
                togglableController.toggle();
              }}
            />
          </ContextForUserConnectionObj.Provider>
        ))}
      </div>
    </>
  );
}
