import { amplifyClient } from "@/(api)/aws/graphql/main";
import { SceneIdeaObj } from "@/(model)/space/chapter/scene/idea/main";
import { gqlArgs } from "@/(utils)/clean";
import { createSceneIdeaObj, deleteSceneIdeaObj, updateSceneIdeaObj } from "@/graphql/mutations";
import { listSceneIdeaObjs } from "@/graphql/queries";

function castSingle(obj: any): SceneIdeaObj {
  return obj as SceneIdeaObj;
}

function castMultiple(objs: any[]): SceneIdeaObj[] {
  return objs as SceneIdeaObj[];
}

async function getObj(key: string, value: string): Promise<SceneIdeaObj> {
  const payload = await amplifyClient.graphql({
    query: listSceneIdeaObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listSceneIdeaObjs);
}

async function getFromVariables(variables: Object): Promise<SceneIdeaObj> {
  const payload = await amplifyClient.graphql({
    query: listSceneIdeaObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listSceneIdeaObjs);
}

async function listObjs(key: string, value: string): Promise<SceneIdeaObj[]> {
  const payload = await amplifyClient.graphql({
    query: listSceneIdeaObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSceneIdeaObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<SceneIdeaObj[]> {
  const payload = await amplifyClient.graphql({
    query: listSceneIdeaObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listSceneIdeaObjs?.items || []);
}

async function createObj(newObj: Omit<SceneIdeaObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSceneIdeaObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSceneIdeaObj);
} 

async function updateObj(id: string, updateObj: Partial<SceneIdeaObj>) {
  const payload = await amplifyClient.graphql({
    query: updateSceneIdeaObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSceneIdeaObj);
} 

async function overwriteObj(id: string, newObj: SceneIdeaObj) {
  const payload = await amplifyClient.graphql({
    query: updateSceneIdeaObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateSceneIdeaObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSceneIdeaObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteSceneIdeaObj);
} 

interface SceneIdeaDbWrapper {
    getObj: (key: string, value: string) => Promise<SceneIdeaObj>;
    listObjs: (key: string, value: string) => Promise<SceneIdeaObj[]>;
    createObj: (newObj: Omit<SceneIdeaObj, 'id'>) => Promise<SceneIdeaObj>;
    updateObj: (id: string, updateObj: Partial<SceneIdeaObj>) => Promise<SceneIdeaObj>;
    overwriteObj: (id: string, newObj: SceneIdeaObj) => Promise<SceneIdeaObj>;
    deleteObj: (id: string) => Promise<SceneIdeaObj>;
    getFromVariables: (variables: Object) => Promise<SceneIdeaObj>;
    listFromVariables: (variables: Object) => Promise<SceneIdeaObj[]>;
}

export const sceneideaDbWrapper: SceneIdeaDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}