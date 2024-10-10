import { GqlDbWrapper } from '@/(server)/client/main';
import { QuadrantMemberObj } from '@/(server)/model/horizon/decision/quadrant/member/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createQuadrantMemberObj,
  deleteQuadrantMemberObj,
  updateQuadrantMemberObj,
} from '@/graphql/mutations';
import {
  getQuadrantMemberObj,
  listQuadrantMemberObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as QuadrantMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as QuadrantMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getQuadrantMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getQuadrantMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getQuadrantMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getQuadrantMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listQuadrantMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listQuadrantMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listQuadrantMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listQuadrantMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listQuadrantMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listQuadrantMemberObjs?.items || []);
}

async function createObj(newObj: Omit<QuadrantMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createQuadrantMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createQuadrantMemberObj);
}

async function updateObj(id: string, updateObj: Partial<QuadrantMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateQuadrantMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateQuadrantMemberObj);
}

async function overwriteObj(id: string, newObj: QuadrantMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateQuadrantMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateQuadrantMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteQuadrantMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteQuadrantMemberObj);
}

export const horizonDbWrapper: GqlDbWrapper<QuadrantMemberObj> = {
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
