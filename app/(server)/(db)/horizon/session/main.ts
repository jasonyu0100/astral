import { amplifyClient } from '@/(api)/aws/graphql/main';
import { HorizonSessionObj } from '@/(server)/(model)/horizon/session/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createHorizonSessionObj,
  deleteHorizonSessionObj,
  updateHorizonSessionObj,
} from '@/graphql/mutations';
import {
  getHorizonSessionObj,
  listHorizonSessionObjs,
} from '@/graphql/queries';
import { GqlDbWrapper } from '../../main';

function castSingle(obj: unknown) {
  return obj as HorizonSessionObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonSessionObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonSessionObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonSessionObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonSessionObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonSessionObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listHorizonSessionObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonSessionObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonSessionObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listHorizonSessionObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonSessionObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listHorizonSessionObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonSessionObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonSessionObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonSessionObj);
}

async function updateObj(id: string, updateObj: Partial<HorizonSessionObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonSessionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonSessionObj);
}

async function overwriteObj(id: string, newObj: HorizonSessionObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonSessionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonSessionObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonSessionObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonSessionObj);
}

export const horizonSessionDbWrapper: GqlDbWrapper<HorizonSessionObj> = {
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
