import { ContextForChapterChatList } from '@/(server)/controller/space/chapter/chat/list';
import { useContext } from 'react';

export default function SpaceIdeaHeaderMiddleTitle() {
  const chatListController = useContext(ContextForChapterChatList);

  return (
    <p className='text-lg font-light text-slate-300'>
      {chatListController.state.currentObj?.title || 'untitled'}
    </p>
  );
}
