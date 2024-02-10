import { amplifyClient } from '@/client';
import { createMessageObj } from '@/graphql/mutations';
import { listMessageObjs } from '@/graphql/queries';
import { useGlobalUser } from '@/state/main';
import { MessageObj, MessageSource } from '@/tables/storm/chat/message/main';
import { useMemo, useState } from 'react';
import { useOpenAI } from '../../external/openai/main';

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

export const useMessages = (chatId: string): useMessageInterface => {
  const { getMessageResponse } = useOpenAI();
  const user = useGlobalUser((state) => state.user);
  const [messages, changeMessages] = useState<MessageObj[]>([]);

  const gqlHelper = {
    queryCreateUserMessage: async (text: string) => {
      const payload = await amplifyClient.graphql({
        query: createMessageObj,
        variables: {
          input: {
            chatId: chatId,
            source: MessageSource.USER,
            time: new Date().toISOString(),
            message: text,
            userId: user?.id,
          },
        },
      });
      const message = payload.data?.createMessageObj as MessageObj;
      return message;
    },
    queryListMessages: async (chatId: string) => {
      const payload = await amplifyClient.graphql({
        query: listMessageObjs,
        variables: {
          filter: {
            chatId: {
              eq: chatId,
            },
          },
        },
      });
      const messages = payload.data?.listMessageObjs?.items as MessageObj[] || [];
      return messages;
    },
    queryCreateAgentMessage: async (text: string) => {
      const payload = await amplifyClient.graphql({
        query: createMessageObj,
        variables: {
          input: {
            chatId: chatId,
            source: MessageSource.AGENT,
            time: new Date().toISOString(),
            message: text,
          },
        },
      });
      const message = payload.data?.createMessageObj as MessageObj;
      return message;
    },
  };

  const _messageHandler = {
    queryCreateUserMessage: async (text: string) => {
      const message = await gqlHelper.queryCreateUserMessage(text);
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
        await gqlHelper.queryCreateAgentMessage(agentResponse);
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
