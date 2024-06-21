import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createConversationMessageObj,
  deleteConversationMessageObj,
  updateConversationMessageObj,
} from '@/graphql/mutations';
import {
  getConversationMessageObj,
  listConversationMessageObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as ConversationMessageObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ConversationMessageObj[];
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

async function createObj(newObj: Omit<ConversationMessageObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createConversationMessageObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createConversationMessageObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<ConversationMessageObj>,
) {
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

async function overwriteObj(id: string, newObj: ConversationMessageObj) {
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

export const conversationMessageDbWrapper: GqlDbWrapper<ConversationMessageObj> =
  {
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
