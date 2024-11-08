import { ProfileSpacesLiveResults } from './grid/main';
import { ProfileSpaceTableHeader } from './header/main';

export function ProfileSpacesLive() {
  return (
    <div className='flex h-full w-full flex-col'>
      <ProfileSpaceTableHeader />
      <ProfileSpacesLiveResults />
    </div>
  );
}
