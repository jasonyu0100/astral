import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GalleryMemberObj } from "@/(server)/(model)/gallery/member/main";
import { gqlArgs } from "@/(utils)/clean";
import { createGalleryMemberObj, deleteGalleryMemberObj, updateGalleryMemberObj } from "@/graphql/mutations";
import { listGalleryMemberObjs } from "@/graphql/queries";
import { GqlDbWrapper } from "../../main";

function castSingle(obj: any) {
  return obj as GalleryMemberObj;
}

function castMultiple(objs: any[]) {
  return objs as GalleryMemberObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listGalleryMemberObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listGalleryMemberObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listGalleryMemberObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listGalleryMemberObjs);
}

async function listObjs(key: string, value: string) {
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
    variables: {
    },
  });

  return castMultiple(payload?.data?.listGalleryMemberObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listGalleryMemberObjs,
    variables: variables
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
        ...gqlArgs(updateObj)
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
        ...gqlArgs(newObj)
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
}