import { useContext } from 'react';
import { StormContext } from '../../../../../page';
import { StormChatIcon } from './avatar/main';
import { StormChatContext } from '../main';
import StormChapterIndicator from '../header/indicator/main';

export function StormChapterChat() {
  const chat = useContext(StormChatContext);
  const { chatId, chatHandler } = useContext(StormContext);
  const active = chat.id === chatId;

  return (
    <button onClick={() => chatHandler.selectChat(chat)}>
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
