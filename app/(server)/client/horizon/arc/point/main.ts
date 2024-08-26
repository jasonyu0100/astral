import { GqlDbWrapper } from '@/(server)/client/main';
import { ArcPointObj } from '@/(server)/model/horizon/arc/point/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createArcPointObj,
  deleteArcPointObj,
  updateArcPointObj,
} from '@/graphql/mutations';
import { getArcPointObj, listArcPointObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as ArcPointObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ArcPointObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getArcPointObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getArcPointObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getArcPointObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getArcPointObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listArcPointObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listArcPointObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listArcPointObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listArcPointObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listArcPointObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listArcPointObjs?.items || []);
}

async function createObj(newObj: Omit<ArcPointObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createArcPointObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createArcPointObj);
}

async function updateObj(id: string, updateObj: Partial<ArcPointObj>) {
  const payload = await amplifyClient.graphql({
    query: updateArcPointObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateArcPointObj);
}

async function overwriteObj(id: string, newObj: ArcPointObj) {
  const payload = await amplifyClient.graphql({
    query: updateArcPointObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateArcPointObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteArcPointObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteArcPointObj);
}

export const arcPointDbWrapper: GqlDbWrapper<ArcPointObj> = {
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
