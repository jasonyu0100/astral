import { amplifyClient } from '@/(api)/aws/graphql/main';
import { HorizonClusterObj } from '@/(server)/(model)/horizon/cluster/main';
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

function castSingle(obj: any) {
  return obj as HorizonClusterObj;
}

function castMultiple(objs: any[]) {
  return objs as HorizonClusterObj[];
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

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonClusterObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listHorizonClusterObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonClusterObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonClusterObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonClusterObj);
}

async function updateObj(id: string, updateObj: Partial<HorizonClusterObj>) {
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

async function overwriteObj(id: string, newObj: HorizonClusterObj) {
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

export const horizonClusterDbWrapper: GqlDbWrapper<HorizonClusterObj> = {
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
