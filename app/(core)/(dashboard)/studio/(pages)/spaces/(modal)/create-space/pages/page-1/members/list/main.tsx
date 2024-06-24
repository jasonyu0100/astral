import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForTogglable } from '@/(logic)/contexts/togglable/main';
import { ContextForUserConnectionList } from '@/(server)/(controller)/user/connection/list';
import { ContextForUserConnectionObj } from '@/(server)/(model)/user/connection/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../../../(controller)/create-space/main';
import { CreateSpaceCollaboratorRow } from './row/main';

export function CreateSpaceCollaboratorList() {
  const { pageOne } = useContext(ContextForCreateSpace);
  const { memberIds: memberIds, updateMemberIds: updateMemberIds } = pageOne;
  const connectListController = useContext(ContextForUserConnectionList);
  const togglableController = useContext(ContextForTogglable);

  return (
    <>
      <HorizontalDivider />
      <div className='flex w-full flex-col space-y-[1rem]'>
        {connectListController.state.objs.map((connection) => (
          <ContextForUserConnectionObj.Provider value={connection}>
            <CreateSpaceCollaboratorRow
              onClick={() => {
                if (!memberIds.includes(connection.connectionId)) {
                  updateMemberIds([...memberIds, connection.connectionId]);
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
