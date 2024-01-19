import { StormAddChapterModal } from './add-chapter/main';
import { StormAddChatModal } from './new-chat/main';

export function StormModalsView() {
  return (
    <>
      <StormAddChapterModal />
      <StormAddChatModal/>
    </>
  );
}
