import { amplifyClient } from "@/(api)/aws/graphql/main";
import { ClusterMemberObj } from "@/(model)/horizon/cluster/member/main";
import { gqlArgs } from "@/(utils)/clean";
import { createClusterMemberObj, deleteClusterMemberObj, updateClusterMemberObj } from "@/graphql/mutations";
import { listClusterMemberObjs } from "@/graphql/queries";

function castSingle(obj: any): ClusterMemberObj {
  return obj as ClusterMemberObj;
}

function castMultiple(objs: any[]): ClusterMemberObj[] {
  return objs as ClusterMemberObj[];
}

async function getObj(key: string, value: string): Promise<ClusterMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listClusterMemberObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listClusterMemberObjs);
}

async function getFromVariables(variables: Object): Promise<ClusterMemberObj> {
  const payload = await amplifyClient.graphql({
    query: listClusterMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listClusterMemberObjs);
}

async function listObjs(key: string, value: string): Promise<ClusterMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listClusterMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listClusterMemberObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<ClusterMemberObj[]> {
  const payload = await amplifyClient.graphql({
    query: listClusterMemberObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listClusterMemberObjs?.items || []);
}

async function createObj(newObj: Omit<ClusterMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createClusterMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createClusterMemberObj);
} 

async function updateObj(id: string, updateObj: Partial<ClusterMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateClusterMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateClusterMemberObj);
} 

async function overwriteObj(id: string, newObj: ClusterMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateClusterMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateClusterMemberObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteClusterMemberObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteClusterMemberObj);
} 

interface ClusterMemberDbWrapper {
    getObj: (key: string, value: string) => Promise<ClusterMemberObj>;
    listObjs: (key: string, value: string) => Promise<ClusterMemberObj[]>;
    createObj: (newObj: Omit<ClusterMemberObj, 'id'>) => Promise<ClusterMemberObj>;
    updateObj: (id: string, updateObj: Partial<ClusterMemberObj>) => Promise<ClusterMemberObj>;
    overwriteObj: (id: string, newObj: ClusterMemberObj) => Promise<ClusterMemberObj>;
    deleteObj: (id: string) => Promise<ClusterMemberObj>;
    getFromVariables: (variables: Object) => Promise<ClusterMemberObj>;
    listFromVariables: (variables: Object) => Promise<ClusterMemberObj[]>;
}

export const clusterMemberDbWrapper: ClusterMemberDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}