import { amplifyClient } from "@/(api)/aws/graphql/main";
import { SpaceChapterObj } from "@/(model)/space/chapter/main";
import { gqlArgs } from "@/(utils)/clean";
import { createSpaceChapterObj, deleteSpaceChapterObj, updateSpaceChapterObj } from "@/graphql/mutations";
import { listSpaceChapterObjs } from "@/graphql/queries";

function castSingle(obj: any): SpaceChapterObj {
  return obj as SpaceChapterObj;
}

function castMultiple(objs: any[]): SpaceChapterObj[] {
  return objs as SpaceChapterObj[];
}

async function getObj(key: string, value: string): Promise<SpaceChapterObj> {
  const payload = await amplifyClient.graphql({
    query: listSpaceChapterObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listSpaceChapterObjs);
}

async function getFromVariables(variables: Object): Promise<SpaceChapterObj> {
  const payload = await amplifyClient.graphql({
    query: listSpaceChapterObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listSpaceChapterObjs);
}

async function listObjs(key: string, value: string): Promise<SpaceChapterObj[]> {
  const payload = await amplifyClient.graphql({
    query: listSpaceChapterObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceChapterObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<SpaceChapterObj[]> {
  const payload = await amplifyClient.graphql({
    query: listSpaceChapterObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listSpaceChapterObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceChapterObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceChapterObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceChapterObj);
} 

async function updateObj(id: string, updateObj: Partial<SpaceChapterObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceChapterObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceChapterObj);
} 

async function overwriteObj(id: string, newObj: SpaceChapterObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceChapterObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceChapterObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceChapterObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteSpaceChapterObj);
} 

interface SpaceChapterDbWrapper {
    getObj: (key: string, value: string) => Promise<SpaceChapterObj>;
    listObjs: (key: string, value: string) => Promise<SpaceChapterObj[]>;
    createObj: (newObj: Omit<SpaceChapterObj, 'id'>) => Promise<SpaceChapterObj>;
    updateObj: (id: string, updateObj: Partial<SpaceChapterObj>) => Promise<SpaceChapterObj>;
    overwriteObj: (id: string, newObj: SpaceChapterObj) => Promise<SpaceChapterObj>;
    deleteObj: (id: string) => Promise<SpaceChapterObj>;
    getFromVariables: (variables: Object) => Promise<SpaceChapterObj>;
    listFromVariables: (variables: Object) => Promise<SpaceChapterObj[]>;
}

export const spaceChapterDbWrapper: SpaceChapterDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}