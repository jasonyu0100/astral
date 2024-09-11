import { ContextForProfile, useControllerForProfile } from './controller/main';
import { UserProfileHeader } from './header/main';
import { UserProfileMain } from './main/main';

export function UserProfileProfileMain() {
  const profileController = useControllerForProfile();

  return (
    <ContextForProfile.Provider value={profileController}>
      <div className='h-full w-full'>
        <UserProfileHeader />
        <UserProfileMain />
      </div>
    </ContextForProfile.Provider>
  );
}
