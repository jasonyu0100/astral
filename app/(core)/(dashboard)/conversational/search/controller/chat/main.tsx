import { ContextForChapterConversationList } from '@/(server)/controller/space/chapter/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/conversation/message/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { useControllerForReviewUpdateListFromChapter } from '@/(server)/controller/space/chapter/session/update/list-from-chapter';
import { ContextForSpaceList } from '@/(server)/controller/space/list';
import { ChapterConversationObj } from '@/(server)/model/space/chapter/conversation/main';
import { ConversationMessageObj } from '@/(server)/model/space/chapter/conversation/message/main';
import { useControllerForOpenAi } from '@/api/controller/openai/main';
import {
  currentState,
  description,
  landingDescription,
  pitch,
  targetCustomer,
} from '@/information/information';
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
    ContextForChapterConversationList,
  );
  const reviewUpdateListController =
    useControllerForReviewUpdateListFromChapter(
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

  function checkConversationStatus(conversation: ChapterConversationObj) {
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
    await reviewUpdateListController.actions.createActions.createFromChapterChapterConversation(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      conversationListController.state.objId,
    );
    return conversation;
  }

  async function sendUserMessage(conversation: ChapterConversationObj) {
    return await messageListController.actions.createActions.sendUserMessage(
      user.id,
      conversation.chapterId,
      conversation.id,
    );
  }

  async function generateAgentResponse(message: ConversationMessageObj) {
    const messageHistory = [
      `You are a sales agent that is informing the user about Astral`,
      `${description}`,
      `${pitch}`,
      `${landingDescription}`,
      `${currentState}`,
      `${targetCustomer}`,
      `This is the message history:`,
      ...getMessageHistory(),
      `Reply to the user message try to get them to click the search button. Remind them that conversational insights are being generated from the conversation to create actionable change.`,
    ];
    messageHistory.push(formatMessage(message));
    const messagePrompt = messageHistory.join('\n');
    const agentResponse = (await getMessageResponse(messagePrompt)) || '';
    return agentResponse;
  }

  async function sendAgentMessage(
    agentId: string,
    message: string,
    conversation: ChapterConversationObj,
  ) {
    return await messageListController.actions.createActions.sendAgentMessage(
      agentId,
      conversation.chapterId,
      conversation.id,
      message,
    );
  }

  async function summariseConversation(
    messages: ConversationMessageObj[],
    conversationObj: ChapterConversationObj,
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
          'astral',
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
      'astral',
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
      sendAgentMessage,
    },
  };
}
