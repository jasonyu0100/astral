import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { ControllerForMessageScrollToBottom } from '@/logic/controller/scroll-to-bottom/main';
import { useContext, useRef } from 'react';
import { SpacesMapChatExplorerMessage } from './message/main';

export function SpacesMapChatExplorerList() {
  const messageListController = useContext(ContextForConversationMessageList);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollToBottom } = ControllerForMessageScrollToBottom(ref);

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
