import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSceneConversationList } from '@/(server)/controller/space/chapter/scene/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { useControllerForSessionUpdateOfChapterList } from '@/(server)/controller/space/chapter/session/update/chapter-list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { SceneConversationObj } from '@/(server)/model/space/chapter/scene/conversation/main';
import { ConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { useOpenAIController } from '@/api/controller/openai/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext } from 'react';
import { ConversationRole, roleDescriptions } from '../../data';
import { ContextForIdeaController } from '../../page';

export function useControllerForConversationMessageSend() {
  const user = useGlobalUser((state) => state.user);
  const openAi = useOpenAIController();
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const messageListController = useContext(ContextForConversationMessageList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const conversationListController = useContext(
    ContextForSceneConversationList,
  );
  const updateListController = useControllerForSessionUpdateOfChapterList('');
  const ideaController = useContext(ContextForIdeaController);

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

  function checkConversationStatus(conversation: SceneConversationObj) {
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
        sceneListController.state.objId,
      );
    console.log(conversation);
    await updateListController.actions.createActions.createFromChapterSceneConversation(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      sceneListController.state.objId,
      conversation.id,
    );
    return conversation;
  }

  async function sendUserMessage(conversation: SceneConversationObj) {
    return await messageListController.actions.createActions.sendUserMessage(
      user.id,
      conversation.sceneId,
      conversation.id,
    );
  }

  async function generateAgentResponse(
    message: ConversationMessageObj,
    role: ConversationRole,
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
    conversation: SceneConversationObj,
  ) {
    return await messageListController.actions.createActions.sendAgentMessage(
      agentId,
      conversation.sceneId,
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
          ideaController.role as ConversationRole,
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
    console.log(conversationListController);
    const newConversation = await createNewConversation();
    const newUserMessage = await sendUserMessage(newConversation);
    const agentResponse = await generateAgentResponse(
      newUserMessage,
      ideaController.role as ConversationRole,
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
