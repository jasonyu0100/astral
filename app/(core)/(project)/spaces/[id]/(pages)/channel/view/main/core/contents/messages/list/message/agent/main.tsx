import { SpacesChannelAgentMessageDetail } from './detail/main';
import { SpacesChannelAgentMessageText } from './text/main';

export function SpacesChannelAgentMessage() {
  return (
    <div className='mr-auto flex max-w-[500px] flex-col'>
      <SpacesChannelAgentMessageDetail />
      <SpacesChannelAgentMessageText />
    </div>
  );
}
