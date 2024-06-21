import { amplifyClient } from '@/(api)/aws/graphql/main';
import { SpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createSpaceChapterObj,
  deleteSpaceChapterObj,
  updateSpaceChapterObj,
} from '@/graphql/mutations';
import { getSpaceChapterObj, listSpaceChapterObjs } from '@/graphql/queries';
import { GqlDbWrapper } from '../../main';

function castSingle(obj: unknown) {
  return obj as SpaceChapterObj;
}

function castMultiple(objs: unknown[]) {
  return objs as SpaceChapterObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getSpaceChapterObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSpaceChapterObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSpaceChapterObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSpaceChapterObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listSpaceChapterObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceChapterObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpaceChapterObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSpaceChapterObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listSpaceChapterObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSpaceChapterObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceChapterObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceChapterObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceChapterObj);
}

async function updateObj(id: string, updateObj: Partial<SpaceChapterObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceChapterObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceChapterObj);
}

async function overwriteObj(id: string, newObj: SpaceChapterObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceChapterObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceChapterObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceChapterObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSpaceChapterObj);
}

export const spaceChapterDbWrapper: GqlDbWrapper<SpaceChapterObj> = {
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
