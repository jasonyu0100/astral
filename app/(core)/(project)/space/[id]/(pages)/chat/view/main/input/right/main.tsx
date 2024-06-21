import { useControllerForChatMessageSend } from '../../../../(controller)/message/main';
import { SpaceChatInputRightSend } from './send/main';

export function SpaceChatInputRight() {
  const { sendMessage } = useControllerForChatMessageSend();

  return (
    <div className='flex h-[50px] w-[100px] flex-shrink-0 flex-row items-center justify-evenly'>
      <SpaceChatInputRightSend onClick={sendMessage} />
    </div>
  );
}
