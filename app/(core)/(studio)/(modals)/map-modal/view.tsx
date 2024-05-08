import { useContext } from 'react';
import { MapAddChapterModal } from './add/chapter/main';
import { MapAddConstellationModal } from './add/constellation/main';
import { MapModalContext } from './main';

export function MapModalView() {
  const modalContext = useContext(MapModalContext);

  return (
    <>
      {modalContext.addChapterModal.opened && <MapAddChapterModal />}
      {modalContext.addConstellationModal.opened && <MapAddConstellationModal />}
    </>
  );
}
