import { useContext } from 'react';
import { CreateGalleryModal } from './create-gallery/main';
import { HomeModalContext } from './main';

export function HomeModalsView() {
  const { createGallery } = useContext(HomeModalContext);

  return <>{createGallery.opened && <CreateGalleryModal />}</>;
}
