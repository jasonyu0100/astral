import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { ContextForUserObj } from '@/(server)/model/user/main';
import { getFormmatedTimeDifference } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpaceMapUserMessage() {
  const loggedInUser = useContext(ContextForUserObj);
  const messageObj = useContext(ContextForConversationMessageObj);

  return (
    <div className=' ml-auto flex max-w-[500px] flex-col'>
      <div className='ml-auto flex flex-row items-center'>
        <img
          src={loggedInUser.dp?.src || exampleFileElem.src}
          className='aspect-square h-[20px] w-[20px] flex-shrink-0 rounded-full'
        />
        <p className='p-[0.5rem] text-xs text-slate-500'>
          from {loggedInUser.displayName} sent{' '}
          {getFormmatedTimeDifference(new Date(messageObj.created))}
        </p>
      </div>
      <div className='rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-400 p-[1rem] text-right text-white'>
        {messageObj.message}
      </div>
    </div>
  );
}
