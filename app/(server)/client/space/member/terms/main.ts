import { SpaceMemberTermsObj } from '@/(server)/model/space/member/terms/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createSpaceMemberTermsObj,
  deleteSpaceMemberTermsObj,
  updateSpaceMemberTermsObj,
} from '@/graphql/mutations';
import {
  getSpaceMemberTermsObj,
  listSpaceMemberTermsObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';
import { GqlDbWrapper } from '../../../main';

function castSingle(obj: unknown) {
  return obj as SpaceMemberTermsObj;
}

function castMultiple(objs: unknown[]) {
  return objs as SpaceMemberTermsObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getSpaceMemberTermsObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSpaceMemberTermsObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSpaceMemberTermsObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSpaceMemberTermsObj);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberTermsObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSpaceMemberTermsObjs?.items || []);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberTermsObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceMemberTermsObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listSpaceMemberTermsObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSpaceMemberTermsObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceMemberTermsObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceMemberTermsObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceMemberTermsObj);
}

async function updateObj(id: string, updateObj: Partial<SpaceMemberTermsObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceMemberTermsObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceMemberTermsObj);
}

async function overwriteObj(id: string, newObj: SpaceMemberTermsObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceMemberTermsObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceMemberTermsObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceMemberTermsObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSpaceMemberTermsObj);
}

export const spaceMemberTermsDbWrapper: GqlDbWrapper<SpaceMemberTermsObj> = {
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
