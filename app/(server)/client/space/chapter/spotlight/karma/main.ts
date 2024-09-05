import { GqlDbWrapper } from '@/(server)/client/main';
import { SpotlightKarmaObj } from '@/(server)/model/space/chapter/spotlight/karma/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createSpotlightKarmaObj,
  deleteSpotlightKarmaObj,
  updateSpotlightKarmaObj,
} from '@/graphql/mutations';
import {
  getSpotlightKarmaObj,
  listSpotlightKarmaObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as SpotlightKarmaObj;
}

function castMultiple(objs: unknown[]) {
  return objs as SpotlightKarmaObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getSpotlightKarmaObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSpotlightKarmaObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSpotlightKarmaObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSpotlightKarmaObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listSpotlightKarmaObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpotlightKarmaObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpotlightKarmaObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSpotlightKarmaObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listSpotlightKarmaObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSpotlightKarmaObjs?.items || []);
}

async function createObj(newObj: Omit<SpotlightKarmaObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpotlightKarmaObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpotlightKarmaObj);
}

async function updateObj(id: string, updateObj: Partial<SpotlightKarmaObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpotlightKarmaObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpotlightKarmaObj);
}

async function overwriteObj(id: string, newObj: SpotlightKarmaObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpotlightKarmaObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpotlightKarmaObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpotlightKarmaObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSpotlightKarmaObj);
}

export const spotlightKarmaDbWrapper: GqlDbWrapper<SpotlightKarmaObj> = {
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
