import { ContextForConversationMessageObj } from '@/(server)/model/conversation/message/main';
import { useContext } from 'react';

export function SpacesChatUserMessageText() {
  const message = useContext(ContextForConversationMessageObj);

  return (
    <div className='ml-auto flex flex-row'>
      <p className='rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-400 p-[1rem] text-right text-white'>
        {message.message}
      </p>
    </div>
  );
}
