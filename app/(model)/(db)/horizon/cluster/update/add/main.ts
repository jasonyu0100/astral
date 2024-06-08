import { amplifyClient } from "@/(api)/aws/graphql/main";
import { ClusterUpdateAddObj } from "@/(model)/horizon/cluster/update/add/main";
import { gqlArgs } from "@/(utils)/clean";
import { createClusterUpdateAddObj, deleteClusterUpdateAddObj, updateClusterUpdateAddObj } from "@/graphql/mutations";
import { listClusterUpdateAddObjs } from "@/graphql/queries";

function castSingle(obj: any): ClusterUpdateAddObj {
  return obj as ClusterUpdateAddObj;
}

function castMultiple(objs: any[]): ClusterUpdateAddObj[] {
  return objs as ClusterUpdateAddObj[];
}

async function getObj(key: string, value: string): Promise<ClusterUpdateAddObj> {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateAddObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listClusterUpdateAddObjs);
}

async function getFromVariables(variables: Object): Promise<ClusterUpdateAddObj> {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateAddObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listClusterUpdateAddObjs);
}

async function listObjs(key: string, value: string): Promise<ClusterUpdateAddObj[]> {
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

async function listFromVariables(variables: Object): Promise<ClusterUpdateAddObj[]> {
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

interface ClusterUpdateAddDbWrapper {
    getObj: (key: string, value: string) => Promise<ClusterUpdateAddObj>;
    listObjs: (key: string, value: string) => Promise<ClusterUpdateAddObj[]>;
    createObj: (newObj: Omit<ClusterUpdateAddObj, 'id'>) => Promise<ClusterUpdateAddObj>;
    updateObj: (id: string, updateObj: Partial<ClusterUpdateAddObj>) => Promise<ClusterUpdateAddObj>;
    overwriteObj: (id: string, newObj: ClusterUpdateAddObj) => Promise<ClusterUpdateAddObj>;
    deleteObj: (id: string) => Promise<ClusterUpdateAddObj>;
    getFromVariables: (variables: Object) => Promise<ClusterUpdateAddObj>;
    listFromVariables: (variables: Object) => Promise<ClusterUpdateAddObj[]>;
}

export const clusterUpdateAddDbWrapper: ClusterUpdateAddDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}