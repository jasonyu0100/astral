import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForUserConnectionList } from '@/(server)/(controller)/user/connection/list';
import { ContextForUserConnectionObj } from '@/(server)/(model)/user/connection/main';
import { useContext } from 'react';
import { UserProfileFollowersTableHeader } from './header/main';
import { UserProfileConnectionsTableRow } from './row/main';
import { UserProfileConnectionsRowWrapper } from './wrapper/main';

export function UserProfileConnectionsTable() {
  const userConectionList = useContext(ContextForUserConnectionList);

  return (
    <div className='w-full px-[2rem]' style={{ height: '100%' }}>
      <UserProfileFollowersTableHeader />
      <HorizontalDivider />
      <div className='w-full overflow-auto'>
        <div className='flex h-full w-full flex-col'>
          {userConectionList.state.objs.map((obj) => (
            <ContextForUserConnectionObj.Provider value={obj}>
              <UserProfileConnectionsRowWrapper>
                <UserProfileConnectionsTableRow />
              </UserProfileConnectionsRowWrapper>
            </ContextForUserConnectionObj.Provider>
          ))}
        </div>
      </div>
    </div>
  );
}
