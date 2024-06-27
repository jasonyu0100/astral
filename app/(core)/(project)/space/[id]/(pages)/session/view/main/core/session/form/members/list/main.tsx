import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForSessionForm } from '@/(core)/(project)/space/[id]/(pages)/session/(controller)/session-form/main';
import { ContextForTogglable } from '@/(logic)/contexts/togglable/main';
import { ContextForUserConnectionList } from '@/(server)/(controller)/user/connection/list';
import { ContextForUserConnectionObj } from '@/(server)/(model)/user/connection/main';
import { useContext } from 'react';
import { SpaceSessionCollaboratorRow } from './row/main';

export function SpaceSessionCollaboratorList() {
  const sessionFormController = useContext(ContextForSessionForm);
  const connectListController = useContext(ContextForUserConnectionList);
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
            <SpaceSessionCollaboratorRow
              onClick={() => {
                if (
                  !sessionFormController.contributorIds.includes(
                    connection.connectedId,
                  )
                ) {
                  sessionFormController.setContributorIds([
                    ...sessionFormController.contributorIds,
                    connection.connectedId,
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
