import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ChapterUpdateMemberObj } from '@/(server)/(model)/space/chapter/update/member/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChapterUpdateMemberObj,
  deleteChapterUpdateMemberObj,
  updateChapterUpdateMemberObj,
} from '@/graphql/mutations';
import {
  getChapterUpdateMemberObj,
  listChapterUpdateMemberObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as ChapterUpdateMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterUpdateMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterUpdateMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterUpdateMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterUpdateMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterUpdateMemberObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listChapterUpdateMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listChapterUpdateMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listChapterUpdateMemberObjs?.items || []);
}

async function createObj(newObj: Omit<ChapterUpdateMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterUpdateMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterUpdateMemberObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<ChapterUpdateMemberObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateChapterUpdateMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterUpdateMemberObj);
}

async function overwriteObj(id: string, newObj: ChapterUpdateMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterUpdateMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterUpdateMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterUpdateMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterUpdateMemberObj);
}

export const chapterUpdateMemberDbWrapper: GqlDbWrapper<ChapterUpdateMemberObj> =
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
