import { GqlDbWrapper } from '@/architecture/client/main';
import { ConversationObj } from '@/architecture/model/conversation/main';
import { amplifyClient } from '@/external/aws/graphql/main';
import {
  createConversationObj,
  deleteConversationObj,
  updateConversationObj,
} from '@/graphql/mutations';
import { getConversationObj, listConversationObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

type TargetObj = ConversationObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getConversationObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getConversationObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getConversationObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getConversationObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listConversationObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listConversationObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listConversationObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listConversationObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listConversationObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listConversationObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createConversationObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createConversationObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateConversationObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateConversationObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateConversationObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateConversationObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteConversationObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteConversationObj);
}

export const conversationDbWrapper: GqlDbWrapper<TargetObj> = {
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
