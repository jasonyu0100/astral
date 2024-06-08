import { amplifyClient } from "@/(api)/aws/graphql/main";
import { DbWrapper } from "@/(model)/(db)/main";
import { ClusterUpdateMemberObj } from "@/(model)/horizon/cluster/update/member/main";
import { gqlArgs } from "@/(utils)/clean";
import { createClusterUpdateMemberObj, deleteClusterUpdateMemberObj, updateClusterUpdateMemberObj } from "@/graphql/mutations";
import { listClusterUpdateMemberObjs } from "@/graphql/queries";

function castSingle(obj: any) {
  return obj as ClusterUpdateMemberObj;
}

function castMultiple(objs: any[]) {
  return objs as ClusterUpdateMemberObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateMemberObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listClusterUpdateMemberObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listClusterUpdateMemberObjs);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listClusterUpdateMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateMemberObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listClusterUpdateMemberObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateMemberObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listClusterUpdateMemberObjs?.items || []);
}

async function createObj(newObj: Omit<ClusterUpdateMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createClusterUpdateMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createClusterUpdateMemberObj);
} 

async function updateObj(id: string, updateObj: Partial<ClusterUpdateMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateClusterUpdateMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateClusterUpdateMemberObj);
} 

async function overwriteObj(id: string, newObj: ClusterUpdateMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateClusterUpdateMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateClusterUpdateMemberObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteClusterUpdateMemberObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteClusterUpdateMemberObj);
} 

export const clusterUpdateMemberDbWrapper: DbWrapper<ClusterUpdateMemberObj> = {
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