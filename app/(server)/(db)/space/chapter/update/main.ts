import { amplifyClient } from '@/(api)/aws/graphql/main';
import { ChapterUpdateObj } from '@/(server)/(model)/space/chapter/update/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChapterUpdateObj,
  deleteChapterUpdateObj,
  updateChapterUpdateObj,
} from '@/graphql/mutations';
import { getChapterUpdateObj, listChapterUpdateObjs } from '@/graphql/queries';
import { GqlDbWrapper } from '../../../main';

function castSingle(obj: unknown) {
  return obj as ChapterUpdateObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterUpdateObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterUpdateObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterUpdateObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterUpdateObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterUpdateObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterUpdateObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterUpdateObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterUpdateObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterUpdateObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterUpdateObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterUpdateObj);
}

async function updateObj(id: string, updateObj: Partial<ChapterUpdateObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChapterUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterUpdateObj);
}

async function overwriteObj(id: string, newObj: ChapterUpdateObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterUpdateObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterUpdateObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterUpdateObj);
}

export const chapterUpdateDbWrapper: GqlDbWrapper<ChapterUpdateObj> = {
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
