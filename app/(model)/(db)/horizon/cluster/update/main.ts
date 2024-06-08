import { amplifyClient } from "@/(api)/aws/graphql/main";
import { DbWrapper } from "@/(model)/(db)/main";
import { ClusterUpdateObj } from "@/(model)/horizon/cluster/update/main";
import { gqlArgs } from "@/(utils)/clean";
import { createClusterUpdateObj, deleteClusterUpdateObj, updateClusterUpdateObj } from "@/graphql/mutations";
import { listClusterUpdateObjs } from "@/graphql/queries";

function castSingle(obj: any) {
  return obj as ClusterUpdateObj;
}

function castMultiple(objs: any[]) {
  return objs as ClusterUpdateObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listClusterUpdateObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listClusterUpdateObjs);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listClusterUpdateObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listClusterUpdateObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listClusterUpdateObjs?.items || []);
}

async function createObj(newObj: Omit<ClusterUpdateObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createClusterUpdateObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createClusterUpdateObj);
} 

async function updateObj(id: string, updateObj: Partial<ClusterUpdateObj>) {
  const payload = await amplifyClient.graphql({
    query: updateClusterUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateClusterUpdateObj);
} 

async function overwriteObj(id: string, newObj: ClusterUpdateObj) {
  const payload = await amplifyClient.graphql({
    query: updateClusterUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateClusterUpdateObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteClusterUpdateObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteClusterUpdateObj);
} 

export const clusterUpdateDbWrapper: DbWrapper<ClusterUpdateObj> = {
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