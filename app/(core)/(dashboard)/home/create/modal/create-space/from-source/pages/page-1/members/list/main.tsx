import { ContextForUserConnectionListFromSource } from '@/architecture/controller/user/connection/list-from-source';
import { ContextForUserConnectionObj } from '@/architecture/model/user/connection/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { ContextForTogglable } from '@/logic/contexts/togglable/main';
import { useContext } from 'react';
import { ContextForHomeCreateCreateSpace } from '../../../../../controller/main';
import { HomeCreateSpaceCollaboratorRow } from './row/main';

export function HomeCreateCreateFromSourceCollaboratorList() {
  const createSpaceController = useContext(ContextForHomeCreateCreateSpace);
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
            <HomeCreateSpaceCollaboratorRow
              onClick={() => {
                if (
                  !createSpaceController.state.memberIds.includes(
                    connection.destinationId,
                  )
                ) {
                  createSpaceController.actions.updateMemberIds([
                    ...createSpaceController.state.memberIds,
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
