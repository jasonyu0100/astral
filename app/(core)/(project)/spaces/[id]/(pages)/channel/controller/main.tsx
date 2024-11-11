import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForChapterConversationList } from '@/architecture/controller/conversation/list';
import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForTaskListFromChapter } from '@/architecture/controller/task/list-from-chapter';
import { ConversationObj } from '@/architecture/model/conversation/main';
import { ConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { ElementVariant } from '@/architecture/model/elements/main';
import { exampleTextElement } from '@/architecture/model/elements/text/main';
import { exampleIdea, IdeaObj } from '@/architecture/model/idea/main';
import { TaskStatus } from '@/architecture/model/task/main';
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
  sidebarVisibility: SpacesChannelSidebarVisibility;
  sidebarContentMode: SpacesChannelSidebarContentMode;
  selectedUser: UserObj;
  aiChatRole: string;
}

interface ControllerActions {
  updateSelectedUser: (user: UserObj) => void;
  updateAiChatRole: (role: ConversationRole) => void;
  updateSidebarVisibility: (visibility: SpacesChannelSidebarVisibility) => void;
  updateSidebarContentMode: (mode: SpacesChannelSidebarContentMode) => void;
  sendMessageToConversation: () => Promise<ConversationMessageObj[]>;
  summariseConversationIntoQuery: () => Promise<string>;
  summariseConversationIntoNotes: () => Promise<IdeaObj[]>;
  summariseConversationIntoKeywords: () => Promise<string>;
  summariseConversationIntoSearchTerm: () => Promise<string>;
  summariseConversationIntoTitle: () => Promise<string>;
  summariseConversationIntoObjective: () => Promise<string>;
}

export enum SpacesChannelSidebarVisibility {
  OPEN = 'Open',
  CLOSED = 'Closed',
}

export enum SpacesChannelSidebarContentMode {
  CHAPTERS = 'Chapters',
  MEMBERS = 'Members',
}
export interface GeneratedSticky {
  text: string;
}

export const ContextForSpacesChannel = createContext({} as Controller);

