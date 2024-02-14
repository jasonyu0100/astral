import { MessageContext } from '@/(ouros)/(model)/storm/chat/message/main';
import { StormPartnerChatMessage } from './them/main';
import { StormYouChatMessage } from './you/main';
import { useContext } from 'react';

export function StormMessage() {
  const message = useContext(MessageContext);

  return (
    <>
      {message.source === 'You' ? (
        <StormYouChatMessage>{message.message}</StormYouChatMessage>
      ) : (
        <StormPartnerChatMessage>{message.message}</StormPartnerChatMessage>
      )}
    </>
  );
}
