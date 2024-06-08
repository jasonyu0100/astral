import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GqlDbWrapper } from "@/(model)/(db)/main";
import { HorizonUpdateAddObj } from "@/(model)/horizon/update/add/main";
import { gqlArgs } from "@/(utils)/clean";
import { createHorizonUpdateAddObj, deleteHorizonUpdateAddObj, updateHorizonUpdateAddObj } from "@/graphql/mutations";
import { listHorizonUpdateAddObjs } from "@/graphql/queries";

function castSingle(obj: any) {
  return obj as HorizonUpdateAddObj;
}

function castMultiple(objs: any[]) {
  return objs as HorizonUpdateAddObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateAddObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listHorizonUpdateAddObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateAddObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listHorizonUpdateAddObjs);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateAddObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonUpdateAddObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateAddObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listHorizonUpdateAddObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateAddObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listHorizonUpdateAddObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonUpdateAddObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonUpdateAddObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonUpdateAddObj);
} 

async function updateObj(id: string, updateObj: Partial<HorizonUpdateAddObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonUpdateAddObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonUpdateAddObj);
} 

async function overwriteObj(id: string, newObj: HorizonUpdateAddObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonUpdateAddObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateHorizonUpdateAddObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonUpdateAddObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteHorizonUpdateAddObj);
} 

export const horizonUpdateAddDbWrapper: GqlDbWrapper<HorizonUpdateAddObj> = {
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