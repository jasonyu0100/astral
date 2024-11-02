import { GqlDbWrapper } from '@/architecture/client/main';
import { ConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { amplifyClient } from '@/external/aws/graphql/main';
import {
  createConversationMessageObj,
  deleteConversationMessageObj,
  updateConversationMessageObj,
} from '@/graphql/mutations';
import {
  getConversationMessageObj,
  listConversationMessageObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

type TargetObj = ConversationMessageObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getConversationMessageObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getConversationMessageObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getConversationMessageObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getConversationMessageObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listConversationMessageObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listConversationMessageObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listConversationMessageObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listConversationMessageObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listConversationMessageObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listConversationMessageObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createConversationMessageObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createConversationMessageObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateConversationMessageObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateConversationMessageObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateConversationMessageObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateConversationMessageObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteConversationMessageObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteConversationMessageObj);
}

export const conversationMessageDbWrapper: GqlDbWrapper<TargetObj> = {
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
