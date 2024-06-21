import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ChapterSessionUpdateMemberObj } from '@/(server)/(model)/space/chapter/session/update/member/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChapterSessionUpdateMemberObj,
  deleteChapterSessionUpdateMemberObj,
  updateChapterSessionUpdateMemberObj,
} from '@/graphql/mutations';
import {
  getChapterSessionUpdateMemberObj,
  listChapterSessionUpdateMemberObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as ChapterSessionUpdateMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterSessionUpdateMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterSessionUpdateMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterSessionUpdateMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterSessionUpdateMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterSessionUpdateMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listChapterSessionUpdateMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(
    payload?.data?.listChapterSessionUpdateMemberObjs?.items || [],
  );
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterSessionUpdateMemberObjs,
    variables: {},
  });

  return castMultiple(
    payload?.data?.listChapterSessionUpdateMemberObjs?.items || [],
  );
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterSessionUpdateMemberObjs,
    variables: variables,
  });

  return castMultiple(
    payload?.data?.listChapterSessionUpdateMemberObjs?.items || [],
  );
}

async function createObj(newObj: Omit<ChapterSessionUpdateMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterSessionUpdateMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterSessionUpdateMemberObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<ChapterSessionUpdateMemberObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateChapterSessionUpdateMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterSessionUpdateMemberObj);
}

async function overwriteObj(id: string, newObj: ChapterSessionUpdateMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterSessionUpdateMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterSessionUpdateMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterSessionUpdateMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterSessionUpdateMemberObj);
}

export const ChapterSessionMemberDbWrapper: GqlDbWrapper<ChapterSessionUpdateMemberObj> =
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
