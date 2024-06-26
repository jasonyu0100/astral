import { useControllerForChatConversationMain } from '@/(server)/(controller)/space/chapter/chat/conversation/main';
import { useControllerForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import { useControllerForChapterChatMain } from '@/(server)/(controller)/space/chapter/chat/main';
import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';
import { SpaceSessionChatMessage } from './message/main';

export function SpaceSessionUpdatePreviewConversation() {
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
    <>
      {/* <p className='text-xl font-bold text-slate-300'>
        {getFormattedDate(new Date(conversationController.state.obj.created))}
      </p>
      <p className='text-xl font-bold text-slate-300'>
        {chatController.state.obj.title}
      </p>
      <br /> */}
      <div className='flex flex-col space-y-[1rem]'>
        {messageListController.state.objs.map((message) => (
          <ContextForConversationMessageObj.Provider value={message}>
            <SpaceSessionChatMessage />
          </ContextForConversationMessageObj.Provider>
        ))}
      </div>
    </>
  );
}
