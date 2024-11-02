import { GqlDbWrapper } from '@/architecture/client/main';
import { ArcSectionObj } from '@/architecture/model/horizon/arc/section/main';
import { amplifyClient } from '@/external/aws/graphql/main';
import {
  createArcSectionObj,
  deleteArcSectionObj,
  updateArcSectionObj,
} from '@/graphql/mutations';
import { getArcSectionObj, listArcSectionObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

type TargetObj = ArcSectionObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
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

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createArcSectionObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createArcSectionObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
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

async function overwriteObj(id: string, newObj: TargetObj) {
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

export const arcSectionDbWrapper: GqlDbWrapper<TargetObj> = {
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
