import { ContextForProfile, useControllerForProfile } from './controller/main';
import { UserProfileFooter } from './header/main';
import { UserProfileOverviewPages } from './main/main';

export function UserProfileOverviewMain() {
  const profileController = useControllerForProfile();

  return (
    <ContextForProfile.Provider value={profileController}>
      <div className='h-full w-full'>
        <UserProfileOverviewPages />
        <UserProfileFooter />
      </div>
    </ContextForProfile.Provider>
  );
}
