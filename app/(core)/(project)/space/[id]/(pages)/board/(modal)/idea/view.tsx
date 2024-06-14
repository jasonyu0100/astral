import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useContext } from 'react';
import { SpaceBoardAddFileIdeaModal } from './add/file/main';
import { SpaceBoardAddLinkIdeaModal } from './add/link/main';
import { SpaceBoardAddNoteIdeaModal } from './add/note/main';
import { SceneIdeaModalContext } from './main';

export function SceneIdeaModalView() {
  const modalContext = useContext(SceneIdeaModalContext);

  return (
    <>
      <ContextForOpenable.Provider value={modalContext.addNoteStarModal}>
        <SpaceBoardAddNoteIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={modalContext.addFileStarModal}>
        <SpaceBoardAddFileIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={modalContext.addLinkStarModal}>
        <SpaceBoardAddLinkIdeaModal />
      </ContextForOpenable.Provider>
    </>
  );
}
