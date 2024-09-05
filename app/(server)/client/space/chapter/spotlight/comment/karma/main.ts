import { GqlDbWrapper } from '@/(server)/client/main';
import { CommentKarmaObj } from '@/(server)/model/space/chapter/spotlight/comment/karma/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createCommentKarmaObj,
  deleteCommentKarmaObj,
  updateCommentKarmaObj,
} from '@/graphql/mutations';
import { getCommentKarmaObj, listCommentKarmaObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as CommentKarmaObj;
}

function castMultiple(objs: unknown[]) {
  return objs as CommentKarmaObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getCommentKarmaObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getCommentKarmaObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getCommentKarmaObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getCommentKarmaObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listCommentKarmaObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listCommentKarmaObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listCommentKarmaObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listCommentKarmaObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listCommentKarmaObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listCommentKarmaObjs?.items || []);
}

async function createObj(newObj: Omit<CommentKarmaObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createCommentKarmaObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createCommentKarmaObj);
}

async function updateObj(id: string, updateObj: Partial<CommentKarmaObj>) {
  const payload = await amplifyClient.graphql({
    query: updateCommentKarmaObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateCommentKarmaObj);
}

async function overwriteObj(id: string, newObj: CommentKarmaObj) {
  const payload = await amplifyClient.graphql({
    query: updateCommentKarmaObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateCommentKarmaObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteCommentKarmaObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteCommentKarmaObj);
}

export const commentKarmaDbWrapper: GqlDbWrapper<CommentKarmaObj> = {
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
