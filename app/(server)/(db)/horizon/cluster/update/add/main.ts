import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GqlDbWrapper } from "@/(server)/(db)/main";
import { ClusterUpdateAddObj } from "@/(server)/(model)/horizon/cluster/update/add/main";
import { gqlArgs } from "@/(utils)/clean";
import { createClusterUpdateAddObj, deleteClusterUpdateAddObj, updateClusterUpdateAddObj } from "@/graphql/mutations";
import { getClusterUpdateAddObj, listClusterUpdateAddObjs } from "@/graphql/queries";

function castSingle(obj: any) {
  return obj as ClusterUpdateAddObj;
}

function castMultiple(objs: any[]) {
  return objs as ClusterUpdateAddObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: getClusterUpdateAddObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getClusterUpdateAddObj);
}

async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getClusterUpdateAddObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getClusterUpdateAddObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateAddObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listClusterUpdateAddObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateAddObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listClusterUpdateAddObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateAddObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listClusterUpdateAddObjs?.items || []);
}

async function createObj(newObj: Omit<ClusterUpdateAddObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createClusterUpdateAddObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createClusterUpdateAddObj);
} 

async function updateObj(id: string, updateObj: Partial<ClusterUpdateAddObj>) {
  const payload = await amplifyClient.graphql({
    query: updateClusterUpdateAddObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateClusterUpdateAddObj);
} 

async function overwriteObj(id: string, newObj: ClusterUpdateAddObj) {
  const payload = await amplifyClient.graphql({
    query: updateClusterUpdateAddObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateClusterUpdateAddObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteClusterUpdateAddObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteClusterUpdateAddObj);
} 

export const clusterUpdateAddDbWrapper: GqlDbWrapper<ClusterUpdateAddObj> = {
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