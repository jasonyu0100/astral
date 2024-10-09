import { GqlDbWrapper } from '@/(server)/client/main';
import { IdeaSceneObj } from '@/(server)/model/scene/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createIdeaSceneObj,
  deleteIdeaSceneObj,
  updateIdeaSceneObj,
} from '@/graphql/mutations';
import { getIdeaSceneObj, listIdeaSceneObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as IdeaSceneObj;
}

function castMultiple(objs: unknown[]) {
  return objs as IdeaSceneObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getIdeaSceneObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getIdeaSceneObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getIdeaSceneObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getIdeaSceneObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listIdeaSceneObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listIdeaSceneObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listIdeaSceneObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listIdeaSceneObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listIdeaSceneObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listIdeaSceneObjs?.items || []);
}

async function createObj(newObj: Omit<IdeaSceneObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createIdeaSceneObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createIdeaSceneObj);
}

async function updateObj(id: string, updateObj: Partial<IdeaSceneObj>) {
  const payload = await amplifyClient.graphql({
    query: updateIdeaSceneObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateIdeaSceneObj);
}

async function overwriteObj(id: string, newObj: IdeaSceneObj) {
  const payload = await amplifyClient.graphql({
    query: updateIdeaSceneObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateIdeaSceneObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteIdeaSceneObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteIdeaSceneObj);
}

export const ideaSceneDbWrapper: GqlDbWrapper<IdeaSceneObj> = {
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
