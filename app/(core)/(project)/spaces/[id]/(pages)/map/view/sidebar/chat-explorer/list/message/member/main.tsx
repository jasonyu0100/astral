import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/conversation/message/main';
import { useContext } from 'react';

export function SpacesMapMemberMessage() {
  const messageObj = useContext(ContextForConversationMessageObj);
  const userController = useControllerForUserMain(messageObj?.userId || '');
  const userObj = userController.state.obj;

  return (
    <div className=' ml-auto flex max-w-[500px] flex-col'>
      <div className='mr-auto flex flex-row items-center'>
        <img
          src={userObj.dp?.src || exampleFileElem.src}
          className='aspect-square h-[20px] w-[20px] flex-shrink-0 rounded-full'
        />
        <p className='p-[0.5rem] text-left text-xs text-slate-300'>
          from {userObj.displayName} at{' '}
          {new Date(messageObj.created).toLocaleTimeString()}
        </p>
      </div>
      <div className='rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-[1rem] text-white'>
        {messageObj.message}
      </div>
    </div>
  );
}
