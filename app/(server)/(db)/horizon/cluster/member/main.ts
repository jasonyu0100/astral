import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { HorizonGroupMemberObj } from '@/(server)/(model)/horizon/group/member/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createClusterMemberObj,
  deleteClusterMemberObj,
  updateClusterMemberObj,
} from '@/graphql/mutations';
import { getClusterMemberObj, listClusterMemberObjs } from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as HorizonGroupMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonGroupMemberObj[];
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

async function listFromVariables(variables: object) {
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

async function createObj(newObj: Omit<HorizonGroupMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createClusterMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createClusterMemberObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<HorizonGroupMemberObj>,
) {
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

async function overwriteObj(id: string, newObj: HorizonGroupMemberObj) {
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

export const clusterMemberDbWrapper: GqlDbWrapper<HorizonGroupMemberObj> = {
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
