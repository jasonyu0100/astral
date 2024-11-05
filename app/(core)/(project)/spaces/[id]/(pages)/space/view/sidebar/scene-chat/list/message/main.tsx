import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import { SpaceSpaceAgentMessage } from './agent/main';
import { SpaceSpaceMemberMessage } from './member/main';
import { SpaceSpaceUserMessage } from './user/main';

export function SpaceSpaceChatSceneMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const messageObj = useContext(ContextForConversationMessageObj);

  return (
    <>
      {messageObj.agentId !== null ? (
        <SpaceSpaceAgentMessage />
      ) : (
        <>
          {loggedInUser?.id === messageObj.userId && <SpaceSpaceUserMessage />}
          {loggedInUser?.id !== messageObj.userId && (
            <SpaceSpaceMemberMessage />
          )}
        </>
      )}
    </>
  );
}
