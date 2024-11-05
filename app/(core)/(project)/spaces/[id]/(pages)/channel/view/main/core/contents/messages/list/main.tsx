import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useControllerForMessageScrollToBottom } from '@/logic/controller/scroll-to-message-bottom/main';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext, useEffect, useRef } from 'react';
import { SpacesChannelEmpty } from '../../empty/main';
import { SpacesChannelMessage } from './message/main';

export function SpacesChannelMessages() {
  const messageListController = useContext(ContextForConversationMessageList);
  const conversationListController = useContext(
    ContextForConversationMessageList,
  );
  const ref = useRef<HTMLDivElement>(null);
  const { scrollToBottom } = useControllerForMessageScrollToBottom(ref);

  useEffect(() => {
    scrollToBottom();
  }, messageListController.state.objs);

  return (
    <div
      className='flex w-full flex-col items-center overflow-auto p-[2rem]'
      style={{ height: '100%' }}
      ref={ref}
    >
      {messageListController.state.objs.length === 0 ? (
        <SpacesChannelEmpty />
      ) : (
        <div className='w-full flex-col space-y-[1rem]'>
          <p className='text-2xl font-bold text-slate-300'>
            {getFormattedAMPM(
              new Date(
                conversationListController.state.currentObj?.created || '',
              ),
            )}
            <span>, </span>
            {getFormattedDate(
              new Date(
                conversationListController.state.currentObj?.created || '',
              ),
            )}
          </p>
          <HorizontalDivider />
          {messageListController.state.objs.map((message) => (
            <ContextForConversationMessageObj.Provider
              value={message}
              key={message.id}
            >
              <SpacesChannelMessage key={message.id} />
            </ContextForConversationMessageObj.Provider>
          ))}
        </div>
      )}
    </div>
  );
}
