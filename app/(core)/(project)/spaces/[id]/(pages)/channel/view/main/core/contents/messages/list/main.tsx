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
      <div className='w-[1000px] flex-col space-y-[1rem]  pb-[2rem]'>
        <GlassWindowFrame
          className='cursor-pointer p-[1rem] py-[2rem]'
          borderFx={borderFx['border-b']}
        >
          <GlassWindowContents className='flex items-center justify-between space-x-[2rem]'>
            <div className='flex items-center justify-between'>
              <AstralChevronLeftIcon
                className={`h-[2rem] w-[2rem] ${conversationListController.state.index === 0 || conversationListController.state.objs.length === 0 ? 'fill-slate-500' : 'fill-slate-300'}`}
                onClick={() =>
                  conversationListController.actions.stateActions.goNext()
                }
              />
            </div>
            <div className='flex flex-col'>
              <p className='text-center text-2xl font-bold text-slate-300'>
                {getFormattedAMPM(
                  new Date(
                    conversationListController.state.currentObj?.created ||
                      Date.now(),
                  ),
                )}
                <span>, </span>
                {getFormattedDate(
                  new Date(
                    conversationListController.state.currentObj?.created ||
                      Date.now(),
                  ),
                )}
              </p>
              <p className='text-center text-lg font-light text-slate-300'>
                {conversationListController.state.currentObj?.title ||
                  'Untitled'}
              </p>
            </div>
            <div className='flex items-center justify-start'>
              <AstralChevronRightIcon
                className={`h-[2rem] w-[2rem] ${conversationListController.state.index === conversationListController.state.objs.length - 1 ? 'fill-slate-500' : 'fill-slate-300'}`}
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
