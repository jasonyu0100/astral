import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useContext } from 'react';
import { SpacesSpaceAgentMessage } from './agent/main';
import { SpacesSpaceMemberMessage } from './member/main';
import { SpacesSpaceUserMessage } from './user/main';

export function SpacesSpaceMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const message = useContext(ContextForConversationMessageObj);

  return (
    <>
      {message.agentId !== null ? (
        <SpacesSpaceAgentMessage />
      ) : (
        <>
          {loggedInUser.id === message.userId && <SpacesSpaceUserMessage />}
          {loggedInUser.id !== message.userId && <SpacesSpaceMemberMessage />}
        </>
      )}
    </>
  );
}
