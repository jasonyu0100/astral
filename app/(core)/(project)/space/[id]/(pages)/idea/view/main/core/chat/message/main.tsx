import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';
import { SpaceIdeaAgentMessage } from './agent/main';
import { SpaceIdeaMemberMessage } from './member/main';
import { SpaceIdeaUserMessage } from './user/main';

export function SpaceIdeaMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const message = useContext(ContextForConversationMessageObj);

  return (
    <>
      {message.agentId !== null ? (
        <SpaceIdeaAgentMessage />
      ) : (
        <>
          {loggedInUser.id === message.userId && <SpaceIdeaUserMessage />}
          {loggedInUser.id !== message.userId && <SpaceIdeaMemberMessage />}
        </>
      )}
    </>
  );
}
