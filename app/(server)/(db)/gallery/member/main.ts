import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GalleryMemberObj } from '@/(server)/(model)/gallery/member/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createGalleryMemberObj,
  deleteGalleryMemberObj,
  updateGalleryMemberObj,
} from '@/graphql/mutations';
import { getGalleryMemberObj, listGalleryMemberObjs } from '@/graphql/queries';
import { GqlDbWrapper } from '../../main';

function castSingle(obj: unknown) {
  return obj as GalleryMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as GalleryMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getGalleryMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getGalleryMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getGalleryMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getGalleryMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listGalleryMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listGalleryMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listGalleryMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listGalleryMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listGalleryMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listGalleryMemberObjs?.items || []);
}

async function createObj(newObj: Omit<GalleryMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createGalleryMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createGalleryMemberObj);
}

async function updateObj(id: string, updateObj: Partial<GalleryMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateGalleryMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateGalleryMemberObj);
}

async function overwriteObj(id: string, newObj: GalleryMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateGalleryMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateGalleryMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteGalleryMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteGalleryMemberObj);
}

export const galleryMemberDbWrapper: GqlDbWrapper<GalleryMemberObj> = {
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
