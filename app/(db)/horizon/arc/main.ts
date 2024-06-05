import { amplifyClient } from "@/(api)/aws/graphql/main";
import { HorizonArcObj } from "@/(model)/horizon/arc/main";
import { gqlArgs } from "@/(utils)/clean";
import { createHorizonArcObj, deleteHorizonArcObj, updateHorizonArcObj } from "@/graphql/mutations";
import { listHorizonArcObjs } from "@/graphql/queries";

function castSingle(obj: any): HorizonArcObj {
  return obj as HorizonArcObj;
}

function castMultiple(objs: any[]): HorizonArcObj[] {
  return objs as HorizonArcObj[];
}

async function getObj(key: string, value: string): Promise<HorizonArcObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonArcObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listHorizonArcObjs);
}

async function getFromVariables(variables: Object): Promise<HorizonArcObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonArcObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listHorizonArcObjs);
}

async function listObjs(key: string, value: string): Promise<HorizonArcObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonArcObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonArcObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<HorizonArcObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonArcObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listHorizonArcObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonArcObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonArcObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonArcObj);
} 

async function updateObj(id: string, updateObj: Partial<HorizonArcObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonArcObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonArcObj);
} 

async function overwriteObj(id: string, newObj: HorizonArcObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonArcObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonArcObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonArcObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteHorizonArcObj);
} 

interface HorizonArcDbWrapper {
    getObj: (key: string, value: string) => Promise<HorizonArcObj>;
    listObjs: (key: string, value: string) => Promise<HorizonArcObj[]>;
    createObj: (newObj: Omit<HorizonArcObj, 'id'>) => Promise<HorizonArcObj>;
    updateObj: (id: string, updateObj: Partial<HorizonArcObj>) => Promise<HorizonArcObj>;
    overwriteObj: (id: string, newObj: HorizonArcObj) => Promise<HorizonArcObj>;
    deleteObj: (id: string) => Promise<HorizonArcObj>;
    getFromVariables: (variables: Object) => Promise<HorizonArcObj>;
    listFromVariables: (variables: Object) => Promise<HorizonArcObj[]>;
}

export const horizonarcDbWrapper: HorizonArcDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}