export function useControllerForSpacesChannel() {
  const user = useGlobalUser((state) => state.user);
  const openAiController = useControllerForOpenAi();
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const messageListController = useContext(ContextForConversationMessageList);
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );
  const taskListController = useContext(ContextForTaskListFromChapter);
  const tasks = taskListController.state.objs;
  const currentTasks = tasks.filter(
    (task) => task.taskStatus === TaskStatus.CURRENT,
  );
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );
  const loggedInUser = useContext(ContextForLoggedInUserObj);

  const [sidebarContentMode, setSidebarContentMode] =
    useState<SpacesChannelSidebarContentMode>(
      SpacesChannelSidebarContentMode.CHAPTERS,
    );
  const [aiChatRole, setAiChatRole] = useState<ConversationRole>(
    ConversationRole.Channel,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesChannelSidebarVisibility>(
      SpacesChannelSidebarVisibility.OPEN,
    );
  const [selectedUser, setSelectedUser] = useState<UserObj>(exampleUser);

  function getTaskContext() {
    const current = tasks.filter(
      (task) => task.taskStatus === TaskStatus.CURRENT,
    );
    const done = tasks.filter((task) => task.taskStatus === TaskStatus.DONE);
    const upcoming = tasks.filter(
      (task) => task.taskStatus === TaskStatus.UPCOMING,
    );
    const upcomingContext = upcoming.map(
      (task) => `${task.title} - ${task.description}`,
    );
    const currentContext = current.map(
      (task) => `${task.title} - ${task.description}`,
    );
    const doneContext = done.map(
      (task) => `${task.title} - ${task.description}`,
    );
    return [
      `[Tasks]`,
      `[Upcoming Tasks]`,
      ...upcomingContext,
      `[Current Tasks]`,
      ...currentContext,
      `[Done Tasks]`,
      ...doneContext,
    ];
  }

  function getChaptersContext() {
    const chapterContext = chapterListController.state.objs.map(
      (chapter, index) => `
    Chapter ${index + 1}: ${chapter.title}
    This is the objective: ${chapter.objective}
    This is the description: ${chapter.description}
    This is the context: ${chapter.context}
  `,
    );

    return [`[Chapters Context]`, ...chapterContext];
  }

  function getSpaceContext() {
    return [
      `[Space Context]`,
      `This is the space title: ${spaceController.state.obj.title}`,
      `This is the space description: ${spaceController.state.obj.description}`,
    ];
  }

  function getCurrentChapterContext() {
    return [
      `[Current Chapter Context]`,
      `This is the current chapter number: ${chapterListController.state.index + 1}`,
      `This is the currnet chapter title: ${chapterListController.state.currentObj?.title}`,
      `This is the current chapter description: ${chapterListController.state.currentObj?.description}`,
      `This is the current chapter objective: ${chapterListController.state.currentObj?.objective}`,
    ];
  }

  function getMessageContext() {
    const messageContext = messageListController.state.objs.map((message) => {
      return formatMessage(message);
    });
    return [`[Message History]`, messageContext];
  }

  function getRoleContext() {
    return [
      `[Role Context]`,
      `This is your role: ${roleDescriptions[aiChatRole]}`,
    ];
  }

  useEffect(() => {
    if (loggedInUser) {
      setSelectedUser(loggedInUser);
    }
  }, []);

  function formatMessage(message: ConversationMessageObj) {
    if (message.agentId === null) {
      return `[User - ${user.displayName}]: ${message.message}`;
    } else {
      return `[Agent]: ${message.message}`;
    }
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
      ...getRoleContext(),
      ...getSpaceContext(),
      ...getChaptersContext(),
      ...getCurrentChapterContext(),
      ...getTaskContext(),
      ...getMessageContext(),
      formatMessage(message),
      `[Instruction]`,
      `Reply to the user, keeping in mind your role and the context of the conversation.`,
      `Keep in mind the current chapter and the surrounding relevance of chapters around it.`,
      `Be concise and clear in your responses.`,
      `Be smart and try not to exceed 200 characters.`,
    ];
    const messagePrompt = messageHistory.join('\n');
    const agentResponse =
      (await openAiController.actions.getMessageResponse(messagePrompt)) || '';
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
      ...getRoleContext(),
      ...getSpaceContext(),
      ...getChaptersContext(),
      ...getCurrentChapterContext(),
      ...getTaskContext(),
      ...getMessageContext(),
      `[Instructions]`,
      `Convert the conversation history into a series of detailed insights`,
      `Use the conversation history primarily and titles and descriptions as reference.`,
      `Depending on the size of the conversaion history, aim for at least 3-10 insights.`,
      `Please return the response strictly in a well-formatted JSON format, without any trailing commas or errors.`,
      `E.G Be insightful and refer to the conversation history for key points.`,
      `[Example return]`,
      `{`,
      `  "insights": [`,
      `    {"text": "Insight 1"},`,
      `    {"text": "Insight 2"},`,
      `    {"text": "Insight 3"}`,
      `  ]`,
      `}`,
    ];
    const messagePrompt = messageHistory.join('\n');

    const agentResponse =
      (await openAiController.actions.getMessageResponse(messagePrompt)) || '';
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
      ...getRoleContext(),
      ...getSpaceContext(),
      ...getChaptersContext(),
      ...getCurrentChapterContext(),
      ...getTaskContext(),
      ...getMessageContext(),
      `[Instructions]`,
      `Summarise conversation into a single search query as per the conversation history.`,
      `E.G "How to improve productivity"`,
    ];

    const messagePrompt = messageHistory.join('\n');

    const agentResponse =
      (await openAiController.actions.getMessageResponse(messagePrompt)) || '';
    return agentResponse;
  }

  async function summariseConversationIntoTitle() {
    const messageHistory = [
      ...getRoleContext(),
      ...getSpaceContext(),
      ...getChaptersContext(),
      ...getCurrentChapterContext(),
      ...getTaskContext(),
      `[Instructions]`,
      `Summarise conversation into a single title as per the conversation history.`,
      `E.G "Productivity Tips"`,
      `[END OF INSTRUCTIONS]`,
    ];

    const messagePrompt = messageHistory.join('\n');

    const agentResponse =
      (await openAiController.actions.getMessageResponse(messagePrompt)) || '';
    return agentResponse;
  }

  async function summariseConversationIntoObjective() {
    const messageHistory = [
      ...getRoleContext(),
      ...getSpaceContext(),
      ...getChaptersContext(),
      ...getCurrentChapterContext(),
      ...getTaskContext(),
      ...getMessageContext(),
      `[Instructions]`,
      `Summarise conversation into a single objective as per the conversation history.`,
      `E.G "Improve productivity by 10%"`,
    ];

    const messagePrompt = messageHistory.join('\n');

    const agentResponse =
      (await openAiController.actions.getMessageResponse(messagePrompt)) || '';
    return agentResponse;
  }

  async function summariseConversationIntoKeywords() {
    const messageHistory = [
      ...getRoleContext(),
      ...getSpaceContext(),
      ...getChaptersContext(),
      ...getCurrentChapterContext(),
      ...getTaskContext(),
      ...getMessageContext(),
      `[Instructions]`,
      `Summarise conversation into a series of key words as per the conversation history.`,
      `E.G "Productivity, Color, Design"`,
    ];

    const messagePrompt = messageHistory.join('\n');

    const agentResponse =
      (await openAiController.actions.getMessageResponse(messagePrompt)) || '';
    return agentResponse;
  }

  async function summariseConversationIntoSearchTerm() {
    const messageHistory = [
      ...getRoleContext(),
      ...getSpaceContext(),
      ...getChaptersContext(),
      ...getCurrentChapterContext(),
      ...getTaskContext(),
      ...getMessageContext(),
      `[Instructions]`,
      `Summarise conversation into a youtube search term as per the conversation history.`,
      `E.G "Productivity Tips"`,
    ];

    const messagePrompt = messageHistory.join('\n');

    const agentResponse =
      (await openAiController.actions.getMessageResponse(messagePrompt)) || '';
    return agentResponse;
  }

  async function summariseConversation(messages: ConversationMessageObj[]) {
    async function getConversationSummary() {
      const messageHistory = [
        ...getRoleContext(),
        ...getSpaceContext(),
        ...getChaptersContext(),
        ...getCurrentChapterContext(),
        ...getTaskContext(),
        ...getMessageContext(),
        `[Instructions]`,
        `Transform the conversation into a paragraph with all key points.`,
      ];
      const messagePrompt = messageHistory.join('\n');
      const summary =
        await openAiController.actions.getMessageResponse(messagePrompt);
      return summary;
    }

    async function getConversationTitle() {
      const messageHistory = [
        ...getRoleContext(),
        ...getSpaceContext(),
        ...getChaptersContext(),
        ...getCurrentChapterContext(),
        ...getTaskContext(),
        ...getMessageContext(),
        `[Instructions]`,
        `Summarise the conversation into a title.`,
      ];
      const messagePrompt = messageHistory.join('\n');
      const title =
        await openAiController.actions.getMessageResponse(messagePrompt);
      return title;
    }

    async function getChapterContext() {
      const messageHistory = [
        ...getMessageContext(),
        `[Existing Context]`,
        chapterListController.state.currentObj?.context,
        `[Instructions]`,
        `Update the chapter context with the conversation history.`,
        `Note down key points and insights from the conversation.`,
      ];
      const messagePrompt = messageHistory.join('\n');
      const title =
        await openAiController.actions.getMessageResponse(messagePrompt);
      return title;
    }

    const summary = await getConversationSummary();
    const title = await getConversationTitle();
    const context = await getChapterContext();

    await conversationListController.actions.editActions.edit(
      conversationListController.state.objId,
      {
        title: title || '',
        summary: summary || '',
      },
    );

    await chapterListController.actions.editActions.edit(
      chapterListController.state.objId,
      {
        context: context || '',
      },
    );
  }

  async function sendAndReceiveMessage(conversation: ConversationObj) {
    const newUserMessage = await sendUserMessage(conversation);
    let messages = [];
    if (aiChatRole !== ConversationRole.Channel) {
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

    await summariseConversation(messages);
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
      summariseConversationIntoNotes: summariseConversationIntoNotes,
      summariseConversationIntoQuery: summariseConversationIntoQuery,
      summariseConversationIntoKeywords: summariseConversationIntoKeywords,
      updateSelectedUser: (user: UserObj) => setSelectedUser(user),
      updateSidebarVisibility: (visibility: SpacesChannelSidebarVisibility) => {
        setSidebarVisibility(visibility);
      },
      updateAiChatRole: (role: ConversationRole) => {
        setAiChatRole(role);
      },
      updateSidebarContentMode: (mode: SpacesChannelSidebarContentMode) =>
        setSidebarContentMode(mode),
    },
  };
}
