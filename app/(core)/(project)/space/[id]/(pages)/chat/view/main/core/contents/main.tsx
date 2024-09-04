import { SpaceChatConversations } from './conversations/main';
import { SpaceChatMessages } from './messages/list/main';
import { SpaceChatChatStatus } from './status/main';

export function SpaceChatContents() {
  return (
    <div
      className='relative flex w-full flex-col items-center'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      <SpaceChatChatStatus />
      <SpaceChatMessages />
      <SpaceChatConversations />
    </div>
  );
}
