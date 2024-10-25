import { ContextForConversationMessageObj } from '@/server/model/conversation/message/main';
import { useContext } from 'react';
import { SpaceMapAgentMessage } from './agent/main';
import { SpaceMapUserMessage } from './user/main';

export function SpaceMapChatExplorerMessage() {
  const messageObj = useContext(ContextForConversationMessageObj);

  return (
    <>
      {messageObj.agentId !== null ? (
        <SpaceMapAgentMessage />
      ) : (
        <>
          <SpaceMapUserMessage />
        </>
      )}
    </>
  );
}
