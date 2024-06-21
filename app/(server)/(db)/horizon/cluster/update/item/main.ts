import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { HorizonGroupSessionUpdateObj } from '@/(server)/(model)/horizon/group/session/update/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createClusterUpdateAddObj,
  deleteClusterUpdateAddObj,
  updateClusterUpdateAddObj,
} from '@/graphql/mutations';
import {
  getClusterUpdateAddObj,
  listClusterUpdateAddObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as HorizonGroupSessionUpdateObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonGroupSessionUpdateObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getClusterUpdateAddObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getClusterUpdateAddObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    variables: {},
  });

  return castMultiple(payload?.data?.listClusterUpdateAddObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listClusterUpdateAddObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listClusterUpdateAddObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonGroupSessionUpdateObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createClusterUpdateAddObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createClusterUpdateAddObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<HorizonGroupSessionUpdateObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateClusterUpdateAddObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateClusterUpdateAddObj);
}

async function overwriteObj(id: string, newObj: HorizonGroupSessionUpdateObj) {
  const payload = await amplifyClient.graphql({
    query: updateClusterUpdateAddObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
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

export const horizonGroupSessionUpdateDbWrapper: GqlDbWrapper<HorizonGroupSessionUpdateObj> =
  {
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
