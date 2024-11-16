import { ContextForChapterConversationList } from '@/architecture/controller/conversation/list';
import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { useContext } from 'react';
import { SpacesChatMessages } from './messages/list/main';

export function SpacesChatContents() {
  const messageListController = useContext(ContextForConversationMessageList);
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );

  return (
    <div
      className='relative flex w-full flex-col items-center'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      <div className='relative h-full w-full'>
        <SpacesChatMessages />
      </div>
    </div>
  );
}
