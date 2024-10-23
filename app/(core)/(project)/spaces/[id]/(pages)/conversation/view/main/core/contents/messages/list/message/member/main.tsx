import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { ContextForConversationMessageObj } from '@/(server)/model/conversation/message/main';
import { ContextForUserObj } from '@/(server)/model/user/main';
import { useContext } from 'react';
import { SpacesConversationMemberMessageDetail } from './detail/main';
import { SpacesConversationMemberMessageText } from './text/main';

export function SpacesConversationMemberMessage() {
  const message = useContext(ContextForConversationMessageObj);
  const userController = useControllerForUserMain(message?.userId || '');

  return (
    <ContextForUserObj.Provider value={userController.state.obj}>
      <div className='mr-auto flex max-w-[350px] flex-col'>
        <SpacesConversationMemberMessageDetail />
        <SpacesConversationMemberMessageText />
      </div>
    </ContextForUserObj.Provider>
  );
}
