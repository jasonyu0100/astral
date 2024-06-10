import { amplifyClient } from "@/(api)/aws/graphql/main";
import { HorizonObj } from "@/(server)/(model)/horizon/main";
import { gqlArgs } from "@/(utils)/clean";
import { createHorizonObj, deleteHorizonObj, updateHorizonObj } from "@/graphql/mutations";
import { listHorizonObjs } from "@/graphql/queries";
import { GqlDbWrapper } from "../main";

function castSingle(obj: any) {
  return obj as HorizonObj;
}

function castMultiple(objs: any[]) {
  return objs as HorizonObj[];
}

async function getObj(key: string, value: string) {
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

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listHorizonObjs);
}

async function listObjs(key: string, value: string) {
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

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listHorizonObjs?.items || []);
}

async function listFromVariables(variables: Object) {
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

export const horizonDbWrapper: GqlDbWrapper<HorizonObj> = {
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