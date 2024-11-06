import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { useContext } from 'react';
import { SpacesChannelMessages } from './messages/list/main';

export function SpacesChannelContents() {
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <div
      className='relative flex w-full flex-col items-center'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      <div className='relative h-full w-full'>
        {/* <SpacesChannelConversations /> */}
        {/* <SpacesChannelStatusContents /> */}

        <SpacesChannelMessages />
      </div>
    </div>
  );
}
