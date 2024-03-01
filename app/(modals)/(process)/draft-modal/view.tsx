import { useContext } from 'react';
import { DraftAddChapterModal } from './add/chapter/main';
import { DraftAddConstellationModal } from './add/constellation/main';
import { DraftModalContext } from './main';

export function DraftModalView() {
  const modalContext = useContext(DraftModalContext);

  return (
    <>
      {modalContext.addChapterModal.opened && <DraftAddChapterModal />}
      {modalContext.addConstellationModal.opened && <DraftAddConstellationModal />}
    </>
  );
}
