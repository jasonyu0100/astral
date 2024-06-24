import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForUserConnectionList } from '@/(server)/(controller)/user/connection/list';
import { ContextForUserConnectionObj } from '@/(server)/(model)/user/connection/main';
import { useContext } from 'react';
import { UserProfileConnectionsHeader } from './header/main';
import { UserProfileFollowersTableHeader } from './table/header/main';
import { UserProfileFollowersTableRow } from './table/row/main';
import { UserProfileConnectionsRowWrapper } from './table/wrapper/main';

export function UserProfileConnectsMain() {
  const userConectionList = useContext(ContextForUserConnectionList);

  return (
    <>
      <UserProfileConnectionsHeader />
      <div className='w-full overflow-auto p-[2rem]'>
        <UserProfileFollowersTableHeader />
        <HorizontalDivider />
        {userConectionList.state.objs.map((obj) => (
          <ContextForUserConnectionObj.Provider value={obj}>
            <UserProfileConnectionsRowWrapper>
              <UserProfileFollowersTableRow />
            </UserProfileConnectionsRowWrapper>
          </ContextForUserConnectionObj.Provider>
        ))}
      </div>
    </>
  );
}
