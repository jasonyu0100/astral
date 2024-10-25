import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createCollectionResourceObj,
  deleteCollectionResourceObj,
  updateCollectionResourceObj,
} from '@/graphql/mutations';
import {
  getCollectionResourceObj,
  listCollectionResourceObjs,
} from '@/graphql/queries';
import { GqlDbWrapper } from '@/server/client/main';
import { CollectionResourceObj } from '@/server/model/gallery/collection/resource/main';
import { gqlArgs } from '@/utils/clean';

type TargetObj = CollectionResourceObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getCollectionResourceObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getCollectionResourceObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getCollectionResourceObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getCollectionResourceObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listCollectionResourceObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listCollectionResourceObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listCollectionResourceObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listCollectionResourceObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listCollectionResourceObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listCollectionResourceObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createCollectionResourceObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createCollectionResourceObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateCollectionResourceObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateCollectionResourceObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateCollectionResourceObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateCollectionResourceObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteCollectionResourceObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteCollectionResourceObj);
}

export const collectionResourceDbWrapper: GqlDbWrapper<TargetObj> = {
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
