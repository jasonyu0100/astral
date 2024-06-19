import { ContextForChapterChatObj } from '@/(server)/(model)/space/chapter/chat/main';
import { useContext } from 'react';
import { SpaceSeaUnaddedCard } from '../../card/main';

export function SpaceSeaCardChat() {
  const chat = useContext(ContextForChapterChatObj);

  return (
    <SpaceSeaUnaddedCard>
      <p>Chat - {chat.title}</p>
      <br />
      <ul className='list-disc text-sm font-medium'>
        <li>Conversation A</li>
        <li>Conversation A</li>
        <li>Conversation A</li>
      </ul>
    </SpaceSeaUnaddedCard>
  );
}
