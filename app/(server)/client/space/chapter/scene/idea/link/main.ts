import { GqlDbWrapper } from '@/(server)/client/main';
import { IdeaLinkObj } from '@/(server)/model/space/chapter/scene/idea/link/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createIdeaLinkObj,
  deleteIdeaLinkObj,
  updateIdeaLinkObj,
} from '@/graphql/mutations';
import { getIdeaLinkObj, listIdeaLinkObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as IdeaLinkObj;
}

function castMultiple(objs: unknown[]) {
  return objs as IdeaLinkObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getIdeaLinkObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getIdeaLinkObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getIdeaLinkObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getIdeaLinkObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listIdeaLinkObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listIdeaLinkObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listIdeaLinkObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listIdeaLinkObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listIdeaLinkObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listIdeaLinkObjs?.items || []);
}

async function createObj(newObj: Omit<IdeaLinkObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createIdeaLinkObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createIdeaLinkObj);
}

async function updateObj(id: string, updateObj: Partial<IdeaLinkObj>) {
  const payload = await amplifyClient.graphql({
    query: updateIdeaLinkObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateIdeaLinkObj);
}

async function overwriteObj(id: string, newObj: IdeaLinkObj) {
  const payload = await amplifyClient.graphql({
    query: updateIdeaLinkObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateIdeaLinkObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteIdeaLinkObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteIdeaLinkObj);
}

export const ideaLinkDbWrapper: GqlDbWrapper<IdeaLinkObj> = {
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
