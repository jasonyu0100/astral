import { GqlDbWrapper } from '@/(server)/client/main';
import { SpotlightCommentObj } from '@/(server)/model/space/chapter/spotlight/comment/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createSpotlightCommentObj,
  deleteSpotlightCommentObj,
  updateSpotlightCommentObj,
} from '@/graphql/mutations';
import {
  getSpotlightCommentObj,
  listSpotlightCommentObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as SpotlightCommentObj;
}

function castMultiple(objs: unknown[]) {
  return objs as SpotlightCommentObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getSpotlightCommentObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSpotlightCommentObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSpotlightCommentObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSpotlightCommentObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listSpotlightCommentObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpotlightCommentObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpotlightCommentObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSpotlightCommentObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listSpotlightCommentObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSpotlightCommentObjs?.items || []);
}

async function createObj(newObj: Omit<SpotlightCommentObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpotlightCommentObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpotlightCommentObj);
}

async function updateObj(id: string, updateObj: Partial<SpotlightCommentObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpotlightCommentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpotlightCommentObj);
}

async function overwriteObj(id: string, newObj: SpotlightCommentObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpotlightCommentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpotlightCommentObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpotlightCommentObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSpotlightCommentObj);
}

export const spotlightCommentDbWrapper: GqlDbWrapper<SpotlightCommentObj> = {
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
