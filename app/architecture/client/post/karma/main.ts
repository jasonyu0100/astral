import { GqlDbWrapper } from '@/architecture/client/main';
import { PostKarmaObj } from '@/architecture/model/post/karma/main';
import { amplifyClient } from '@/external/aws/graphql/main';
import {
  createPostKarmaObj,
  deletePostKarmaObj,
  updatePostKarmaObj,
} from '@/graphql/mutations';
import { getPostKarmaObj, listPostKarmaObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

type TargetObj = PostKarmaObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getPostKarmaObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getPostKarmaObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getPostKarmaObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getPostKarmaObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listPostKarmaObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listPostKarmaObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listPostKarmaObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listPostKarmaObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listPostKarmaObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listPostKarmaObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createPostKarmaObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createPostKarmaObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updatePostKarmaObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updatePostKarmaObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updatePostKarmaObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updatePostKarmaObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deletePostKarmaObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deletePostKarmaObj);
}

export const postKarmaDbWrapper: GqlDbWrapper<TargetObj> = {
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
