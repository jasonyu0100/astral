import { ContextForUserConnectionListFromSource } from '@/architecture/controller/user/connection/list-from-source';
import { ContextForUserConnectionObj } from '@/architecture/model/user/connection/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { ContextForTogglable } from '@/logic/contexts/togglable/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../../../controller/main';
import { CreateSpaceCollaboratorRow } from './row/main';

export function CreateSpaceCollaboratorList() {
  const { pageThree } = useContext(ContextForCreateSpace);
  const { memberIds, updateMemberIds } = pageThree;
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
            <CreateSpaceCollaboratorRow
              onClick={() => {
                if (!memberIds.includes(connection.destinationId)) {
                  updateMemberIds([...memberIds, connection.destinationId]);
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
