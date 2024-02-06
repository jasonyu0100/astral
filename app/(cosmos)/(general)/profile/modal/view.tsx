import { useContext } from 'react';
import { EditProfileModal } from './edit-profile/main';
import { ProfileModalContext } from './main';

export function ProfileModalsView() {
  const { editProfile } = useContext(ProfileModalContext);

  return <>{editProfile.opened && <EditProfileModal />}</>;
}
