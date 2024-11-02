import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import { SpacesChatAgentMessage } from './agent/main';
import { SpacesChatMemberMessage } from './member/main';
import { SpacesChatUserMessage } from './user/main';

export function SpacesChatMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const message = useContext(ContextForConversationMessageObj);

  return (
    <>
      {message.agentId !== null ? (
        <SpacesChatAgentMessage />
      ) : (
        <>
          {loggedInUser?.id === message.userId && <SpacesChatUserMessage />}
          {loggedInUser?.id !== message.userId && <SpacesChatMemberMessage />}
        </>
      )}
    </>
  );
}
