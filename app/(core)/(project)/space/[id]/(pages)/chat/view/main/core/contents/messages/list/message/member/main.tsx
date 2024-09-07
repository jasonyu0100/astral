import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { ContextForUserObj } from '@/(server)/model/user/main';
import { useContext } from 'react';
import { SpaceChatMemberMessageDetail } from './detail/main';
import { SpaceChatMemberMessageText } from './text/main';

export function SpaceChatMemberMessage() {
  const message = useContext(ContextForConversationMessageObj);
  const userController = useControllerForUserMain(message?.userId || '');

  return (
    <ContextForUserObj.Provider value={userController.state.obj}>
      <div className='mr-auto flex max-w-[350px] flex-col'>
        <SpaceChatMemberMessageDetail />
        <SpaceChatMemberMessageText />
      </div>
    </ContextForUserObj.Provider>
  );
}
