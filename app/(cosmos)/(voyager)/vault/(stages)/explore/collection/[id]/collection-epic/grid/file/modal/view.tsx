import { useContext } from 'react';
import { EditFileModal } from './edit-file/main';
import { FileModalContext } from './main';

export function FileModalsView() {
  const { editFileModal: editProfile } = useContext(FileModalContext);

  return <>{editProfile.opened && <EditFileModal />}</>;
}
