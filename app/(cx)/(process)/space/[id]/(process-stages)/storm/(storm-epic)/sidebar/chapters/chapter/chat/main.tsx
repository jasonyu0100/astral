import { useContext } from 'react';
import { StormChatIcon } from './avatar/main';
import StormChapterIndicator from '../header/indicator/main';
import { ChatContext } from '@/(logic)/internal/data/infra/model/storm/chat/main';
import { ChatsHandlerContext } from '@/(logic)/internal/handler/storm/chats/main';

export function StormChapterChat() {
  const chat = useContext(ChatContext);
  const chatsHandler = useContext(ChatsHandlerContext);
  const active = chat.id === chatsHandler.chatId;

  return (
    <button onClick={() => chatsHandler.chatActions.selectChat(chat)}>
      <div className='flex flex-row items-center w-full pr-[1rem]'>
        <StormChatIcon />
        {active ? (
          <>
            <p className='text-lg font-bold text-slate-300 ml-[1rem]'>{chat.title}</p>
            <StormChapterIndicator />
          </>
        ) : (
          <p className='text-lg font-bold text-slate-500 ml-[1rem]'>{chat.title}</p>
        )}
      </div>
    </button>
  );
}
