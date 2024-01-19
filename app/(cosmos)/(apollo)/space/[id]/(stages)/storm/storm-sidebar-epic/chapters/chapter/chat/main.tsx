import { useContext } from 'react';
import { StormContext } from '../../../../page';
import { StormChapterAvatar } from './avatar/main';
import { ChatObj } from '@/tables/storm/chat/main';

export function StormChapterChat({ chat }: { chat: ChatObj }) {
  const { chatId, chatHandler } = useContext(StormContext);
  const active = chat.id === chatId;
  return (
    <button onClick={() => chatHandler.selectChat(chat)}>
      <div className='flex flex-row items-center space-x-[1rem]'>
        <StormChapterAvatar />
        {active ? (
          <p className='text-slate-300 font-bold text-lg'>{chat.title}</p>
        ) : (
          <p className='text-slate-500 font-bold text-lg'>{chat.title}</p>
        )}
      </div>
    </button>
  );
}
