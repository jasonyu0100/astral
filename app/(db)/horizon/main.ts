import { amplifyClient } from "@/(api)/aws/graphql/main";
import { HorizonObj } from "@/(model)/horizon/main";
import { gqlArgs } from "@/(utils)/clean";
import { createHorizonObj, deleteHorizonObj, updateHorizonObj } from "@/graphql/mutations";
import { listHorizonObjs } from "@/graphql/queries";

function castSingle(obj: any): HorizonObj {
  return obj as HorizonObj;
}

function castMultiple(objs: any[]): HorizonObj[] {
  return objs as HorizonObj[];
}

async function getObj(key: string, value: string): Promise<HorizonObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listHorizonObjs);
}

async function getFromVariables(variables: Object): Promise<HorizonObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listHorizonObjs);
}

async function listObjs(key: string, value: string): Promise<HorizonObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<HorizonObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listHorizonObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonObj);
} 

async function updateObj(id: string, updateObj: Partial<HorizonObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonObj);
} 

async function overwriteObj(id: string, newObj: HorizonObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteHorizonObj);
} 

interface HorizonDbWrapper {
    getObj: (key: string, value: string) => Promise<HorizonObj>;
    listObjs: (key: string, value: string) => Promise<HorizonObj[]>;
    createObj: (newObj: Omit<HorizonObj, 'id'>) => Promise<HorizonObj>;
    updateObj: (id: string, updateObj: Partial<HorizonObj>) => Promise<HorizonObj>;
    overwriteObj: (id: string, newObj: HorizonObj) => Promise<HorizonObj>;
    deleteObj: (id: string) => Promise<HorizonObj>;
    getFromVariables: (variables: Object) => Promise<HorizonObj>;
    listFromVariables: (variables: Object) => Promise<HorizonObj[]>;
}

export const horizonDbWrapper: HorizonDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}