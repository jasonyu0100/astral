import { ContextForConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import { SpacesChannelAgentMessage } from './agent/main';
import { SpacesChannelMemberMessage } from './member/main';
import { SpacesChannelUserMessage } from './user/main';

export function SpacesChannelMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const message = useContext(ContextForConversationMessageObj);

  return (
    <>
      {message.agentId !== null ? (
        <SpacesChannelAgentMessage />
      ) : (
        <>
          {loggedInUser?.id === message.userId && <SpacesChannelUserMessage />}
          {loggedInUser?.id !== message.userId && (
            <SpacesChannelMemberMessage />
          )}
        </>
      )}
    </>
  );
}
