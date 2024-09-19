import { GqlDbWrapper } from '@/(server)/client/main';
import { ChapterReviewUpdateObj } from '@/(server)/model/space/chapter/review/update/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createChapterReviewUpdateObj,
  deleteChapterReviewUpdateObj,
  updateChapterReviewUpdateObj,
} from '@/graphql/mutations';
import {
  getChapterReviewUpdateObj,
  listChapterReviewUpdateObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as ChapterReviewUpdateObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterReviewUpdateObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterReviewUpdateObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterReviewUpdateObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterReviewUpdateObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterReviewUpdateObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listChapterReviewUpdateObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterReviewUpdateObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterReviewUpdateObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterReviewUpdateObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterReviewUpdateObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterReviewUpdateObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterReviewUpdateObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterReviewUpdateObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterReviewUpdateObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<ChapterReviewUpdateObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateChapterReviewUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterReviewUpdateObj);
}

async function overwriteObj(id: string, newObj: ChapterReviewUpdateObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterReviewUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterReviewUpdateObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterReviewUpdateObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterReviewUpdateObj);
}

export const chapterReviewUpdateDbWrapper: GqlDbWrapper<ChapterReviewUpdateObj> =
  {
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
