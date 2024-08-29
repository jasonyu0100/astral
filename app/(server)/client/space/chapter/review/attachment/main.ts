import { GqlDbWrapper } from '@/(server)/client/main';
import { ReviewCommentObj } from '@/(server)/model/space/chapter/review/comment/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createReviewCommentObj,
  deleteReviewCommentObj,
  updateReviewCommentObj,
} from '@/graphql/mutations';
import { getReviewCommentObj, listReviewCommentObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as ReviewCommentObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ReviewCommentObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getReviewCommentObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getReviewCommentObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getReviewCommentObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getReviewCommentObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listReviewCommentObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listReviewCommentObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listReviewCommentObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listReviewCommentObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listReviewCommentObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listReviewCommentObjs?.items || []);
}

async function createObj(newObj: Omit<ReviewCommentObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createReviewCommentObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createReviewCommentObj);
}

async function updateObj(id: string, updateObj: Partial<ReviewCommentObj>) {
  const payload = await amplifyClient.graphql({
    query: updateReviewCommentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateReviewCommentObj);
}

async function overwriteObj(id: string, newObj: ReviewCommentObj) {
  const payload = await amplifyClient.graphql({
    query: updateReviewCommentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateReviewCommentObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteReviewCommentObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteReviewCommentObj);
}

export const reviewCommentDbWrapper: GqlDbWrapper<ReviewCommentObj> = {
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
