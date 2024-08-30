import { GqlDbWrapper } from '@/(server)/client/main';
import { SpotlightMemberObj } from '@/(server)/model/space/chapter/spotlight/member/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createSpotlightMemberObj,
  deleteSpotlightMemberObj,
  updateSpotlightMemberObj,
} from '@/graphql/mutations';
import {
  getSpotlightMemberObj,
  listSpotlightMemberObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as SpotlightMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as SpotlightMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getSpotlightMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSpotlightMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSpotlightMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSpotlightMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listSpotlightMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpotlightMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpotlightMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSpotlightMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listSpotlightMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSpotlightMemberObjs?.items || []);
}

async function createObj(newObj: Omit<SpotlightMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpotlightMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpotlightMemberObj);
}

async function updateObj(id: string, updateObj: Partial<SpotlightMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpotlightMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpotlightMemberObj);
}

async function overwriteObj(id: string, newObj: SpotlightMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpotlightMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpotlightMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpotlightMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSpotlightMemberObj);
}

export const spotlightMemberDbWrapper: GqlDbWrapper<SpotlightMemberObj> = {
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
