import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createDecisionQuadrantObj,
  deleteDecisionQuadrantObj,
  updateDecisionQuadrantObj,
} from '@/graphql/mutations';
import {
  getDecisionQuadrantObj,
  listDecisionQuadrantObjs,
} from '@/graphql/queries';
import { GqlDbWrapper } from '@/server/client/main';
import { DecisionQuadrantObj } from '@/server/model/horizon/decision/quadrant/main';
import { gqlArgs } from '@/utils/clean';

type TargetObj = DecisionQuadrantObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getDecisionQuadrantObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getDecisionQuadrantObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getDecisionQuadrantObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getDecisionQuadrantObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listDecisionQuadrantObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listDecisionQuadrantObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listDecisionQuadrantObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listDecisionQuadrantObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listDecisionQuadrantObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listDecisionQuadrantObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createDecisionQuadrantObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createDecisionQuadrantObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateDecisionQuadrantObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateDecisionQuadrantObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateDecisionQuadrantObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateDecisionQuadrantObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteDecisionQuadrantObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteDecisionQuadrantObj);
}

export const decisionQuadrantDbWrapper: GqlDbWrapper<TargetObj> = {
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
