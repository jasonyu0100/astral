import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { StormAgentChatMessage } from './them/main';
import { StormYouChatMessage } from './you/main';
import { useContext } from 'react';
import { ContextForChatMemberList } from '@/(server)/(controller)/space/chapter/chat/member/list';

export function StormMessage() {
  const message = useContext(ContextForConversationMessageObj);

  return (
    <>
      {message.userId === undefined ? (
        <StormAgentChatMessage>{message.message}</StormAgentChatMessage>
      ) : (
        <StormYouChatMessage>{message.message}</StormYouChatMessage>
      )}
    </>
  );
}
