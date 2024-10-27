import { ContextForConversationMessageObj } from '@/server/model/conversation/message/main';
import { exampleFileElement } from '@/server/model/elements/file/main';
import { getFormmatedTimeDifference } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpaceMapUserMessage() {
  const messageObj = useContext(ContextForConversationMessageObj);

  return (
    <div className=' ml-auto flex max-w-[500px] flex-col'>
      <div className='ml-auto flex flex-row items-center'>
        <img
          src={exampleFileElement.src}
          className='aspect-square h-[20px] w-[20px] flex-shrink-0 rounded-full'
        />
        <p className='p-[0.5rem] text-xs text-slate-300'>
          from user sent{' '}
          {getFormmatedTimeDifference(new Date(messageObj.created))}
        </p>
      </div>
      <div className='rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-400 p-[1rem] text-right text-white'>
        {messageObj.message}
      </div>
    </div>
  );
}
