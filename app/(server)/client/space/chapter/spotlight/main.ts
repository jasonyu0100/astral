import { GqlDbWrapper } from '@/(server)/client/main';
import { ChapterSpotlightObj } from '@/(server)/model/space/chapter/spotlight/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createChapterSpotlightObj,
  deleteChapterSpotlightObj,
  updateChapterSpotlightObj,
} from '@/graphql/mutations';
import {
  getChapterSpotlightObj,
  listChapterSpotlightObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as ChapterSpotlightObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterSpotlightObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterSpotlightObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterSpotlightObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterSpotlightObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterSpotlightObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listChapterSpotlightObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterSpotlightObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterSpotlightObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterSpotlightObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterSpotlightObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterSpotlightObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterSpotlightObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterSpotlightObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterSpotlightObj);
}

async function updateObj(id: string, updateObj: Partial<ChapterSpotlightObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChapterSpotlightObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterSpotlightObj);
}

async function overwriteObj(id: string, newObj: ChapterSpotlightObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterSpotlightObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterSpotlightObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterSpotlightObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterSpotlightObj);
}

export const chapterSpotlightDbWrapper: GqlDbWrapper<ChapterSpotlightObj> = {
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
