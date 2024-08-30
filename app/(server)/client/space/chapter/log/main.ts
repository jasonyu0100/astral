import { GqlDbWrapper } from '@/(server)/client/main';
import { ChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createChapterLogObj,
  deleteChapterLogObj,
  updateChapterLogObj,
} from '@/graphql/mutations';
import { getChapterLogObj, listChapterLogObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as ChapterLogObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterLogObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterLogObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterLogObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterLogObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterLogObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listChapterLogObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterLogObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterLogObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterLogObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterLogObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterLogObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterLogObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterLogObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterLogObj);
}

async function updateObj(id: string, updateObj: Partial<ChapterLogObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChapterLogObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterLogObj);
}

async function overwriteObj(id: string, newObj: ChapterLogObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterLogObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterLogObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterLogObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterLogObj);
}

export const chapterLogDbWrapper: GqlDbWrapper<ChapterLogObj> = {
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
