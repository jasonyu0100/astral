import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { ContextForUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import { SpacesChannelMemberMessageDetail } from './detail/main';
import { SpacesChannelMemberMessageText } from './text/main';

export function SpacesChannelMemberMessage() {
  const message = useContext(ContextForConversationMessageObj);
  const userController = useControllerForUserMain(message?.userId || '');

  return (
    <ContextForUserObj.Provider value={userController.state.obj}>
      <div className='mr-auto flex max-w-[350px] flex-col'>
        <SpacesChannelMemberMessageDetail />
        <SpacesChannelMemberMessageText />
      </div>
    </ContextForUserObj.Provider>
  );
}
