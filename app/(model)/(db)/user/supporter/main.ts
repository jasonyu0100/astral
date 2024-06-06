import { amplifyClient } from "@/(api)/aws/graphql/main";
import { UserSupporterObj } from "@/(model)/user/supporter/main";
import { gqlArgs } from "@/(utils)/clean";
import { createUserSupporterObj, deleteUserSupporterObj, updateUserSupporterObj } from "@/graphql/mutations";
import { listUserSupporterObjs } from "@/graphql/queries";

function castSingle(obj: any): UserSupporterObj {
  return obj as UserSupporterObj;
}

function castMultiple(objs: any[]): UserSupporterObj[] {
  return objs as UserSupporterObj[];
}

async function getObj(key: string, value: string): Promise<UserSupporterObj> {
  const payload = await amplifyClient.graphql({
    query: listUserSupporterObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listUserSupporterObjs);
}

async function getFromVariables(variables: Object): Promise<UserSupporterObj> {
  const payload = await amplifyClient.graphql({
    query: listUserSupporterObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listUserSupporterObjs);
}

async function listObjs(key: string, value: string): Promise<UserSupporterObj[]> {
  const payload = await amplifyClient.graphql({
    query: listUserSupporterObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listUserSupporterObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<UserSupporterObj[]> {
  const payload = await amplifyClient.graphql({
    query: listUserSupporterObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listUserSupporterObjs?.items || []);
}

async function createObj(newObj: Omit<UserSupporterObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createUserSupporterObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createUserSupporterObj);
} 

async function updateObj(id: string, updateObj: Partial<UserSupporterObj>) {
  const payload = await amplifyClient.graphql({
    query: updateUserSupporterObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateUserSupporterObj);
} 

async function overwriteObj(id: string, newObj: UserSupporterObj) {
  const payload = await amplifyClient.graphql({
    query: updateUserSupporterObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateUserSupporterObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteUserSupporterObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteUserSupporterObj);
} 

interface UserSupporterDbWrapper {
    getObj: (key: string, value: string) => Promise<UserSupporterObj>;
    listObjs: (key: string, value: string) => Promise<UserSupporterObj[]>;
    createObj: (newObj: Omit<UserSupporterObj, 'id'>) => Promise<UserSupporterObj>;
    updateObj: (id: string, updateObj: Partial<UserSupporterObj>) => Promise<UserSupporterObj>;
    overwriteObj: (id: string, newObj: UserSupporterObj) => Promise<UserSupporterObj>;
    deleteObj: (id: string) => Promise<UserSupporterObj>;
    getFromVariables: (variables: Object) => Promise<UserSupporterObj>;
    listFromVariables: (variables: Object) => Promise<UserSupporterObj[]>;
}

export const userSupporterDbWrapper: UserSupporterDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}