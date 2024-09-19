import { GqlDbWrapper } from '@/(server)/client/main';
import { WayLinkObj } from '@/(server)/model/space/chapter/way/link/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createWayLinkObj,
  deleteWayLinkObj,
  updateWayLinkObj,
} from '@/graphql/mutations';
import { getWayLinkObj, listWayLinkObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as WayLinkObj;
}

function castMultiple(objs: unknown[]) {
  return objs as WayLinkObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getWayLinkObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getWayLinkObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getWayLinkObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getWayLinkObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listWayLinkObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listWayLinkObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listWayLinkObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listWayLinkObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listWayLinkObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listWayLinkObjs?.items || []);
}

async function createObj(newObj: Omit<WayLinkObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createWayLinkObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createWayLinkObj);
}

async function updateObj(id: string, updateObj: Partial<WayLinkObj>) {
  const payload = await amplifyClient.graphql({
    query: updateWayLinkObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateWayLinkObj);
}

async function overwriteObj(id: string, newObj: WayLinkObj) {
  const payload = await amplifyClient.graphql({
    query: updateWayLinkObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateWayLinkObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteWayLinkObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteWayLinkObj);
}

export const wayLinkDbWrapper: GqlDbWrapper<WayLinkObj> = {
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
