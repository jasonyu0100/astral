import { useControllerForChatConversationMain } from '@/(server)/(controller)/space/chapter/chat/conversation/main';
import { useControllerForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import { useControllerForChapterChatMain } from '@/(server)/(controller)/space/chapter/chat/main';
import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';
import { SpaceSessionsChatMessage } from './message/main';

export function SpaceSessionsUpdatePreviewConversation() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const chatController = useControllerForChapterChatMain(
    sessionUpdate?.chatId || '',
  );
  const conversationController = useControllerForChatConversationMain(
    sessionUpdate?.conversationId || '',
  );
  const messageListController = useControllerForConversationMessageList(
    conversationController.state.obj.id,
  );

  return (
    <div className='flex flex-col space-y-[1rem]'>
      {messageListController.state.objs.map((message) => (
        <ContextForConversationMessageObj.Provider value={message}>
          <SpaceSessionsChatMessage />
        </ContextForConversationMessageObj.Provider>
      ))}
    </div>
  );
}
