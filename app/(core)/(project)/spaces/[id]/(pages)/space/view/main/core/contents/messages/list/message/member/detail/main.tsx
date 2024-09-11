import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { ContextForUserObj } from '@/(server)/model/user/main';
import { useContext } from 'react';

export function SpacesSpaceMemberMessageDetail() {
  const userObj = useContext(ContextForUserObj);
  const message = useContext(ContextForConversationMessageObj);

  return (
    <div className='mr-auto flex flex-row items-center'>
      <img
        src={userObj.dp?.src || exampleFileElem.src}
        className='aspect-square h-[20px] w-[20px] flex-shrink-0 rounded-full'
      />
      <p className='p-[0.5rem] text-left text-xs text-slate-500 text-opacity-50'>
        from {userObj.displayName} at{' '}
        {new Date(message.created).toLocaleTimeString()}
      </p>
    </div>
  );
}
