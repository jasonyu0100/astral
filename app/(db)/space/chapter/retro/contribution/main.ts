import { amplifyClient } from "@/(api)/aws/graphql/main";
import { RetroContributionObj } from "@/(model)/space/chapter/retro/contribution/main";
import { gqlArgs } from "@/(utils)/clean";
import { createRetroContributionObj, deleteRetroContributionObj, updateRetroContributionObj } from "@/graphql/mutations";
import { listRetroContributionObjs } from "@/graphql/queries";

function castSingle(obj: any): RetroContributionObj {
  return obj as RetroContributionObj;
}

function castMultiple(objs: any[]): RetroContributionObj[] {
  return objs as RetroContributionObj[];
}

async function getObj(key: string, value: string): Promise<RetroContributionObj> {
  const payload = await amplifyClient.graphql({
    query: listRetroContributionObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listRetroContributionObjs);
}

async function getFromVariables(variables: Object): Promise<RetroContributionObj> {
  const payload = await amplifyClient.graphql({
    query: listRetroContributionObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listRetroContributionObjs);
}

async function listObjs(key: string, value: string): Promise<RetroContributionObj[]> {
  const payload = await amplifyClient.graphql({
    query: listRetroContributionObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listRetroContributionObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<RetroContributionObj[]> {
  const payload = await amplifyClient.graphql({
    query: listRetroContributionObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listRetroContributionObjs?.items || []);
}

async function createObj(newObj: Omit<RetroContributionObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createRetroContributionObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createRetroContributionObj);
} 

async function updateObj(id: string, updateObj: Partial<RetroContributionObj>) {
  const payload = await amplifyClient.graphql({
    query: updateRetroContributionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateRetroContributionObj);
} 

async function overwriteObj(id: string, newObj: RetroContributionObj) {
  const payload = await amplifyClient.graphql({
    query: updateRetroContributionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateRetroContributionObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteRetroContributionObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteRetroContributionObj);
} 

interface RetroContributionDbWrapper {
    getObj: (key: string, value: string) => Promise<RetroContributionObj>;
    listObjs: (key: string, value: string) => Promise<RetroContributionObj[]>;
    createObj: (newObj: Omit<RetroContributionObj, 'id'>) => Promise<RetroContributionObj>;
    updateObj: (id: string, updateObj: Partial<RetroContributionObj>) => Promise<RetroContributionObj>;
    overwriteObj: (id: string, newObj: RetroContributionObj) => Promise<RetroContributionObj>;
    deleteObj: (id: string) => Promise<RetroContributionObj>;
    getFromVariables: (variables: Object) => Promise<RetroContributionObj>;
    listFromVariables: (variables: Object) => Promise<RetroContributionObj[]>;
}

export const retroContributionDbWrapper: RetroContributionDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}