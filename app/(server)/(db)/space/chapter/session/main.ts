import { amplifyClient } from '@/(api)/aws/graphql/main';
import { ChapterSessionObj } from '@/(server)/(model)/space/chapter/session/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChapterSessionObj,
  deleteChapterSessionObj,
  updateChapterSessionObj,
} from '@/graphql/mutations';
import {
  getChapterSessionObj,
  listChapterSessionObjs,
} from '@/graphql/queries';
import { GqlDbWrapper } from '../../../main';

function castSingle(obj: unknown) {
  return obj as ChapterSessionObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterSessionObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterSessionObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterSessionObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterSessionObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterSessionObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listChapterSessionObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterSessionObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterSessionObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterSessionObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterSessionObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterSessionObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterSessionObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterSessionObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterSessionObj);
}

async function updateObj(id: string, updateObj: Partial<ChapterSessionObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChapterSessionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterSessionObj);
}

async function overwriteObj(id: string, newObj: ChapterSessionObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterSessionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterSessionObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterSessionObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterSessionObj);
}

export const ChapterSessionDbWrapper: GqlDbWrapper<ChapterSessionObj> = {
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
