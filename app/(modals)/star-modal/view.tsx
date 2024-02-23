import { useContext } from 'react';
import { AddNoteStarModal } from './add-note/main';
import { StarModalContext } from './main';
import { AddLogStarModal } from './add-log/main';
import { AddFileStarModal } from './add-file/main';
import { AddLinkStarModal } from './add-link/main';

export function StarModalView() {
  const modalContext = useContext(StarModalContext);

  return (
    <>
      {modalContext.addNoteStarModal.opened && <AddNoteStarModal />}
      {modalContext.addLogStarModal.opened && <AddLogStarModal />}
      {modalContext.addFileStarModal.opened && <AddFileStarModal />}
      {modalContext.addLinkStarModal.opened && <AddLinkStarModal />}
    </>
  );
}
