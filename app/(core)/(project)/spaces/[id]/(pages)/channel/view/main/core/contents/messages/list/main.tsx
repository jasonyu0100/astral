import { ContextForChapterConversationList } from '@/architecture/controller/conversation/list';
import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { AstralChevronLeftIcon } from '@/icons/chevron-left/main';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { useControllerForMessageScrollToBottom } from '@/logic/controller/scroll-to-message-bottom/main';
import { borderFx } from '@/style/data';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext, useEffect, useRef } from 'react';
import { SpacesChannelMessage } from './message/main';

export function SpacesChannelMessages() {
  const messageListController = useContext(ContextForConversationMessageList);
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );
  const ref = useRef<HTMLDivElement>(null);
  const { scrollToBottom } = useControllerForMessageScrollToBottom(ref);

  useEffect(() => {
    scrollToBottom();
  }, messageListController.state.objs);

  return (
    <div
      className='flex w-full flex-col items-center overflow-auto px-[2rem]'
      style={{ height: '100%' }}
      ref={ref}
    >
      <div className='w-full flex-col space-y-[1rem]'>
        <GlassWindowFrame
          className='cursor-pointer p-[1rem] py-[2rem]'
          borderFx={borderFx['border-b']}
        >
          <GlassWindowContents className='grid grid-cols-3 items-center'>
            <div className='flex items-center justify-end'>
              <AstralChevronLeftIcon
                onClick={() =>
                  conversationListController.actions.stateActions.goNext()
                }
              />
            </div>
            <div>
              <p className='text-center text-2xl font-bold text-slate-300'>
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
            </div>
            <div className='flex items-center justify-start'>
              <AstralChevronRightIcon
                onClick={() =>
                  conversationListController.actions.stateActions.goPrev()
                }
              />
            </div>
          </GlassWindowContents>
        </GlassWindowFrame>
        {messageListController.state.objs.map((message) => (
          <ContextForConversationMessageObj.Provider
            value={message}
            key={message.id}
          >
            <SpacesChannelMessage key={message.id} />
          </ContextForConversationMessageObj.Provider>
        ))}
      </div>
    </div>
  );
}
