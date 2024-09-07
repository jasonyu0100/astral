import { SpaceChatAgentMessageDetail } from './detail/main';
import { SpaceChatAgentMessageText } from './text/main';

export function SpaceChatAgentMessage() {
  return (
    <div className='mr-auto flex max-w-[500px] flex-col'>
      <SpaceChatAgentMessageDetail />
      <SpaceChatAgentMessageText />
    </div>
  );
}
