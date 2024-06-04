import { useContext } from 'react';
import { MapAddChapterModal } from './add/chapter/main';
import { MapAddSceneModal } from './add/scene/main';
import { MapModalContext } from './main';

export function MapModalView() {
  const modalContext = useContext(MapModalContext);

  return (
    <>
      {modalContext.addChapterModal.opened && <MapAddChapterModal />}
      {modalContext.addSceneModal.opened && <MapAddSceneModal />}
    </>
  );
}
