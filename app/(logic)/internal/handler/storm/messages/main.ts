import { MessageObj } from '@/(logic)/internal/data/infra/model/storm/chat/message/main';
import { useMemo, useState } from 'react';
import { useOpenAI } from '../../external/openai/main';
import { gqlHelper } from '../../../gql/messages/main';

export interface MessageHandler {
  queryCreateUserMessage: (text: string) => Promise<MessageObj>;
  queryCreateAgentMessage: (userMessage: MessageObj) => Promise<MessageObj>;
  queryListMessages: (chatId: string) => Promise<MessageObj[]>;
  addUserMessage: (message: MessageObj) => MessageObj;
  addAgentMessage: (message: MessageObj) => MessageObj;
}

export interface useMessageInterface {
  messages: MessageObj[];
  _messageHandler: MessageHandler;
}

export const useMessages = (chatId: string, userId: string): useMessageInterface => {
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
