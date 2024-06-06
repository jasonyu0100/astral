import { amplifyClient } from "@/(api)/aws/graphql/main";
import { HorizonPointObj } from "@/(model)/horizon/point/main";
import { gqlArgs } from "@/(utils)/clean";
import { createHorizonPointObj, deleteHorizonPointObj, updateHorizonPointObj } from "@/graphql/mutations";
import { listHorizonPointObjs } from "@/graphql/queries";

function castSingle(obj: any): HorizonPointObj {
  return obj as HorizonPointObj;
}

function castMultiple(objs: any[]): HorizonPointObj[] {
  return objs as HorizonPointObj[];
}

async function getObj(key: string, value: string): Promise<HorizonPointObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonPointObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listHorizonPointObjs);
}

async function getFromVariables(variables: Object): Promise<HorizonPointObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonPointObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listHorizonPointObjs);
}

async function listObjs(key: string, value: string): Promise<HorizonPointObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonPointObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonPointObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<HorizonPointObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonPointObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listHorizonPointObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonPointObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonPointObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonPointObj);
} 

async function updateObj(id: string, updateObj: Partial<HorizonPointObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonPointObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonPointObj);
} 

async function overwriteObj(id: string, newObj: HorizonPointObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonPointObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonPointObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonPointObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteHorizonPointObj);
} 

interface HorizonPointDbWrapper {
    getObj: (key: string, value: string) => Promise<HorizonPointObj>;
    listObjs: (key: string, value: string) => Promise<HorizonPointObj[]>;
    createObj: (newObj: Omit<HorizonPointObj, 'id'>) => Promise<HorizonPointObj>;
    updateObj: (id: string, updateObj: Partial<HorizonPointObj>) => Promise<HorizonPointObj>;
    overwriteObj: (id: string, newObj: HorizonPointObj) => Promise<HorizonPointObj>;
    deleteObj: (id: string) => Promise<HorizonPointObj>;
    getFromVariables: (variables: Object) => Promise<HorizonPointObj>;
    listFromVariables: (variables: Object) => Promise<HorizonPointObj[]>;
}

export const horizonPointDbWrapper: HorizonPointDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}