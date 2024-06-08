import { amplifyClient } from "@/(api)/aws/graphql/main";
import { HorizonMemberObj } from "@/(model)/horizon/member/main";
import { gqlArgs } from "@/(utils)/clean";
import { createHorizonMemberObj, deleteHorizonMemberObj, updateHorizonMemberObj } from "@/graphql/mutations";
import { listHorizonMemberObjs } from "@/graphql/queries";
import { DbWrapper } from "../../main";

function castSingle(obj: any) {
  return obj as HorizonMemberObj;
}

function castMultiple(objs: any[]) {
  return objs as HorizonMemberObj[];
}

async function getObj(key: string, value: string) {
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

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listHorizonMemberObjs);
}

async function listObjs(key: string, value: string) {
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

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonMemberObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listHorizonMemberObjs?.items || []);
}

async function listFromVariables(variables: Object) {
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

export const horizonMemberDbWrapper: DbWrapper<HorizonMemberObj> = {
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