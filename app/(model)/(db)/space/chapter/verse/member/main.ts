import { amplifyClient } from "@/(api)/aws/graphql/main";
import { DbWrapper } from "@/(model)/(db)/main";
import { VerseMemberObj } from "@/(model)/space/chapter/verse/member/main";
import { gqlArgs } from "@/(utils)/clean";
import { createVerseMemberObj, deleteVerseMemberObj, updateVerseMemberObj } from "@/graphql/mutations";
import { listVerseMemberObjs } from "@/graphql/queries";

function castSingle(obj: any) {
  return obj as VerseMemberObj;
}

function castMultiple(objs: any[]) {
  return objs as VerseMemberObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listVerseMemberObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listVerseMemberObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listVerseMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listVerseMemberObjs);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listVerseMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listVerseMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listVerseMemberObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listVerseMemberObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listVerseMemberObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listVerseMemberObjs?.items || []);
}

async function createObj(newObj: Omit<VerseMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createVerseMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createVerseMemberObj);
} 

async function updateObj(id: string, updateObj: Partial<VerseMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateVerseMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateVerseMemberObj);
} 

async function overwriteObj(id: string, newObj: VerseMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateVerseMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateVerseMemberObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteVerseMemberObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteVerseMemberObj);
} 

export const verseMemberDbWrapper: DbWrapper<VerseMemberObj> = {
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