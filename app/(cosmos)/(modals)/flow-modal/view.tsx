import { useContext } from 'react';
import { FlowAddChapterModal } from './add-chapter/main';
import { FlowAddLogModal } from './add-log/main';
import { FlowAddMomentModal } from './add-moment/main';
import { FlowModalContext } from './main';

export function FlowModalView() {
  const modalContext = useContext(FlowModalContext);

  return (
    <>
      {modalContext.addChapterModal.opened && <FlowAddChapterModal />}
      {modalContext.addFileMomentModal.opened && <FlowAddMomentModal />}
      {modalContext.addLogMomentModal.opened && <FlowAddLogModal />}
    </>
  );
}
