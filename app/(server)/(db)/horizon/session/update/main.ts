import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { HorizonSessionUpdateObj } from '@/(server)/(model)/horizon/session/update/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createHorizonSessionUpdateObj,
  deleteHorizonSessionUpdateObj,
  updateHorizonSessionUpdateObj,
} from '@/graphql/mutations';
import {
  getHorizonSessionUpdateObj,
  listHorizonSessionUpdateObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as HorizonSessionUpdateObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonSessionUpdateObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonSessionUpdateObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonSessionUpdateObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonSessionUpdateObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonSessionUpdateObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listHorizonSessionUpdateObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonSessionUpdateObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonSessionUpdateObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listHorizonSessionUpdateObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonSessionUpdateObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listHorizonSessionUpdateObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonSessionUpdateObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonSessionUpdateObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonSessionUpdateObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<HorizonSessionUpdateObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonSessionUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonSessionUpdateObj);
}

async function overwriteObj(id: string, newObj: HorizonSessionUpdateObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonSessionUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonSessionUpdateObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonSessionUpdateObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonSessionUpdateObj);
}

export const horizonSessionUpdateDbWrapper: GqlDbWrapper<HorizonSessionUpdateObj> =
  {
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
