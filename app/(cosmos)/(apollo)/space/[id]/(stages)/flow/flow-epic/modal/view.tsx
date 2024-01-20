import { FlowAddChapterModal } from './add-chapter/main';
import { FlowAddLoomModal } from './add-loom/main';
import { FlowAddMomentModal } from './add-moment/main';

export function FlowModalsView() {
  return (
    <>
      <FlowAddChapterModal />
      <FlowAddMomentModal />
      <FlowAddLoomModal/>
    </>
  );
}
