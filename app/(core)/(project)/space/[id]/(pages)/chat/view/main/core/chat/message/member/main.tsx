import { useControllerForUserMain } from '@/(server)/(controller)/user/main';
import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { useContext } from 'react';

export function SpaceChatMemberMessage() {
  const message = useContext(ContextForConversationMessageObj);
  const userObj = useControllerForUserMain(message.userId);

  return (
    <div className='mr-auto flex max-w-[350px] flex-col'>
      <div className='mr-auto flex flex-row items-center'>
        <img
          src={userObj.state.obj.dp.src}
          className='aspect-square h-[20px] w-[20px] flex-shrink-0 rounded-full'
        />
        <p className='p-[0.5rem] text-left text-xs text-slate-500 text-opacity-50'>
          sent {new Date(message.created).toLocaleTimeString()} from{' '}
          {userObj.state.obj.displayName}
        </p>
      </div>
      <p className='rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-[1rem] text-left text-white'>
        {message.message}
      </p>
    </div>
  );
}
