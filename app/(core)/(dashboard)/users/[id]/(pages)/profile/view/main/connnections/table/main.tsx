import { ContextForUserConnectionList } from '@/(server)/controller/user/connection/list';
import { ContextForUserConnectionObj } from '@/(server)/model/user/connection/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { UserProfileFollowersTableHeader } from './header/main';
import { UserProfileConnectionsTableRow } from './row/main';
import { UserProfileConnectionsRowWrapper } from './wrapper/main';

export function UserProfileCollaboratorsTable() {
  const userConectionList = useContext(ContextForUserConnectionList);

  return (
    <div
      className='w-full p-[2rem]'
      style={{ height: 'calc(100% - 4rem - 4rem)' }}
    >
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
