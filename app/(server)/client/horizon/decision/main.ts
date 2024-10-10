import { HorizonDecisionObj } from '@/(server)/model/horizon/decision/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createHorizonDecisionObj,
  deleteHorizonDecisionObj,
  updateHorizonDecisionObj,
} from '@/graphql/mutations';
import {
  getHorizonDecisionObj,
  listHorizonDecisionObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';
import { GqlDbWrapper } from '../../main';

function castSingle(obj: unknown) {
  return obj as HorizonDecisionObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonDecisionObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonDecisionObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonDecisionObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonDecisionObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonDecisionObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listHorizonDecisionObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonDecisionObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonDecisionObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listHorizonDecisionObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonDecisionObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listHorizonDecisionObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonDecisionObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonDecisionObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonDecisionObj);
}

async function updateObj(id: string, updateObj: Partial<HorizonDecisionObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonDecisionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonDecisionObj);
}

async function overwriteObj(id: string, newObj: HorizonDecisionObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonDecisionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonDecisionObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonDecisionObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonDecisionObj);
}

export const horizonDbWrapper: GqlDbWrapper<HorizonDecisionObj> = {
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
