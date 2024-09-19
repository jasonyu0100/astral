import { GqlDbWrapper } from '@/(server)/client/main';
import { ChapterWayObj } from '@/(server)/model/space/chapter/way/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createChapterWayObj,
  deleteChapterWayObj,
  updateChapterWayObj,
} from '@/graphql/mutations';
import { getChapterWayObj, listChapterWayObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as ChapterWayObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterWayObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterWayObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterWayObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterWayObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterWayObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listChapterWayObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterWayObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterWayObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterWayObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterWayObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterWayObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterWayObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterWayObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterWayObj);
}

async function updateObj(id: string, updateObj: Partial<ChapterWayObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChapterWayObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterWayObj);
}

async function overwriteObj(id: string, newObj: ChapterWayObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterWayObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterWayObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterWayObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterWayObj);
}

export const chapterWayDbWrapper: GqlDbWrapper<ChapterWayObj> = {
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
