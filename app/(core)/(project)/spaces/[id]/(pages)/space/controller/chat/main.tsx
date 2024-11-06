import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForChapterConversationList } from '@/architecture/controller/conversation/list';
import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForTaskList } from '@/architecture/controller/task/list';
import { ConversationObj } from '@/architecture/model/conversation/main';
import { ConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { ElementVariant } from '@/architecture/model/elements/main';
import { TaskStatus } from '@/architecture/model/task/main';
import { useControllerForOpenAi } from '@/external/controller/openai/main';
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

export interface GeneratedSticky {
  text: string;
}

export const ContextForSpacesSpaceChat = createContext({} as Controller);

export function useControllerForSpacesSpaceChat() {
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
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );
  const taskListController = useContext(ContextForTaskList);
  const tasks = taskListController.state.objs;
  const currentTasks = tasks.filter(
    (task) => task.taskStatus === TaskStatus.CURRENT,
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
        return `
          [Idea - ${idea.title}]
          Variant: ${idea.variant}
          Text Type: ${idea.textElem?.variant}
          Text - ${idea.textElem?.text}
        `;
      } else if (idea.variant === ElementVariant.FILE) {
        return `
          [Idea - ${idea.title}]
          Variant: ${idea.variant}
          File Type ${idea.fileElem?.variant}
          Source: ${idea.fileElem?.src}
        `;
      } else if (idea.variant === ElementVariant.URL) {
        return `
          [Idea - ${idea.title}]
          Variant: ${idea.variant}
          Url Type: ${idea.urlElem?.variant}
          Url: ${idea.urlElem?.url}
        `;
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
    const tasksContext = currentTasks
      .map(
        (task, index) =>
          `Objective #${index + 1} ${task.title} - ${task.description}`,
      )
      .join(', ');

    const chapterContext = chapterListController.state.objs
      .map(
        (chapter, index) => `
    Chapter ${index + 1}: ${chapter.title}
    Chapter Objective: ${chapter.objective}
    Chapter Description: ${chapter.description}
    Chapter Context: ${chapter.context}
  `,
      )
      .join(', ');

    const messageHistory = [
      `[Background Context]`,
      `This is the space title: ${spaceController.state.obj.title}`,
      `This is the space description: ${spaceController.state.obj.description}`,
      `[Chapters Context]`,
      chapterContext,
      `[Current Chapter Context]`,
      `This is the current chapter number: ${chapterListController.state.index + 1}`,
      `This is the currnet chapter title: ${chapterListController.state.currentObj?.title}`,
      `This is the current chapter description: ${chapterListController.state.currentObj?.description}`,
      `This is the current chapter objective: ${chapterListController.state.currentObj?.objective}`,
      `[Objectives Context]`,
      `These are your main objectives: ${tasksContext}`,
      `[Message History]`,
      ...getMessageHistory(),
      `[Idea History]`,
      ...getIdeaHistory(),
      `[Instruction]`,
      `Reply to the user, keeping in mind your role and the context of the conversation.`,
      `In particular take not of the idea history when replying to the user`,
      `Be concise and clear in your responses.`,
      `Be smart and try not to exceed 200 characters.`,
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
