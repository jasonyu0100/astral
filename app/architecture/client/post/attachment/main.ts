import { amplifyClient } from '@/api/aws/graphql/main';
import { GqlDbWrapper } from '@/architecture/client/main';
import { PostAttachmentObj } from '@/architecture/model/post/attachment/main';
import {
  createPostAttachmentObj,
  deletePostAttachmentObj,
  updatePostAttachmentObj,
} from '@/graphql/mutations';
import {
  getPostAttachmentObj,
  listPostAttachmentObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

type TargetObj = PostAttachmentObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getPostAttachmentObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getPostAttachmentObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getPostAttachmentObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getPostAttachmentObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listPostAttachmentObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listPostAttachmentObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listPostAttachmentObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listPostAttachmentObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listPostAttachmentObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listPostAttachmentObjs?.items || []);
}

async function createObj(newObj: Omit<PostAttachmentObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createPostAttachmentObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createPostAttachmentObj);
}

async function updateObj(id: string, updateObj: Partial<PostAttachmentObj>) {
  const payload = await amplifyClient.graphql({
    query: updatePostAttachmentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updatePostAttachmentObj);
}

async function overwriteObj(id: string, newObj: PostAttachmentObj) {
  const payload = await amplifyClient.graphql({
    query: updatePostAttachmentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updatePostAttachmentObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deletePostAttachmentObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deletePostAttachmentObj);
}

export const postAttachmentDbWrapper: GqlDbWrapper<PostAttachmentObj> = {
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
