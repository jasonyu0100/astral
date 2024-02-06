import { useContext } from 'react';
import { StormAddChapterModal } from './add-chapter/main';
import { StormModalContext } from './main';
import { StormAddChatModal } from './new-chat/main';

export function StormModalsView() {
  const { addChapter, addChat } = useContext(StormModalContext);
  return (
    <>
      {addChapter.opened && <StormAddChapterModal />}
      {addChat.opened && <StormAddChatModal />}
    </>
  );
}
