import { useContext } from 'react';
import { CreateSpaceModal } from './create-space/main';
import { SpacesModalContext } from './main';

export function SpacesModalView() {
  const { createSpaceModal: createSpace } = useContext(SpacesModalContext);
  return <>{createSpace.opened && <CreateSpaceModal />}</>;
}
