import { useContext } from 'react';
import { StormMessageInputSend } from './send/main';
import { ContextForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { ContextForChatConversationList } from '@/(server)/(controller)/space/chapter/chat/conversation/list';
import { ChatConversationObj } from '@/(server)/(model)/space/chapter/chat/conversation/main';
import { useOpenAIController } from '@/(api)/(controller)/openai/main';

export function StormChatInputRight() {
  const user = useGlobalUser((state) => state.user);
  const openAi = useOpenAIController();
  const messageListController = useContext(ContextForConversationMessageList);
  const chatListController = useContext(ContextForChapterChatList);
  const conversationListController = useContext(ContextForChatConversationList);

  async function sendMessage() {
    const conversation = conversationListController.state.currentObj;
    if (conversation !== undefined) {
      const current = new Date();
      const conversationCreated = new Date(conversation.created);
      const diff = current.getTime() - conversationCreated.getTime();
      const conversationDuration = 6 * 60; // 6 hours
      const diffInMinutes = diff / (1000 * 60);

      if (diffInMinutes < conversationDuration) {
        alert('ADDING TO EXISTING CONVERSATION');
        const message =
          await messageListController.actions.createActions.sendUserMessage(
            user.id,
            chatListController.state.objId,
            conversationListController.state.objId,
          );
        const messageText = message?.message;
        const agentResponse =
          (await openAi.getMessageResponse(messageText)) || '';
        await messageListController.actions.createActions.sendAgentMessage(
          'openAi',
          chatListController.state.objId,
          conversationListController.state.objId,
          agentResponse,
        );
        return;
      }
    }

    alert('NEW CONVERSATION');
    const newConversation =
      await conversationListController.actions.createActions.createConversation(
        user.id,
        chatListController.state.objId,
      );
    const message =
      await messageListController.actions.createActions.sendUserMessage(
        user.id,
        chatListController.state.objId,
        newConversation.id,
      );
    const messageText = message?.message;
    const agentResponse = (await openAi.getMessageResponse(messageText)) || '';
    await messageListController.actions.createActions.sendAgentMessage(
      'openAi',
      chatListController.state.objId,
      conversationListController.state.objId,
      agentResponse,
    );
  }

  return (
    <div className='flex h-[50px] w-[100px] flex-shrink-0 flex-row items-center justify-evenly'>
      {/* <StormMessageInputVoice /> */}
      <StormMessageInputSend onClick={sendMessage} />
    </div>
  );
}
