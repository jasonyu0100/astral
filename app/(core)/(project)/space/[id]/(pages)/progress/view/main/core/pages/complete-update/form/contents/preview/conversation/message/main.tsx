import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { useContext } from 'react';
import { SpaceProgressAgentChatMessage } from './agent/main';
import { SpaceProgressUserChatMessage } from './user/main';

export function SpaceProgressChatMessage() {
  const message = useContext(ContextForConversationMessageObj);

  return (
    <>
      {message.agentId !== null ? (
        <SpaceProgressAgentChatMessage>
          {message.message}
        </SpaceProgressAgentChatMessage>
      ) : (
        <SpaceProgressUserChatMessage>
          {message.message}
        </SpaceProgressUserChatMessage>
      )}
    </>
  );
}
