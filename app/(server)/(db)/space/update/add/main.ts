import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { SpaceUpdateAddObj } from '@/(server)/(model)/space/update/add/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createSpaceUpdateAddObj,
  deleteSpaceUpdateAddObj,
  updateSpaceUpdateAddObj,
} from '@/graphql/mutations';
import {
  getSpaceUpdateAddObj,
  listSpaceUpdateAddObjs,
} from '@/graphql/queries';

function castSingle(obj: any) {
  return obj as SpaceUpdateAddObj;
}

function castMultiple(objs: any[]) {
  return objs as SpaceUpdateAddObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: getSpaceUpdateAddObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSpaceUpdateAddObj);
}

async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSpaceUpdateAddObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSpaceUpdateAddObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateAddObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceUpdateAddObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateAddObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSpaceUpdateAddObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listSpaceUpdateAddObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSpaceUpdateAddObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceUpdateAddObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceUpdateAddObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceUpdateAddObj);
}

async function updateObj(id: string, updateObj: Partial<SpaceUpdateAddObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceUpdateAddObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceUpdateAddObj);
}

async function overwriteObj(id: string, newObj: SpaceUpdateAddObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceUpdateAddObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceUpdateAddObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceUpdateAddObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSpaceUpdateAddObj);
}

export const spaceUpdateAddDbWrapper: GqlDbWrapper<SpaceUpdateAddObj> = {
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
