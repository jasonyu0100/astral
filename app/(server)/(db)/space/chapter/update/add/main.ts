import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ChapterUpdateAddObj } from '@/(server)/(model)/space/chapter/update/add/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChapterUpdateAddObj,
  deleteChapterUpdateAddObj,
  updateChapterUpdateAddObj,
} from '@/graphql/mutations';
import {
  getChapterUpdateAddObj,
  listChapterUpdateAddObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as ChapterUpdateAddObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterUpdateAddObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterUpdateAddObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterUpdateAddObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterUpdateAddObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterUpdateAddObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateAddObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterUpdateAddObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateAddObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterUpdateAddObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateAddObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterUpdateAddObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterUpdateAddObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterUpdateAddObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterUpdateAddObj);
}

async function updateObj(id: string, updateObj: Partial<ChapterUpdateAddObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChapterUpdateAddObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterUpdateAddObj);
}

async function overwriteObj(id: string, newObj: ChapterUpdateAddObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterUpdateAddObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterUpdateAddObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterUpdateAddObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterUpdateAddObj);
}

export const chapterUpdateAddDbWrapper: GqlDbWrapper<ChapterUpdateAddObj> = {
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
