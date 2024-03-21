import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import {
  MessageObj,
  MessageSource,
} from '@/(logic)/internal/model/storm/chat/message/main';
import { gqlArgs } from '@/(logic)/utils/clean';
import {
  createMessageObj,
  deleteMessageObj,
  updateMessageObj,
} from '@/graphql/mutations';
import { listMessageObjs } from '@/graphql/queries';

export interface MessagesGqlHelper {
  gqlListMessages: (chatId: string) => Promise<MessageObj[]>;
  gqlCreateUserMessage: (
    chatId: string,
    userId: string,
    text: string,
  ) => Promise<MessageObj>;
  gqlCreateAgentMessage: (chatId: string, text: string) => Promise<MessageObj>;
  gqlDeleteMessage: (messageId: string) => Promise<MessageObj>;
  gqlUpdateMessage: (
    messageId: string,
    updatedMessageObj: MessageObj,
  ) => Promise<MessageObj>;
}

export const gqlHelper: MessagesGqlHelper = {
  gqlCreateUserMessage: async (
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
  gqlListMessages: async (chatId: string) => {
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
  gqlCreateAgentMessage: async (chatId: string, text: string) => {
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
  gqlDeleteMessage: async (messageId: string) => {
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
  gqlUpdateMessage: async (
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
