import { useContext } from 'react';
import { DraftAddChapterModal } from './add-chapter/main';
import { DraftAddConstellationModal } from './add-constellation/main';
import { DraftModalContext } from './main';

export function DraftModalView() {
  const { addChapterModal: addChapter, addConstellationModal: addConstellation } = useContext(DraftModalContext);

  return (
    <>
      {addChapter.opened && <DraftAddChapterModal />}
      {addConstellation.opened && <DraftAddConstellationModal />}
    </>
  );
}
