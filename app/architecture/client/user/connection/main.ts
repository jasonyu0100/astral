import { amplifyClient } from '@/api/aws/graphql/main';
import { UserConnectionObj } from '@/architecture/model/user/connection/main';
import {
  createUserConnectionObj,
  deleteUserConnectionObj,
  updateUserConnectionObj,
} from '@/graphql/mutations';
import {
  getUserConnectionObj,
  listUserConnectionObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';
import { GqlDbWrapper } from '../../main';

type TargetObj = UserConnectionObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getUserConnectionObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getUserConnectionObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getUserConnectionObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getUserConnectionObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listUserConnectionObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listUserConnectionObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listUserConnectionObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listUserConnectionObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listUserConnectionObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listUserConnectionObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createUserConnectionObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createUserConnectionObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateUserConnectionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserConnectionObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateUserConnectionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserConnectionObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteUserConnectionObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteUserConnectionObj);
}

export const userConnectionDbWrapper: GqlDbWrapper<TargetObj> = {
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
