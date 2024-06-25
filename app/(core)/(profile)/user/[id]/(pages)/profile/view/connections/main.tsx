import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForUserConnectionList } from '@/(server)/(controller)/user/connection/list';
import { ContextForUserConnectionObj } from '@/(server)/(model)/user/connection/main';
import { useContext } from 'react';
import { UserProfileConnectionsHeader } from './header/main';
import { UserProfileFollowersTableHeader } from './table/header/main';
import { UserProfileConnectionsTableRow } from './table/row/main';
import { UserProfileConnectionsRowWrapper } from './table/wrapper/main';

export function UserProfileConnectsMain() {
  const userConectionList = useContext(ContextForUserConnectionList);

  return (
    <>
      <UserProfileConnectionsHeader />
      <div className='w-full overflow-auto p-[2rem]'>
        <div className='flex w-full flex-row justify-between'>
          <div className='flex w-1/2 items-center justify-center'>
            <p className='text-lg font-bold text-slate-300'>Connected</p>
          </div>
          <div className='flex w-1/2 items-center justify-center'>
            <p className='text-lg font-bold text-slate-300'>Collabs</p>
          </div>
        </div>
        <UserProfileFollowersTableHeader />
        <HorizontalDivider />
        {userConectionList.state.objs.map((obj) => (
          <ContextForUserConnectionObj.Provider value={obj}>
            <UserProfileConnectionsRowWrapper>
              <UserProfileConnectionsTableRow />
            </UserProfileConnectionsRowWrapper>
          </ContextForUserConnectionObj.Provider>
        ))}
      </div>
    </>
  );
}
