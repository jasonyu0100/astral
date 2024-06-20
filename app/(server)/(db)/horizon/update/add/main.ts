import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { HorizonUpdateItemObj } from '@/(server)/(model)/horizon/update/add/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createHorizonUpdateAddObj,
  deleteHorizonUpdateAddObj,
  updateHorizonUpdateAddObj,
} from '@/graphql/mutations';
import {
  getHorizonUpdateAddObj,
  listHorizonUpdateAddObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as HorizonUpdateItemObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonUpdateItemObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonUpdateAddObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonUpdateAddObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonUpdateAddObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonUpdateAddObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateAddObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonUpdateAddObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateAddObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listHorizonUpdateAddObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonUpdateAddObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listHorizonUpdateAddObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonUpdateItemObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonUpdateAddObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonUpdateAddObj);
}

async function updateObj(id: string, updateObj: Partial<HorizonUpdateItemObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonUpdateAddObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonUpdateAddObj);
}

async function overwriteObj(id: string, newObj: HorizonUpdateItemObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonUpdateAddObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonUpdateAddObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonUpdateAddObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonUpdateAddObj);
}

export const horizonUpdateItemDbWrapper: GqlDbWrapper<HorizonUpdateItemObj> = {
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
