import { useContext } from 'react';
import { FlowAddChapterModal } from './add-chapter/main';
import { FlowAddLoomModal } from './add-loom/main';
import { FlowAddMomentModal } from './add-moment/main';
import { FlowModalContext } from './main';

export function FlowModalsView() {
  const { addChapter, addMoment, addLoom } = useContext(FlowModalContext);

  return (
    <>
      {addChapter.opened && <FlowAddChapterModal />}
      {addMoment.opened && <FlowAddMomentModal />}
      {addLoom.opened && <FlowAddLoomModal />}
    </>
  );
}
