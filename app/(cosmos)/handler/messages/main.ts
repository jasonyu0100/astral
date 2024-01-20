import { amplifyClient } from '@/client';
import { createMessageObj } from '@/graphql/mutations';
import { listMessageObjs } from '@/graphql/queries';
import { useGlobalUser } from '@/state/main';
import { MessageObj, MessageSource } from '@/tables/storm/chat/message/main';
import { useEffect, useState } from 'react';
import OpenAI from 'openai';
import axios from 'axios';

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
  const [state, actions] = useGlobalUser();
  const [messages, changeMessages] = useState<MessageObj[]>([]);

  useEffect(() => {
    if (!chatId) {
      changeMessages([]);
      return;
    }
    _messageHandler.queryListMessages(chatId);
  }, [chatId]);

  const _messageHandler = {
    queryCreateUserMessage: async (text: string) => {
      const payload = await amplifyClient.graphql({
        query: createMessageObj,
        variables: {
          input: {
            chatId: chatId,
            source: MessageSource.USER,
            time: new Date().toISOString(),
            message: text,
            userId: state.user?.id,
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
      const messages = payload.data?.listMessageObjs?.items as MessageObj[];
      changeMessages(messages);
      return messages;
    },
    queryCreateAgentMessage: async (userMessage: MessageObj) => {
      console.log(process.env.NEXT_PUBLIC_OPEN_AI_APIKEY)
      const handleGenerate = async (prompt: string) => {
        const openai = new OpenAI({
          apiKey: process.env.NEXT_PUBLIC_OPEN_AI_APIKEY,
          dangerouslyAllowBrowser: true,
        });
        const completion = await openai.chat.completions.create({
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant designed to output JSON.',
            },
            { role: 'user', content: prompt },
          ],
          model: 'gpt-3.5-turbo-1106',
          response_format: { type: 'json_object' },
        });
        return completion.choices[0].message.content;
      };
      const text = await handleGenerate(userMessage.message);
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
      const replyMessage = payload.data?.createMessageObj as MessageObj;
      return replyMessage;
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

  return {
    messages,
    _messageHandler,
  };
};
