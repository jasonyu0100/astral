import { useContext } from 'react';
import { EditProfileModal } from './edit-profile/main';
import { ProfileModalContext } from './main';

export function ProfileModalView() {
  const { editProfileModal: editProfile } = useContext(ProfileModalContext);

  return <>{editProfile.opened && <EditProfileModal />}</>;
}
