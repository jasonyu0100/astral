import { ContextForUserConnectionListFromDestination } from '@/architecture/controller/user/connection/list-from-destination';
import { ContextForUserConnectionListFromSource } from '@/architecture/controller/user/connection/list-from-source';
import { ContextForUserConnectionObj } from '@/architecture/model/user/connection/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import {
  ContextForUserProfileConnections,
  UserProfileConnectionsPage,
} from '../controller/main';
import { UserProfileFollowersTableHeader } from './header/main';
import { UserProfileConnectionsTableRow } from './row/main';
import { UserProfileConnectionsRowWrapper } from './wrapper/main';

export function UserProfileCollaboratorsTable() {
  const {
    state: { page },
  } = useContext(ContextForUserProfileConnections);
  const followingList = useContext(ContextForUserConnectionListFromSource);
  const followersList = useContext(ContextForUserConnectionListFromDestination);

  return (
    <div
      className='w-full p-[2rem]'
      style={{ height: 'calc(100% - 4rem - 4rem)' }}
    >
      <UserProfileFollowersTableHeader />
      <HorizontalDivider />
      <div className='w-full overflow-auto'>
        <div className='flex h-full w-full flex-col'>
          {page === UserProfileConnectionsPage.Following && (
            <>
              {followingList.state.objs.map((obj) => (
                <ContextForUserConnectionObj.Provider value={obj}>
                  <UserProfileConnectionsRowWrapper>
                    <UserProfileConnectionsTableRow />
                  </UserProfileConnectionsRowWrapper>
                </ContextForUserConnectionObj.Provider>
              ))}
            </>
          )}
          {page === UserProfileConnectionsPage.Followers && (
            <>
              {followersList.state.objs
                .map((obj) => ({
                  ...obj,
                  sourceId: obj.destinationId,
                  destinationId: obj.sourceId,
                }))
                .map((obj) => (
                  <ContextForUserConnectionObj.Provider value={obj}>
                    <UserProfileConnectionsRowWrapper>
                      <UserProfileConnectionsTableRow />
                    </UserProfileConnectionsRowWrapper>
                  </ContextForUserConnectionObj.Provider>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
