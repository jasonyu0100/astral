import { useOpenAIController } from '@/(api)/(controller)/openai/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForChatConversationList } from '@/(server)/(controller)/space/chapter/chat/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import { ContextForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { ChatConversationObj } from '@/(server)/(model)/space/chapter/chat/conversation/main';
import { ConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { useContext } from 'react';

export function useControllerForChatMessageSend() {
  const user = useGlobalUser((state) => state.user);
  const openAi = useOpenAIController();
  const messageListController = useContext(ContextForConversationMessageList);
  const chatListController = useContext(ContextForChapterChatList);
  const conversationListController = useContext(ContextForChatConversationList);

  function formatMessage(message: ConversationMessageObj) {
    if (message.agentId === null) {
      return `User: ${message.message}`;
    } else {
      return `Agent: ${message.message}`;
    }
  }

  function getMessageHistory() {
    const messageHistory = messageListController.state.objs.map((message) => {
      return formatMessage(message);
    });
    return messageHistory;
  }

  function checkConversationStatus(conversation: ChatConversationObj) {
    const current = new Date();
    const conversationCreated = new Date(conversation.created);
    const diff = current.getTime() - conversationCreated.getTime();
    const conversationDuration = 6; // 6 hours
    const diffInMinutes = diff / (1000 * 60);
    return diffInMinutes < conversationDuration;
  }

  async function createNewConversation() {
    return await conversationListController.actions.createActions.createConversation(
      user.id,
      chatListController.state.objId,
    );
  }

  async function sendUserMessage(conversation: ChatConversationObj) {
    return await messageListController.actions.createActions.sendUserMessage(
      user.id,
      conversation.chatId,
      conversation.id,
    );
  }

  async function generateAgentResponse(message: ConversationMessageObj) {
    const messageHistory = getMessageHistory();
    messageHistory.push(formatMessage(message));
    const messagePrompt = messageHistory.join('\n');
    const agentResponse =
      (await openAi.getMessageResponse(messagePrompt)) || '';
    return agentResponse;
  }

  async function sendAgentMessage(
    agentId: string,
    message: string,
    conversation: ChatConversationObj,
  ) {
    return await messageListController.actions.createActions.sendAgentMessage(
      agentId,
      conversation.chatId,
      conversation.id,
      message,
    );
  }

  async function sendMessage() {
    const conversation = conversationListController.state.currentObj;
    if (conversation !== undefined) {
      const conversationStatus = checkConversationStatus(conversation);
      if (conversationStatus) {
        alert('ADDING TO EXISTING CONVERSATION');
        const newUserMessage = await sendUserMessage(conversation);
        const agentResponse = await generateAgentResponse(newUserMessage);
        const newAgentMessage = await sendAgentMessage(
          'openAi',
          agentResponse,
          conversation,
        );
        return newAgentMessage;
      }
    }

    alert('NEW CONVERSATION');
    const newConversation = await createNewConversation();
    const newUserMessage = await sendUserMessage(newConversation);
    const agentResponse = await generateAgentResponse(newUserMessage);
    const newAgentMessage = await sendAgentMessage(
      'openAi',
      agentResponse,
      newConversation,
    );

    return newAgentMessage;
  }

  return {
    sendMessage,
  };
}
