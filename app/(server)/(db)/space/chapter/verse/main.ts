import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ChapterVerseObj } from '@/(server)/(model)/space/chapter/verse/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChapterVerseObj,
  deleteChapterVerseObj,
  updateChapterVerseObj,
} from '@/graphql/mutations';
import { getChapterVerseObj, listChapterVerseObjs } from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as ChapterVerseObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterVerseObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterVerseObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterVerseObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterVerseObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterVerseObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listChapterVerseObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterVerseObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterVerseObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterVerseObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterVerseObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterVerseObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterVerseObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterVerseObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterVerseObj);
}

async function updateObj(id: string, updateObj: Partial<ChapterVerseObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChapterVerseObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterVerseObj);
}

async function overwriteObj(id: string, newObj: ChapterVerseObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterVerseObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterVerseObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterVerseObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterVerseObj);
}

export const chapterVerseDbWrapper: GqlDbWrapper<ChapterVerseObj> = {
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
