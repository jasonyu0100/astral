import { amplifyClient } from "@/(api)/aws/graphql/main";
import { ArcPointObj } from "@/(model)/horizon/arc/point/main";
import { gqlArgs } from "@/(utils)/clean";
import { createArcPointObj, deleteArcPointObj, updateArcPointObj } from "@/graphql/mutations";
import { listArcPointObjs } from "@/graphql/queries";

function castSingle(obj: any): ArcPointObj {
  return obj as ArcPointObj;
}

function castMultiple(objs: any[]): ArcPointObj[] {
  return objs as ArcPointObj[];
}

async function getObj(key: string, value: string): Promise<ArcPointObj> {
  const payload = await amplifyClient.graphql({
    query: listArcPointObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listArcPointObjs);
}

async function getFromVariables(variables: Object): Promise<ArcPointObj> {
  const payload = await amplifyClient.graphql({
    query: listArcPointObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listArcPointObjs);
}

async function listObjs(key: string, value: string): Promise<ArcPointObj[]> {
  const payload = await amplifyClient.graphql({
    query: listArcPointObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listArcPointObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<ArcPointObj[]> {
  const payload = await amplifyClient.graphql({
    query: listArcPointObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listArcPointObjs?.items || []);
}

async function createObj(newObj: Omit<ArcPointObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createArcPointObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createArcPointObj);
} 

async function updateObj(id: string, updateObj: Partial<ArcPointObj>) {
  const payload = await amplifyClient.graphql({
    query: updateArcPointObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateArcPointObj);
} 

async function overwriteObj(id: string, newObj: ArcPointObj) {
  const payload = await amplifyClient.graphql({
    query: updateArcPointObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateArcPointObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteArcPointObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteArcPointObj);
} 

interface ArcPointDbWrapper {
    getObj: (key: string, value: string) => Promise<ArcPointObj>;
    listObjs: (key: string, value: string) => Promise<ArcPointObj[]>;
    createObj: (newObj: Omit<ArcPointObj, 'id'>) => Promise<ArcPointObj>;
    updateObj: (id: string, updateObj: Partial<ArcPointObj>) => Promise<ArcPointObj>;
    overwriteObj: (id: string, newObj: ArcPointObj) => Promise<ArcPointObj>;
    deleteObj: (id: string) => Promise<ArcPointObj>;
    getFromVariables: (variables: Object) => Promise<ArcPointObj>;
    listFromVariables: (variables: Object) => Promise<ArcPointObj[]>;
}

export const arcpointDbWrapper: ArcPointDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}