import { GqlDbWrapper } from '@/(server)/client/main';
import { WayMemberObj } from '@/(server)/model/space/chapter/way/member/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createWayMemberObj,
  deleteWayMemberObj,
  updateWayMemberObj,
} from '@/graphql/mutations';
import { getWayMemberObj, listWayMemberObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as WayMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as WayMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getWayMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getWayMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getWayMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getWayMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listWayMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listWayMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listWayMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listWayMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listWayMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listWayMemberObjs?.items || []);
}

async function createObj(newObj: Omit<WayMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createWayMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createWayMemberObj);
}

async function updateObj(id: string, updateObj: Partial<WayMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateWayMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateWayMemberObj);
}

async function overwriteObj(id: string, newObj: WayMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateWayMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateWayMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteWayMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteWayMemberObj);
}

export const wayMemberDbWrapper: GqlDbWrapper<WayMemberObj> = {
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
