import { SpacesConversationAgentMessageDetail } from './detail/main';
import { SpacesConversationAgentMessageText } from './text/main';

export function SpacesConversationAgentMessage() {
  return (
    <div className='mr-auto flex max-w-[500px] flex-col'>
      <SpacesConversationAgentMessageDetail />
      <SpacesConversationAgentMessageText />
    </div>
  );
}
