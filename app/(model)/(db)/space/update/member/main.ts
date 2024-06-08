import { amplifyClient } from "@/(api)/aws/graphql/main";
import { SpaceUpdateMemberObj } from "@/(model)/space/update/member/main";
import { gqlArgs } from "@/(utils)/clean";
import { createSpaceUpdateMemberObj, deleteSpaceUpdateMemberObj, updateSpaceUpdateMemberObj } from "@/graphql/mutations";
import { listSpaceUpdateMemberObjs } from "@/graphql/queries";

function castSingle(obj: any): SpaceUpdateMemberObj {
  return obj as SpaceUpdateMemberObj;
}

function castMultiple(objs: any[]): SpaceUpdateMemberObj[] {
  return objs as SpaceUpdateMemberObj[];
}

async function getObj(key: string, value: string): Promise<SpaceUpdateMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateMemberObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listSpaceUpdateMemberObjs);
}

async function getFromVariables(variables: Object): Promise<SpaceUpdateMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listSpaceUpdateMemberObjs);
}

async function listObjs(key: string, value: string): Promise<SpaceUpdateMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceUpdateMemberObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<SpaceUpdateMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateMemberObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listSpaceUpdateMemberObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceUpdateMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceUpdateMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceUpdateMemberObj);
} 

async function updateObj(id: string, updateObj: Partial<SpaceUpdateMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceUpdateMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceUpdateMemberObj);
} 

async function overwriteObj(id: string, newObj: SpaceUpdateMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceUpdateMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceUpdateMemberObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceUpdateMemberObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteSpaceUpdateMemberObj);
} 

interface SpaceUpdateMemberDbWrapper {
    getObj: (key: string, value: string) => Promise<SpaceUpdateMemberObj>;
    listObjs: (key: string, value: string) => Promise<SpaceUpdateMemberObj[]>;
    createObj: (newObj: Omit<SpaceUpdateMemberObj, 'id'>) => Promise<SpaceUpdateMemberObj>;
    updateObj: (id: string, updateObj: Partial<SpaceUpdateMemberObj>) => Promise<SpaceUpdateMemberObj>;
    overwriteObj: (id: string, newObj: SpaceUpdateMemberObj) => Promise<SpaceUpdateMemberObj>;
    deleteObj: (id: string) => Promise<SpaceUpdateMemberObj>;
    getFromVariables: (variables: Object) => Promise<SpaceUpdateMemberObj>;
    listFromVariables: (variables: Object) => Promise<SpaceUpdateMemberObj[]>;
}

export const spaceUpdateMemberDbWrapper: SpaceUpdateMemberDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}