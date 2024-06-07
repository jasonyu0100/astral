import { ConversationMessageObj } from '@/(model)/space/chapter/chat/conversation/message/main';
import { createContext, useMemo, useState } from 'react';
import { useOpenAIController } from '../../../../../(api)/(controller)/openai/main';
import { messagesGqlHelper } from '../../../(db)/(archive-db)/messages/main';
import { useGeminiController } from '../../../../../(api)/(controller)/gemini/main';

export interface MessageActions {
  createMessageFromUser: (text: string) => Promise<ConversationMessageObj>;
  createMessageFromAgent: (userMessage: ConversationMessageObj) => Promise<ConversationMessageObj>;
  listMessages: (chatId: string) => Promise<ConversationMessageObj[]>;
  updateInputMessage: (message: string) => void;
}

export interface MessagesHandler {
  inputMessage: string;
  messages: ConversationMessageObj[];
  messageActions: MessageActions;
}

export const MessagesHandlerContext = createContext({} as MessagesHandler);

export const useMessagesHandler = (chatId: string, userId: string): MessagesHandler => {
  const { getMessageResponse } = useGeminiController();
  const [messages, changeMessages] = useState<ConversationMessageObj[]>([]);
  const [inputMessage, changeInputMessage] = useState('');

  const messageActions: MessageActions = {
    createMessageFromUser: async (text: string) => {
      const messageFromUser = await messagesGqlHelper.createFromUser(chatId, userId, text);
      changeMessages((prev) => [...prev, messageFromUser]);
      return messageFromUser;
    },
    listMessages: async (chatId: string) => {
      const messages = await messagesGqlHelper.listFromChat(chatId);
      changeMessages(messages);
      return messages;
    },
    createMessageFromAgent: async (messageFromUser: ConversationMessageObj) => {
      const responseFromAgent =
        (await getMessageResponse(messageFromUser.message)) || '';
      const messageFromAgent =
        await messagesGqlHelper.createFromAgent(chatId, responseFromAgent);
      changeMessages((prev) => [...prev, messageFromAgent]);
      return messageFromAgent;
    },
    updateInputMessage: (message: string) => changeInputMessage(message),
  };

  useMemo(() => {
    if (!chatId) {
      changeMessages([]);
      return;
    }
    messageActions.listMessages(chatId);
  }, [chatId]);

  return {
    inputMessage: inputMessage,
    messages,
    messageActions: messageActions,
  };
};
