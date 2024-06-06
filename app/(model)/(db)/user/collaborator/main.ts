import { amplifyClient } from "@/(api)/aws/graphql/main";
import { UserCollaboratorObj } from "@/(model)/user/collaborator/main";
import { gqlArgs } from "@/(utils)/clean";
import { createUserCollaboratorObj, deleteUserCollaboratorObj, updateUserCollaboratorObj } from "@/graphql/mutations";
import { listUserCollaboratorObjs } from "@/graphql/queries";

function castSingle(obj: any): UserCollaboratorObj {
  return obj as UserCollaboratorObj;
}

function castMultiple(objs: any[]): UserCollaboratorObj[] {
  return objs as UserCollaboratorObj[];
}

async function getObj(key: string, value: string): Promise<UserCollaboratorObj> {
  const payload = await amplifyClient.graphql({
    query: listUserCollaboratorObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listUserCollaboratorObjs);
}

async function getFromVariables(variables: Object): Promise<UserCollaboratorObj> {
  const payload = await amplifyClient.graphql({
    query: listUserCollaboratorObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listUserCollaboratorObjs);
}

async function listObjs(key: string, value: string): Promise<UserCollaboratorObj[]> {
  const payload = await amplifyClient.graphql({
    query: listUserCollaboratorObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listUserCollaboratorObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<UserCollaboratorObj[]> {
  const payload = await amplifyClient.graphql({
    query: listUserCollaboratorObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listUserCollaboratorObjs?.items || []);
}

async function createObj(newObj: Omit<UserCollaboratorObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createUserCollaboratorObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createUserCollaboratorObj);
} 

async function updateObj(id: string, updateObj: Partial<UserCollaboratorObj>) {
  const payload = await amplifyClient.graphql({
    query: updateUserCollaboratorObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateUserCollaboratorObj);
} 

async function overwriteObj(id: string, newObj: UserCollaboratorObj) {
  const payload = await amplifyClient.graphql({
    query: updateUserCollaboratorObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateUserCollaboratorObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteUserCollaboratorObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteUserCollaboratorObj);
} 

interface UserCollaboratorDbWrapper {
    getObj: (key: string, value: string) => Promise<UserCollaboratorObj>;
    listObjs: (key: string, value: string) => Promise<UserCollaboratorObj[]>;
    createObj: (newObj: Omit<UserCollaboratorObj, 'id'>) => Promise<UserCollaboratorObj>;
    updateObj: (id: string, updateObj: Partial<UserCollaboratorObj>) => Promise<UserCollaboratorObj>;
    overwriteObj: (id: string, newObj: UserCollaboratorObj) => Promise<UserCollaboratorObj>;
    deleteObj: (id: string) => Promise<UserCollaboratorObj>;
    getFromVariables: (variables: Object) => Promise<UserCollaboratorObj>;
    listFromVariables: (variables: Object) => Promise<UserCollaboratorObj[]>;
}

export const userCollaboratorDbWrapper: UserCollaboratorDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}