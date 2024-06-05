import { amplifyClient } from "@/(api)/aws/graphql/main";
import { UserObj } from "@/(model)/user/main";
import { gqlArgs } from "@/(utils)/clean";
import { createUserObj, deleteUserObj, updateUserObj } from "@/graphql/mutations";
import { listUserObjs } from "@/graphql/queries";

function castSingle(obj: any): UserObj {
  return obj as UserObj;
}

function castMultiple(objs: any[]): UserObj[] {
  return objs as UserObj[];
}

async function getObj(key: string, value: string): Promise<UserObj> {
  const payload = await amplifyClient.graphql({
    query: listUserObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listUserObjs);
}

async function getFromVariables(variables: Object): Promise<UserObj> {
  const payload = await amplifyClient.graphql({
    query: listUserObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listUserObjs);
}

async function listObjs(key: string, value: string): Promise<UserObj[]> {
  const payload = await amplifyClient.graphql({
    query: listUserObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listUserObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<UserObj[]> {
  const payload = await amplifyClient.graphql({
    query: listUserObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listUserObjs?.items || []);
}

async function createObj(newObj: Omit<UserObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createUserObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createUserObj);
} 

async function updateObj(id: string, updateObj: Partial<UserObj>) {
  const payload = await amplifyClient.graphql({
    query: updateUserObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateUserObj);
} 

async function overwriteObj(id: string, newObj: UserObj) {
  const payload = await amplifyClient.graphql({
    query: updateUserObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateUserObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteUserObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteUserObj);
} 

interface UserDbWrapper {
    getObj: (key: string, value: string) => Promise<UserObj>;
    listObjs: (key: string, value: string) => Promise<UserObj[]>;
    createObj: (newObj: Omit<UserObj, 'id'>) => Promise<UserObj>;
    updateObj: (id: string, updateObj: Partial<UserObj>) => Promise<UserObj>;
    overwriteObj: (id: string, newObj: UserObj) => Promise<UserObj>;
    deleteObj: (id: string) => Promise<UserObj>;
    getFromVariables: (variables: Object) => Promise<UserObj>;
    listFromVariables: (variables: Object) => Promise<UserObj[]>;
}

export const userDbWrapper: UserDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}