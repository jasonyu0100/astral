import { amplifyClient } from "@/(api)/aws/graphql/main";
import { SpaceUpdateObj } from "@/(model)/space/update/main";
import { gqlArgs } from "@/(utils)/clean";
import { createSpaceUpdateObj, deleteSpaceUpdateObj, updateSpaceUpdateObj } from "@/graphql/mutations";
import { listSpaceUpdateObjs } from "@/graphql/queries";
import { DbWrapper } from "../../main";

function castSingle(obj: any) {
  return obj as SpaceUpdateObj;
}

function castMultiple(objs: any[]) {
  return objs as SpaceUpdateObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listSpaceUpdateObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listSpaceUpdateObjs);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceUpdateObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listSpaceUpdateObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listSpaceUpdateObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceUpdateObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceUpdateObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceUpdateObj);
} 

async function updateObj(id: string, updateObj: Partial<SpaceUpdateObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceUpdateObj);
} 

async function overwriteObj(id: string, newObj: SpaceUpdateObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceUpdateObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceUpdateObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteSpaceUpdateObj);
} 

export const spaceUpdateDbWrapper: DbWrapper<SpaceUpdateObj> = {
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