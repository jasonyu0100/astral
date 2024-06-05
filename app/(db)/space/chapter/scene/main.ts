import { amplifyClient } from "@/(api)/aws/graphql/main";
import { ChapterSceneObj } from "@/(model)/space/chapter/scene/main";
import { gqlArgs } from "@/(utils)/clean";
import { createChapterSceneObj, deleteChapterSceneObj, updateChapterSceneObj } from "@/graphql/mutations";
import { listChapterSceneObjs } from "@/graphql/queries";

function castSingle(obj: any): ChapterSceneObj {
  return obj as ChapterSceneObj;
}

function castMultiple(objs: any[]): ChapterSceneObj[] {
  return objs as ChapterSceneObj[];
}

async function getObj(key: string, value: string): Promise<ChapterSceneObj> {
  const payload = await amplifyClient.graphql({
    query: listChapterSceneObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listChapterSceneObjs);
}

async function getFromVariables(variables: Object): Promise<ChapterSceneObj> {
  const payload = await amplifyClient.graphql({
    query: listChapterSceneObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listChapterSceneObjs);
}

async function listObjs(key: string, value: string): Promise<ChapterSceneObj[]> {
  const payload = await amplifyClient.graphql({
    query: listChapterSceneObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterSceneObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<ChapterSceneObj[]> {
  const payload = await amplifyClient.graphql({
    query: listChapterSceneObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listChapterSceneObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterSceneObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterSceneObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterSceneObj);
} 

async function updateObj(id: string, updateObj: Partial<ChapterSceneObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChapterSceneObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateChapterSceneObj);
} 

async function overwriteObj(id: string, newObj: ChapterSceneObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterSceneObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateChapterSceneObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterSceneObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteChapterSceneObj);
} 

interface ChapterSceneDbWrapper {
    getObj: (key: string, value: string) => Promise<ChapterSceneObj>;
    listObjs: (key: string, value: string) => Promise<ChapterSceneObj[]>;
    createObj: (newObj: Omit<ChapterSceneObj, 'id'>) => Promise<ChapterSceneObj>;
    updateObj: (id: string, updateObj: Partial<ChapterSceneObj>) => Promise<ChapterSceneObj>;
    overwriteObj: (id: string, newObj: ChapterSceneObj) => Promise<ChapterSceneObj>;
    deleteObj: (id: string) => Promise<ChapterSceneObj>;
    getFromVariables: (variables: Object) => Promise<ChapterSceneObj>;
    listFromVariables: (variables: Object) => Promise<ChapterSceneObj[]>;
}

export const chaptersceneDbWrapper: ChapterSceneDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}