import { useControllerForMessageScrollToBottom } from '@/logic/controller/scroll-to-message-bottom/main';
import { ContextForConversationMessageList } from '@/server/controller/conversation/message/list';
import { ContextForConversationMessageObj } from '@/server/model/conversation/message/main';
import { useContext, useEffect, useRef } from 'react';
import { SpacesViewChatSceneMessage } from './message/main';

export function SpacesViewChatSceneList() {
  const messageListController = useContext(ContextForConversationMessageList);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollToBottom } = useControllerForMessageScrollToBottom(ref);

  useEffect(() => {
    scrollToBottom();
  }, [messageListController.state.objs.length]);

  return (
    <div
      className='flex w-full flex-col space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: 'calc(100% - 9rem)' }}
      ref={ref}
    >
      {messageListController.state.objs.map((message) => (
        <ContextForConversationMessageObj.Provider
          value={message}
          key={message.id}
        >
          <SpacesViewChatSceneMessage />
        </ContextForConversationMessageObj.Provider>
      ))}
    </div>
  );
}
