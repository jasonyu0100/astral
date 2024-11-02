import { amplifyClient } from '@/api/aws/graphql/main';
import { SpaceObj } from '@/architecture/model/space/main';
import {
  createSpaceObj,
  deleteSpaceObj,
  updateSpaceObj,
} from '@/graphql/mutations';
import { getSpaceObj, listSpaceObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';
import { GqlDbWrapper } from '../main';

type TargetObj = SpaceObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getSpaceObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSpaceObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: listSpaceObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listSpaceObjs);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listSpaceObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpaceObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSpaceObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listSpaceObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSpaceObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSpaceObj);
}

export const spaceDbWrapper: GqlDbWrapper<TargetObj> = {
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
