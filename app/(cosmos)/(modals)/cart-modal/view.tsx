import { useContext } from 'react';
import { EditProfileModal } from './edit-cart/main';
import { CartModalContext } from './main';

export function CartModalView() {
  const modalContext = useContext(CartModalContext);

  return <>{modalContext.editCartModal.opened && <EditProfileModal />}</>;
}
