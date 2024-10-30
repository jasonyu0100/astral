import { UserProfileSpaceTableHeader } from './header/main';
import { UserProfileSpacesTableResults } from './results/main';

export function UserProfileSpacesTable() {
  return (
    <div className='flex h-full w-full flex-col'>
      <UserProfileSpaceTableHeader />
      <UserProfileSpacesTableResults />
    </div>
  );
}
