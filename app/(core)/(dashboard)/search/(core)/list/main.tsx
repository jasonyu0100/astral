import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { AstralSearchIcon } from '@/icons/search/main';
import { useContext, useEffect, useRef } from 'react';
import { SpaceMapChatExplorerMessage } from './message/main';

export function ConversationalSearchChatList() {
  const messageListController = useContext(ContextForConversationMessageList);
  const ref = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageListController.state?.objs]);

  return (
    <div
      className='flex w-full flex-col items-center justify-center'
      style={{ height: 'calc(100% - 7rem - 7rem)' }}
    >
      <div
        className='absolute right-[2rem] flex h-[4rem] cursor-pointer items-center space-x-[1rem] rounded-full bg-gradient-to-r from-purple-500 to-violet-500 px-[2rem]'
        onClick={() => {
          window.location.href = `/search/results`;
        }}
      >
        <p className='font-bold text-slate-300'>Create Map</p>
        <AstralSearchIcon />
      </div>
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
