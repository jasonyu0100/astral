import { GqlDbWrapper } from '@/(server)/client/main';
import { SpotlightLinkObj } from '@/(server)/model/space/chapter/spotlight/link/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createSpotlightLinkObj,
  deleteSpotlightLinkObj,
  updateSpotlightLinkObj,
} from '@/graphql/mutations';
import { getSpotlightLinkObj, listSpotlightLinkObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as SpotlightLinkObj;
}

function castMultiple(objs: unknown[]) {
  return objs as SpotlightLinkObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getSpotlightLinkObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSpotlightLinkObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSpotlightLinkObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSpotlightLinkObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listSpotlightLinkObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpotlightLinkObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpotlightLinkObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSpotlightLinkObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listSpotlightLinkObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSpotlightLinkObjs?.items || []);
}

async function createObj(newObj: Omit<SpotlightLinkObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpotlightLinkObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpotlightLinkObj);
}

async function updateObj(id: string, updateObj: Partial<SpotlightLinkObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpotlightLinkObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpotlightLinkObj);
}

async function overwriteObj(id: string, newObj: SpotlightLinkObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpotlightLinkObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpotlightLinkObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpotlightLinkObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSpotlightLinkObj);
}

export const spotlightLinkDbWrapper: GqlDbWrapper<SpotlightLinkObj> = {
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
