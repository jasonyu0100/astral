import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ChapterUpdateItemObj } from '@/(server)/(model)/space/chapter/update/item/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChapterUpdateItemObj,
  deleteChapterUpdateItemObj,
  updateChapterUpdateItemObj,
} from '@/graphql/mutations';
import {
  getChapterUpdateItemObj,
  listChapterUpdateItemObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as ChapterUpdateItemObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterUpdateItemObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterUpdateItemObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterUpdateItemObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterUpdateItemObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterUpdateItemObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateItemObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterUpdateItemObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateItemObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterUpdateItemObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateItemObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterUpdateItemObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterUpdateItemObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterUpdateItemObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterUpdateItemObj);
}

async function updateObj(id: string, updateObj: Partial<ChapterUpdateItemObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChapterUpdateItemObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterUpdateItemObj);
}

async function overwriteObj(id: string, newObj: ChapterUpdateItemObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterUpdateItemObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterUpdateItemObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterUpdateItemObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterUpdateItemObj);
}

export const chapterUpdateItemDbWrapper: GqlDbWrapper<ChapterUpdateItemObj> = {
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
