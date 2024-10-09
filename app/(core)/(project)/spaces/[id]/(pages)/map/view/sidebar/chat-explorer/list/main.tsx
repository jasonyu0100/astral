import { ContextForConversationMessageList } from '@/(server)/controller/conversation/message/list';
import { ContextForConversationMessageObj } from '@/(server)/model/conversation/message/main';
import { useControllerForMessageScrollToBottom } from '@/logic/controller/scroll-to-message-bottom/main';
import { useContext, useRef } from 'react';
import { SpacesMapChatExplorerMessage } from './message/main';

export function SpacesMapChatExplorerList() {
  const messageListController = useContext(ContextForConversationMessageList);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollToBottom } = useControllerForMessageScrollToBottom(ref);

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
          <SpacesMapChatExplorerMessage />
        </ContextForConversationMessageObj.Provider>
      ))}
    </div>
  );
}
