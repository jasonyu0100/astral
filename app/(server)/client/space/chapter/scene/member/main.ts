import { GqlDbWrapper } from '@/(server)/client/main';
import { SceneMemberObj } from '@/(server)/model/space/chapter/scene/member/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createSceneMemberObj,
  deleteSceneMemberObj,
  updateSceneMemberObj,
} from '@/graphql/mutations';
import { getSceneMemberObj, listSceneMemberObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as SceneMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as SceneMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getSceneMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSceneMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSceneMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSceneMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listSceneMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSceneMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSceneMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSceneMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listSceneMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSceneMemberObjs?.items || []);
}

async function createObj(newObj: Omit<SceneMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSceneMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSceneMemberObj);
}

async function updateObj(id: string, updateObj: Partial<SceneMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSceneMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSceneMemberObj);
}

async function overwriteObj(id: string, newObj: SceneMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateSceneMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSceneMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSceneMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSceneMemberObj);
}

export const sceneMemberDbWrapper: GqlDbWrapper<SceneMemberObj> = {
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
