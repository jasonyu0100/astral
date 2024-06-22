import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ProfileUserConnectionsHeader } from './header/main';
import { UserProfileFollowersTableHeader } from './table/header/main';
import { UserProfileFollowersTableRow } from './table/row/main';

export function ProfileUserConnectsMain() {
  return (
    <>
      <ProfileUserConnectionsHeader />
      <div className='w-full overflow-auto p-[3rem]'>
        <UserProfileFollowersTableHeader />
        <HorizontalDivider />
        <UserProfileFollowersTableRow />
        <UserProfileFollowersTableRow />
        <UserProfileFollowersTableRow />
        <UserProfileFollowersTableRow />
      </div>
    </>
  );
}
