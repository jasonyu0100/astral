import { amplifyClient } from '@/(api)/aws/graphql/main';
import {
  ConversationMessageObj,
  ConversationMessageSource,
} from '@/(model)/space/chapter/chat/conversation/message/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createMessageObj,
  deleteMessageObj,
  updateMessageObj,
} from '@/graphql/mutations';
import { listMessageObjs } from '@/graphql/queries';

export interface MessagesGqlHelper {
  listFromChat: (chatId: string) => Promise<ConversationMessageObj[]>;
  createFromUser: (
    chatId: string,
    userId: string,
    text: string,
  ) => Promise<ConversationMessageObj>;
  createFromAgent: (chatId: string, text: string) => Promise<ConversationMessageObj>;
  delete: (messageId: string) => Promise<ConversationMessageObj>;
  update: (
    messageId: string,
    updatedMessageObj: ConversationMessageObj,
  ) => Promise<ConversationMessageObj>;
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
          source: ConversationMessageSource.USER,
          time: currentDate,
          message: text,
          userId: userId,
        }),
      },
    });
    const messageObj = payload.data?.createMessageObj as ConversationMessageObj;
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
      (payload.data?.listMessageObjs?.items as ConversationMessageObj[]) || [];
    return messageObjs;
  },
  createFromAgent: async (chatId: string, text: string) => {
    const currentDate = new Date().toISOString();
    const payload = await amplifyClient.graphql({
      query: createMessageObj,
      variables: {
        input: gqlArgs({
          chatId: chatId,
          source: ConversationMessageSource.AGENT,
          time: currentDate,
          message: text,
        }),
      },
    });
    const messageObj = payload.data?.createMessageObj as ConversationMessageObj;
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
    const messageObj = payload.data?.deleteMessageObj as ConversationMessageObj;
    return messageObj;
  },
  update: async (
    messageId: string,
    updatedMessageObj: ConversationMessageObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: updateMessageObj,
      variables: {
        input: gqlArgs({
          id: messageId,
          chatId: updatedMessageObj.conversationId,
          source: updatedMessageObj.source,
          time: updatedMessageObj.time,
          message: updatedMessageObj.message,
          userId: updatedMessageObj.userId,
        }),
      },
    });
    let messageObj = payload.data?.updateMessageObj as ConversationMessageObj;
    return messageObj;
  },
};
