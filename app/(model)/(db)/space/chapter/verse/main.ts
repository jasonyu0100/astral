import { amplifyClient } from '@/(api)/aws/graphql/main';
import { DbWrapper } from '@/(model)/(db)/main';
import { ChapterVerseObj } from '@/(model)/space/chapter/verse/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChapterVerseObj,
  deleteChapterVerseObj,
  updateChapterVerseObj,
} from '@/graphql/mutations';
import { listChapterVerseObjs } from '@/graphql/queries';

function castSingle(obj: any) {
  return obj as ChapterVerseObj;
}

function castMultiple(objs: any[]) {
  return objs as ChapterVerseObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listChapterVerseObjs,
    variables: {
      [key]: {
        eq: value,
      },
    },
  });

  return castSingle(payload?.data?.listChapterVerseObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listChapterVerseObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listChapterVerseObjs);
}

async function listObjs(
  key: string,
  value: string,
) {
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

async function listFromVariables(
  variables: Object,
) {
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

export const chapterVerseDbWrapper: DbWrapper<ChapterVerseObj> = {
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
