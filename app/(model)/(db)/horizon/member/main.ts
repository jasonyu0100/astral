import { amplifyClient } from "@/(api)/aws/graphql/main";
import { HorizonMemberObj } from "@/(model)/gallery/collection/main";
import { gqlArgs } from "@/(utils)/clean";
import { createHorizonMemberObj, deleteHorizonMemberObj, updateHorizonMemberObj } from "@/graphql/mutations";
import { listHorizonMemberObjs } from "@/graphql/queries";

function castSingle(obj: any): HorizonMemberObj {
  return obj as HorizonMemberObj;
}

function castMultiple(objs: any[]): HorizonMemberObj[] {
  return objs as HorizonMemberObj[];
}

async function getObj(key: string, value: string): Promise<HorizonMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonMemberObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listHorizonMemberObjs);
}

async function getFromVariables(variables: Object): Promise<HorizonMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listHorizonMemberObjs);
}

async function listObjs(key: string, value: string): Promise<HorizonMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonMemberObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<HorizonMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonMemberObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listHorizonMemberObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonMemberObj);
} 

async function updateObj(id: string, updateObj: Partial<HorizonMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonMemberObj);
} 

async function overwriteObj(id: string, newObj: HorizonMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonMemberObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonMemberObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteHorizonMemberObj);
} 

interface HorizonMemberDbWrapper {
    getObj: (key: string, value: string) => Promise<HorizonMemberObj>;
    listObjs: (key: string, value: string) => Promise<HorizonMemberObj[]>;
    createObj: (newObj: Omit<HorizonMemberObj, 'id'>) => Promise<HorizonMemberObj>;
    updateObj: (id: string, updateObj: Partial<HorizonMemberObj>) => Promise<HorizonMemberObj>;
    overwriteObj: (id: string, newObj: HorizonMemberObj) => Promise<HorizonMemberObj>;
    deleteObj: (id: string) => Promise<HorizonMemberObj>;
    getFromVariables: (variables: Object) => Promise<HorizonMemberObj>;
    listFromVariables: (variables: Object) => Promise<HorizonMemberObj[]>;
}

export const horizonMemberDbWrapper: HorizonMemberDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}