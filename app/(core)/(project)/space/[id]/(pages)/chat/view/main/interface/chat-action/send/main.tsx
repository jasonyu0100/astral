import { useContext } from 'react';
import { AstralSendIcon } from '../../../../../../../../../../../icons/send/main';
import { ContextForSpaceChat } from '../../../../../controller/main';

export function SpaceChatInputRightSend() {
  const {
    actions: { sendMessage },
  } = useContext(ContextForSpaceChat);
  return (
    <button
      className='flex h-[40px] w-[40px] items-center justify-center rounded-[2rem] bg-blue-500'
      onClick={sendMessage}
    >
      <AstralSendIcon />
    </button>
  );
}
