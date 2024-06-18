import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ClusterMemberObj } from '@/(server)/(model)/horizon/cluster/member/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createClusterMemberObj,
  deleteClusterMemberObj,
  updateClusterMemberObj,
} from '@/graphql/mutations';
import { getClusterMemberObj, listClusterMemberObjs } from '@/graphql/queries';

function castSingle(obj: any) {
  return obj as ClusterMemberObj;
}

function castMultiple(objs: any[]) {
  return objs as ClusterMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getClusterMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getClusterMemberObj);
}

async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getClusterMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getClusterMemberObj);
}

async function listObjs(key: string, value: string) {
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

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listClusterMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listClusterMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listClusterMemberObjs,
    variables: {},
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
        ...gqlArgs(updateObj),
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
        ...gqlArgs(newObj),
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

export const clusterMemberDbWrapper: GqlDbWrapper<ClusterMemberObj> = {
  getObj,
  listObjs,
  listAllObjs,
  createObj,
  updateObj,
  overwriteObj,
  deleteObj,
  getFromVariables,
  listFromVariables,
};
