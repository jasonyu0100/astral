import { ContextForConversationMessageObj } from '@/(server)/model/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useContext } from 'react';
import { SpacesMapAgentMessage } from './agent/main';
import { SpacesMapMemberMessage } from './member/main';
import { SpacesMapUserMessage } from './user/main';

export function SpacesMapChatSceneMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const messageObj = useContext(ContextForConversationMessageObj);

  return (
    <>
      {messageObj.agentId !== null ? (
        <SpacesMapAgentMessage />
      ) : (
        <>
          {loggedInUser?.id === messageObj.userId && <SpacesMapUserMessage />}
          {loggedInUser?.id !== messageObj.userId && <SpacesMapMemberMessage />}
        </>
      )}
    </>
  );
}
