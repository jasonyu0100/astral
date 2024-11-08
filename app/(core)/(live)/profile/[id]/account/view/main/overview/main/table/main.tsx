import { UserProfileSpaceTableHeader } from './header/main';
import { UserProfileSpacesLiveResults } from './results/main';

export function UserProfileSpacesLive() {
  return (
    <div className='flex h-full w-full flex-col'>
      <UserProfileSpaceTableHeader />
      <UserProfileSpacesLiveResults />
    </div>
  );
}
