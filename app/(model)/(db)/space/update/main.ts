import { amplifyClient } from "@/(api)/aws/graphql/main";
import { SpaceUpdateObj } from "@/(model)/space/update/main";
import { gqlArgs } from "@/(utils)/clean";
import { createSpaceUpdateObj, deleteSpaceUpdateObj, updateSpaceUpdateObj } from "@/graphql/mutations";
import { listSpaceUpdateObjs } from "@/graphql/queries";

function castSingle(obj: any): SpaceUpdateObj {
  return obj as SpaceUpdateObj;
}

function castMultiple(objs: any[]): SpaceUpdateObj[] {
  return objs as SpaceUpdateObj[];
}

async function getObj(key: string, value: string): Promise<SpaceUpdateObj> {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listSpaceUpdateObjs);
}

async function getFromVariables(variables: Object): Promise<SpaceUpdateObj> {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listSpaceUpdateObjs);
}

async function listObjs(key: string, value: string): Promise<SpaceUpdateObj[]> {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceUpdateObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<SpaceUpdateObj[]> {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listSpaceUpdateObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceUpdateObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceUpdateObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceUpdateObj);
} 

async function updateObj(id: string, updateObj: Partial<SpaceUpdateObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceUpdateObj);
} 

async function overwriteObj(id: string, newObj: SpaceUpdateObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceUpdateObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceUpdateObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteSpaceUpdateObj);
} 

interface SpaceUpdateDbWrapper {
    getObj: (key: string, value: string) => Promise<SpaceUpdateObj>;
    listObjs: (key: string, value: string) => Promise<SpaceUpdateObj[]>;
    createObj: (newObj: Omit<SpaceUpdateObj, 'id'>) => Promise<SpaceUpdateObj>;
    updateObj: (id: string, updateObj: Partial<SpaceUpdateObj>) => Promise<SpaceUpdateObj>;
    overwriteObj: (id: string, newObj: SpaceUpdateObj) => Promise<SpaceUpdateObj>;
    deleteObj: (id: string) => Promise<SpaceUpdateObj>;
    getFromVariables: (variables: Object) => Promise<SpaceUpdateObj>;
    listFromVariables: (variables: Object) => Promise<SpaceUpdateObj[]>;
}

export const spaceUpdateDbWrapper: SpaceUpdateDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}