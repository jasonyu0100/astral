import { ContextForConversationMessageList } from '@/server/controller/conversation/message/list';
import { useContext } from 'react';
import { SpacesChatConversations } from './conversations/main';
import { SpacesChatEmpty } from './empty/main';
import { SpacesChatMessages } from './messages/list/main';
import { SpacesChatStatusContents } from './status/main';

export function SpacesChatContents() {
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <div
      className='relative flex w-full flex-col items-center'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      {messageListController.state.objs.length === 0 ? (
        <SpacesChatEmpty />
      ) : (
        <div className='relative h-full w-full'>
          <SpacesChatConversations />
          <SpacesChatStatusContents />
          <SpacesChatMessages />
        </div>
      )}
    </div>
  );
}
