import { GqlDbWrapper } from '@/(server)/client/main';
import { ChapterChatObj } from '@/(server)/model/space/chapter/chat/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createChapterChatObj,
  deleteChapterChatObj,
  updateChapterChatObj,
} from '@/graphql/mutations';
import { getChapterChatObj, listChapterChatObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as ChapterChatObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterChatObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterChatObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterChatObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterChatObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterChatObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listChapterChatObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterChatObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterChatObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterChatObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterChatObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterChatObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterChatObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterChatObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterChatObj);
}

async function updateObj(id: string, updateObj: Partial<ChapterChatObj>) {
  const payload = await amplifyClient.graphql({
    query: updateChapterChatObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterChatObj);
}

async function overwriteObj(id: string, newObj: ChapterChatObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterChatObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterChatObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterChatObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterChatObj);
}

export const chapterChatDbWrapper: GqlDbWrapper<ChapterChatObj> = {
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
