import { useControllerForOpenAi } from '@/api/controller/openai/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useControllerForUserActivityListFromChapter } from '@/server/controller/activity/list-from-chapter';
import { ContextForChapterConversationList } from '@/server/controller/conversation/list';
import { ContextForConversationMessageList } from '@/server/controller/conversation/message/list';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { ConversationObj } from '@/server/model/conversation/main';
import { ConversationMessageObj } from '@/server/model/conversation/message/main';
import { FileElementVariant } from '@/server/model/elements/file/main';
import { ElementVariant } from '@/server/model/elements/main';
import { createContext, useContext } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {}

interface ControllerActions {
  sendMessage: () => Promise<ConversationMessageObj>;
}

export interface GeneratedSticky {
  text: string;
}

export const ContextForSpacesSceneChat = createContext({} as Controller);

export function useControllerForSpacesSceneChat() {
  const user = useGlobalUser((state) => state.user);
  const {
    actions: { getMessageResponse },
  } = useControllerForOpenAi();
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const messageListController = useContext(ContextForConversationMessageList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );
  const activityListController = useControllerForUserActivityListFromChapter(
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

  function getIdeaHistory() {
    const ideaHistory = ideaListController.state.objs.map((idea) => {
      if (idea.variant === ElementVariant.TEXT) {
        return `Idea - ${idea.textElem?.text}`;
      } else if (idea.variant === ElementVariant.FILE) {
        if (idea.fileElem?.fileType === FileElementVariant.IMAGE) {
          return `Idea - Image`;
        }
      }
    });
    return ideaHistory;
  }

  function checkConversationStatus(conversation: ConversationObj) {
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
    await activityListController.actions.createActions.createFromChapterChapterConversation(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      conversation.id,
    );
    return conversation;
  }

  async function triggerSendUserMessage(conversation: ConversationObj) {
    return await messageListController.actions.createActions.sendUserMessage(
      user.id,
      conversation.id,
    );
  }

  async function generateAgentResponse(message: ConversationMessageObj) {
    const messageHistory = [
      `You are an agent that helps the user achieve objectives.`,
      `This is the space title: ${spaceController.state.obj.title}`,
      `This is the space description: ${spaceController.state.obj.description}`,
      `This is the chapter objective: ${chapterListController.state.currentObj?.objective}`,
      `This is the scene objective: ${sceneListController.state.currentObj?.objective}`,
      `This is the message history:`,
      ...getMessageHistory(),
      `These are the current ideas:`,
      ...getIdeaHistory(),
      `Reply to the user message and keep the objective in mind.`,
    ];
    messageHistory.push(formatMessage(message));
    const messagePrompt = messageHistory.join('\n');
    const agentResponse = (await getMessageResponse(messagePrompt)) || '';
    return agentResponse;
  }

  async function triggerSendAgentMessage(
    agentId: string,
    message: string,
    conversation: ConversationObj,
  ) {
    return await messageListController.actions.createActions.sendAgentMessage(
      agentId,
      conversation.id,
      message,
    );
  }

  async function summariseConversation(
    messages: ConversationMessageObj[],
    conversationObj: ConversationObj,
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
        const newUserMessage = await triggerSendUserMessage(conversation);
        const agentResponse = await generateAgentResponse(newUserMessage);
        const newAgentMessage = await triggerSendAgentMessage(
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
    const newUserMessage = await triggerSendUserMessage(newConversation);
    const agentResponse = await generateAgentResponse(newUserMessage);
    const newAgentMessage = await triggerSendAgentMessage(
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
    },
  };
}
