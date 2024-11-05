import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import { SpacesSpaceAgentMessage } from './agent/main';
import { SpacesSpaceMemberMessage } from './member/main';
import { SpacesSpaceUserMessage } from './user/main';

export function SpacesSpaceChatSceneMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const messageObj = useContext(ContextForConversationMessageObj);

  return (
    <>
      {messageObj.agentId !== null ? (
        <SpacesSpaceAgentMessage />
      ) : (
        <>
          {loggedInUser?.id === messageObj.userId && <SpacesSpaceUserMessage />}
          {loggedInUser?.id !== messageObj.userId && (
            <SpacesSpaceMemberMessage />
          )}
        </>
      )}
    </>
  );
}
