import { ContextForChapterConversationList } from '@/(server)/controller/space/chapter/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/conversation/message/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForSessionUpdateListFromChapter } from '@/(server)/controller/space/chapter/session/update/list-from-chapter';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { ChapterConversationObj } from '@/(server)/model/space/chapter/conversation/main';
import { ConversationMessageObj } from '@/(server)/model/space/chapter/conversation/message/main';
import { useControllerForOpenAi } from '@/api/controller/openai/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { createContext, useContext, useState } from 'react';
import { ConversationRole, roleDescriptions } from '../roles';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesSpaceSidebarVisibility;
  role: string;
}

interface ControllerActions {
  sendMessage: () => Promise<ConversationMessageObj>;
  updateRole: (role: ConversationRole) => void;
  summariseConversationIntoNotes: () => Promise<GeneratedSticky[]>;
  updateSidebarVisibility: (visibility: SpacesSpaceSidebarVisibility) => void;
}

export enum SpacesSpaceSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export interface GeneratedSticky {
  text: string;
}

export const ContextForSpacesSpace = createContext({} as Controller);

export function useControllerForSpacesSpace() {
  const user = useGlobalUser((state) => state.user);
  const {
    actions: { getMessageResponse },
  } = useControllerForOpenAi();
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const messageListController = useContext(ContextForConversationMessageList);
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );
  const updateListController = useControllerForSessionUpdateListFromChapter(
    chapterListController.state.objId,
  );
  const [role, setRole] = useState<ConversationRole>(
    ConversationRole.Questioner,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesSpaceSidebarVisibility>(SpacesSpaceSidebarVisibility.OPEN);

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
        chapterListController.state.objId,
      );
    await updateListController.actions.createActions.createFromChapterChapterConversation(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      conversation.id,
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

  async function generateAgentResponse(
    message: ConversationMessageObj,
    role: ConversationRole,
  ) {
    const messageHistory = [
      `You are an agent that helps the user achieve objectives.`,
      `This is your role ${roleDescriptions[role]}`,
      `This is the space title: ${spaceController.state.obj.title}`,
      `This is the space description: ${spaceController.state.obj.description}`,
      `This is the chapter objective: ${chapterListController.state.currentObj?.objective}`,
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
    conversation: ChapterConversationObj,
  ) {
    return await messageListController.actions.createActions.sendAgentMessage(
      agentId,
      conversation.chapterId,
      conversation.id,
      message,
    );
  }

  async function summariseConversationIntoNotes() {
    const messageHistory = [
      `This is the space title: ${spaceController.state.obj.title}`,
      `This is the space description: ${spaceController.state.obj.description}`,
      `This is the chapter title: ${chapterListController.state.currentObj?.title}`,
      `This is the chapter objective: ${chapterListController.state.currentObj?.objective}`,
      `This is the message history:`,
      ...getMessageHistory(),
      `Convert the conversation history into a series of insights (max 50 chars). Use the conversation history primarily and titles and descriptions as reference."`,
      `Depending on the size of the conversaion, you may return up to a maximum of 8 insights.`,
      `Please return the response strictly in a well-formatted JSON format, without any trailing commas or errors. Example format:

{
  "insights": [
    {"text": "Insight 1"},
    {"text": "Insight 2"},
    {"text": "Insight 3"}
  ]
}

Ensure the response follows the exact structure and format shown above, with properly escaped characters, no trailing commas, and valid JSON syntax.`,
    ];

    const messagePrompt = messageHistory.join('\n');

    const agentResponse = (await getMessageResponse(messagePrompt)) || '';
    const replacedString = agentResponse
      .replace('```json\n', '')
      .replace('```', '');

    const json = JSON.parse(replacedString);

    return json.insights;
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
        const agentResponse = await generateAgentResponse(newUserMessage, role);
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
    const agentResponse = await generateAgentResponse(
      newUserMessage,
      role as ConversationRole,
    );
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
    state: {
      sidebarVisibility: sidebarVisibility,
      role: role,
    },
    actions: {
      summariseConversationIntoNotes,
      sendMessage,
      updateSidebarVisibility: (visibility: SpacesSpaceSidebarVisibility) => {
        setSidebarVisibility(visibility);
      },
      updateRole: (role: ConversationRole) => {
        setRole(role);
      },
    },
  };
}
