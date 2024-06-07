import { ContextForConversationMessageObj } from '@/(model)/space/chapter/chat/conversation/message/main';
import { StormScenenerChatMessage } from './them/main';
import { StormYouChatMessage } from './you/main';
import { useContext } from 'react';

export function StormMessage() {
  const message = useContext(ContextForConversationMessageObj);

  return (
    <>
      {message.source === 'You' ? (
        <StormYouChatMessage>{message.message}</StormYouChatMessage>
      ) : (
        <StormScenenerChatMessage>{message.message}</StormScenenerChatMessage>
      )}
    </>
  );
}
