import { useContext } from 'react';
import { CreateCollectionModal } from './create-collection/main';
import { GalleryModalContext } from './main';

export function GalleryModalsView() {
  const { createCollectionModal: createCollection } = useContext(GalleryModalContext);

  return <>{createCollection && <CreateCollectionModal />}</>;
}
