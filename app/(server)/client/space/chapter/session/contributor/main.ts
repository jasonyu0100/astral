import { GqlDbWrapper } from '@/(server)/client/main';
import { ChapterReviewContributorObj } from '@/(server)/model/space/chapter/review/contributor/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createChapterReviewContributorObj,
  deleteChapterReviewContributorObj,
  updateChapterReviewContributorObj,
} from '@/graphql/mutations';
import {
  getChapterReviewContributorObj,
  listChapterReviewContributorObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as ChapterReviewContributorObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterReviewContributorObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterReviewContributorObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterReviewContributorObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterReviewContributorObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterReviewContributorObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listChapterReviewContributorObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(
    payload?.data?.listChapterReviewContributorObjs?.items || [],
  );
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterReviewContributorObjs,
    variables: {},
  });

  return castMultiple(
    payload?.data?.listChapterReviewContributorObjs?.items || [],
  );
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterReviewContributorObjs,
    variables: variables,
  });

  return castMultiple(
    payload?.data?.listChapterReviewContributorObjs?.items || [],
  );
}

async function createObj(newObj: Omit<ChapterReviewContributorObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterReviewContributorObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterReviewContributorObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<ChapterReviewContributorObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateChapterReviewContributorObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterReviewContributorObj);
}

async function overwriteObj(id: string, newObj: ChapterReviewContributorObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterReviewContributorObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterReviewContributorObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterReviewContributorObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterReviewContributorObj);
}

export const ChapterReviewContributorDbWrapper: GqlDbWrapper<ChapterReviewContributorObj> =
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
