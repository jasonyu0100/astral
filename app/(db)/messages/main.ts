import { amplifyClient } from '@/(api)/aws/graphql/main';
import {
  MessageObj,
  MessageSource,
} from '@/(model)/storm/chat/message/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createMessageObj,
  deleteMessageObj,
  updateMessageObj,
} from '@/graphql/mutations';
import { listMessageObjs } from '@/graphql/queries';

export interface MessagesGqlHelper {
  listFromChat: (chatId: string) => Promise<MessageObj[]>;
  createFromUser: (
    chatId: string,
    userId: string,
    text: string,
  ) => Promise<MessageObj>;
  createFromAgent: (chatId: string, text: string) => Promise<MessageObj>;
  delete: (messageId: string) => Promise<MessageObj>;
  update: (
    messageId: string,
    updatedMessageObj: MessageObj,
  ) => Promise<MessageObj>;
}

export const messagesGqlHelper: MessagesGqlHelper = {
  createFromUser: async (
    chatId: string,
    userId: string,
    text: string,
  ) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createMessageObj,
      variables: {
        input: gqlArgs({
          chatId: chatId,
          source: MessageSource.USER,
          time: currentDate,
          message: text,
          userId: userId,
        }),
      },
    });
    const messageObj = payload.data?.createMessageObj as MessageObj;
    return messageObj;
  },
  listFromChat: async (chatId: string) => {
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
    const messageObjs =
      (payload.data?.listMessageObjs?.items as MessageObj[]) || [];
    return messageObjs;
  },
  createFromAgent: async (chatId: string, text: string) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createMessageObj,
      variables: {
        input: gqlArgs({
          chatId: chatId,
          source: MessageSource.AGENT,
          time: currentDate,
          message: text,
        }),
      },
    });
    const messageObj = payload.data?.createMessageObj as MessageObj;
    return messageObj;
  },
  delete: async (messageId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteMessageObj,
      variables: {
        input: {
          id: messageId,
        },
      },
    });
    const messageObj = payload.data?.deleteMessageObj as MessageObj;
    return messageObj;
  },
  update: async (
    messageId: string,
    updatedMessageObj: MessageObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: updateMessageObj,
      variables: {
        input: gqlArgs({
          id: messageId,
          chatId: updatedMessageObj.chatId,
          source: updatedMessageObj.source,
          time: updatedMessageObj.time,
          message: updatedMessageObj.message,
          userId: updatedMessageObj.userId,
        }),
      },
    });
    let messageObj = payload.data?.updateMessageObj as MessageObj;
    return messageObj;
  },
};
