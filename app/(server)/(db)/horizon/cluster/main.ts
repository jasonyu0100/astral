import { amplifyClient } from '@/(api)/aws/graphql/main';
import { HorizonGroupObj } from '@/(server)/(model)/horizon/group/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createHorizonClusterObj,
  deleteHorizonClusterObj,
  updateHorizonClusterObj,
} from '@/graphql/mutations';
import {
  getHorizonClusterObj,
  listHorizonClusterObjs,
} from '@/graphql/queries';
import { GqlDbWrapper } from '../../main';

function castSingle(obj: unknown) {
  return obj as HorizonGroupObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonGroupObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonClusterObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonClusterObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonClusterObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonClusterObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listHorizonClusterObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonClusterObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonClusterObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listHorizonClusterObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonClusterObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listHorizonClusterObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonGroupObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonClusterObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonClusterObj);
}

async function updateObj(id: string, updateObj: Partial<HorizonGroupObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonClusterObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonClusterObj);
}

async function overwriteObj(id: string, newObj: HorizonGroupObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonClusterObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonClusterObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonClusterObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonClusterObj);
}

export const horizonClusterDbWrapper: GqlDbWrapper<HorizonGroupObj> = {
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
