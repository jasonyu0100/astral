import { useContext } from 'react';
import { AstralSendIcon } from '../../../../../../../../../../../icons/send/main';
import { ContextForSpacesChannel } from '../../../../../controller/main';

export function SpacesChannelInputRightSend() {
  const {
    actions: { sendMessageToConversation: sendMessage },
  } = useContext(ContextForSpacesChannel);
  return (
    <button
      className='flex h-[40px] w-[40px] items-center justify-center rounded-[2rem] bg-blue-500'
      onClick={sendMessage}
    >
      <AstralSendIcon />
    </button>
  );
}
