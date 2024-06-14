import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { SceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createSceneIdeaObj,
  deleteSceneIdeaObj,
  updateSceneIdeaObj,
} from '@/graphql/mutations';
import { getSceneIdeaObj, listSceneIdeaObjs } from '@/graphql/queries';

function castSingle(obj: any) {
  return obj as SceneIdeaObj;
}

function castMultiple(objs: any[]) {
  return objs as SceneIdeaObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: getSceneIdeaObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSceneIdeaObj);
}

async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSceneIdeaObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSceneIdeaObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listSceneIdeaObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSceneIdeaObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSceneIdeaObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSceneIdeaObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listSceneIdeaObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSceneIdeaObjs?.items || []);
}

async function createObj(newObj: Omit<SceneIdeaObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSceneIdeaObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSceneIdeaObj);
}

async function updateObj(id: string, updateObj: Partial<SceneIdeaObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSceneIdeaObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSceneIdeaObj);
}

async function overwriteObj(id: string, newObj: SceneIdeaObj) {
  const payload = await amplifyClient.graphql({
    query: updateSceneIdeaObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSceneIdeaObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSceneIdeaObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSceneIdeaObj);
}

export const sceneIdeaDbWrapper: GqlDbWrapper<SceneIdeaObj> = {
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
