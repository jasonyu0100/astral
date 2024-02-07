import { useContext } from 'react';
import { AddFileModal } from './add-file/main';
import { CollectionModalContext } from './main';

export function CollectionModalsView() {
  const { addFileModal: addFile } = useContext(CollectionModalContext);

  return <>{addFile.opened && <AddFileModal />}</>;
}
