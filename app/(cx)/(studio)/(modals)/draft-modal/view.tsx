import { useContext } from 'react';
import { DraftAddChapterModal } from './add/chapter/main';
import { DraftAddLogModal } from './add/log/main';
import { DraftAddMomentModal } from './add/moment/main';
import { DraftModalContext } from './main';

export function DraftModalView() {
  const modalContext = useContext(DraftModalContext);

  return (
    <>
      {modalContext.addChapterModal.opened && <DraftAddChapterModal />}
      {modalContext.addFileMomentModal.opened && <DraftAddMomentModal />}
      {modalContext.addLogMomentModal.opened && <DraftAddLogModal />}
    </>
  );
}
