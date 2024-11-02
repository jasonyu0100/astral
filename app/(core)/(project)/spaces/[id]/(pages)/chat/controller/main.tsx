import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForChapterConversationList } from '@/architecture/controller/conversation/list';
import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ConversationObj } from '@/architecture/model/conversation/main';
import { ConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { ElementVariant } from '@/architecture/model/elements/main';
import { exampleTextElement } from '@/architecture/model/elements/text/main';
import { exampleIdea, IdeaObj } from '@/architecture/model/idea/main';
import {
  ContextForLoggedInUserObj,
  exampleUser,
  UserObj,
} from '@/architecture/model/user/main';
import { useControllerForOpenAi } from '@/external/controller/openai/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { createContext, useContext, useEffect, useState } from 'react';
import { ConversationRole, roleDescriptions } from '../roles';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarVisibility: SpacesChatSidebarVisibility;
  sidebarContentMode: SpacesChatSidebarContentMode;
  selectedUser: UserObj;
  aiChatRole: string;
}

interface ControllerActions {
  updateSelectedUser: (user: UserObj) => void;
  updateAiChatRole: (role: ConversationRole) => void;
  updateSidebarVisibility: (visibility: SpacesChatSidebarVisibility) => void;
  updateSidebarContentMode: (mode: SpacesChatSidebarContentMode) => void;
  sendMessageToConversation: () => Promise<ConversationMessageObj[]>;
  summariseConversationIntoQuery: () => Promise<string>;
  summariseConversationIntoNotes: () => Promise<IdeaObj[]>;
  summariseConversationIntoKeywords: () => Promise<string>;
  summariseConversationIntoSearchTerm: () => Promise<string>;
  summariseConversationIntoTitle: () => Promise<string>;
  summariseConversationIntoObjective: () => Promise<string>;
}

export enum SpacesChatSidebarVisibility {
  OPEN = 'Open',
  CLOSED = 'Closed',
}

export enum SpacesChatSidebarContentMode {
  CHAPTERS = 'Chapters',
  MEMBERS = 'Members',
}
export interface GeneratedSticky {
  text: string;
}

export const ContextForSpacesChat = createContext({} as Controller);

export function useControllerForSpacesChat() {
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
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );
  const loggedInUser = useContext(ContextForLoggedInUserObj);

  const [sidebarContentMode, setSidebarContentMode] =
    useState<SpacesChatSidebarContentMode>(
      SpacesChatSidebarContentMode.CHAPTERS,
    );
  const [aiChatRole, setAiChatRole] = useState<ConversationRole>(
    ConversationRole.Answerer,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesChatSidebarVisibility>(SpacesChatSidebarVisibility.OPEN);
  const [selectedUser, setSelectedUser] = useState<UserObj>(exampleUser);

  useEffect(() => {
    if (loggedInUser) {
      setSelectedUser(loggedInUser);
    }
  }, []);

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

  function checkConversationExpiryStatus(conversation?: ConversationObj) {
    if (conversation === undefined) {
      return false;
    } else {
      const current = new Date();
      const conversationCreated = new Date(conversation.created);
      const diff = current.getTime() - conversationCreated.getTime();
      const conversationDuration = 24 * 60 * 1; // a day
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
      selectedUser.id,
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

    return json.insights.map((insight: { text: string }) => {
      return {
        ...exampleIdea,
        textElem: {
          ...exampleTextElement,
          text: insight.text,
        },
        variant: ElementVariant.TEXT,
      };
    });
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

  async function summariseConversationIntoTitle() {
    const messageHistory = [
      ...getMessageHistory(),
      `
      Summarise conversation into a single title as per the conversation history. E.G "Productivity Tips"
      `,
    ];

    const messagePrompt = messageHistory.join('\n');

    const agentResponse = (await getMessageResponse(messagePrompt)) || '';
    return agentResponse;
  }

  async function summariseConversationIntoObjective() {
    const messageHistory = [
      ...getMessageHistory(),
      `
      Summarise conversation into a single objective as per the conversation history. E.G "Improve productivity by 10%"
      `,
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

  async function summariseConversationForChapter(
    messages: ConversationMessageObj[],
  ) {
    const messageText = messages.map((message) => message.message).join(' ');

    const summary = await getMessageResponse(
      `Summarise within max 100 characters. ${messageText}`,
    );

    console.log(summary);

    await chapterListController.actions.editActions.edit(
      chapterListController.state.objId,
      {
        description: summary || '',
      },
    );
  }

  async function sendAndReceiveMessage(conversation: ConversationObj) {
    const newUserMessage = await sendUserMessage(conversation);
    let messages = [];
    if (aiChatRole !== ConversationRole.NoteTaker) {
      const agentResponse = await generateAgentResponse(
        newUserMessage,
        aiChatRole,
      );
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
    let conversation = conversationListController.state.currentObj;
    const conversationStatus = checkConversationExpiryStatus(conversation);
    const maxConversationLength = 30;
    let messages = [];
    if (
      conversation !== undefined &&
      conversationStatus &&
      messageListController.state.objs.length < maxConversationLength
    ) {
      messages = await sendAndReceiveMessage(conversation);
    } else {
      alert('Starting a fresh conversation.');
      conversation = await createNewConversation();
      messages = await sendAndReceiveMessage(conversation);
    }

    await summariseConversationForChapter(messages);
    return messages;
  }

  return {
    state: {
      sidebarVisibility,
      sidebarContentMode: sidebarContentMode,
      aiChatRole: aiChatRole,
      selectedUser,
    },
    actions: {
      sendMessageToConversation: sendMessageToConversation,
      summariseConversationIntoTitle: summariseConversationIntoTitle,
      summariseConversationIntoObjective: summariseConversationIntoObjective,
      summariseConversationIntoSearchTerm: summariseConversationIntoSearchTerm,
      summariseConversationIntoNotes,
      summariseConversationIntoQuery: summariseConversationIntoQuery,
      summariseConversationIntoKeywords: summariseConversationIntoKeywords,
      updateSelectedUser: (user: UserObj) => setSelectedUser(user),
      updateSidebarVisibility: (visibility: SpacesChatSidebarVisibility) => {
        setSidebarVisibility(visibility);
      },
      updateAiChatRole: (role: ConversationRole) => {
        setAiChatRole(role);
      },
      updateSidebarContentMode: (mode: SpacesChatSidebarContentMode) =>
        setSidebarContentMode(mode),
    },
  };
}
