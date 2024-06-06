import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GalleryObj } from "@/(model)/gallery/main";
import { gqlArgs } from "@/(utils)/clean";
import { createGalleryObj, deleteGalleryObj, updateGalleryObj } from "@/graphql/mutations";
import { listGalleryObjs } from "@/graphql/queries";

function castSingle(obj: any): GalleryObj {
  return obj as GalleryObj;
}

function castMultiple(objs: any[]): GalleryObj[] {
  return objs as GalleryObj[];
}

async function getObj(key: string, value: string): Promise<GalleryObj> {
  const payload = await amplifyClient.graphql({
    query: listGalleryObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listGalleryObjs);
}

async function getFromVariables(variables: Object): Promise<GalleryObj> {
  const payload = await amplifyClient.graphql({
    query: listGalleryObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listGalleryObjs);
}

async function listObjs(key: string, value: string): Promise<GalleryObj[]> {
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

async function listFromVariables(variables: Object): Promise<GalleryObj[]> {
  const payload = await amplifyClient.graphql({
    query: listGalleryObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listGalleryObjs?.items || []);
}

async function createObj(newObj: Omit<GalleryObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createGalleryObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createGalleryObj);
} 

async function updateObj(id: string, updateObj: Partial<GalleryObj>) {
  const payload = await amplifyClient.graphql({
    query: updateGalleryObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateGalleryObj);
} 

async function overwriteObj(id: string, newObj: GalleryObj) {
  const payload = await amplifyClient.graphql({
    query: updateGalleryObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
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

interface GalleryDbWrapper {
    getObj: (key: string, value: string) => Promise<GalleryObj>;
    listObjs: (key: string, value: string) => Promise<GalleryObj[]>;
    createObj: (newObj: Omit<GalleryObj, 'id'>) => Promise<GalleryObj>;
    updateObj: (id: string, updateObj: Partial<GalleryObj>) => Promise<GalleryObj>;
    overwriteObj: (id: string, newObj: GalleryObj) => Promise<GalleryObj>;
    deleteObj: (id: string) => Promise<GalleryObj>;
    getFromVariables: (variables: Object) => Promise<GalleryObj>;
    listFromVariables: (variables: Object) => Promise<GalleryObj[]>;
}

export const galleryDbWrapper: GalleryDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}