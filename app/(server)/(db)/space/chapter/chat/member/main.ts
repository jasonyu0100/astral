import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ChatMemberObj } from '@/(server)/(model)/space/chapter/chat/member/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChatMemberObj,
  deleteChatMemberObj,
  updateChatMemberObj,
} from '@/graphql/mutations';
import { getChatMemberObj, listChatMemberObjs } from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as ChatMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChatMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChatMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChatMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChatMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChatMemberObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listChatMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChatMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChatMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChatMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChatMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChatMemberObjs?.items || []);
}

async function createObj(newObj: Omit<ChatMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChatMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChatMemberObj);
}

async function updateObj(id: string, updateObj: Partial<ChatMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChatMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChatMemberObj);
}

async function overwriteObj(id: string, newObj: ChatMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateChatMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChatMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChatMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChatMemberObj);
}

export const chatMemberDbWrapper: GqlDbWrapper<ChatMemberObj> = {
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
