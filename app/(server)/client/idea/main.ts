import { GqlDbWrapper } from '@/(server)/client/main';
import { IdeaObj } from '@/(server)/model/idea/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createIdeaObj,
  deleteIdeaObj,
  updateIdeaObj,
} from '@/graphql/mutations';
import { getIdeaObj, listIdeaObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as IdeaObj;
}

function castMultiple(objs: unknown[]) {
  return objs as IdeaObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getIdeaObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getIdeaObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getIdeaObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getIdeaObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listIdeaObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listIdeaObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listIdeaObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listIdeaObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listIdeaObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listIdeaObjs?.items || []);
}

async function createObj(newObj: Omit<IdeaObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createIdeaObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createIdeaObj);
}

async function updateObj(id: string, updateObj: Partial<IdeaObj>) {
  const payload = await amplifyClient.graphql({
    query: updateIdeaObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateIdeaObj);
}

async function overwriteObj(id: string, newObj: IdeaObj) {
  const payload = await amplifyClient.graphql({
    query: updateIdeaObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateIdeaObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteIdeaObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteIdeaObj);
}

export const ideaDbWrapper: GqlDbWrapper<IdeaObj> = {
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
