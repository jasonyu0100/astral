import { amplifyClient } from "@/(api)/aws/graphql/main";
import { ChapterChatObj } from "@/(model)/space/chapter/chat/main";
import { gqlArgs } from "@/(utils)/clean";
import { createChapterChatObj, deleteChapterChatObj, updateChapterChatObj } from "@/graphql/mutations";
import { listChapterChatObjs } from "@/graphql/queries";

function castSingle(obj: any): ChapterChatObj {
  return obj as ChapterChatObj;
}

function castMultiple(objs: any[]): ChapterChatObj[] {
  return objs as ChapterChatObj[];
}

async function getObj(key: string, value: string): Promise<ChapterChatObj> {
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

async function getFromVariables(variables: Object): Promise<ChapterChatObj> {
  const payload = await amplifyClient.graphql({
    query: listChapterChatObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listChapterChatObjs);
}

async function listObjs(key: string, value: string): Promise<ChapterChatObj[]> {
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

async function listFromVariables(variables: Object): Promise<ChapterChatObj[]> {
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

interface ChapterChatDbWrapper {
    getObj: (key: string, value: string) => Promise<ChapterChatObj>;
    listObjs: (key: string, value: string) => Promise<ChapterChatObj[]>;
    createObj: (newObj: Omit<ChapterChatObj, 'id'>) => Promise<ChapterChatObj>;
    updateObj: (id: string, updateObj: Partial<ChapterChatObj>) => Promise<ChapterChatObj>;
    overwriteObj: (id: string, newObj: ChapterChatObj) => Promise<ChapterChatObj>;
    deleteObj: (id: string) => Promise<ChapterChatObj>;
    getFromVariables: (variables: Object) => Promise<ChapterChatObj>;
    listFromVariables: (variables: Object) => Promise<ChapterChatObj[]>;
}

export const chapterChatDbWrapper: ChapterChatDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}