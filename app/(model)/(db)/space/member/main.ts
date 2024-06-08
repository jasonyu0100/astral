import { amplifyClient } from "@/(api)/aws/graphql/main";
import { SpaceMemberObj } from "@/(model)/space/member/main";
import { gqlArgs } from "@/(utils)/clean";
import { createSpaceMemberObj, deleteSpaceMemberObj, updateSpaceMemberObj } from "@/graphql/mutations";
import { listSpaceMemberObjs } from "@/graphql/queries";
import { DbWrapper } from "../../main";

function castSingle(obj: any) {
  return obj as SpaceMemberObj;
}

function castMultiple(objs: any[]) {
  return objs as SpaceMemberObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listSpaceMemberObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listSpaceMemberObjs);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listSpaceMemberObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listSpaceMemberObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceMemberObj);
} 

async function updateObj(id: string, updateObj: Partial<SpaceMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceMemberObj);
} 

async function overwriteObj(id: string, newObj: SpaceMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSpaceMemberObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceMemberObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteSpaceMemberObj);
} 

export const spaceMemberDbWrapper: DbWrapper<SpaceMemberObj> = {
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