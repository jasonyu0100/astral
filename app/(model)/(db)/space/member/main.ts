import { amplifyClient } from "@/(api)/aws/graphql/main";
import { SpaceMemberObj } from "@/(model)/space/member/main";
import { gqlArgs } from "@/(utils)/clean";
import { createSpaceMemberObj, deleteSpaceMemberObj, updateSpaceMemberObj } from "@/graphql/mutations";
import { listSpaceMemberObjs } from "@/graphql/queries";

function castSingle(obj: any): SpaceMemberObj {
  return obj as SpaceMemberObj;
}

function castMultiple(objs: any[]): SpaceMemberObj[] {
  return objs as SpaceMemberObj[];
}

async function getObj(key: string, value: string): Promise<SpaceMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listSpaceMemberObjs);
}

async function getFromVariables(variables: Object): Promise<SpaceMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listSpaceMemberObjs);
}

async function listObjs(key: string, value: string): Promise<SpaceMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceMemberObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<SpaceMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listSpaceMemberObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceMemberObj);
} 

async function updateObj(id: string, updateObj: Partial<SpaceMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceMemberObj);
} 

async function overwriteObj(id: string, newObj: SpaceMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceMemberObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceMemberObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteSpaceMemberObj);
} 

interface SpaceMemberDbWrapper {
    getObj: (key: string, value: string) => Promise<SpaceMemberObj>;
    listObjs: (key: string, value: string) => Promise<SpaceMemberObj[]>;
    createObj: (newObj: Omit<SpaceMemberObj, 'id'>) => Promise<SpaceMemberObj>;
    updateObj: (id: string, updateObj: Partial<SpaceMemberObj>) => Promise<SpaceMemberObj>;
    overwriteObj: (id: string, newObj: SpaceMemberObj) => Promise<SpaceMemberObj>;
    deleteObj: (id: string) => Promise<SpaceMemberObj>;
    getFromVariables: (variables: Object) => Promise<SpaceMemberObj>;
    listFromVariables: (variables: Object) => Promise<SpaceMemberObj[]>;
}

export const spaceMemberDbWrapper: SpaceMemberDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}