import { useContext } from 'react';
import { VaultEditResourceModal } from './vault-edit-resource/main';
import { ResourceModalContext } from './main';

export function ResourceModalView() {
  const modalContext = useContext(ResourceModalContext);

  return <>{modalContext.editResourceModal.opened && <VaultEditResourceModal />}</>;
}
