import { SpacesChatAgentMessageDetail } from './detail/main';
import { SpacesChatAgentMessageText } from './text/main';

export function SpacesChatAgentMessage() {
  return (
    <div className='mr-auto flex max-w-[500px] flex-col'>
      <SpacesChatAgentMessageDetail />
      <SpacesChatAgentMessageText />
    </div>
  );
}
