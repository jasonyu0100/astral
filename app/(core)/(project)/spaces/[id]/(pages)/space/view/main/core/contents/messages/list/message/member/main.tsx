import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { ContextForConversationMessageObj } from '@/(server)/model/conversation/message/main';
import { ContextForUserObj } from '@/(server)/model/user/main';
import { useContext } from 'react';
import { SpacesSpaceMemberMessageDetail } from './detail/main';
import { SpacesSpaceMemberMessageText } from './text/main';

export function SpacesSpaceMemberMessage() {
  const message = useContext(ContextForConversationMessageObj);
  const userController = useControllerForUserMain(message?.userId || '');

  return (
    <ContextForUserObj.Provider value={userController.state.obj}>
      <div className='mr-auto flex max-w-[350px] flex-col'>
        <SpacesSpaceMemberMessageDetail />
        <SpacesSpaceMemberMessageText />
      </div>
    </ContextForUserObj.Provider>
  );
}
