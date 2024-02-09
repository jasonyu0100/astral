import { useContext } from 'react';
import { EditProfileModal } from './edit-cart/main';
import { CartModalContext } from './main';

export function CartModalView() {
  const { editCartModal: editProfile } = useContext(CartModalContext);

  return <>{editProfile.opened && <EditProfileModal />}</>;
}
