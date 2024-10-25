import { useControllerForMessageScrollToBottom } from '@/logic/controller/scroll-to-message-bottom/main';
import { ContextForConversationMessageList } from '@/server/controller/conversation/message/list';
import { ContextForConversationMessageObj } from '@/server/model/conversation/message/main';
import { useContext, useEffect, useRef } from 'react';
import { SpacesChatEmpty } from '../../empty/main';
import { SpacesChatMessage } from './message/main';

export function SpacesChatMessages() {
  const messageListController = useContext(ContextForConversationMessageList);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollToBottom } = useControllerForMessageScrollToBottom(ref);

  useEffect(() => {
    scrollToBottom();
  }, messageListController.state.objs);

  return (
    <div
      className='flex w-full flex-col items-center overflow-auto'
      style={{ height: 'calc(100% - 200px)' }}
      ref={ref}
    >
      {messageListController.state.objs.length === 0 ? (
        <SpacesChatEmpty />
      ) : (
        <div className='w-[900px] flex-col space-y-[2rem] py-[2rem]'>
          {messageListController.state.objs.map((message) => (
            <ContextForConversationMessageObj.Provider
              value={message}
              key={message.id}
            >
              <SpacesChatMessage key={message.id} />
            </ContextForConversationMessageObj.Provider>
          ))}
        </div>
      )}
    </div>
  );
}
