import { ContextForConversationMessageObj } from '@/(server)/model/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useContext } from 'react';
import { SpacesViewAgentMessage } from './agent/main';
import { SpacesViewMemberMessage } from './member/main';
import { SpacesViewUserMessage } from './user/main';

export function SpacesViewChatSceneMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const messageObj = useContext(ContextForConversationMessageObj);

  return (
    <>
      {messageObj.agentId !== null ? (
        <SpacesViewAgentMessage />
      ) : (
        <>
          {loggedInUser?.id === messageObj.userId && <SpacesViewUserMessage />}
          {loggedInUser?.id !== messageObj.userId && (
            <SpacesViewMemberMessage />
          )}
        </>
      )}
    </>
  );
}
