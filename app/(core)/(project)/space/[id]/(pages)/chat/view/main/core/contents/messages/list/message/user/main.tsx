import { SpaceChatUserMessageDetail } from './detail/main';
import { SpaceChatUserMessageText } from './text/main';

export function SpaceChatUserMessage() {
  return (
    <div className=' ml-auto flex max-w-[500px] flex-col'>
      <SpaceChatUserMessageDetail />
      <SpaceChatUserMessageText />
    </div>
  );
}
