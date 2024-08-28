import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { useContext } from 'react';
import { SpaceSessionAgentChatMessage } from './agent/main';
import { SpaceSessionUserChatMessage } from './user/main';

export function SpaceSessionChatMessage() {
  const message = useContext(ContextForConversationMessageObj);

  return (
    <>
      {message.agentId !== null ? (
        <SpaceSessionAgentChatMessage>
          {message.message}
        </SpaceSessionAgentChatMessage>
      ) : (
        <SpaceSessionUserChatMessage>
          {message.message}
        </SpaceSessionUserChatMessage>
      )}
    </>
  );
}
