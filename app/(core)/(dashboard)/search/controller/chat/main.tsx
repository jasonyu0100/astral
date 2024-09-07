import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSceneConversationList } from '@/(server)/controller/space/chapter/scene/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { useControllerForSessionUpdateListFromChapter } from '@/(server)/controller/space/chapter/session/update/list-from-chapter';
import { ContextForSpaceList } from '@/(server)/controller/space/list';
import { SceneConversationObj } from '@/(server)/model/space/chapter/scene/conversation/main';
import { ConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { useControllerForOpenAi } from '@/api/controller/openai/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { createContext, useContext } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {}

interface ControllerActions {
  sendMessage: () => Promise<ConversationMessageObj>;
}

export const ContextForConversationalSearch = createContext({} as Controller);

export function useControllerForConversationalSearch() {
  const user = useGlobalUser((state) => state.user);
  const {
    actions: { getMessageResponse },
  } = useControllerForOpenAi();
  const spaceController = useContext(ContextForSpaceList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const messageListController = useContext(ContextForConversationMessageList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const conversationListController = useContext(
    ContextForSceneConversationList,
  );
  const updateListController = useControllerForSessionUpdateListFromChapter(
    chapterListController.state.objId,
  );

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
    const conversationDuration = 24 * 60 * 7; // a weekabsolute right-[0px] flex h-full w-[6rem] items-center justify-center
    const diffInMinutes = diff / (1000 * 60);
    return diffInMinutes < conversationDuration;
  }

  async function createNewConversation() {
    const conversation =
      await conversationListController.actions.createActions.createConversation(
        user.id,
        sceneListController.state.objId,
      );
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

  async function generateAgentResponse(message: ConversationMessageObj) {
    const messageHistory = [
      `You are an agent that helps the user achieve objectives.`,
      `This is the space title: ${spaceController.state.currentObj.title}`,
      `This is the space description: ${spaceController.state.currentObj.description}`,
      `This is the chapter objective: ${chapterListController.state.currentObj?.objective}`,
      `This is the scene objective: ${sceneListController.state.currentObj?.objective}`,
      `This is the message history:`,
      ...getMessageHistory(),
      `Reply to the user message and keep the objective in mind.`,
    ];
    messageHistory.push(formatMessage(message));
    const messagePrompt = messageHistory.join('\n');
    const agentResponse = (await getMessageResponse(messagePrompt)) || '';
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

  async function summariseConversation(
    messages: ConversationMessageObj[],
    conversationObj: SceneConversationObj,
  ) {
    const messageText = messages.map((message) => message.message).join(' ');

    const summary = await getMessageResponse(
      `Summarise within max 100 characters. ${messageText}`,
    );

    const newConversation =
      await conversationListController.actions.editActions.edit(
        conversationObj?.id || '',
        {
          summary: summary || '',
        },
      );

    return newConversation;
  }

  async function sendMessage() {
    const conversation = conversationListController.state.currentObj;
    if (conversation !== undefined) {
      const conversationStatus = checkConversationStatus(conversation);
      if (conversationStatus) {
        const newUserMessage = await sendUserMessage(conversation);
        const agentResponse = await generateAgentResponse(newUserMessage);
        const newAgentMessage = await sendAgentMessage(
          'openAi',
          agentResponse,
          conversation,
        );

        const messages = [
          ...messageListController.state.objs,
          newUserMessage,
          newAgentMessage,
        ];

        await summariseConversation(messages, conversation);
        return newAgentMessage;
      } else {
        alert('Your conversation is older then a week. Starting a new one');
      }
    }

    const newConversation = await createNewConversation();
    const newUserMessage = await sendUserMessage(newConversation);
    const agentResponse = await generateAgentResponse(newUserMessage);
    const newAgentMessage = await sendAgentMessage(
      'openAi',
      agentResponse,
      newConversation,
    );

    const messages = [
      ...messageListController.state.objs,
      newUserMessage,
      newAgentMessage,
    ];

    await summariseConversation(messages, newConversation);

    return newAgentMessage;
  }

  return {
    state: {},
    actions: {
      sendMessage,
    },
  };
}
