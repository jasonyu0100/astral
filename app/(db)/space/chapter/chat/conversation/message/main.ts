import { amplifyClient } from "@/(api)/aws/graphql/main";
import { ConversationMessageObj } from "@/(model)/space/chapter/chat/conversation/message/main";
import { gqlArgs } from "@/(utils)/clean";
import { createConversationMessageObj, deleteConversationMessageObj, updateConversationMessageObj } from "@/graphql/mutations";
import { listConversationMessageObjs } from "@/graphql/queries";

function castSingle(obj: any): ConversationMessageObj {
  return obj as ConversationMessageObj;
}

function castMultiple(objs: any[]): ConversationMessageObj[] {
  return objs as ConversationMessageObj[];
}

async function getObj(key: string, value: string): Promise<ConversationMessageObj> {
  const payload = await amplifyClient.graphql({
    query: listConversationMessageObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listConversationMessageObjs);
}

async function getFromVariables(variables: Object): Promise<ConversationMessageObj> {
  const payload = await amplifyClient.graphql({
    query: listConversationMessageObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listConversationMessageObjs);
}

async function listObjs(key: string, value: string): Promise<ConversationMessageObj[]> {
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

async function listFromVariables(variables: Object): Promise<ConversationMessageObj[]> {
  const payload = await amplifyClient.graphql({
    query: listConversationMessageObjs,
    variables: variables
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

async function updateObj(id: string, updateObj: Partial<ConversationMessageObj>) {
  const payload = await amplifyClient.graphql({
    query: updateConversationMessageObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
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
        ...gqlArgs(newObj)
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

interface ConversationMessageDbWrapper {
    getObj: (key: string, value: string) => Promise<ConversationMessageObj>;
    listObjs: (key: string, value: string) => Promise<ConversationMessageObj[]>;
    createObj: (newObj: Omit<ConversationMessageObj, 'id'>) => Promise<ConversationMessageObj>;
    updateObj: (id: string, updateObj: Partial<ConversationMessageObj>) => Promise<ConversationMessageObj>;
    overwriteObj: (id: string, newObj: ConversationMessageObj) => Promise<ConversationMessageObj>;
    deleteObj: (id: string) => Promise<ConversationMessageObj>;
    getFromVariables: (variables: Object) => Promise<ConversationMessageObj>;
    listFromVariables: (variables: Object) => Promise<ConversationMessageObj[]>;
}

export const conversationmessageDbWrapper: ConversationMessageDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}