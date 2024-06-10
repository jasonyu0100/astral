import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ChatMemberObj } from '@/(server)/(model)/space/chapter/chat/member/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChatMemberObj,
  deleteChatMemberObj,
  updateChatMemberObj,
} from '@/graphql/mutations';
import { listChatMemberObjs } from '@/graphql/queries';

function castSingle(obj: any) {
  return obj as ChatMemberObj;
}

function castMultiple(objs: any[]) {
  return objs as ChatMemberObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listChatMemberObjs,
    variables: {
      [key]: {
        eq: value,
      },
    },
  });

  return castSingle(payload?.data?.listChatMemberObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listChatMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listChatMemberObjs);
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

async function listFromVariables(variables: Object) {
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
