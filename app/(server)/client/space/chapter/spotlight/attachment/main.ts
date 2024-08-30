import { GqlDbWrapper } from '@/(server)/client/main';
import { SpotlightAttachmentObj } from '@/(server)/model/space/chapter/spotlight/attachment/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createSpotlightAttachmentObj,
  deleteSpotlightAttachmentObj,
  updateSpotlightAttachmentObj,
} from '@/graphql/mutations';
import {
  getSpotlightAttachmentObj,
  listSpotlightAttachmentObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as SpotlightAttachmentObj;
}

function castMultiple(objs: unknown[]) {
  return objs as SpotlightAttachmentObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getSpotlightAttachmentObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSpotlightAttachmentObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSpotlightAttachmentObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSpotlightAttachmentObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listSpotlightAttachmentObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpotlightAttachmentObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpotlightAttachmentObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSpotlightAttachmentObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listSpotlightAttachmentObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSpotlightAttachmentObjs?.items || []);
}

async function createObj(newObj: Omit<SpotlightAttachmentObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpotlightAttachmentObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpotlightAttachmentObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<SpotlightAttachmentObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateSpotlightAttachmentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpotlightAttachmentObj);
}

async function overwriteObj(id: string, newObj: SpotlightAttachmentObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpotlightAttachmentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpotlightAttachmentObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpotlightAttachmentObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSpotlightAttachmentObj);
}

export const spotlightAttachmentDbWrapper: GqlDbWrapper<SpotlightAttachmentObj> =
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
