import { GqlDbWrapper } from '@/(server)/client/main';
import { TaskMemberObj } from '@/(server)/model/task/member/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createTaskMemberObj,
  deleteTaskMemberObj,
  updateTaskMemberObj,
} from '@/graphql/mutations';
import { getTaskMemberObj, listTaskMemberObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

type TargetObj = TaskMemberObj;

function castSingle(obj: unknown) {
  return obj as TaskMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TaskMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getTaskMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getTaskMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getTaskMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getTaskMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listTaskMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listTaskMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listTaskMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listTaskMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listTaskMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listTaskMemberObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createTaskMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createTaskMemberObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateTaskMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateTaskMemberObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateTaskMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateTaskMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteTaskMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteTaskMemberObj);
}

export const taskMemberDbWrapper: GqlDbWrapper<TargetObj> = {
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
