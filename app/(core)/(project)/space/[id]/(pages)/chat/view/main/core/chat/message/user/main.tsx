import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';

export function SpaceChatUserMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const message = useContext(ContextForConversationMessageObj);

  return (
    <div className='ml-auto flex max-w-[350px] flex-col'>
      <p className='mr-auto p-[0.5rem] text-xs text-slate-500'>
        sent {new Date(message.created).toLocaleTimeString()} from{' '}
        {loggedInUser.displayName}
      </p>
      <p className='rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-400 p-3 text-right lowercase text-white'>
        {message.message}
      </p>
    </div>
  );
}
