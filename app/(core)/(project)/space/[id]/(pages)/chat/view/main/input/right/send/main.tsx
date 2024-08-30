import { AstralSendIcon } from '../../../../../../../../../../../icons/send/main';
import { useControllerForConversationMessageSend } from '../../../../../controller/message/main';

export function SpaceChatInputRightSend() {
  const { sendMessage } = useControllerForConversationMessageSend();
  return (
    <button
      className='flex h-[40px] w-[40px] items-center justify-center rounded-[2rem] bg-blue-500'
      onClick={sendMessage}
    >
      <AstralSendIcon />
    </button>
  );
}
