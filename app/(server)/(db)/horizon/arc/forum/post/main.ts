import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ForumPostObj } from '@/(server)/(model)/horizon/arc/forum/post/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createForumPostObj,
  deleteForumPostObj,
  updateForumPostObj,
} from '@/graphql/mutations';
import { getForumPostObj, listForumPostObjs } from '@/graphql/queries';

function castSingle(obj: any) {
  return obj as ForumPostObj;
}

function castMultiple(objs: any[]) {
  return objs as ForumPostObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getForumPostObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getForumPostObj);
}

async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getForumPostObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getForumPostObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listForumPostObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listForumPostObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listForumPostObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listForumPostObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listForumPostObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listForumPostObjs?.items || []);
}

async function createObj(newObj: Omit<ForumPostObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createForumPostObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createForumPostObj);
}

async function updateObj(id: string, updateObj: Partial<ForumPostObj>) {
  const payload = await amplifyClient.graphql({
    query: updateForumPostObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateForumPostObj);
}

async function overwriteObj(id: string, newObj: ForumPostObj) {
  const payload = await amplifyClient.graphql({
    query: updateForumPostObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateForumPostObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteForumPostObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteForumPostObj);
}

export const forumPostDbWrapper: GqlDbWrapper<ForumPostObj> = {
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
