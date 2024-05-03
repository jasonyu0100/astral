import { useContext } from 'react';
import { ChaptersHandlerContext } from '@/(lgx)/internal/handler/chapters/main';
import { ChatsHandlerContext } from '@/(lgx)/internal/handler/storm/chats/main';

export default function HeaderTitle() {
  const chatsHandler = useContext(ChatsHandlerContext);
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const chat = chatsHandler.chat
  const chapter = chaptersHandler.chapter;
  

  const headerTitle =
    chapter && chat ? `${chapter.title} - ${chat.title}` : 'None';
  return <p className='text-lg font-bold text-slate-300'>{headerTitle}</p>;
}
