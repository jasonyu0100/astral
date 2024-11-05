import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { useControllerForMessageScrollToBottom } from '@/logic/controller/scroll-to-message-bottom/main';
import { useContext, useEffect, useRef } from 'react';
import { SpaceSpaceChatSceneMessage } from './message/main';

export function SpaceSpaceChatSceneList() {
  const messageListController = useContext(ContextForConversationMessageList);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollToBottom } = useControllerForMessageScrollToBottom(ref);

  useEffect(() => {
    scrollToBottom();
  }, [messageListController.state.objs.length]);

  return (
    <div
      className='flex h-full w-full flex-col space-y-[1rem] overflow-auto p-[1rem]'
      ref={ref}
    >
      {messageListController.state.objs.map((message) => (
        <ContextForConversationMessageObj.Provider
          value={message}
          key={message.id}
        >
          <SpaceSpaceChatSceneMessage />
        </ContextForConversationMessageObj.Provider>
      ))}
    </div>
  );
}
