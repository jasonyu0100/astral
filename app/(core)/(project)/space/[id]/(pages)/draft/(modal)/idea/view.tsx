import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useContext } from 'react';
import { SpaceDraftAddFileIdeaModal } from './add/file/main';
import { SpaceDraftAddUrlIdeaModal } from './add/link/main';
import { SpaceDraftAddTextIdeaModal } from './add/note/main';
import { SceneIdeaModalContext } from './main';

export function SceneIdeaModalView() {
  const modalContext = useContext(SceneIdeaModalContext);

  return (
    <>
      <ContextForOpenable.Provider value={modalContext.addNoteStarModal}>
        <SpaceDraftAddTextIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={modalContext.addFileStarModal}>
        <SpaceDraftAddFileIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={modalContext.addLinkStarModal}>
        <SpaceDraftAddUrlIdeaModal />
      </ContextForOpenable.Provider>
    </>
  );
}
