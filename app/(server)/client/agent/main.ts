import { AgentObj } from '@/(server)/model/agent/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createAgentObj,
  deleteAgentObj,
  updateAgentObj,
} from '@/graphql/mutations';
import { getAgentObj, listAgentObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';
import { GqlDbWrapper } from '../main';

function castSingle(obj: unknown) {
  return obj as AgentObj;
}

function castMultiple(objs: unknown[]) {
  return objs as AgentObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getAgentObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getAgentObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getAgentObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getAgentObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listAgentObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listAgentObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listAgentObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listAgentObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listAgentObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listAgentObjs?.items || []);
}

async function createObj(newObj: Omit<AgentObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createAgentObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createAgentObj);
}

async function updateObj(id: string, updateObj: Partial<AgentObj>) {
  const payload = await amplifyClient.graphql({
    query: updateAgentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateAgentObj);
}

async function overwriteObj(id: string, newObj: AgentObj) {
  const payload = await amplifyClient.graphql({
    query: updateAgentObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateAgentObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteAgentObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteAgentObj);
}

export const agentDbWrapper: GqlDbWrapper<AgentObj> = {
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
