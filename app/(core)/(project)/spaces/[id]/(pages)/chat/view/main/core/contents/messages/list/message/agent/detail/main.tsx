import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { getFormmatedTimeDifference } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpacesChatAgentMessageDetail() {
  const message = useContext(ContextForConversationMessageObj);

  return (
    <div className='mr-auto flex flex-row items-center'>
      <img
        src={'/stock/astral.png'}
        className='aspect-square h-[2rem] w-[2rem] flex-shrink-0 rounded-full'
      />
      <p className='text-md p-[1rem] text-left text-slate-300'>
        from {message.agentId} sent{' '}
        {getFormmatedTimeDifference(new Date(message.created))}
      </p>
    </div>
  );
}
