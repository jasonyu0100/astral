import { useContext } from 'react';
import { EditProfileModal } from '../edit-profile/main';
import { ProfileModalContext } from './main';

export function ProfileModalView() {
  const modalContext = useContext(ProfileModalContext);

  return <>{modalContext.editProfileModal.opened && <EditProfileModal />}</>;
}
