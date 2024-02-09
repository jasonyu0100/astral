import { useContext } from 'react';
import { EditFileModal } from './edit-file/main';
import { FileModalContext } from './main';

export function FileModalView() {
  const modalContext = useContext(FileModalContext);

  return <>{modalContext.editFileModal.opened && <EditFileModal />}</>;
}
