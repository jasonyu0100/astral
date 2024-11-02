import { GqlDbWrapper } from '@/architecture/client/main';
import { UserActivityObj } from '@/architecture/model/activity/main';
import { amplifyClient } from '@/external/aws/graphql/main';
import {
  createUserActivityObj,
  deleteUserActivityObj,
  updateUserActivityObj,
} from '@/graphql/mutations';
import { getUserActivityObj, listUserActivityObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

type TargetObj = UserActivityObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getUserActivityObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getUserActivityObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getUserActivityObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getUserActivityObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listUserActivityObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listUserActivityObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listUserActivityObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listUserActivityObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listUserActivityObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listUserActivityObjs?.items || []);
}

async function createObj(newObj: Omit<UserActivityObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createUserActivityObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createUserActivityObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateUserActivityObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserActivityObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateUserActivityObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserActivityObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteUserActivityObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteUserActivityObj);
}

export const userActivityDbWrapper: GqlDbWrapper<TargetObj> = {
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
