import { amplifyClient } from "@/(api)/aws/graphql/main";
import { HorizonClusterObj } from "@/(model)/horizon/cluster/main";
import { gqlArgs } from "@/(utils)/clean";
import { createHorizonClusterObj, deleteHorizonClusterObj, updateHorizonClusterObj } from "@/graphql/mutations";
import { listHorizonClusterObjs } from "@/graphql/queries";

function castSingle(obj: any): HorizonClusterObj {
  return obj as HorizonClusterObj;
}

function castMultiple(objs: any[]): HorizonClusterObj[] {
  return objs as HorizonClusterObj[];
}

async function getObj(key: string, value: string): Promise<HorizonClusterObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonClusterObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listHorizonClusterObjs);
}

async function getFromVariables(variables: Object): Promise<HorizonClusterObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonClusterObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listHorizonClusterObjs);
}

async function listObjs(key: string, value: string): Promise<HorizonClusterObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonClusterObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonClusterObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<HorizonClusterObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonClusterObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listHorizonClusterObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonClusterObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonClusterObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonClusterObj);
} 

async function updateObj(id: string, updateObj: Partial<HorizonClusterObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonClusterObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonClusterObj);
} 

async function overwriteObj(id: string, newObj: HorizonClusterObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonClusterObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonClusterObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonClusterObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteHorizonClusterObj);
} 

interface HorizonClusterDbWrapper {
    getObj: (key: string, value: string) => Promise<HorizonClusterObj>;
    listObjs: (key: string, value: string) => Promise<HorizonClusterObj[]>;
    createObj: (newObj: Omit<HorizonClusterObj, 'id'>) => Promise<HorizonClusterObj>;
    updateObj: (id: string, updateObj: Partial<HorizonClusterObj>) => Promise<HorizonClusterObj>;
    overwriteObj: (id: string, newObj: HorizonClusterObj) => Promise<HorizonClusterObj>;
    deleteObj: (id: string) => Promise<HorizonClusterObj>;
    getFromVariables: (variables: Object) => Promise<HorizonClusterObj>;
    listFromVariables: (variables: Object) => Promise<HorizonClusterObj[]>;
}

export const horizonclusterDbWrapper: HorizonClusterDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}