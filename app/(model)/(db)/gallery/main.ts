import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GalleryObj } from "@/(model)/gallery/main";
import { gqlArgs } from "@/(utils)/clean";
import { createGalleryObj, deleteGalleryObj, updateGalleryObj } from "@/graphql/mutations";
import { listGalleryObjs } from "@/graphql/queries";
import { GqlDbWrapper } from "../main";

function castSingle(obj: any) {
  return obj as GalleryObj;
}

function castMultiple(objs: any[]) {
  return objs as GalleryObj[];
}

async function getObj(key: string, value: string) {
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

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listGalleryObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listGalleryObjs);
}

async function listObjs(key: string, value: string) {
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
    variables: {
    },
  });

  return castMultiple(payload?.data?.listGalleryObjs?.items || []);
}

async function listFromVariables(variables: Object) {
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

export const galleryDbWrapper: GqlDbWrapper<GalleryObj> = {
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