import { MessageObj } from '@/(logic)/internal/data/infra/model/storm/chat/message/main';
import { createContext, useMemo, useState } from 'react';
import { useOpenAI } from '../../external/openai/main';
import { gqlHelper } from '../../../gql/messages/main';

export interface MessageActions {
  queryCreateUserMessage: (text: string) => Promise<MessageObj>;
  queryCreateAgentMessage: (userMessage: MessageObj) => Promise<MessageObj>;
  queryListMessages: (chatId: string) => Promise<MessageObj[]>;
  addUserMessage: (message: MessageObj) => MessageObj;
  addAgentMessage: (message: MessageObj) => MessageObj;
}

export interface MessagesHandler {
  messages: MessageObj[];
  _messageHandler: MessageActions;
}

export const MessagesHandlerContext = createContext({} as MessagesHandler);

export const useMessagesHandler = (chatId: string, userId: string): MessagesHandler => {
  const { getMessageResponse } = useOpenAI();
  const [messages, changeMessages] = useState<MessageObj[]>([]);

  const _messageHandler = {
    queryCreateUserMessage: async (text: string) => {
      const message = await gqlHelper.queryCreateUserMessage(chatId, userId, text);
      return message;
    },
    queryListMessages: async (chatId: string) => {
      const messages = await gqlHelper.queryListMessages(chatId);
      changeMessages(messages);
      return messages;
    },
    queryCreateAgentMessage: async (userMessage: MessageObj) => {
      const agentResponse =
        (await getMessageResponse(userMessage.message)) || '';
      const agentMessage =
        await gqlHelper.queryCreateAgentMessage(chatId, agentResponse);
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
  };

  useMemo(() => {
    if (!chatId) {
      changeMessages([]);
      return;
    }
    _messageHandler.queryListMessages(chatId);
  }, [chatId]);

  return {
    messages,
    _messageHandler,
  };
};
