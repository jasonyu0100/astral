import { useContext } from 'react';
import { StormMessageInputSend } from './send/main';
import { ContextForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { ContextForChatConversationList } from '@/(server)/(controller)/space/chapter/chat/conversation/list';
import { ChatConversationObj } from '@/(server)/(model)/space/chapter/chat/conversation/main';
import { useOpenAIController } from '@/(api)/(controller)/openai/main';
import { useControllerForChatMessageSend } from '../../../../(controller)/message/main';

export function StormChatInputRight() {
  const { sendMessage } = useControllerForChatMessageSend();

  return (
    <div className='flex h-[50px] w-[100px] flex-shrink-0 flex-row items-center justify-evenly'>
      {/* <StormMessageInputVoice /> */}
      <StormMessageInputSend onClick={sendMessage} />
    </div>
  );
}
