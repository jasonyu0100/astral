import { UserProfileSpacesResults } from './grid/main';
import { UserProfileSpaceTableHeader } from './header/main';

export function UserProfileSpaces() {
  return (
    <div className='flex h-full w-full flex-col'>
      <UserProfileSpaceTableHeader />
      <UserProfileSpacesResults />
    </div>
  );
}
