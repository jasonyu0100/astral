import { amplifyClient } from "@/(api)/aws/graphql/main";
import { VerseMemberObj } from "@/(model)/gallery/collection/main";
import { gqlArgs } from "@/(utils)/clean";
import { createVerseMemberObj, deleteVerseMemberObj, updateVerseMemberObj } from "@/graphql/mutations";
import { listVerseMemberObjs } from "@/graphql/queries";

function castSingle(obj: any): VerseMemberObj {
  return obj as VerseMemberObj;
}

function castMultiple(objs: any[]): VerseMemberObj[] {
  return objs as VerseMemberObj[];
}

async function getObj(key: string, value: string): Promise<VerseMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listVerseMemberObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listVerseMemberObjs);
}

async function getFromVariables(variables: Object): Promise<VerseMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listVerseMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listVerseMemberObjs);
}

async function listObjs(key: string, value: string): Promise<VerseMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listVerseMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listVerseMemberObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<VerseMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listVerseMemberObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listVerseMemberObjs?.items || []);
}

async function createObj(newObj: Omit<VerseMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createVerseMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createVerseMemberObj);
} 

async function updateObj(id: string, updateObj: Partial<VerseMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateVerseMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateVerseMemberObj);
} 

async function overwriteObj(id: string, newObj: VerseMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateVerseMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateVerseMemberObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteVerseMemberObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteVerseMemberObj);
} 

interface VerseMemberDbWrapper {
    getObj: (key: string, value: string) => Promise<VerseMemberObj>;
    listObjs: (key: string, value: string) => Promise<VerseMemberObj[]>;
    createObj: (newObj: Omit<VerseMemberObj, 'id'>) => Promise<VerseMemberObj>;
    updateObj: (id: string, updateObj: Partial<VerseMemberObj>) => Promise<VerseMemberObj>;
    overwriteObj: (id: string, newObj: VerseMemberObj) => Promise<VerseMemberObj>;
    deleteObj: (id: string) => Promise<VerseMemberObj>;
    getFromVariables: (variables: Object) => Promise<VerseMemberObj>;
    listFromVariables: (variables: Object) => Promise<VerseMemberObj[]>;
}

export const verseMemberDbWrapper: VerseMemberDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}