import { ContextForProfile, useControllerForProfile } from './controller/main';
import { UserProfileOverviewPages } from './main/main';

export function UserProfileOverviewMain() {
  const profileController = useControllerForProfile();

  return (
    <ContextForProfile.Provider value={profileController}>
      <div className='h-full w-full'>
        <UserProfileOverviewPages />
      </div>
    </ContextForProfile.Provider>
  );
}
