import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { getFormmatedTimeDifference } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceChatAgentMessage() {
  const message = useContext(ContextForConversationMessageObj);

  return (
    <div className='mr-auto flex max-w-[350px] flex-col'>
      <div className='mr-auto flex flex-row items-center'>
        <img
          src={'/stock/open-ai.png'}
          className='aspect-square h-[20px] w-[20px] flex-shrink-0 rounded-full'
        />
        <p className='p-[0.5rem] text-left text-xs text-slate-700 text-opacity-50'>
          from {message.agentId} sent{' '}
          {getFormmatedTimeDifference(new Date(message.created))}
        </p>
      </div>
      <p className='rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-[1rem] text-left font-bold lowercase text-white'>
        {message.message}
      </p>
    </div>
  );
}
