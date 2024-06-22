import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForUserBackerList } from '@/(server)/(controller)/user/backer/list';
import { ContextForUserBackerObj } from '@/(server)/(model)/user/backer/main';
import { ContextForCurrentUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';
import { ContextForProfilePage } from '../../page';
import { UserProfileFollowersHeader } from './header/main';
import { UserProfileFollowersTableHeader } from './table/header/main';
import { UserProfileBackersTableRow } from './table/row/main';
import { UserProfileBackersRowWrapper } from './table/wrapper/main';

export function UserProfileBackersMain() {
  const { admin } = useContext(ContextForProfilePage);
  const currentUser = useContext(ContextForCurrentUserObj);
  const userBackerList = useContext(ContextForUserBackerList);

  return (
    <>
      <UserProfileFollowersHeader />
      <div className='w-full overflow-auto p-[2rem]'>
        <UserProfileFollowersTableHeader />
        <HorizontalDivider />
        {userBackerList.state.objs.map((obj) => (
          <ContextForUserBackerObj.Provider value={obj}>
            <UserProfileBackersRowWrapper>
              <UserProfileBackersTableRow />
            </UserProfileBackersRowWrapper>
          </ContextForUserBackerObj.Provider>
        ))}
      </div>
    </>
  );
}
