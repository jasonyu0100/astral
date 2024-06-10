import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GqlDbWrapper } from "@/(server)/(db)/main";
import { ChapterChatObj } from "@/(server)/(model)/space/chapter/chat/main";
import { gqlArgs } from "@/(utils)/clean";
import { createChapterChatObj, deleteChapterChatObj, updateChapterChatObj } from "@/graphql/mutations";
import { listChapterChatObjs } from "@/graphql/queries";

function castSingle(obj: any) {
  return obj as ChapterChatObj;
}

function castMultiple(objs: any[]) {
  return objs as ChapterChatObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listChapterChatObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listChapterChatObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listChapterChatObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listChapterChatObjs);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listChapterChatObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterChatObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterChatObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listChapterChatObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listChapterChatObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listChapterChatObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterChatObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterChatObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterChatObj);
} 

async function updateObj(id: string, updateObj: Partial<ChapterChatObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChapterChatObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateChapterChatObj);
} 

async function overwriteObj(id: string, newObj: ChapterChatObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterChatObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateChapterChatObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterChatObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteChapterChatObj);
} 

export const chapterChatDbWrapper: GqlDbWrapper<ChapterChatObj> = {
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