import { useOpenAIController } from '@/(api)/(controller)/openai/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForChatConversationList } from '@/(server)/(controller)/space/chapter/chat/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import { ContextForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { useControllerForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { ContextForSpaceMain } from '@/(server)/(controller)/space/main';
import { ChatConversationObj } from '@/(server)/(model)/space/chapter/chat/conversation/main';
import { ConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { useContext } from 'react';
import { ChatRole, roleDescriptions } from '../../data';
import { ContextForChat } from '../../page';

export function useControllerForChatMessageSend() {
  const user = useGlobalUser((state) => state.user);
  const openAi = useOpenAIController();
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const messageListController = useContext(ContextForConversationMessageList);
  const chatListController = useContext(ContextForChapterChatList);
  const conversationListController = useContext(ContextForChatConversationList);
  const updateListController = useControllerForChapterSessionUpdateList('');
  const chatContext = useContext(ContextForChat);

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
    const conversation =
      await conversationListController.actions.createActions.createConversation(
        user.id,
        chatListController.state.objId,
      );
    await updateListController.actions.createActions.createFromChapterChatConversation(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      chatListController.state.objId,
      conversation.id,
    );
    return conversation;
  }

  async function sendUserMessage(conversation: ChatConversationObj) {
    return await messageListController.actions.createActions.sendUserMessage(
      user.id,
      conversation.chatId,
      conversation.id,
    );
  }

  async function generateAgentResponse(
    message: ConversationMessageObj,
    role: ChatRole,
  ) {
    const messageHistory = [
      `You are an agent that sends messages in 3 sentences or less. This is your role ${roleDescriptions[role]}`,
      ...getMessageHistory(),
    ];
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
        const newUserMessage = await sendUserMessage(conversation);
        const agentResponse = await generateAgentResponse(
          newUserMessage,
          chatContext.role as ChatRole,
        );
        const newAgentMessage = await sendAgentMessage(
          'openAi',
          agentResponse,
          conversation,
        );
        return newAgentMessage;
      }
    }

    alert('New Conversation');
    const newConversation = await createNewConversation();
    const newUserMessage = await sendUserMessage(newConversation);
    const agentResponse = await generateAgentResponse(
      newUserMessage,
      chatContext.role as ChatRole,
    );
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
