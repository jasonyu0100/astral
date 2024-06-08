import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GqlDbWrapper } from "@/(model)/(db)/main";
import { ArcPointObj } from "@/(model)/horizon/arc/point/main";
import { gqlArgs } from "@/(utils)/clean";
import { createArcPointObj, deleteArcPointObj, updateArcPointObj } from "@/graphql/mutations";
import { listArcPointObjs } from "@/graphql/queries";

function castSingle(obj: any) {
  return obj as ArcPointObj;
}

function castMultiple(objs: any[]) {
  return objs as ArcPointObj[];
}

async function getObj(key: string, value: string) {
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

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listArcPointObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listArcPointObjs);
}

async function listObjs(key: string, value: string) {
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

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listArcPointObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listArcPointObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listArcPointObjs,
    variables: {
    },
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

export const arcPointDbWrapper: GqlDbWrapper<ArcPointObj> = {
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