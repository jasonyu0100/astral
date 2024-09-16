import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { getFormmatedTimeDifference } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpaceMapAgentMessage() {
  const messageObj = useContext(ContextForConversationMessageObj);

  return (
    <div className='mr-auto flex max-w-[500px] flex-col'>
      <div className='mr-auto flex flex-row items-center'>
        <img
          src={'/brand/display-picture-astral.png'}
          className='aspect-square h-[20px] w-[20px] flex-shrink-0 rounded-full'
        />
        <p className='p-[0.5rem] text-left text-xs text-slate-500 text-opacity-50'>
          from {messageObj.agentId} sent{' '}
          {getFormmatedTimeDifference(new Date(messageObj.created))}
        </p>
      </div>
      <div className='rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-[1rem] text-left text-white'>
        {messageObj.message}
      </div>
    </div>
  );
}
