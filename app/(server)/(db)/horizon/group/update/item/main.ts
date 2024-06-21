import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { HorizonGroupSessionUpdateObj } from '@/(server)/(model)/horizon/group/session/update/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createHorizonGroupSessionUpdateObj,
  deleteHorizonGroupSessionUpdateObj,
  updateHorizonGroupSessionUpdateObj,
} from '@/graphql/mutations';
import {
  getHorizonGroupSessionUpdateObj,
  listHorizonGroupSessionUpdateObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as HorizonGroupSessionUpdateObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonGroupSessionUpdateObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonGroupSessionUpdateObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonGroupSessionUpdateObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonGroupSessionUpdateObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonGroupSessionUpdateObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupSessionUpdateObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(
    payload?.data?.listHorizonGroupSessionUpdateObjs?.items || [],
  );
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupSessionUpdateObjs,
    variables: {},
  });

  return castMultiple(
    payload?.data?.listHorizonGroupSessionUpdateObjs?.items || [],
  );
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupSessionUpdateObjs,
    variables: variables,
  });

  return castMultiple(
    payload?.data?.listHorizonGroupSessionUpdateObjs?.items || [],
  );
}

async function createObj(newObj: Omit<HorizonGroupSessionUpdateObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonGroupSessionUpdateObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonGroupSessionUpdateObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<HorizonGroupSessionUpdateObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonGroupSessionUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonGroupSessionUpdateObj);
}

async function overwriteObj(id: string, newObj: HorizonGroupSessionUpdateObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonGroupSessionUpdateObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonGroupSessionUpdateObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonGroupSessionUpdateObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonGroupSessionUpdateObj);
}

export const horizonGroupSessionUpdateDbWrapper: GqlDbWrapper<HorizonGroupSessionUpdateObj> =
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
