import { ContextForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { useContext } from 'react';

export default function HeaderTitle() {
  const chatListController = useContext(ContextForChapterChatList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const chat = chatListController.state.currentObj
  const chapter = chapterListController.state.currentObj;
  

  const headerTitle = chat ? `${chat.title}` : 'None';
  return <p className='text-lg font-bold text-slate-300'>{headerTitle}</p>;
}
