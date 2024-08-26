import { GqlDbWrapper } from '@/(server)/client/main';
import { HorizonGroupSessionContributorObj } from '@/(server)/model/horizon/group/session/contributor/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createHorizonGroupSessionContributorObj,
  deleteHorizonGroupSessionContributorObj,
  updateHorizonGroupSessionContributorObj,
} from '@/graphql/mutations';
import {
  getHorizonGroupSessionContributorObj,
  listHorizonGroupSessionContributorObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as HorizonGroupSessionContributorObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonGroupSessionContributorObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonGroupSessionContributorObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonGroupSessionContributorObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonGroupSessionContributorObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonGroupSessionContributorObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupSessionContributorObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(
    payload?.data?.listHorizonGroupSessionContributorObjs?.items || [],
  );
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupSessionContributorObjs,
    variables: {},
  });

  return castMultiple(
    payload?.data?.listHorizonGroupSessionContributorObjs?.items || [],
  );
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupSessionContributorObjs,
    variables: variables,
  });

  return castMultiple(
    payload?.data?.listHorizonGroupSessionContributorObjs?.items || [],
  );
}

async function createObj(
  newObj: Omit<HorizonGroupSessionContributorObj, 'id'>,
) {
  const payload = await amplifyClient.graphql({
    query: createHorizonGroupSessionContributorObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonGroupSessionContributorObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<HorizonGroupSessionContributorObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonGroupSessionContributorObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonGroupSessionContributorObj);
}

async function overwriteObj(
  id: string,
  newObj: HorizonGroupSessionContributorObj,
) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonGroupSessionContributorObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonGroupSessionContributorObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonGroupSessionContributorObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonGroupSessionContributorObj);
}

export const horizonGroupSessionContributorDbWrapper: GqlDbWrapper<HorizonGroupSessionContributorObj> =
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
