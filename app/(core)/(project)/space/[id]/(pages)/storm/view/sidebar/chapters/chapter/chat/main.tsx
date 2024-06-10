import { useContext } from 'react';
import { StormChatIcon } from './avatar/main';
import StormChapterIndicator from '../header/indicator/main';
import { ContextForChatObj } from '@/(server)/(model)/space/chapter/chat/main';
import { ContextForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';

export function StormChapterChat() {
  const chat = useContext(ContextForChatObj);
  const chatListController = useContext(ContextForChapterChatList);
  const active = chatListController.actions.stateActions.checkActive(chat);

  return (
    <button onClick={() => chatListController.actions.stateActions.select(chat)}>
      <div className='flex w-full flex-row items-center pr-[1rem]'>
        <StormChatIcon />
        {active ? (
          <div className='flex w-full animate-pulse-slow flex-row items-center justify-between'>
            <p className='ml-[1rem] text-lg font-bold text-slate-500'>
              {chat.title}
            </p>
            <StormChapterIndicator />
          </div>
        ) : (
          <p className='ml-[1rem] text-lg font-bold text-slate-500'>
            {chat.title}
          </p>
        )}
      </div>
    </button>
  );
}
