import { SpacesConversationUserMessageDetail } from './detail/main';
import { SpacesConversationUserMessageText } from './text/main';

export function SpacesConversationUserMessage() {
  return (
    <div className=' ml-auto flex max-w-[500px] flex-col'>
      <SpacesConversationUserMessageDetail />
      <SpacesConversationUserMessageText />
    </div>
  );
}
