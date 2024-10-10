import { GqlDbWrapper } from '@/(server)/client/main';
import { ArcSectionObj } from '@/(server)/model/horizon/arc/section/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createArcSectionObj,
  deleteArcSectionObj,
  updateArcSectionObj,
} from '@/graphql/mutations';
import { getArcSectionObj, listArcSectionObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as ArcSectionObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ArcSectionObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getArcSectionObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getArcSectionObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getArcSectionObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getArcSectionObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listArcSectionObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listArcSectionObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listArcSectionObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listArcSectionObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listArcSectionObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listArcSectionObjs?.items || []);
}

async function createObj(newObj: Omit<ArcSectionObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createArcSectionObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createArcSectionObj);
}

async function updateObj(id: string, updateObj: Partial<ArcSectionObj>) {
  const payload = await amplifyClient.graphql({
    query: updateArcSectionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateArcSectionObj);
}

async function overwriteObj(id: string, newObj: ArcSectionObj) {
  const payload = await amplifyClient.graphql({
    query: updateArcSectionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateArcSectionObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteArcSectionObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteArcSectionObj);
}

export const arcSectionDbWrapper: GqlDbWrapper<ArcSectionObj> = {
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
