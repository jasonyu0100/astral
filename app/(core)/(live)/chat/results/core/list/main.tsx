import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { useControllerForMessageScrollToBottom } from '@/logic/controller/scroll-to-message-bottom/main';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';
import { SpaceMapChatExplorerMessage } from './message/main';

export function ConversationalSearchChatList() {
  const messageListController = useContext(ContextForConversationMessageList);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollToBottom } = useControllerForMessageScrollToBottom(ref);

  useEffect(() => {
    scrollToBottom();
  }, [messageListController.state?.objs]);

  return (
    <div
      className='flex w-full flex-col items-center justify-center'
      style={{ height: 'calc(100% - 7rem - 7rem)' }}
      ref={ref}
    >
      <Link
        className='absolute right-[2rem] flex h-[4rem] cursor-pointer items-center space-x-[1rem] rounded-full bg-gradient-to-r from-purple-500 to-violet-500 px-[2rem]'
        href='/register'
      >
        <p className='font-bold text-slate-300'>Register</p>
        <AstralChevronUpIcon />
      </Link>
      <div
        ref={ref}
        className='h-full w-[1000px] overflow-auto border-l border-slate-300 border-opacity-30 p-[3rem]'
      >
        <div className='flex flex-col space-y-[2rem]'>
          {messageListController.state?.objs.map((message) => (
            <ContextForConversationMessageObj.Provider
              value={message}
              key={message.id}
            >
              <SpaceMapChatExplorerMessage />
            </ContextForConversationMessageObj.Provider>
          ))}
        </div>
      </div>
    </div>
  );
}
