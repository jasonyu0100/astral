import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createCommentKarmaObj,
  deleteCommentKarmaObj,
  updateCommentKarmaObj,
} from '@/graphql/mutations';
import { getCommentKarmaObj, listCommentKarmaObjs } from '@/graphql/queries';
import { GqlDbWrapper } from '@/server/client/main';
import { CommentKarmaObj } from '@/server/model/post/comment/karma/main';
import { gqlArgs } from '@/utils/clean';

type TargetObj = CommentKarmaObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
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

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createCommentKarmaObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createCommentKarmaObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
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

async function overwriteObj(id: string, newObj: TargetObj) {
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

export const commentKarmaDbWrapper: GqlDbWrapper<TargetObj> = {
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
