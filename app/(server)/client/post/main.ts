import { GqlDbWrapper } from '@/(server)/client/main';
import { UserPostObj } from '@/(server)/model/post/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createUserPostObj,
  deleteUserPostObj,
  updateUserPostObj,
} from '@/graphql/mutations';
import { getUserPostObj, listUserPostObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

type TargetObj = UserPostObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getUserPostObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getUserPostObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getUserPostObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getUserPostObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listUserPostObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listUserPostObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listUserPostObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listUserPostObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listUserPostObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listUserPostObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createUserPostObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createUserPostObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateUserPostObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserPostObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateUserPostObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserPostObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteUserPostObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteUserPostObj);
}

export const userPostDbWrapper: GqlDbWrapper<TargetObj> = {
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
