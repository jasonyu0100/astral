import { GqlDbWrapper } from '@/(server)/client/main';
import { SceneConversationObj } from '@/(server)/model/space/chapter/scene/conversation/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createSceneConversationObj,
  deleteSceneConversationObj,
  updateSceneConversationObj,
} from '@/graphql/mutations';
import {
  getSceneConversationObj,
  listSceneConversationObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as SceneConversationObj;
}

function castMultiple(objs: unknown[]) {
  return objs as SceneConversationObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getSceneConversationObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSceneConversationObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSceneConversationObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSceneConversationObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listSceneConversationObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSceneConversationObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listSceneConversationObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSceneConversationObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSceneConversationObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSceneConversationObjs?.items || []);
}

async function createObj(newObj: Omit<SceneConversationObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSceneConversationObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSceneConversationObj);
}

async function updateObj(id: string, updateObj: Partial<SceneConversationObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSceneConversationObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSceneConversationObj);
}

async function overwriteObj(id: string, newObj: SceneConversationObj) {
  const payload = await amplifyClient.graphql({
    query: updateSceneConversationObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSceneConversationObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSceneConversationObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSceneConversationObj);
}

export const sceneConversationDbWrapper: GqlDbWrapper<SceneConversationObj> = {
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
