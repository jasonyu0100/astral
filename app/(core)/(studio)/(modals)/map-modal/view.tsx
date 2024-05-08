import { useContext } from 'react';
import { MapAddChapterModal } from './add/chapter/main';
import { MapAddPartModal } from './add/part/main';
import { MapModalContext } from './main';

export function MapModalView() {
  const modalContext = useContext(MapModalContext);

  return (
    <>
      {modalContext.addChapterModal.opened && <MapAddChapterModal />}
      {modalContext.addPartModal.opened && <MapAddPartModal />}
    </>
  );
}
