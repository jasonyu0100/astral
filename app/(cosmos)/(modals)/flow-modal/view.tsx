import { useContext } from 'react';
import { FlowAddChapterModal } from './add-chapter/main';
import { FlowAddLoomModal } from './add-loom/main';
import { FlowAddMomentModal } from './add-moment/main';
import { FlowModalContext } from './main';

export function FlowModalView() {
  const modalContext = useContext(FlowModalContext);

  return (
    <>
      {modalContext.addChapterModal.opened && <FlowAddChapterModal />}
      {modalContext.addFileMomentModal.opened && <FlowAddMomentModal />}
      {modalContext.addLogMomentModal.opened && <FlowAddLoomModal />}
    </>
  );
}
