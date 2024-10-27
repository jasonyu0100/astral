import { ContextForConversationMessageObj } from '@/server/model/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { useContext } from 'react';
import { SpacesSceneAgentMessage } from './agent/main';
import { SpacesSceneMemberMessage } from './member/main';
import { SpacesSceneUserMessage } from './user/main';

export function SpacesSceneChatSceneMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const messageObj = useContext(ContextForConversationMessageObj);

  return (
    <>
      {messageObj.agentId !== null ? (
        <SpacesSceneAgentMessage />
      ) : (
        <>
          {loggedInUser?.id === messageObj.userId && <SpacesSceneUserMessage />}
          {loggedInUser?.id !== messageObj.userId && (
            <SpacesSceneMemberMessage />
          )}
        </>
      )}
    </>
  );
}
