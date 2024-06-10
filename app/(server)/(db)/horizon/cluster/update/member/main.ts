import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GqlDbWrapper } from "@/(server)/(db)/main";
import { ClusterUpdateMemberObj } from "@/(server)/(model)/horizon/cluster/update/member/main";
import { gqlArgs } from "@/(utils)/clean";
import { createClusterUpdateMemberObj, deleteClusterUpdateMemberObj, updateClusterUpdateMemberObj } from "@/graphql/mutations";
import { getClusterUpdateMemberObj, listClusterUpdateMemberObjs } from "@/graphql/queries";

function castSingle(obj: any) {
  return obj as ClusterUpdateMemberObj;
}

function castMultiple(objs: any[]) {
  return objs as ClusterUpdateMemberObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: getClusterUpdateMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getClusterUpdateMemberObj);
}

async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getClusterUpdateMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getClusterUpdateMemberObj);
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

export const clusterUpdateMemberDbWrapper: GqlDbWrapper<ClusterUpdateMemberObj> = {
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