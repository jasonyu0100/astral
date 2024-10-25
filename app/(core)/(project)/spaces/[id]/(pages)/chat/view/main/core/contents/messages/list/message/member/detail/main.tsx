import { ContextForConversationMessageObj } from '@/server/model/conversation/message/main';
import { exampleFileElem } from '@/server/model/elements/file/main';
import { ContextForUserObj } from '@/server/model/user/main';
import { useContext } from 'react';

export function SpacesChatMemberMessageDetail() {
  const userObj = useContext(ContextForUserObj);
  const message = useContext(ContextForConversationMessageObj);

  return (
    <div className='mr-auto flex flex-row items-center'>
      <img
        src={userObj.dp?.src || exampleFileElem.src}
        className='aspect-square h-[20px] w-[20px] flex-shrink-0 rounded-full'
      />
      <p className='p-[0.5rem] text-left text-xs text-slate-300'>
        from {userObj.displayName} at{' '}
        {new Date(message.created).toLocaleTimeString()}
      </p>
    </div>
  );
}
