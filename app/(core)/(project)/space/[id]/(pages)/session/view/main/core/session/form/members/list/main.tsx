import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForTogglable } from '@/(logic)/contexts/togglable/main';
import { ContextForUserConnectionList } from '@/(server)/(controller)/user/connection/list';
import { ContextForUserConnectionObj } from '@/(server)/(model)/user/connection/main';
import { useContext } from 'react';
import { ContextForSessionForm } from '../../../main';
import { SpaceSessionCollaboratorRow } from './row/main';

export function SpaceSessionCollaboratorList() {
  const updateEditController = useContext(ContextForSessionForm);
  const { contributorIds, setContributorIds } = updateEditController;
  const connectListController = useContext(ContextForUserConnectionList);
  const togglableController = useContext(ContextForTogglable);

  return (
    <>
      <HorizontalDivider />
      <div className='flex w-full flex-col space-y-[1rem]'>
        {connectListController.state.objs.map((connection) => (
          <ContextForUserConnectionObj.Provider value={connection}>
            <SpaceSessionCollaboratorRow
              onClick={() => {
                if (!contributorIds.includes(connection.connectionId)) {
                  setContributorIds([
                    ...contributorIds,
                    connection.connectionId,
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
