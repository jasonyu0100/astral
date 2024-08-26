import { HorizonGroupObj } from '@/(server)/model/horizon/group/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createHorizonGroupObj,
  deleteHorizonGroupObj,
  updateHorizonGroupObj,
} from '@/graphql/mutations';
import { getHorizonGroupObj, listHorizonGroupObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';
import { GqlDbWrapper } from '../../main';

function castSingle(obj: unknown) {
  return obj as HorizonGroupObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonGroupObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonGroupObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonGroupObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonGroupObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonGroupObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonGroupObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listHorizonGroupObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listHorizonGroupObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonGroupObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonGroupObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonGroupObj);
}

async function updateObj(id: string, updateObj: Partial<HorizonGroupObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonGroupObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonGroupObj);
}

async function overwriteObj(id: string, newObj: HorizonGroupObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonGroupObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonGroupObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonGroupObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonGroupObj);
}

export const horizonGroupDbWrapper: GqlDbWrapper<HorizonGroupObj> = {
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
