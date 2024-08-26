import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ReviewCommentObj } from '@/(server)/(model)/space/chapter/review/comment/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createVerseCommentObj,
  deleteVerseCommentObj,
  updateVerseCommentObj,
} from '@/graphql/mutations';
import { getVerseCommentObj, listVerseCommentObjs } from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as ReviewCommentObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ReviewCommentObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getVerseCommentObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getVerseCommentObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getVerseCommentObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getVerseCommentObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listVerseCommentObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listVerseCommentObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listVerseCommentObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listVerseCommentObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listVerseCommentObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listVerseCommentObjs?.items || []);
}

async function createObj(newObj: Omit<ReviewCommentObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createVerseCommentObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createVerseCommentObj);
}

async function updateObj(id: string, updateObj: Partial<ReviewCommentObj>) {
  const payload = await amplifyClient.graphql({
    query: updateVerseCommentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateVerseCommentObj);
}

async function overwriteObj(id: string, newObj: ReviewCommentObj) {
  const payload = await amplifyClient.graphql({
    query: updateVerseCommentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateVerseCommentObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteVerseCommentObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteVerseCommentObj);
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
