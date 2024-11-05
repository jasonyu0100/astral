import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { getFormmatedTimeDifference } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpacesChannelAgentMessageDetail() {
  const message = useContext(ContextForConversationMessageObj);

  return (
    <div className='mr-auto flex flex-row items-center'>
      <img
        src={'/stock/astral.png'}
        className='aspect-square h-[3rem] w-[3rem] flex-shrink-0 rounded-full'
      />
      <p className='p-[0.5rem] text-left text-xs text-slate-300'>
        from {message.agentId} sent{' '}
        {getFormmatedTimeDifference(new Date(message.created))}
      </p>
    </div>
  );
}
