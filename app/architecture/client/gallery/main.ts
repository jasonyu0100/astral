import { amplifyClient } from '@/api/aws/graphql/main';
import { GalleryObj } from '@/architecture/model/gallery/main';
import {
  createGalleryObj,
  deleteGalleryObj,
  updateGalleryObj,
} from '@/graphql/mutations';
import { getGalleryObj, listGalleryObjs } from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';
import { GqlDbWrapper } from '../main';

type TargetObj = GalleryObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getGalleryObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getGalleryObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getGalleryObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getGalleryObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listGalleryObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listGalleryObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listGalleryObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listGalleryObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listGalleryObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listGalleryObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createGalleryObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createGalleryObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateGalleryObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateGalleryObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateGalleryObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateGalleryObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteGalleryObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteGalleryObj);
}

export const galleryDbWrapper: GqlDbWrapper<TargetObj> = {
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
