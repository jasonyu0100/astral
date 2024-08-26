import { GqlDbWrapper } from '@/(server)/client/main';
import { HorizonSessionContributorObj } from '@/(server)/model/horizon/session/contributor/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createHorizonSessionContributorObj,
  deleteHorizonSessionContributorObj,
  updateHorizonSessionContributorObj,
} from '@/graphql/mutations';
import {
  getHorizonSessionContributorObj,
  listHorizonSessionContributorObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as HorizonSessionContributorObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonSessionContributorObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonSessionContributorObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonSessionContributorObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonSessionContributorObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonSessionContributorObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listHorizonSessionContributorObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(
    payload?.data?.listHorizonSessionContributorObjs?.items || [],
  );
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonSessionContributorObjs,
    variables: {},
  });

  return castMultiple(
    payload?.data?.listHorizonSessionContributorObjs?.items || [],
  );
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonSessionContributorObjs,
    variables: variables,
  });

  return castMultiple(
    payload?.data?.listHorizonSessionContributorObjs?.items || [],
  );
}

async function createObj(newObj: Omit<HorizonSessionContributorObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonSessionContributorObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonSessionContributorObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<HorizonSessionContributorObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonSessionContributorObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonSessionContributorObj);
}

async function overwriteObj(id: string, newObj: HorizonSessionContributorObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonSessionContributorObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonSessionContributorObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonSessionContributorObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonSessionContributorObj);
}

export const horizonSessionContributorDbWrapper: GqlDbWrapper<HorizonSessionContributorObj> =
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
