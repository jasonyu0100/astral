import { useControllerForChatMessageSend } from '../../../../(controller)/message/main';
import { SpaceStormInputRightSend } from './send/main';

export function SpaceStormInputRight() {
  const { sendMessage } = useControllerForChatMessageSend();

  return (
    <div className='flex h-[50px] w-[100px] flex-shrink-0 flex-row items-center justify-evenly'>
      <SpaceStormInputRightSend onClick={sendMessage} />
    </div>
  );
}
