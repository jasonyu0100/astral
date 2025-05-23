import { useContext } from 'react';
import { AstralSendIcon } from '../../../../../../../../../../../icons/send/main';
import { ContextForSpacesChat } from '../../../../../controller/main';

export function SpacesChatInputRightSend() {
  const {
    actions: { sendMessageToConversation: sendMessage },
  } = useContext(ContextForSpacesChat);
  return (
    <button
      className='flex h-[40px] w-[40px] items-center justify-center rounded-[2rem] bg-blue-500'
      onClick={sendMessage}
    >
      <AstralSendIcon />
    </button>
  );
}
