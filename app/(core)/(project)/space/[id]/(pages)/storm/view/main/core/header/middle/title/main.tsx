import { ContextForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { useContext } from 'react';

export default function SpaceStormHeaderMiddleTitle() {
  const chatListController = useContext(ContextForChapterChatList);
  const chat = chatListController.state.currentObj;

  const headerTitle = chat ? `${chat.title}` : 'None';
  return <p className='text-lg font-bold text-slate-300'>{headerTitle}</p>;
}
