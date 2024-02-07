import { useContext } from 'react';
import { CreateSpaceModal } from './create-space/main';
import { SpacesModalContext } from './main';

export function SpacesModalsView() {
  const { createSpaceModal: createSpace } = useContext(SpacesModalContext);
  return <>{createSpace.opened && <CreateSpaceModal />}</>;
}
