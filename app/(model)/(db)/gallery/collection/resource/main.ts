import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GqlDbWrapper } from "@/(model)/(db)/main";
import { CollectionResourceObj } from "@/(model)/gallery/collection/resource/main";
import { gqlArgs } from "@/(utils)/clean";
import { createCollectionResourceObj, deleteCollectionResourceObj, updateCollectionResourceObj } from "@/graphql/mutations";
import { listCollectionResourceObjs } from "@/graphql/queries";

function castSingle(obj: any) {
  return obj as CollectionResourceObj;
}

function castMultiple(objs: any[]) {
  return objs as CollectionResourceObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listCollectionResourceObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listCollectionResourceObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listCollectionResourceObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listCollectionResourceObjs);
}

async function listObjs(key: string, value: string) {
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
    variables: {
    },
  });

  return castMultiple(payload?.data?.listCollectionResourceObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listCollectionResourceObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listCollectionResourceObjs?.items || []);
}

async function createObj(newObj: Omit<CollectionResourceObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createCollectionResourceObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createCollectionResourceObj);
} 

async function updateObj(id: string, updateObj: Partial<CollectionResourceObj>) {
  const payload = await amplifyClient.graphql({
    query: updateCollectionResourceObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateCollectionResourceObj);
} 

async function overwriteObj(id: string, newObj: CollectionResourceObj) {
  const payload = await amplifyClient.graphql({
    query: updateCollectionResourceObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
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

export const collectionResourceDbWrapper: GqlDbWrapper<CollectionResourceObj> = {
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