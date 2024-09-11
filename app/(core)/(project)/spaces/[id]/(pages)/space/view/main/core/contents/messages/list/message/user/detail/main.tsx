import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { getFormmatedTimeDifference } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpacesSpaceUserMessageDetail() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const message = useContext(ContextForConversationMessageObj);

  return (
    <div className='ml-auto flex flex-row items-center'>
      <img
        src={loggedInUser.dp?.src || exampleFileElem.src}
        className='aspect-square h-[20px] w-[20px] flex-shrink-0 rounded-full'
      />
      <p className='p-[0.5rem] text-xs text-slate-500'>
        from {loggedInUser.displayName} sent{' '}
        {getFormmatedTimeDifference(new Date(message.created))}
      </p>
    </div>
  );
}
