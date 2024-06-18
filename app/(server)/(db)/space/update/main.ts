import { amplifyClient } from '@/(api)/aws/graphql/main';
import { SpaceUpdateObj } from '@/(server)/(model)/space/update/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createSpaceUpdateObj,
  deleteSpaceUpdateObj,
  updateSpaceUpdateObj,
} from '@/graphql/mutations';
import { getSpaceUpdateObj, listSpaceUpdateObjs } from '@/graphql/queries';
import { GqlDbWrapper } from '../../main';

function castSingle(obj: any) {
  return obj as SpaceUpdateObj;
}

function castMultiple(objs: any[]) {
  return objs as SpaceUpdateObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getSpaceUpdateObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSpaceUpdateObj);
}

async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSpaceUpdateObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSpaceUpdateObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceUpdateObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSpaceUpdateObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSpaceUpdateObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceUpdateObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceUpdateObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceUpdateObj);
}

async function updateObj(id: string, updateObj: Partial<SpaceUpdateObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceUpdateObj);
}

async function overwriteObj(id: string, newObj: SpaceUpdateObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceUpdateObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceUpdateObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSpaceUpdateObj);
}

export const spaceUpdateDbWrapper: GqlDbWrapper<SpaceUpdateObj> = {
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
