import { amplifyClient } from "@/(api)/aws/graphql/main";
import { HorizonUpdateObj } from "@/(model)/horizon/update/main";
import { gqlArgs } from "@/(utils)/clean";
import { createHorizonUpdateObj, deleteHorizonUpdateObj, updateHorizonUpdateObj } from "@/graphql/mutations";
import { listHorizonUpdateObjs } from "@/graphql/queries";

function castSingle(obj: any): HorizonUpdateObj {
  return obj as HorizonUpdateObj;
}

function castMultiple(objs: any[]): HorizonUpdateObj[] {
  return objs as HorizonUpdateObj[];
}

async function getObj(key: string, value: string): Promise<HorizonUpdateObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listHorizonUpdateObjs);
}

async function getFromVariables(variables: Object): Promise<HorizonUpdateObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listHorizonUpdateObjs);
}

async function listObjs(key: string, value: string): Promise<HorizonUpdateObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonUpdateObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<HorizonUpdateObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listHorizonUpdateObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonUpdateObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonUpdateObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonUpdateObj);
} 

async function updateObj(id: string, updateObj: Partial<HorizonUpdateObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonUpdateObj);
} 

async function overwriteObj(id: string, newObj: HorizonUpdateObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonUpdateObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonUpdateObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteHorizonUpdateObj);
} 

interface HorizonUpdateDbWrapper {
    getObj: (key: string, value: string) => Promise<HorizonUpdateObj>;
    listObjs: (key: string, value: string) => Promise<HorizonUpdateObj[]>;
    createObj: (newObj: Omit<HorizonUpdateObj, 'id'>) => Promise<HorizonUpdateObj>;
    updateObj: (id: string, updateObj: Partial<HorizonUpdateObj>) => Promise<HorizonUpdateObj>;
    overwriteObj: (id: string, newObj: HorizonUpdateObj) => Promise<HorizonUpdateObj>;
    deleteObj: (id: string) => Promise<HorizonUpdateObj>;
    getFromVariables: (variables: Object) => Promise<HorizonUpdateObj>;
    listFromVariables: (variables: Object) => Promise<HorizonUpdateObj[]>;
}

export const horizonUpdateDbWrapper: HorizonUpdateDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}