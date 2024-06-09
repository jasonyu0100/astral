import { useContext } from 'react';
import { AddNoteStarModal } from './add/note/main';
import { StarModalContext } from './main';
import { AddFileStarModal } from './add/file/main';
import { AddLinkStarModal } from './add/link/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';

export function StarModalView() {
  const modalContext = useContext(StarModalContext);

  return (
    <>
      <ContextForOpenable.Provider value={modalContext.addNoteStarModal}>
        <AddNoteStarModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={modalContext.addFileStarModal}>
        <AddFileStarModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={modalContext.addLinkStarModal}>
        <AddLinkStarModal />
      </ContextForOpenable.Provider>
    </>
  );
}
