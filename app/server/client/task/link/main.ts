import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createTaskLinkObj,
  deleteTaskLinkObj,
  updateTaskLinkObj,
} from '@/graphql/mutations';
import { getTaskLinkObj, listTaskLinkObjs } from '@/graphql/queries';
import { GqlDbWrapper } from '@/server/client/main';
import { TaskLinkObj } from '@/server/model/task/link/main';
import { gqlArgs } from '@/utils/clean';

type TargetObj = TaskLinkObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getTaskLinkObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getTaskLinkObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getTaskLinkObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getTaskLinkObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listTaskLinkObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listTaskLinkObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listTaskLinkObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listTaskLinkObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listTaskLinkObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listTaskLinkObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createTaskLinkObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createTaskLinkObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateTaskLinkObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateTaskLinkObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateTaskLinkObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateTaskLinkObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteTaskLinkObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteTaskLinkObj);
}

export const taskLinkDbWrapper: GqlDbWrapper<TargetObj> = {
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
