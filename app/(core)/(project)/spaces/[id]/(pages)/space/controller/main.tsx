import { useControllerForUserActivityListFromChapter } from '@/(server)/controller/activity/list-from-chapter';
import { ContextForChapterConversationList } from '@/(server)/controller/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/controller/conversation/message/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { ConversationObj } from '@/(server)/model/conversation/main';
import { ConversationMessageObj } from '@/(server)/model/conversation/message/main';
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
  updateRole: (role: ConversationRole) => void;
  updateSidebarVisibility: (visibility: SpacesSpaceSidebarVisibility) => void;
  sendMessageToConversation: () => Promise<ConversationMessageObj>;
  summariseConversationIntoQuery: () => Promise<string>;
  summariseConversationIntoNotes: () => Promise<GeneratedSticky[]>;
  summariseConversationIntoKeywords: () => Promise<string>;
  summariseConversationIntoSearchTerm: () => Promise<string>;
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
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );

  const [role, setRole] = useState<ConversationRole>(ConversationRole.Channel);
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

  function checkConversationStatus(conversation?: ConversationObj) {
    if (conversation === undefined) {
      return false;
    } else {
      const current = new Date();
      const conversationCreated = new Date(conversation.created);
      const diff = current.getTime() - conversationCreated.getTime();
      const conversationDuration = 24 * 60 * 7; // a weekabsolute right-[0px] flex h-full w-[6rem] items-center justify-center
      const diffInMinutes = diff / (1000 * 60);
      return diffInMinutes < conversationDuration;
    }
  }

  async function createNewConversation() {
    const conversation =
      await conversationListController.actions.createActions.createConversation(
        user.id,
        chapterListController.state.objId,
      );
    await activityListController.actions.createActions.createFromChapterChapterConversation(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      conversation.id,
    );
    return conversation;
  }

  async function sendUserMessage(conversation: ConversationObj) {
    return await messageListController.actions.createActions.sendUserMessage(
      user.id,
      conversation.chapterId || '',
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
      `Start of Message History`,
      ...getMessageHistory(),
      `End of Message History`,
      `Reply to the user keeping role, objective and context in mind. Format the response for conciseness and keep it readable.`,
    ];
    messageHistory.push(formatMessage(message));
    const messagePrompt = messageHistory.join('\n');
    const agentResponse = (await getMessageResponse(messagePrompt)) || '';
    return agentResponse;
  }

  async function sendAgentMessage(
    agentId: string,
    message: string,
    conversation: ConversationObj,
  ) {
    return await messageListController.actions.createActions.sendAgentMessage(
      agentId,
      conversation.chapterId || '',
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
      `Start of Message History`,
      ...getMessageHistory(),
      `End of Message History`,
      `Convert the conversation history into a series of insights (max 50 chars). Use the conversation history primarily and titles and descriptions as reference. 
      Depending on the size of the conversaion, you may return up to a maximum of 8 insights. 
      Please return the response strictly in a well-formatted JSON format, without any trailing commas or errors.
      
      Example format:
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

  async function summariseConversationIntoQuery() {
    const messageHistory = [
      ...getMessageHistory(),
      `Summarise conversation into a single search query as per the conversation history. E.G "How to improve my productivity?"`,
    ];

    const messagePrompt = messageHistory.join('\n');

    const agentResponse = (await getMessageResponse(messagePrompt)) || '';
    return agentResponse;
  }

  async function summariseConversationIntoKeywords() {
    const messageHistory = [
      ...getMessageHistory(),
      `Summarise conversation into a series of key words as per the conversation history. E.G "Productivity, Color, Design"`,
    ];

    const messagePrompt = messageHistory.join('\n');

    const agentResponse = (await getMessageResponse(messagePrompt)) || '';
    return agentResponse;
  }

  async function summariseConversationIntoSearchTerm() {
    const messageHistory = [
      ...getMessageHistory(),
      `Summarise conversation into a youtube search term as per the conversation history.`,
    ];

    const messagePrompt = messageHistory.join('\n');

    const agentResponse = (await getMessageResponse(messagePrompt)) || '';
    return agentResponse;
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

  async function sendAndReceiveMessage(conversation: ConversationObj) {
    const newUserMessage = await sendUserMessage(conversation);
    let messages = [];
    if (role !== ConversationRole.Channel) {
      const agentResponse = await generateAgentResponse(newUserMessage, role);
      const newAgentMessage = await sendAgentMessage(
        'astral',
        agentResponse,
        conversation,
      );
      messages = [
        ...messageListController.state.objs,
        newUserMessage,
        newAgentMessage,
      ];
    } else {
      messages = [...messageListController.state.objs, newUserMessage];
    }
    return messages;
  }

  async function sendMessageToConversation() {
    const conversation = conversationListController.state.currentObj;
    const conversationStatus = checkConversationStatus(conversation);
    let messages = [];
    if (conversation !== undefined && conversationStatus) {
      messages = await sendAndReceiveMessage(conversation);
    } else {
      alert('Your conversation is older then a week. Starting a new one');
      const newConversation = await createNewConversation();
      messages = await sendAndReceiveMessage(newConversation);
      await summariseConversation(messages, newConversation);
    }

    return messages;
  }

  return {
    state: {
      sidebarVisibility,
      role: role,
    },
    actions: {
      sendMessageToConversation: sendMessageToConversation,
      summariseConversationIntoSearchTerm: summariseConversationIntoSearchTerm,
      summariseConversationIntoNotes,
      summariseConversationIntoQuery: summariseConversationIntoQuery,
      summariseConversationIntoKeywords: summariseConversationIntoKeywords,
      updateSidebarVisibility: (visibility: SpacesSpaceSidebarVisibility) => {
        setSidebarVisibility(visibility);
      },
      updateRole: (role: ConversationRole) => {
        setRole(role);
      },
    },
  };
}
