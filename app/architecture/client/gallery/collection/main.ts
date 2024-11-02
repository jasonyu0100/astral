import { amplifyClient } from '@/api/aws/graphql/main';
import { GalleryCollectionObj } from '@/architecture/model/gallery/collection/main';
import {
  createGalleryCollectionObj,
  deleteGalleryCollectionObj,
  updateGalleryCollectionObj,
} from '@/graphql/mutations';
import {
  getGalleryCollectionObj,
  listGalleryCollectionObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';
import { GqlDbWrapper } from '../../main';

type TargetObj = GalleryCollectionObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getGalleryCollectionObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getGalleryCollectionObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getGalleryCollectionObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getGalleryCollectionObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listGalleryCollectionObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listGalleryCollectionObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listGalleryCollectionObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listGalleryCollectionObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listGalleryCollectionObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listGalleryCollectionObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createGalleryCollectionObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createGalleryCollectionObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateGalleryCollectionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateGalleryCollectionObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateGalleryCollectionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateGalleryCollectionObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteGalleryCollectionObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteGalleryCollectionObj);
}

export const galleryCollectionDbWrapper: GqlDbWrapper<TargetObj> = {
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
