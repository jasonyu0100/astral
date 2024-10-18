import { ContextForConversationMessageList } from '@/(server)/controller/conversation/message/list';
import { ContextForConversationMessageObj } from '@/(server)/model/conversation/message/main';
import { useControllerForMessageScrollToBottom } from '@/logic/controller/scroll-to-message-bottom/main';
import { useContext, useEffect, useRef } from 'react';
import { SpacesSpaceEmpty } from '../../empty/main';
import { SpacesSpaceMessage } from './message/main';

export function SpacesSpaceMessages() {
  const messageListController = useContext(ContextForConversationMessageList);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollToBottom } = useControllerForMessageScrollToBottom(ref);

  useEffect(() => {
    scrollToBottom();
  }, messageListController.state.objs);

  return (
    <div
      className='flex h-full w-full flex-col items-center overflow-auto'
      ref={ref}
    >
      {messageListController.state.objs.length === 0 ? (
        <SpacesSpaceEmpty />
      ) : (
        <div className='w-[900px] flex-col space-y-[2rem] py-[2rem]'>
          {messageListController.state.objs.map((message) => (
            <ContextForConversationMessageObj.Provider
              value={message}
              key={message.id}
            >
              <SpacesSpaceMessage key={message.id} />
            </ContextForConversationMessageObj.Provider>
          ))}
        </div>
      )}
    </div>
  );
}
