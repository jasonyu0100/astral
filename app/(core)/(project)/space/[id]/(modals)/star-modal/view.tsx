import { useContext } from 'react';
import { AddNoteStarModal } from './add/note/main';
import { StarModalContext } from './main';
import { AddFileStarModal } from './add/file/main';
import { AddLinkStarModal } from './add/link/main';

export function StarModalView() {
  const modalContext = useContext(StarModalContext);

  return (
    <>
      {modalContext.addNoteStarModal.opened && <AddNoteStarModal />}
      {modalContext.addFileStarModal.opened && <AddFileStarModal />}
      {modalContext.addLinkStarModal.opened && <AddLinkStarModal />}
    </>
  );
}
