import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChapterSessionUpdateObj,
  deleteChapterSessionUpdateObj,
  updateChapterSessionUpdateObj,
} from '@/graphql/mutations';
import {
  getChapterSessionUpdateObj,
  listChapterSessionUpdateObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as ChapterSessionUpdateObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterSessionUpdateObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterSessionUpdateObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterSessionUpdateObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterSessionUpdateObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterSessionUpdateObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listChapterSessionUpdateObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterSessionUpdateObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterSessionUpdateObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterSessionUpdateObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterSessionUpdateObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterSessionUpdateObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterSessionUpdateObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterSessionUpdateObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterSessionUpdateObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<ChapterSessionUpdateObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateChapterSessionUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterSessionUpdateObj);
}

async function overwriteObj(id: string, newObj: ChapterSessionUpdateObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterSessionUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterSessionUpdateObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterSessionUpdateObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterSessionUpdateObj);
}

export const chapterSessionUpdateDbWrapper: GqlDbWrapper<ChapterSessionUpdateObj> =
  {
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
