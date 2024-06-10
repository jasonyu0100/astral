import { amplifyClient } from "@/(api)/aws/graphql/main";
import { HorizonUpdateObj } from "@/(server)/(model)/horizon/update/main";
import { gqlArgs } from "@/(utils)/clean";
import { createHorizonUpdateObj, deleteHorizonUpdateObj, updateHorizonUpdateObj } from "@/graphql/mutations";
import { listHorizonUpdateObjs } from "@/graphql/queries";
import { GqlDbWrapper } from "../../main";

function castSingle(obj: any) {
  return obj as HorizonUpdateObj;
}

function castMultiple(objs: any[]) {
  return objs as HorizonUpdateObj[];
}

async function getObj(key: string, value: string) {
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

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listHorizonUpdateObjs);
}

async function listObjs(key: string, value: string) {
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

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listHorizonUpdateObjs?.items || []);
}

async function listFromVariables(variables: Object) {
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

export const horizonUpdateDbWrapper: GqlDbWrapper<HorizonUpdateObj> = {
    getObj,
    listObjs,
    listAllObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}