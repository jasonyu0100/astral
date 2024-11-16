import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { exampleFileElement } from '@/architecture/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { getFormmatedTimeDifference } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpacesChatUserMessageDetail() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const message = useContext(ContextForConversationMessageObj);

  return (
    <div className='ml-auto flex flex-row items-center'>
      <img
        src={loggedInUser?.dp?.src || exampleFileElement.src}
        className='aspect-square h-[2rem] w-[2rem] flex-shrink-0 rounded-full'
      />
      <p className='text-md p-[1rem] text-slate-300'>
        from {loggedInUser?.displayName} sent{' '}
        {getFormmatedTimeDifference(new Date(message.created))}
      </p>
    </div>
  );
}
