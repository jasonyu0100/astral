import { ContextForConversationMessageObj } from '@/(server)/model/conversation/message/main';
import { useContext } from 'react';

export function SpacesSpaceMemberMessageText() {
  const message = useContext(ContextForConversationMessageObj);

  return (
    <div className='mr-auto flex flex-row'>
      <p className='rounded-[2rem] bg-gradient-to-br from-purple-800 to-purple-500 p-[1rem] text-left text-white'>
        {message.message}
      </p>
    </div>
  );
}
