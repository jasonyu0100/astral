import { amplifyClient } from '@/api/aws/graphql/main';
import { GqlDbWrapper } from '@/architecture/client/main';
import { TaskObj } from '@/architecture/model/task/main';
import {
  createTaskObj,
  deleteTaskObj,
  updateTaskObj,
} from '@/graphql/mutations';
import { getTaskObj, listTaskObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

type TargetObj = TaskObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getTaskObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getTaskObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getTaskObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getTaskObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listTaskObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listTaskObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listTaskObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listTaskObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listTaskObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listTaskObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createTaskObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createTaskObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateTaskObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateTaskObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateTaskObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateTaskObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteTaskObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteTaskObj);
}

export const taskDbWrapper: GqlDbWrapper<TargetObj> = {
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
