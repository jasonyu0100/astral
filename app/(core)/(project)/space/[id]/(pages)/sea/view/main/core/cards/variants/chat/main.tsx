import { ContextForChapterChatObj } from '@/(server)/(model)/space/chapter/chat/main';
import { useContext } from 'react';
import { SpaceSeaUnaddedCard } from '../../card/main';

export function SpaceSeaCardChat() {
  const chat = useContext(ContextForChapterChatObj);

  return (
    <SpaceSeaUnaddedCard>
      <p className='text-sm font-bold text-slate-300'>{chat.title}</p>
      <p className='text-xs font-light text-slate-300'>New Chat</p>
    </SpaceSeaUnaddedCard>
  );
}
