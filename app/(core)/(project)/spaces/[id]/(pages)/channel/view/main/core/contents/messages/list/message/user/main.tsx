import { SpacesChannelUserMessageDetail } from './detail/main';
import { SpacesChannelUserMessageText } from './text/main';

export function SpacesChannelUserMessage() {
  return (
    <div className=' ml-auto flex max-w-[500px] flex-col'>
      <SpacesChannelUserMessageDetail />
      <SpacesChannelUserMessageText />
    </div>
  );
}
