import { GqlDbWrapper } from '@/(server)/client/main';
import { LogLinkObj } from '@/(server)/model/space/chapter/log/link/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createLogLinkObj,
  deleteLogLinkObj,
  updateLogLinkObj,
} from '@/graphql/mutations';
import { getLogLinkObj, listLogLinkObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as LogLinkObj;
}

function castMultiple(objs: unknown[]) {
  return objs as LogLinkObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getLogLinkObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getLogLinkObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getLogLinkObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getLogLinkObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listLogLinkObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listLogLinkObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listLogLinkObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listLogLinkObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listLogLinkObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listLogLinkObjs?.items || []);
}

async function createObj(newObj: Omit<LogLinkObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createLogLinkObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createLogLinkObj);
}

async function updateObj(id: string, updateObj: Partial<LogLinkObj>) {
  const payload = await amplifyClient.graphql({
    query: updateLogLinkObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateLogLinkObj);
}

async function overwriteObj(id: string, newObj: LogLinkObj) {
  const payload = await amplifyClient.graphql({
    query: updateLogLinkObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateLogLinkObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteLogLinkObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteLogLinkObj);
}

export const logLinkDbWrapper: GqlDbWrapper<LogLinkObj> = {
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
