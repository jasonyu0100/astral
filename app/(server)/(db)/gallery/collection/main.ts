import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GalleryCollectionObj } from "@/(server)/(model)/gallery/collection/main";
import { gqlArgs } from "@/(utils)/clean";
import { createGalleryCollectionObj, deleteGalleryCollectionObj, updateGalleryCollectionObj } from "@/graphql/mutations";
import { listGalleryCollectionObjs } from "@/graphql/queries";
import { GqlDbWrapper } from "../../main";

function castSingle(obj: any) {
  return obj as GalleryCollectionObj;
}

function castMultiple(objs: any[]) {
  return objs as GalleryCollectionObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listGalleryCollectionObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listGalleryCollectionObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listGalleryCollectionObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listGalleryCollectionObjs);
}

async function listObjs(key: string, value: string) {
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
    variables: {
    },
  });

  return castMultiple(payload?.data?.listGalleryCollectionObjs?.items || []);
}


async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listGalleryCollectionObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listGalleryCollectionObjs?.items || []);
}

async function createObj(newObj: Omit<GalleryCollectionObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createGalleryCollectionObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createGalleryCollectionObj);
} 

async function updateObj(id: string, updateObj: Partial<GalleryCollectionObj>) {
  const payload = await amplifyClient.graphql({
    query: updateGalleryCollectionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateGalleryCollectionObj);
} 

async function overwriteObj(id: string, newObj: GalleryCollectionObj) {
  const payload = await amplifyClient.graphql({
    query: updateGalleryCollectionObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
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

export const galleryCollectionDbWrapper: GqlDbWrapper<GalleryCollectionObj> = {
    getObj,
    listObjs,
    listAllObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}