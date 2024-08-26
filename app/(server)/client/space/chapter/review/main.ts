import { GqlDbWrapper } from '@/(server)/client/main';
import { ChapterReviewObj } from '@/(server)/model/space/chapter/review/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createChapterReviewObj,
  deleteChapterReviewObj,
  updateChapterReviewObj,
} from '@/graphql/mutations';
import { getChapterReviewObj, listChapterReviewObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as ChapterReviewObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterReviewObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterReviewObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterReviewObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterReviewObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterReviewObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listChapterReviewObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterReviewObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterReviewObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterReviewObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterReviewObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterReviewObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterReviewObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterReviewObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterReviewObj);
}

async function updateObj(id: string, updateObj: Partial<ChapterReviewObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChapterReviewObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterReviewObj);
}

async function overwriteObj(id: string, newObj: ChapterReviewObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterReviewObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterReviewObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterReviewObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterReviewObj);
}

export const chapterReviewDbWrapper: GqlDbWrapper<ChapterReviewObj> = {
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
