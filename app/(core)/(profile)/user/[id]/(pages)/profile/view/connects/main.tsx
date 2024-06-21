import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ProfileUserConnectsHeader } from './header/main';
import { UserProfileFollowersTableHeader } from './table/header/main';
import { UserProfileFollowersTableRow } from './table/row/main';

export function ProfileUserConnectsMain() {
  return (
    <>
      <ProfileUserConnectsHeader />
      <div className='w-full p-[3rem]'>
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
