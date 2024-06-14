import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { SceneStackObj } from '@/(server)/(model)/space/chapter/scene/stack/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createSceneStackObj,
  deleteSceneStackObj,
  updateSceneStackObj,
} from '@/graphql/mutations';
import { getSceneStackObj, listSceneStackObjs } from '@/graphql/queries';

function castSingle(obj: any) {
  return obj as SceneStackObj;
}

function castMultiple(objs: any[]) {
  return objs as SceneStackObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: getSceneStackObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSceneStackObj);
}

async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSceneStackObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSceneStackObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listSceneStackObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSceneStackObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSceneStackObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSceneStackObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listSceneStackObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSceneStackObjs?.items || []);
}

async function createObj(newObj: Omit<SceneStackObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSceneStackObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSceneStackObj);
}

async function updateObj(id: string, updateObj: Partial<SceneStackObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSceneStackObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSceneStackObj);
}

async function overwriteObj(id: string, newObj: SceneStackObj) {
  const payload = await amplifyClient.graphql({
    query: updateSceneStackObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSceneStackObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSceneStackObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSceneStackObj);
}

export const sceneStackDbWrapper: GqlDbWrapper<SceneStackObj> = {
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
