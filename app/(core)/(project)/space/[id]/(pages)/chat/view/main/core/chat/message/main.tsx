import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';
import { SpaceChatAgentMessage } from './agent/main';
import { SpaceChatMemberMessage } from './member/main';
import { SpaceChatUserMessage } from './user/main';

export function SpaceChatChatMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const message = useContext(ContextForConversationMessageObj);

  return (
    <>
      {message.agentId !== null ? (
        <SpaceChatAgentMessage />
      ) : (
        <>
          {loggedInUser.id === message.userId && <SpaceChatUserMessage />}
          {loggedInUser.id !== message.userId && <SpaceChatMemberMessage />}
        </>
      )}
    </>
  );
}
