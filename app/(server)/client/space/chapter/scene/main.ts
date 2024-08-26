import { GqlDbWrapper } from '@/(server)/client/main';
import { ChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createChapterSceneObj,
  deleteChapterSceneObj,
  updateChapterSceneObj,
} from '@/graphql/mutations';
import { getChapterSceneObj, listChapterSceneObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as ChapterSceneObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterSceneObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterSceneObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterSceneObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterSceneObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterSceneObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listChapterSceneObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterSceneObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterSceneObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterSceneObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterSceneObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterSceneObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterSceneObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterSceneObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterSceneObj);
}

async function updateObj(id: string, updateObj: Partial<ChapterSceneObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChapterSceneObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterSceneObj);
}

async function overwriteObj(id: string, newObj: ChapterSceneObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterSceneObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterSceneObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterSceneObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterSceneObj);
}

export const chapterSceneDbWrapper: GqlDbWrapper<ChapterSceneObj> = {
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
