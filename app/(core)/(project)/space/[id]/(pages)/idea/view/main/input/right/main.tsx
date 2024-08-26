import { useControllerForChatMessageSend } from '../../../../controller/message/main';
import { SpaceIdeaInputRightSend } from './send/main';

export function SpaceIdeaInputRight() {
  const { sendMessage } = useControllerForChatMessageSend();

  return (
    <div className='flex h-[50px] w-[100px] flex-shrink-0 flex-row items-center justify-evenly'>
      <SpaceIdeaInputRightSend onClick={sendMessage} />
    </div>
  );
}
