import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { useContext } from 'react';

export function SpacesSpaceAgentMessageText() {
  const message = useContext(ContextForConversationMessageObj);

  return (
    <div className='mr-auto flex flex-row'>
      <p className='rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-[1rem] text-left text-white'>
        {message.message}
      </p>
    </div>
  );
}
