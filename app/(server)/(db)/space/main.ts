import { amplifyClient } from '@/(api)/aws/graphql/main';
import { SpaceObj } from '@/(server)/(model)/space/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createSpaceObj,
  deleteSpaceObj,
  updateSpaceObj,
} from '@/graphql/mutations';
import { listSpaceObjs } from '@/graphql/queries';
import { GqlDbWrapper } from '../main';

function castSingle(obj: any) {
  return obj as SpaceObj;
}

function castMultiple(objs: any[]) {
  return objs as SpaceObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listSpaceObjs,
    variables: {
      [key]: {
        eq: value,
      },
    },
  });

  return castSingle(payload?.data?.listSpaceObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listSpaceObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listSpaceObjs);
}

async function listObjs(key: string, value: string) {
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

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listSpaceObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSpaceObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceObj);
}

async function updateObj(id: string, updateObj: Partial<SpaceObj>) {
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

async function overwriteObj(id: string, newObj: SpaceObj) {
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


export const spaceDbWrapper: GqlDbWrapper<SpaceObj> = {
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
