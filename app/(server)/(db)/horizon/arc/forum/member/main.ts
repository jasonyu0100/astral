import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ForumMemberObj } from '@/(server)/(model)/horizon/arc/forum/member/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createForumMemberObj,
  deleteForumMemberObj,
  updateForumMemberObj,
} from '@/graphql/mutations';
import { getForumMemberObj, listForumMemberObjs } from '@/graphql/queries';

function castSingle(obj: any) {
  return obj as ForumMemberObj;
}

function castMultiple(objs: any[]) {
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

async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getForumMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getForumMemberObj);
}

async function listObjs(key: string, value: string) {
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

async function listFromVariables(variables: Object) {
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
