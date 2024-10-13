import { useContext } from 'react';
import { AstralSendIcon } from '../../../../../../../../../../../icons/send/main';
import { ContextForSpacesSpace } from '../../../../../controller/main';

export function SpacesSpaceInputRightSend() {
  const {
    actions: { sendMessageIntoConversation: sendMessage },
  } = useContext(ContextForSpacesSpace);
  return (
    <button
      className='flex h-[40px] w-[40px] items-center justify-center rounded-[2rem] bg-blue-500'
      onClick={sendMessage}
    >
      <AstralSendIcon />
    </button>
  );
}
