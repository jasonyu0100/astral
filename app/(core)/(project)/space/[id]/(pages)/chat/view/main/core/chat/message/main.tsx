import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { useContext } from 'react';
import { SpaceChatAgentChatMessage } from './agent/main';
import { SpaceChatUserChatMessage } from './user/main';

export function SpaceChatChatMessage() {
  const message = useContext(ContextForConversationMessageObj);

  return (
    <>
      {message.agentId !== null ? (
        <SpaceChatAgentChatMessage>{message.message}</SpaceChatAgentChatMessage>
      ) : (
        <SpaceChatUserChatMessage>{message.message}</SpaceChatUserChatMessage>
      )}
    </>
  );
}
