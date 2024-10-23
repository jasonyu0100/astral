import { ContextForConversationMessageObj } from '@/(server)/model/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useContext } from 'react';
import { SpacesConversationAgentMessage } from './agent/main';
import { SpacesConversationMemberMessage } from './member/main';
import { SpacesConversationUserMessage } from './user/main';

export function SpacesConversationMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const message = useContext(ContextForConversationMessageObj);

  return (
    <>
      {message.agentId !== null ? (
        <SpacesConversationAgentMessage />
      ) : (
        <>
          {loggedInUser?.id === message.userId && (
            <SpacesConversationUserMessage />
          )}
          {loggedInUser?.id !== message.userId && (
            <SpacesConversationMemberMessage />
          )}
        </>
      )}
    </>
  );
}
