import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { useContext } from 'react';
import { SpaceSessionsAgentChatMessage } from './agent/main';
import { SpaceSessionsUserChatMessage } from './user/main';

export function SpaceSessionsChatMessage() {
  const message = useContext(ContextForConversationMessageObj);

  return (
    <>
      {message.agentId !== null ? (
        <SpaceSessionsAgentChatMessage>
          {message.message}
        </SpaceSessionsAgentChatMessage>
      ) : (
        <SpaceSessionsUserChatMessage>
          {message.message}
        </SpaceSessionsUserChatMessage>
      )}
    </>
  );
}
