import { useContext } from 'react';
import { StormChatIcon } from './avatar/main';
import StormChapterIndicator from '../header/indicator/main';
import { ChapterChatContext } from '@/(model)/space/chapter/chat/main';
import { ChatsHandlerContext } from '@/(model)/(controller)/(archive)/storm/chats/main';

export function StormChapterChat() {
  const chat = useContext(ChapterChatContext);
  const chatsHandler = useContext(ChatsHandlerContext);
  const active = chat.id === chatsHandler.chatId;

  return (
    <button onClick={() => chatsHandler.chatActions.selectChat(chat)}>
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
