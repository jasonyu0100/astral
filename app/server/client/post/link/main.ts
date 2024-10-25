import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createPostLinkObj,
  deletePostLinkObj,
  updatePostLinkObj,
} from '@/graphql/mutations';
import { getPostLinkObj, listPostLinkObjs } from '@/graphql/queries';
import { GqlDbWrapper } from '@/server/client/main';
import { PostLinkObj } from '@/server/model/post/link/main';
import { gqlArgs } from '@/utils/clean';

type TargetObj = PostLinkObj;

function castSingle(obj: unknown) {
  return obj as PostLinkObj;
}

function castMultiple(objs: unknown[]) {
  return objs as PostLinkObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getPostLinkObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getPostLinkObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getPostLinkObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getPostLinkObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listPostLinkObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listPostLinkObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listPostLinkObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listPostLinkObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listPostLinkObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listPostLinkObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createPostLinkObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createPostLinkObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updatePostLinkObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updatePostLinkObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updatePostLinkObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updatePostLinkObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deletePostLinkObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deletePostLinkObj);
}

export const postLinkDbWrapper: GqlDbWrapper<TargetObj> = {
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
