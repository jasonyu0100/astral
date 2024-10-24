import { SpacesChatUserMessageDetail } from './detail/main';
import { SpacesChatUserMessageText } from './text/main';

export function SpacesChatUserMessage() {
  return (
    <div className=' ml-auto flex max-w-[500px] flex-col'>
      <SpacesChatUserMessageDetail />
      <SpacesChatUserMessageText />
    </div>
  );
}
