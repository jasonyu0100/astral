import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { HorizonGroupSessionObj } from '@/(server)/(model)/horizon/group/session/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createHorizonGroupSessionObj,
  deleteHorizonGroupSessionObj,
  updateHorizonGroupSessionObj,
} from '@/graphql/mutations';
import {
  getHorizonGroupSessionObj,
  listHorizonGroupSessionObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as HorizonGroupSessionObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonGroupSessionObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonGroupSessionObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonGroupSessionObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonGroupSessionObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonGroupSessionObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupSessionObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonGroupSessionObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupSessionObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listHorizonGroupSessionObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupSessionObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listHorizonGroupSessionObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonGroupSessionObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonGroupSessionObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonGroupSessionObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<HorizonGroupSessionObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonGroupSessionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonGroupSessionObj);
}

async function overwriteObj(id: string, newObj: HorizonGroupSessionObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonGroupSessionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonGroupSessionObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonGroupSessionObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonGroupSessionObj);
}

export const horizonGroupSessionDbWrapper: GqlDbWrapper<HorizonGroupSessionObj> =
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
