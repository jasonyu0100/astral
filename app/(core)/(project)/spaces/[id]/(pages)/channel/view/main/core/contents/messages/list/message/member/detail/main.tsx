import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { exampleFileElement } from '@/architecture/model/elements/file/main';
import { ContextForUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';

export function SpacesChannelMemberMessageDetail() {
  const userObj = useContext(ContextForUserObj);
  const message = useContext(ContextForConversationMessageObj);

  return (
    <div className='mr-auto flex flex-row items-center'>
      <img
        src={userObj?.dp?.src || exampleFileElement.src}
        className='aspect-square h-[2rem] w-[2rem] flex-shrink-0 rounded-full'
      />
      <p className='text-md p-[1rem] text-left text-slate-300'>
        from {userObj?.displayName} at{' '}
        {new Date(message.created).toLocaleTimeString()}
      </p>
    </div>
  );
}
