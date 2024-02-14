import { useContext } from 'react';
import { StormContext } from '../../../../../page';
import { StormChatIcon } from './avatar/main';
import { ChatObj } from '@/(ouros)/(model)/storm/chat/main';
import { StormChatContext } from '../main';

export function StormChapterChat() {
  const chat = useContext(StormChatContext);
  const { chatId, chatHandler } = useContext(StormContext);
  const active = chat.id === chatId;

  return (
    <button onClick={() => chatHandler.selectChat(chat)}>
      <div className='flex flex-row items-center space-x-[1rem]'>
        <StormChatIcon />
        {active ? (
          <p className='text-lg font-bold text-slate-300'>{chat.title}</p>
        ) : (
          <p className='text-lg font-bold text-slate-500'>{chat.title}</p>
        )}
      </div>
    </button>
  );
}
