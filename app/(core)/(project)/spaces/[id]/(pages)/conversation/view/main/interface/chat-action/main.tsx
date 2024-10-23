import { SpacesConversationInputRightSend } from './send/main';
import { SpacesConversationInputRightVoice } from './voice/main';

export function SpacesConversationInputRight() {
  return (
    <div className='flex flex-row items-center justify-start space-x-[1rem]'>
      <SpacesConversationInputRightSend />
      <SpacesConversationInputRightVoice />
    </div>
  );
}
