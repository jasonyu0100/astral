import { GqlDbWrapper } from '@/(server)/client/main';
import { ChatConversationObj } from '@/(server)/model/space/chapter/chat/conversation/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createChatConversationObj,
  deleteChatConversationObj,
  updateChatConversationObj,
} from '@/graphql/mutations';
import {
  getChatConversationObj,
  listChatConversationObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as ChatConversationObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChatConversationObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChatConversationObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChatConversationObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChatConversationObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChatConversationObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listChatConversationObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChatConversationObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChatConversationObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChatConversationObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChatConversationObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChatConversationObjs?.items || []);
}

async function createObj(newObj: Omit<ChatConversationObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChatConversationObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChatConversationObj);
}

async function updateObj(id: string, updateObj: Partial<ChatConversationObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChatConversationObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChatConversationObj);
}

async function overwriteObj(id: string, newObj: ChatConversationObj) {
  const payload = await amplifyClient.graphql({
    query: updateChatConversationObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChatConversationObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChatConversationObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChatConversationObj);
}

export const chatConversationDbWrapper: GqlDbWrapper<ChatConversationObj> = {
  getObj,
  listObjs,
  listAllObjs,
  createObj,
  updateObj,
  overwriteObj,
  deleteObj,
  getFromVariables,
  listFromVariables,
};
