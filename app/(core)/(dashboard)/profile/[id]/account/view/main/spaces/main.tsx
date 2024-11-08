import { ContextForProfile, useControllerForProfile } from './controller/main';
import { ProfileOverviewPages } from './main/main';

export function ProfileOverviewMain() {
  const profileController = useControllerForProfile();

  return (
    <ContextForProfile.Provider value={profileController}>
      <ProfileOverviewPages />
    </ContextForProfile.Provider>
  );
}
