import { GqlDbWrapper } from '@/(server)/client/main';
import { ForumMemberObj } from '@/(server)/model/horizon/arc/forum/member/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createForumMemberObj,
  deleteForumMemberObj,
  updateForumMemberObj,
} from '@/graphql/mutations';
import { getForumMemberObj, listForumMemberObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as ForumMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ForumMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getForumMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getForumMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getForumMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getForumMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listForumMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listForumMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listForumMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listForumMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listForumMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listForumMemberObjs?.items || []);
}

async function createObj(newObj: Omit<ForumMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createForumMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createForumMemberObj);
}

async function updateObj(id: string, updateObj: Partial<ForumMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateForumMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateForumMemberObj);
}

async function overwriteObj(id: string, newObj: ForumMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateForumMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateForumMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteForumMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteForumMemberObj);
}

export const forumMemberDbWrapper: GqlDbWrapper<ForumMemberObj> = {
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
