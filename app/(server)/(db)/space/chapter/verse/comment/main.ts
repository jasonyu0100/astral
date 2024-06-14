import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { VerseCommentObj } from '@/(server)/(model)/space/chapter/verse/comment/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createVerseCommentObj,
  deleteVerseCommentObj,
  updateVerseCommentObj,
} from '@/graphql/mutations';
import { getVerseCommentObj, listVerseCommentObjs } from '@/graphql/queries';

function castSingle(obj: any) {
  return obj as VerseCommentObj;
}

function castMultiple(objs: any[]) {
  return objs as VerseCommentObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: getVerseCommentObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getVerseCommentObj);
}

async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getVerseCommentObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getVerseCommentObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listVerseCommentObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listVerseCommentObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listVerseCommentObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listVerseCommentObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listVerseCommentObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listVerseCommentObjs?.items || []);
}

async function createObj(newObj: Omit<VerseCommentObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createVerseCommentObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createVerseCommentObj);
}

async function updateObj(id: string, updateObj: Partial<VerseCommentObj>) {
  const payload = await amplifyClient.graphql({
    query: updateVerseCommentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateVerseCommentObj);
}

async function overwriteObj(id: string, newObj: VerseCommentObj) {
  const payload = await amplifyClient.graphql({
    query: updateVerseCommentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateVerseCommentObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteVerseCommentObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteVerseCommentObj);
}

export const verseCommentDbWrapper: GqlDbWrapper<VerseCommentObj> = {
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
