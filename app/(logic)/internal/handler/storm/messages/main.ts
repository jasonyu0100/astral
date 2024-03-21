import { MessageObj } from '@/(logic)/internal/model/storm/chat/message/main';
import { createContext, useMemo, useState } from 'react';
import { useOpenAI } from '../../external/openai/main';
import { messagesGqlHelper } from '../../../gql/messages/main';
import { useGemini } from '../../external/gemini/main';

export interface MessageActions {
  queryCreateUserMessage: (text: string) => Promise<MessageObj>;
  queryCreateAgentMessage: (userMessage: MessageObj) => Promise<MessageObj>;
  queryListMessages: (chatId: string) => Promise<MessageObj[]>;
  addUserMessage: (message: MessageObj) => MessageObj;
  addAgentMessage: (message: MessageObj) => MessageObj;
  updateInputMessage: (message: string) => void;
}

export interface MessagesHandler {
  inputMessage: string;
  messages: MessageObj[];
  messageActions: MessageActions;
}

export const MessagesHandlerContext = createContext({} as MessagesHandler);

export const useMessagesHandler = (chatId: string, userId: string): MessagesHandler => {
  const { getMessageResponse } = useGemini();
  const [messages, changeMessages] = useState<MessageObj[]>([]);
  const [inputMessage, changeInputMessage] = useState('');

  const messageActions: MessageActions = {
    queryCreateUserMessage: async (text: string) => {
      const message = await messagesGqlHelper.createFromUser(chatId, userId, text);
      return message;
    },
    queryListMessages: async (chatId: string) => {
      const messages = await messagesGqlHelper.listFromChat(chatId);
      changeMessages(messages);
      return messages;
    },
    queryCreateAgentMessage: async (userMessage: MessageObj) => {
      const agentResponse =
        (await getMessageResponse(userMessage.message)) || '';
      const agentMessage =
        await messagesGqlHelper.createFromAgent(chatId, agentResponse);
      return agentMessage;
    },
    addUserMessage: (message: MessageObj) => {
      changeMessages((prev) => [...prev, message]);
      return message;
    },
    addAgentMessage: (message: MessageObj) => {
      changeMessages((prev) => [...prev, message]);
      return message;
    },
    updateInputMessage: (message: string) => changeInputMessage(message),
  };

  useMemo(() => {
    if (!chatId) {
      changeMessages([]);
      return;
    }
    messageActions.queryListMessages(chatId);
  }, [chatId]);

  return {
    inputMessage: inputMessage,
    messages,
    messageActions: messageActions,
  };
};
