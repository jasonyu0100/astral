import { amplifyClient } from "@/(api)/aws/graphql/main";
import { CollectionResourceObj } from "@/(model)/gallery/resource/main";
import { gqlArgs } from "@/(utils)/clean";
import { createCollectionResourceObj, deleteCollectionResourceObj, updateCollectionResourceObj } from "@/graphql/mutations";
import { listCollectionResourceObjs } from "@/graphql/queries";

function castSingle(obj: any): CollectionResourceObj {
  return obj as CollectionResourceObj;
}

function castMultiple(objs: any[]): CollectionResourceObj[] {
  return objs as CollectionResourceObj[];
}

async function getObj(key: string, value: string): Promise<CollectionResourceObj> {
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

async function getFromVariables(variables: Object): Promise<CollectionResourceObj> {
  const payload = await amplifyClient.graphql({
    query: listCollectionResourceObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listCollectionResourceObjs);
}

async function listObjs(key: string, value: string): Promise<CollectionResourceObj[]> {
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

async function listFromVariables(variables: Object): Promise<CollectionResourceObj[]> {
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

interface CollectionResourceDbWrapper {
    getObj: (key: string, value: string) => Promise<CollectionResourceObj>;
    listObjs: (key: string, value: string) => Promise<CollectionResourceObj[]>;
    createObj: (newObj: Omit<CollectionResourceObj, 'id'>) => Promise<CollectionResourceObj>;
    updateObj: (id: string, updateObj: Partial<CollectionResourceObj>) => Promise<CollectionResourceObj>;
    overwriteObj: (id: string, newObj: CollectionResourceObj) => Promise<CollectionResourceObj>;
    deleteObj: (id: string) => Promise<CollectionResourceObj>;
    getFromVariables: (variables: Object) => Promise<CollectionResourceObj>;
    listFromVariables: (variables: Object) => Promise<CollectionResourceObj[]>;
}

export const collectionresourceDbWrapper: CollectionResourceDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}