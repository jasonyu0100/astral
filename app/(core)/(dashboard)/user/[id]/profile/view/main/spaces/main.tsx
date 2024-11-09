import {
  ContextForUserProfileSpaces,
  useControllerForUserProfileSpaces,
} from './controller/main';
import { UserProfilePages } from './main/main';

export function UserProfileMain() {
  const profileController = useControllerForUserProfileSpaces();

  return (
    <ContextForUserProfileSpaces.Provider value={profileController}>
      <UserProfilePages />
    </ContextForUserProfileSpaces.Provider>
  );
}
