import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { ControllerForMessageScrollToBottom } from '@/logic/controller/scroll-to-bottom/main';
import { useContext, useRef } from 'react';
import { SpaceChatEmpty } from '../../empty/main';
import { SpaceChatMessage } from './message/main';

export function SpaceChatMessages() {
  const messageListController = useContext(ContextForConversationMessageList);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollToBottom } = ControllerForMessageScrollToBottom(ref);

  return (
    <div
      className='flex h-full w-full flex-col items-center overflow-auto'
      ref={ref}
    >
      {messageListController.state.objs.length === 0 ? (
        <SpaceChatEmpty />
      ) : (
        <div className='w-[900px] flex-col space-y-[2rem] py-[2rem]'>
          {messageListController.state.objs.map((message) => (
            <ContextForConversationMessageObj.Provider
              value={message}
              key={message.id}
            >
              <SpaceChatMessage key={message.id} />
            </ContextForConversationMessageObj.Provider>
          ))}
        </div>
      )}
    </div>
  );
}
