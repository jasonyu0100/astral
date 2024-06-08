import { amplifyClient } from "@/(api)/aws/graphql/main";
import { GqlDbWrapper } from "@/(model)/(db)/main";
import { ArcForumObj } from "@/(model)/horizon/arc/forum/main";
import { gqlArgs } from "@/(utils)/clean";
import { createArcForumObj, deleteArcForumObj, updateArcForumObj } from "@/graphql/mutations";
import { listArcForumObjs } from "@/graphql/queries";

function castSingle(obj: any) {
  return obj as ArcForumObj;
}

function castMultiple(objs: any[]) {
  return objs as ArcForumObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listArcForumObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listArcForumObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listArcForumObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listArcForumObjs);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listArcForumObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listArcForumObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listArcForumObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listArcForumObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listArcForumObjs,
    variables: {
    },
  });

  return castMultiple(payload?.data?.listArcForumObjs?.items || []);
}

async function createObj(newObj: Omit<ArcForumObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createArcForumObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createArcForumObj);
} 

async function updateObj(id: string, updateObj: Partial<ArcForumObj>) {
  const payload = await amplifyClient.graphql({
    query: updateArcForumObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateArcForumObj);
} 

async function overwriteObj(id: string, newObj: ArcForumObj) {
  const payload = await amplifyClient.graphql({
    query: updateArcForumObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateArcForumObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteArcForumObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteArcForumObj);
} 

export const arcForumDbWrapper: GqlDbWrapper<ArcForumObj> = {
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