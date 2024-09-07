import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useContext } from 'react';
import { SpaceMapAgentMessage } from './agent/main';
import { SpaceMapMemberMessage } from './member/main';
import { SpaceMapUserMessage } from './user/main';

export function SpaceMapChatExplorerMessage() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const messageObj = useContext(ContextForConversationMessageObj);

  return (
    <>
      {messageObj.agentId !== null ? (
        <SpaceMapAgentMessage />
      ) : (
        <>
          {loggedInUser.id === messageObj.userId && <SpaceMapUserMessage />}
          {loggedInUser.id !== messageObj.userId && <SpaceMapMemberMessage />}
        </>
      )}
    </>
  );
}
