import { useContext } from 'react';
import { CreateSpaceModal } from './create-space/main';
import { SpacesModalContext } from './main';

export function SpacesModalView() {
  const modalContext = useContext(SpacesModalContext);
  return <>{modalContext.createSpaceModal.opened && <CreateSpaceModal />}</>;
}
