import { GqlDbWrapper } from '@/(server)/client/main';
import { LogMemberObj } from '@/(server)/model/space/chapter/way/member/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createLogMemberObj,
  deleteLogMemberObj,
  updateLogMemberObj,
} from '@/graphql/mutations';
import { getLogMemberObj, listLogMemberObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as LogMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as LogMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getLogMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getLogMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getLogMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getLogMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listLogMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listLogMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listLogMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listLogMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listLogMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listLogMemberObjs?.items || []);
}

async function createObj(newObj: Omit<LogMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createLogMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createLogMemberObj);
}

async function updateObj(id: string, updateObj: Partial<LogMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateLogMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateLogMemberObj);
}

async function overwriteObj(id: string, newObj: LogMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateLogMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateLogMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteLogMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteLogMemberObj);
}

export const wayMemberDbWrapper: GqlDbWrapper<LogMemberObj> = {
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
