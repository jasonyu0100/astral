import { useControllerForSceneConversationMain } from '@/(server)/controller/space/chapter/scene/conversation/main';
import { useControllerForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/model/space/chapter/session/update/main';
import { useContext } from 'react';
import { SpaceSessionChatMessage } from './message/main';

export function SpaceSessionUpdatePreviewConversation() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const conversationController = useControllerForSceneConversationMain(
    sessionUpdate?.conversationId || '',
  );
  const messageListController = useControllerForConversationMessageList(
    conversationController.state.obj.id,
  );

  return (
    <div className='flex flex-col space-y-[1rem]'>
      {messageListController.state.objs.map((message) => (
        <ContextForConversationMessageObj.Provider value={message}>
          <SpaceSessionChatMessage />
        </ContextForConversationMessageObj.Provider>
      ))}
    </div>
  );
}
