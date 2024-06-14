import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { useContext } from 'react';
import { SpaceStormAgentChatMessage } from './agent/main';
import { SpaceStormUserChatMessage } from './user/main';

export function SpaceStormChatMessage() {
  const message = useContext(ContextForConversationMessageObj);

  return (
    <>
      {message.agentId !== null ? (
        <SpaceStormAgentChatMessage>
          {message.message}
        </SpaceStormAgentChatMessage>
      ) : (
        <SpaceStormUserChatMessage>{message.message}</SpaceStormUserChatMessage>
      )}
    </>
  );
}
