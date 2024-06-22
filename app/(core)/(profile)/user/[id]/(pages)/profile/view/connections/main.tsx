import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { UserProfileConnectionsHeader } from './header/main';
import { UserProfileFollowersTableHeader } from './table/header/main';
import { UserProfileFollowersTableRow } from './table/row/main';
import { UserProfileConnectionsRowWrapper } from './table/wrapper/main';

export function UserProfileConnectsMain() {
  return (
    <>
      <UserProfileConnectionsHeader />
      <div className='w-full overflow-auto p-[2rem]'>
        <UserProfileFollowersTableHeader />
        <HorizontalDivider />
        <UserProfileConnectionsRowWrapper>
          <UserProfileFollowersTableRow />
        </UserProfileConnectionsRowWrapper>
        <UserProfileConnectionsRowWrapper>
          <UserProfileFollowersTableRow />
        </UserProfileConnectionsRowWrapper>
        <UserProfileConnectionsRowWrapper>
          <UserProfileFollowersTableRow />
        </UserProfileConnectionsRowWrapper>
        <UserProfileConnectionsRowWrapper>
          <UserProfileFollowersTableRow />
        </UserProfileConnectionsRowWrapper>
        <UserProfileConnectionsRowWrapper>
          <UserProfileFollowersTableRow />
        </UserProfileConnectionsRowWrapper>
      </div>
    </>
  );
}
