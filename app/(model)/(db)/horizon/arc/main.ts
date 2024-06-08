import { amplifyClient } from "@/(api)/aws/graphql/main";
import { HorizonArcObj } from "@/(model)/horizon/arc/main";
import { gqlArgs } from "@/(utils)/clean";
import { createHorizonArcObj, deleteHorizonArcObj, updateHorizonArcObj } from "@/graphql/mutations";
import { listHorizonArcObjs } from "@/graphql/queries";
import { GqlDbWrapper } from "../../main";

function castSingle(obj: any) {
  return obj as HorizonArcObj;
}

function castMultiple(objs: any[]) {
  return objs as HorizonArcObj[];
}

async function getObj(key: string, value: string) {
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

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonArcObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listHorizonArcObjs);
}

async function listObjs(key: string, value: string) {
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

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonArcObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listHorizonArcObjs?.items || []);
}

async function listFromVariables(variables: Object) {
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

export const horizonArcDbWrapper: GqlDbWrapper<HorizonArcObj> = {
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