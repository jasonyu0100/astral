import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ChapterSceneObj } from '@/(server)/(model)/space/chapter/scene/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChapterSceneObj,
  deleteChapterSceneObj,
  updateChapterSceneObj,
} from '@/graphql/mutations';
import { getChapterSceneObj, listChapterSceneObjs } from '@/graphql/queries';

function castSingle(obj: any) {
  return obj as ChapterSceneObj;
}

function castMultiple(objs: any[]) {
  return objs as ChapterSceneObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterSceneObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterSceneObj);
}

async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterSceneObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterSceneObj);
}

async function listObjs(key: string, value: string) {
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

async function listFromVariables(variables: Object) {
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
