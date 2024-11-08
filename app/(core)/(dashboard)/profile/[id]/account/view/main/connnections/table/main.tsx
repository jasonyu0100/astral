import { ContextForUserConnectionListFromDestination } from '@/architecture/controller/user/connection/list-from-destination';
import { ContextForUserConnectionListFromSource } from '@/architecture/controller/user/connection/list-from-source';
import { ContextForUserConnectionObj } from '@/architecture/model/user/connection/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { ConnectionsPage, ContextForConnections } from '../controller/main';
import { ProfileFollowersTableHeader } from './header/main';
import { ProfileConnectionsTableRow } from './row/main';
import { ProfileConnectionsRowWrapper } from './wrapper/main';

export function ProfileCollaboratorsTable() {
  const {
    state: { page },
  } = useContext(ContextForConnections);
  const followingList = useContext(ContextForUserConnectionListFromSource);
  const followersList = useContext(ContextForUserConnectionListFromDestination);

  return (
    <div
      className='w-full p-[2rem]'
      style={{ height: 'calc(100% - 4rem - 4rem)' }}
    >
      <ProfileFollowersTableHeader />
      <HorizontalDivider />
      <div className='w-full overflow-auto'>
        <div className='flex h-full w-full flex-col'>
          {page === ConnectionsPage.Following && (
            <>
              {followingList.state.objs.map((obj) => (
                <ContextForUserConnectionObj.Provider value={obj}>
                  <ProfileConnectionsRowWrapper>
                    <ProfileConnectionsTableRow />
                  </ProfileConnectionsRowWrapper>
                </ContextForUserConnectionObj.Provider>
              ))}
            </>
          )}
          {page === ConnectionsPage.Followers && (
            <>
              {followersList.state.objs
                .map((obj) => ({
                  ...obj,
                  sourceId: obj.destinationId,
                  destinationId: obj.sourceId,
                }))
                .map((obj) => (
                  <ContextForUserConnectionObj.Provider value={obj}>
                    <ProfileConnectionsRowWrapper>
                      <ProfileConnectionsTableRow />
                    </ProfileConnectionsRowWrapper>
                  </ContextForUserConnectionObj.Provider>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
