import { GqlDbWrapper } from '@/(server)/client/main';
import { ChapterConversationObj } from '@/(server)/model/space/chapter/conversation/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createChapterConversationObj,
  deleteChapterConversationObj,
  updateChapterConversationObj,
} from '@/graphql/mutations';
import {
  getChapterConversationObj,
  listChapterConversationObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as ChapterConversationObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterConversationObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterConversationObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterConversationObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterConversationObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterConversationObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listChapterConversationObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterConversationObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterConversationObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterConversationObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterConversationObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterConversationObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterConversationObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterConversationObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterConversationObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<ChapterConversationObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateChapterConversationObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterConversationObj);
}

async function overwriteObj(id: string, newObj: ChapterConversationObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterConversationObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterConversationObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterConversationObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterConversationObj);
}

export const chapterConversationDbWrapper: GqlDbWrapper<ChapterConversationObj> =
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
