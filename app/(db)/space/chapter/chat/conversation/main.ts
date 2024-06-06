import { amplifyClient } from "@/(api)/aws/graphql/main";
import { ChatConversationObj } from "@/(model)/space/chapter/chat/conversation/main";
import { gqlArgs } from "@/(utils)/clean";
import { createChatConversationObj, deleteChatConversationObj, updateChatConversationObj } from "@/graphql/mutations";
import { listChatConversationObjs } from "@/graphql/queries";

function castSingle(obj: any): ChatConversationObj {
  return obj as ChatConversationObj;
}

function castMultiple(objs: any[]): ChatConversationObj[] {
  return objs as ChatConversationObj[];
}

async function getObj(key: string, value: string): Promise<ChatConversationObj> {
  const payload = await amplifyClient.graphql({
    query: listChatConversationObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listChatConversationObjs);
}

async function getFromVariables(variables: Object): Promise<ChatConversationObj> {
  const payload = await amplifyClient.graphql({
    query: listChatConversationObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listChatConversationObjs);
}

async function listObjs(key: string, value: string): Promise<ChatConversationObj[]> {
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

async function listFromVariables(variables: Object): Promise<ChatConversationObj[]> {
  const payload = await amplifyClient.graphql({
    query: listChatConversationObjs,
    variables: variables
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
        ...gqlArgs(updateObj)
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
        ...gqlArgs(newObj)
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

interface ChatConversationDbWrapper {
    getObj: (key: string, value: string) => Promise<ChatConversationObj>;
    listObjs: (key: string, value: string) => Promise<ChatConversationObj[]>;
    createObj: (newObj: Omit<ChatConversationObj, 'id'>) => Promise<ChatConversationObj>;
    updateObj: (id: string, updateObj: Partial<ChatConversationObj>) => Promise<ChatConversationObj>;
    overwriteObj: (id: string, newObj: ChatConversationObj) => Promise<ChatConversationObj>;
    deleteObj: (id: string) => Promise<ChatConversationObj>;
    getFromVariables: (variables: Object) => Promise<ChatConversationObj>;
    listFromVariables: (variables: Object) => Promise<ChatConversationObj[]>;
}

export const chatConversationDbWrapper: ChatConversationDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}