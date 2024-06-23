import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ChapterSessionContributorObj } from '@/(server)/(model)/space/chapter/session/contributor/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createChapterSessionContributorObj,
  deleteChapterSessionContributorObj,
  updateChapterSessionContributorObj,
} from '@/graphql/mutations';
import {
  getChapterSessionContributorObj,
  listChapterSessionContributorObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as ChapterSessionContributorObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ChapterSessionContributorObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getChapterSessionContributorObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getChapterSessionContributorObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getChapterSessionContributorObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getChapterSessionContributorObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listChapterSessionContributorObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(
    payload?.data?.listChapterSessionContributorObjs?.items || [],
  );
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listChapterSessionContributorObjs,
    variables: {},
  });

  return castMultiple(
    payload?.data?.listChapterSessionContributorObjs?.items || [],
  );
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listChapterSessionContributorObjs,
    variables: variables,
  });

  return castMultiple(
    payload?.data?.listChapterSessionContributorObjs?.items || [],
  );
}

async function createObj(newObj: Omit<ChapterSessionContributorObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createChapterSessionContributorObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createChapterSessionContributorObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<ChapterSessionContributorObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateChapterSessionContributorObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterSessionContributorObj);
}

async function overwriteObj(id: string, newObj: ChapterSessionContributorObj) {
  const payload = await amplifyClient.graphql({
    query: updateChapterSessionContributorObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateChapterSessionContributorObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteChapterSessionContributorObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteChapterSessionContributorObj);
}

export const ChapterSessionContributorDbWrapper: GqlDbWrapper<ChapterSessionContributorObj> =
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
