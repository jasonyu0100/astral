import { amplifyClient } from "@/(api)/aws/graphql/main";
import { HorizonUpdateMemberObj } from "@/(model)/horizon/update/member/main";
import { gqlArgs } from "@/(utils)/clean";
import { createHorizonUpdateMemberObj, deleteHorizonUpdateMemberObj, updateHorizonUpdateMemberObj } from "@/graphql/mutations";
import { listHorizonUpdateMemberObjs } from "@/graphql/queries";

function castSingle(obj: any): HorizonUpdateMemberObj {
  return obj as HorizonUpdateMemberObj;
}

function castMultiple(objs: any[]): HorizonUpdateMemberObj[] {
  return objs as HorizonUpdateMemberObj[];
}

async function getObj(key: string, value: string): Promise<HorizonUpdateMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateMemberObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listHorizonUpdateMemberObjs);
}

async function getFromVariables(variables: Object): Promise<HorizonUpdateMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listHorizonUpdateMemberObjs);
}

async function listObjs(key: string, value: string): Promise<HorizonUpdateMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonUpdateMemberObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<HorizonUpdateMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateMemberObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listHorizonUpdateMemberObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonUpdateMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonUpdateMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonUpdateMemberObj);
} 

async function updateObj(id: string, updateObj: Partial<HorizonUpdateMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonUpdateMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonUpdateMemberObj);
} 

async function overwriteObj(id: string, newObj: HorizonUpdateMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonUpdateMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonUpdateMemberObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonUpdateMemberObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteHorizonUpdateMemberObj);
} 

interface HorizonUpdateMemberDbWrapper {
    getObj: (key: string, value: string) => Promise<HorizonUpdateMemberObj>;
    listObjs: (key: string, value: string) => Promise<HorizonUpdateMemberObj[]>;
    createObj: (newObj: Omit<HorizonUpdateMemberObj, 'id'>) => Promise<HorizonUpdateMemberObj>;
    updateObj: (id: string, updateObj: Partial<HorizonUpdateMemberObj>) => Promise<HorizonUpdateMemberObj>;
    overwriteObj: (id: string, newObj: HorizonUpdateMemberObj) => Promise<HorizonUpdateMemberObj>;
    deleteObj: (id: string) => Promise<HorizonUpdateMemberObj>;
    getFromVariables: (variables: Object) => Promise<HorizonUpdateMemberObj>;
    listFromVariables: (variables: Object) => Promise<HorizonUpdateMemberObj[]>;
}

export const horizonUpdateMemberDbWrapper: HorizonUpdateMemberDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}