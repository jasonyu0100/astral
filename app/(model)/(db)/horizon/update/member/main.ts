import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GqlDbWrapper } from "@/(model)/(db)/main";
import { HorizonUpdateMemberObj } from "@/(model)/horizon/update/member/main";
import { gqlArgs } from "@/(utils)/clean";
import { createHorizonUpdateMemberObj, deleteHorizonUpdateMemberObj, updateHorizonUpdateMemberObj } from "@/graphql/mutations";
import { listHorizonUpdateMemberObjs } from "@/graphql/queries";

function castSingle(obj: any) {
  return obj as HorizonUpdateMemberObj;
}

function castMultiple(objs: any[]) {
  return objs as HorizonUpdateMemberObj[];
}

async function getObj(key: string, value: string) {
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

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listHorizonUpdateMemberObjs);
}

async function listObjs(key: string, value: string) {
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

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateMemberObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listHorizonUpdateMemberObjs?.items || []);
}

async function listFromVariables(variables: Object) {
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

export const horizonUpdateMemberDbWrapper: GqlDbWrapper<HorizonUpdateMemberObj> = {
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