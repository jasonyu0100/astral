import { amplifyClient } from "@/(api)/aws/graphql/main";
import { HorizonForumObj } from "@/(model)/horizon/forum/main";
import { gqlArgs } from "@/(utils)/clean";
import { createHorizonForumObj, deleteHorizonForumObj, updateHorizonForumObj } from "@/graphql/mutations";
import { listHorizonForumObjs } from "@/graphql/queries";

function castSingle(obj: any): HorizonForumObj {
  return obj as HorizonForumObj;
}

function castMultiple(objs: any[]): HorizonForumObj[] {
  return objs as HorizonForumObj[];
}

async function getObj(key: string, value: string): Promise<HorizonForumObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonForumObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listHorizonForumObjs);
}

async function getFromVariables(variables: Object): Promise<HorizonForumObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonForumObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listHorizonForumObjs);
}

async function listObjs(key: string, value: string): Promise<HorizonForumObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonForumObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonForumObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<HorizonForumObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonForumObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listHorizonForumObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonForumObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonForumObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonForumObj);
} 

async function updateObj(id: string, updateObj: Partial<HorizonForumObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonForumObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonForumObj);
} 

async function overwriteObj(id: string, newObj: HorizonForumObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonForumObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonForumObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonForumObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteHorizonForumObj);
} 

interface HorizonForumDbWrapper {
    getObj: (key: string, value: string) => Promise<HorizonForumObj>;
    listObjs: (key: string, value: string) => Promise<HorizonForumObj[]>;
    createObj: (newObj: Omit<HorizonForumObj, 'id'>) => Promise<HorizonForumObj>;
    updateObj: (id: string, updateObj: Partial<HorizonForumObj>) => Promise<HorizonForumObj>;
    overwriteObj: (id: string, newObj: HorizonForumObj) => Promise<HorizonForumObj>;
    deleteObj: (id: string) => Promise<HorizonForumObj>;
    getFromVariables: (variables: Object) => Promise<HorizonForumObj>;
    listFromVariables: (variables: Object) => Promise<HorizonForumObj[]>;
}

export const horizonforumDbWrapper: HorizonForumDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}