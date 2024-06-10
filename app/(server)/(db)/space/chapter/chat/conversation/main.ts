import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GqlDbWrapper } from "@/(server)/(db)/main";
import { ChatConversationObj } from "@/(server)/(model)/space/chapter/chat/conversation/main";
import { gqlArgs } from "@/(utils)/clean";
import { createChatConversationObj, deleteChatConversationObj, updateChatConversationObj } from "@/graphql/mutations";
import { listChatConversationObjs } from "@/graphql/queries";

function castSingle(obj: any) {
  return obj as ChatConversationObj;
}

function castMultiple(objs: any[]) {
  return objs as ChatConversationObj[];
}

async function getObj(key: string, value: string) {
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

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listChatConversationObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listChatConversationObjs);
}

async function listObjs(key: string, value: string) {
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

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listChatConversationObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listChatConversationObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChatConversationObjs,
    variables: {
    },
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
}