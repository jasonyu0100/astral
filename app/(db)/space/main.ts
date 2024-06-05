import { amplifyClient } from "@/(api)/aws/graphql/main";
import { SpaceObj } from "@/(model)/space/main";
import { gqlArgs } from "@/(utils)/clean";
import { createSpaceObj, deleteSpaceObj, updateSpaceObj } from "@/graphql/mutations";
import { listSpaceObjs } from "@/graphql/queries";

function castSingle(obj: any): SpaceObj {
  return obj as SpaceObj;
}

function castMultiple(objs: any[]): SpaceObj[] {
  return objs as SpaceObj[];
}

async function getObj(key: string, value: string): Promise<SpaceObj> {
  const payload = await amplifyClient.graphql({
    query: listSpaceObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listSpaceObjs);
}

async function getFromVariables(variables: Object): Promise<SpaceObj> {
  const payload = await amplifyClient.graphql({
    query: listSpaceObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listSpaceObjs);
}

async function listObjs(key: string, value: string): Promise<SpaceObj[]> {
  const payload = await amplifyClient.graphql({
    query: listSpaceObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<SpaceObj[]> {
  const payload = await amplifyClient.graphql({
    query: listSpaceObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listSpaceObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceObj);
} 

async function updateObj(id: string, updateObj: Partial<SpaceObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceObj);
} 

async function overwriteObj(id: string, newObj: SpaceObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteSpaceObj);
} 

interface SpaceDbWrapper {
    getObj: (key: string, value: string) => Promise<SpaceObj>;
    listObjs: (key: string, value: string) => Promise<SpaceObj[]>;
    createObj: (newObj: Omit<SpaceObj, 'id'>) => Promise<SpaceObj>;
    updateObj: (id: string, updateObj: Partial<SpaceObj>) => Promise<SpaceObj>;
    overwriteObj: (id: string, newObj: SpaceObj) => Promise<SpaceObj>;
    deleteObj: (id: string) => Promise<SpaceObj>;
    getFromVariables: (variables: Object) => Promise<SpaceObj>;
    listFromVariables: (variables: Object) => Promise<SpaceObj[]>;
}

export const spaceDbWrapper: SpaceDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}