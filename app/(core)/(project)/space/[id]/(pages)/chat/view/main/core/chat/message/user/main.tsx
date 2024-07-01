import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';

export function SpaceChatUserMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const message = useContext(ContextForConversationMessageObj);

  return (
    <div className='ml-auto flex max-w-[350px] flex-col'>
      <div className='mr-auto flex flex-row items-center'>
        <img
          src={loggedInUser.dp.src}
          className='aspect-square h-[20px] w-[20px] flex-shrink-0 rounded-full'
        />
        <p className='p-[0.5rem] text-xs text-slate-500'>
          from {loggedInUser.displayName} sent{' '}
          {new Date(message.created).toLocaleTimeString()}
        </p>
      </div>
      <p className='rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-400 p-3 text-right lowercase text-white'>
        {message.message}
      </p>
    </div>
  );
}
