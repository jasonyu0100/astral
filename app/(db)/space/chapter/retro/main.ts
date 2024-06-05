import { amplifyClient } from "@/(api)/aws/graphql/main";
import { ChapterRetroObj } from "@/(model)/space/chapter/retro/main";
import { gqlArgs } from "@/(utils)/clean";
import { createChapterRetroObj, deleteChapterRetroObj, updateChapterRetroObj } from "@/graphql/mutations";
import { listChapterRetroObjs } from "@/graphql/queries";

function castSingle(obj: any): ChapterRetroObj {
  return obj as ChapterRetroObj;
}

function castMultiple(objs: any[]): ChapterRetroObj[] {
  return objs as ChapterRetroObj[];
}

async function getObj(key: string, value: string): Promise<ChapterRetroObj> {
  const payload = await amplifyClient.graphql({
    query: listChapterRetroObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listChapterRetroObjs);
}

async function getFromVariables(variables: Object): Promise<ChapterRetroObj> {
  const payload = await amplifyClient.graphql({
    query: listChapterRetroObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listChapterRetroObjs);
}

async function listObjs(key: string, value: string): Promise<ChapterRetroObj[]> {
  const payload = await amplifyClient.graphql({
    query: listChapterRetroObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterRetroObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<ChapterRetroObj[]> {
  const payload = await amplifyClient.graphql({
    query: listChapterRetroObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listChapterRetroObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterRetroObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterRetroObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterRetroObj);
} 

async function updateObj(id: string, updateObj: Partial<ChapterRetroObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChapterRetroObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateChapterRetroObj);
} 

async function overwriteObj(id: string, newObj: ChapterRetroObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterRetroObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateChapterRetroObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterRetroObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteChapterRetroObj);
} 

interface ChapterRetroDbWrapper {
    getObj: (key: string, value: string) => Promise<ChapterRetroObj>;
    listObjs: (key: string, value: string) => Promise<ChapterRetroObj[]>;
    createObj: (newObj: Omit<ChapterRetroObj, 'id'>) => Promise<ChapterRetroObj>;
    updateObj: (id: string, updateObj: Partial<ChapterRetroObj>) => Promise<ChapterRetroObj>;
    overwriteObj: (id: string, newObj: ChapterRetroObj) => Promise<ChapterRetroObj>;
    deleteObj: (id: string) => Promise<ChapterRetroObj>;
    getFromVariables: (variables: Object) => Promise<ChapterRetroObj>;
    listFromVariables: (variables: Object) => Promise<ChapterRetroObj[]>;
}

export const chapterretroDbWrapper: ChapterRetroDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}