import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import {
  MessageObj,
  MessageSource,
} from '@/(logic)/internal/model/storm/chat/message/main';
import { createMessageObj } from '@/graphql/mutations';
import { listMessageObjs } from '@/graphql/queries';

export interface MessagesGqlHelper {
  queryCreateUserMessage: (
    chatId: string,
    userId: string,
    text: string,
  ) => Promise<MessageObj>;
  queryListMessages: (chatId: string) => Promise<MessageObj[]>;
  queryCreateAgentMessage: (
    chatId: string,
    text: string,
  ) => Promise<MessageObj>;
}

export const gqlHelper: MessagesGqlHelper = {
  queryCreateUserMessage: async (
    chatId: string,
    userId: string,
    text: string,
  ) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createMessageObj,
      variables: {
        input: {
          chatId: chatId,
          source: MessageSource.USER,
          time: currentDate,
          message: text,
          userId: userId,
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
    const messages =
      (payload.data?.listMessageObjs?.items as MessageObj[]) || [];
    return messages;
  },
  queryCreateAgentMessage: async (chatId: string, text: string) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createMessageObj,
      variables: {
        input: {
          chatId: chatId,
          source: MessageSource.AGENT,
          time: currentDate,
          message: text,
        },
      },
    });
    const message = payload.data?.createMessageObj as MessageObj;
    return message;
  },
};
