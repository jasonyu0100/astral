import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ChapterUpdateItemMemberObj } from '@/(server)/(model)/space/chapter/update/item/member/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChapterUpdateItemMemberObj,
  deleteChapterUpdateItemMemberObj,
  updateChapterUpdateItemMemberObj,
} from '@/graphql/mutations';
import {
  getChapterUpdateItemMemberObj,
  listChapterUpdateItemMemberObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as ChapterUpdateItemMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterUpdateItemMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterUpdateItemMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterUpdateItemMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterUpdateItemMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterUpdateItemMemberObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateItemMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(
    payload?.data?.listChapterUpdateItemMemberObjs?.items || [],
  );
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateItemMemberObjs,
    variables: {},
  });

  return castMultiple(
    payload?.data?.listChapterUpdateItemMemberObjs?.items || [],
  );
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterUpdateItemMemberObjs,
    variables: variables,
  });

  return castMultiple(
    payload?.data?.listChapterUpdateItemMemberObjs?.items || [],
  );
}

async function createObj(newObj: Omit<ChapterUpdateItemMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterUpdateItemMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterUpdateItemMemberObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<ChapterUpdateItemMemberObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateChapterUpdateItemMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterUpdateItemMemberObj);
}

async function overwriteObj(id: string, newObj: ChapterUpdateItemMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterUpdateItemMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterUpdateItemMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterUpdateItemMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterUpdateItemMemberObj);
}

export const chapterUpdateMemberDbWrapper: GqlDbWrapper<ChapterUpdateItemMemberObj> =
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
