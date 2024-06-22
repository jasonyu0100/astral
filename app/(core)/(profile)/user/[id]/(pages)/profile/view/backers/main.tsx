import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { UserProfileFollowersHeader } from './header/main';
import { UserProfileFollowersTableHeader } from './table/header/main';
import { UserProfileBackersTableRow } from './table/row/main';
import { UserProfileBackersRowWrapper } from './table/wrapper/main';

export function UserProfileFollowersMain() {
  return (
    <>
      <UserProfileFollowersHeader />
      <div className='w-full overflow-auto p-[2rem]'>
        <UserProfileFollowersTableHeader />
        <HorizontalDivider />
        <UserProfileBackersRowWrapper>
          <UserProfileBackersTableRow />
        </UserProfileBackersRowWrapper>
        <UserProfileBackersRowWrapper>
          <UserProfileBackersTableRow />
        </UserProfileBackersRowWrapper>
        <UserProfileBackersRowWrapper>
          <UserProfileBackersTableRow />
        </UserProfileBackersRowWrapper>
        <UserProfileBackersRowWrapper>
          <UserProfileBackersTableRow />
        </UserProfileBackersRowWrapper>
        <UserProfileBackersRowWrapper>
          <UserProfileBackersTableRow />
        </UserProfileBackersRowWrapper>
      </div>
    </>
  );
}
