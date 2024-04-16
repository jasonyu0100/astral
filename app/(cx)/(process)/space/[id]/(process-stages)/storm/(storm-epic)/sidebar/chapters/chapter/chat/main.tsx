import { useContext } from 'react';
import { StormChatIcon } from './avatar/main';
import StormChapterIndicator from '../header/indicator/main';
import { ChatContext } from '@/(logic)/internal/model/storm/chat/main';
import { ChatsHandlerContext } from '@/(logic)/internal/handler/storm/chats/main';

export function StormChapterChat() {
  const chat = useContext(ChatContext);
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
