import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GalleryCollectionObj } from "@/(model)/gallery/collection/main";
import { gqlArgs } from "@/(utils)/clean";
import { createGalleryCollectionObj, deleteGalleryCollectionObj, updateGalleryCollectionObj } from "@/graphql/mutations";
import { listGalleryCollectionObjs } from "@/graphql/queries";

function castSingle(obj: any): GalleryCollectionObj {
  return obj as GalleryCollectionObj;
}

function castMultiple(objs: any[]): GalleryCollectionObj[] {
  return objs as GalleryCollectionObj[];
}

async function getObj(key: string, value: string): Promise<GalleryCollectionObj> {
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

async function getFromVariables(variables: Object): Promise<GalleryCollectionObj> {
  const payload = await amplifyClient.graphql({
    query: listGalleryCollectionObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listGalleryCollectionObjs);
}

async function listObjs(key: string, value: string): Promise<GalleryCollectionObj[]> {
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

async function listFromVariables(variables: Object): Promise<GalleryCollectionObj[]> {
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

interface GalleryCollectionDbWrapper {
    getObj: (key: string, value: string) => Promise<GalleryCollectionObj>;
    listObjs: (key: string, value: string) => Promise<GalleryCollectionObj[]>;
    createObj: (newObj: Omit<GalleryCollectionObj, 'id'>) => Promise<GalleryCollectionObj>;
    updateObj: (id: string, updateObj: Partial<GalleryCollectionObj>) => Promise<GalleryCollectionObj>;
    overwriteObj: (id: string, newObj: GalleryCollectionObj) => Promise<GalleryCollectionObj>;
    deleteObj: (id: string) => Promise<GalleryCollectionObj>;
    getFromVariables: (variables: Object) => Promise<GalleryCollectionObj>;
    listFromVariables: (variables: Object) => Promise<GalleryCollectionObj[]>;
}

export const gallerycollectionDbWrapper: GalleryCollectionDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}