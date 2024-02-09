import { useContext } from 'react';
import { EditFileModal } from './edit-file/main';
import { FileModalContext } from './main';

export function FileModalView() {
  const { editFileModal: editProfile } = useContext(FileModalContext);

  return <>{editProfile.opened && <EditFileModal />}</>;
}
