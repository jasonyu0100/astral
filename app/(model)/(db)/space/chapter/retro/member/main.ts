import { amplifyClient } from "@/(api)/aws/graphql/main";
import { RetroMemberObj } from "@/(model)/gallery/collection/main";
import { gqlArgs } from "@/(utils)/clean";
import { createRetroMemberObj, deleteRetroMemberObj, updateRetroMemberObj } from "@/graphql/mutations";
import { listRetroMemberObjs } from "@/graphql/queries";

function castSingle(obj: any): RetroMemberObj {
  return obj as RetroMemberObj;
}

function castMultiple(objs: any[]): RetroMemberObj[] {
  return objs as RetroMemberObj[];
}

async function getObj(key: string, value: string): Promise<RetroMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listRetroMemberObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listRetroMemberObjs);
}

async function getFromVariables(variables: Object): Promise<RetroMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listRetroMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listRetroMemberObjs);
}

async function listObjs(key: string, value: string): Promise<RetroMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listRetroMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listRetroMemberObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<RetroMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listRetroMemberObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listRetroMemberObjs?.items || []);
}

async function createObj(newObj: Omit<RetroMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createRetroMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createRetroMemberObj);
} 

async function updateObj(id: string, updateObj: Partial<RetroMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateRetroMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateRetroMemberObj);
} 

async function overwriteObj(id: string, newObj: RetroMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateRetroMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateRetroMemberObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteRetroMemberObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteRetroMemberObj);
} 

interface RetroMemberDbWrapper {
    getObj: (key: string, value: string) => Promise<RetroMemberObj>;
    listObjs: (key: string, value: string) => Promise<RetroMemberObj[]>;
    createObj: (newObj: Omit<RetroMemberObj, 'id'>) => Promise<RetroMemberObj>;
    updateObj: (id: string, updateObj: Partial<RetroMemberObj>) => Promise<RetroMemberObj>;
    overwriteObj: (id: string, newObj: RetroMemberObj) => Promise<RetroMemberObj>;
    deleteObj: (id: string) => Promise<RetroMemberObj>;
    getFromVariables: (variables: Object) => Promise<RetroMemberObj>;
    listFromVariables: (variables: Object) => Promise<RetroMemberObj[]>;
}

export const retroMemberDbWrapper: RetroMemberDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}