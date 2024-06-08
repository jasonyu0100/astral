import { amplifyClient } from "@/(api)/aws/graphql/main";
import { SpaceUpdateAddObj } from "@/(model)/space/update/add/main";
import { gqlArgs } from "@/(utils)/clean";
import { createSpaceUpdateAddObj, deleteSpaceUpdateAddObj, updateSpaceUpdateAddObj } from "@/graphql/mutations";
import { listSpaceUpdateAddObjs } from "@/graphql/queries";

function castSingle(obj: any): SpaceUpdateAddObj {
  return obj as SpaceUpdateAddObj;
}

function castMultiple(objs: any[]): SpaceUpdateAddObj[] {
  return objs as SpaceUpdateAddObj[];
}

async function getObj(key: string, value: string): Promise<SpaceUpdateAddObj> {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateAddObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listSpaceUpdateAddObjs);
}

async function getFromVariables(variables: Object): Promise<SpaceUpdateAddObj> {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateAddObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listSpaceUpdateAddObjs);
}

async function listObjs(key: string, value: string): Promise<SpaceUpdateAddObj[]> {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateAddObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceUpdateAddObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<SpaceUpdateAddObj[]> {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateAddObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listSpaceUpdateAddObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceUpdateAddObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceUpdateAddObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceUpdateAddObj);
} 

async function updateObj(id: string, updateObj: Partial<SpaceUpdateAddObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceUpdateAddObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceUpdateAddObj);
} 

async function overwriteObj(id: string, newObj: SpaceUpdateAddObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceUpdateAddObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceUpdateAddObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceUpdateAddObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteSpaceUpdateAddObj);
} 

interface SpaceUpdateAddDbWrapper {
    getObj: (key: string, value: string) => Promise<SpaceUpdateAddObj>;
    listObjs: (key: string, value: string) => Promise<SpaceUpdateAddObj[]>;
    createObj: (newObj: Omit<SpaceUpdateAddObj, 'id'>) => Promise<SpaceUpdateAddObj>;
    updateObj: (id: string, updateObj: Partial<SpaceUpdateAddObj>) => Promise<SpaceUpdateAddObj>;
    overwriteObj: (id: string, newObj: SpaceUpdateAddObj) => Promise<SpaceUpdateAddObj>;
    deleteObj: (id: string) => Promise<SpaceUpdateAddObj>;
    getFromVariables: (variables: Object) => Promise<SpaceUpdateAddObj>;
    listFromVariables: (variables: Object) => Promise<SpaceUpdateAddObj[]>;
}

export const spaceUpdateAddDbWrapper: SpaceUpdateAddDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}