import { useContext } from 'react';
import { AddNoteStarModal } from './add-note/main';
import { DraftAddConstellationModal } from './add-log/main';
import { StarModalContext } from './main';

export function StarModalView() {
  const modalContext = useContext(StarModalContext);

  return (
    <>
      {modalContext.addNoteStarModal.opened && <AddNoteStarModal />}
      {modalContext.addLogStarModal.opened && <DraftAddConstellationModal />}
    </>
  );
}
