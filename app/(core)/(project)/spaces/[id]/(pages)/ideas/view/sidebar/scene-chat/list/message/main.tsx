import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import { SpacesIdeasAgentMessage } from './agent/main';
import { SpacesIdeasMemberMessage } from './member/main';
import { SpacesIdeasUserMessage } from './user/main';

export function SpacesIdeasChatSceneMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const messageObj = useContext(ContextForConversationMessageObj);

  return (
    <>
      {messageObj.agentId !== null ? (
        <SpacesIdeasAgentMessage />
      ) : (
        <>
          {loggedInUser?.id === messageObj.userId && <SpacesIdeasUserMessage />}
          {loggedInUser?.id !== messageObj.userId && (
            <SpacesIdeasMemberMessage />
          )}
        </>
      )}
    </>
  );
}
