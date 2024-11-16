import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { useContext } from 'react';

export function SpacesChatMemberMessageText() {
  const message = useContext(ContextForConversationMessageObj);

  return (
    <div className='mr-auto flex flex-row'>
      <p className='rounded-[2rem] bg-gradient-to-br from-purple-500 to-violet-800 p-[1rem] text-left text-lg text-white'>
        {message.message}
      </p>
    </div>
  );
}
