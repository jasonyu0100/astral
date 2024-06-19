import { amplifyClient } from '@/(api)/aws/graphql/main';
import { SpaceMemberObj } from '@/(server)/(model)/space/member/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createSpaceMemberObj,
  deleteSpaceMemberObj,
  updateSpaceMemberObj,
} from '@/graphql/mutations';
import { getSpaceMemberObj, listSpaceMemberObjs } from '@/graphql/queries';
import { GqlDbWrapper } from '../../main';

function castSingle(obj: unknown) {
  return obj as SpaceMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as SpaceMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getSpaceMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSpaceMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSpaceMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSpaceMemberObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSpaceMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSpaceMemberObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceMemberObj);
}

async function updateObj(id: string, updateObj: Partial<SpaceMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceMemberObj);
}

async function overwriteObj(id: string, newObj: SpaceMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSpaceMemberObj);
}

export const spaceMemberDbWrapper: GqlDbWrapper<SpaceMemberObj> = {
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
