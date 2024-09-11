import { SpacesSpaceAgentMessageDetail } from './detail/main';
import { SpacesSpaceAgentMessageText } from './text/main';

export function SpacesSpaceAgentMessage() {
  return (
    <div className='mr-auto flex max-w-[500px] flex-col'>
      <SpacesSpaceAgentMessageDetail />
      <SpacesSpaceAgentMessageText />
    </div>
  );
}
