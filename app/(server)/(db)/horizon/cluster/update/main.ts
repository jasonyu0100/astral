import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { HorizonGroupSessionObj } from '@/(server)/(model)/horizon/group/session/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createClusterUpdateObj,
  deleteClusterUpdateObj,
  updateClusterUpdateObj,
} from '@/graphql/mutations';
import { getClusterUpdateObj, listClusterUpdateObjs } from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as HorizonGroupSessionObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonGroupSessionObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getClusterUpdateObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getClusterUpdateObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getClusterUpdateObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getClusterUpdateObj);
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
    variables: {},
  });

  return castMultiple(payload?.data?.listClusterUpdateObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listClusterUpdateObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonGroupSessionObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createClusterUpdateObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createClusterUpdateObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<HorizonGroupSessionObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateClusterUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateClusterUpdateObj);
}

async function overwriteObj(id: string, newObj: HorizonGroupSessionObj) {
  const payload = await amplifyClient.graphql({
    query: updateClusterUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
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

export const clusterUpdateDbWrapper: GqlDbWrapper<HorizonGroupSessionObj> = {
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
