import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useContext } from 'react';
import { SpaceDraftAddFileIdeaModal } from './add/file/main';
import { SpaceDraftAddLinkIdeaModal } from './add/link/main';
import { SpaceDraftAddNoteIdeaModal } from './add/note/main';
import { SceneIdeaModalContext } from './main';

export function SceneIdeaModalView() {
  const modalContext = useContext(SceneIdeaModalContext);

  return (
    <>
      <ContextForOpenable.Provider value={modalContext.addNoteStarModal}>
        <SpaceDraftAddNoteIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={modalContext.addFileStarModal}>
        <SpaceDraftAddFileIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={modalContext.addLinkStarModal}>
        <SpaceDraftAddLinkIdeaModal />
      </ContextForOpenable.Provider>
    </>
  );
}
