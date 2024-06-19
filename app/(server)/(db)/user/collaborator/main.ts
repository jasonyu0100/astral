import { amplifyClient } from '@/(api)/aws/graphql/main';
import { UserCollaboratorObj } from '@/(server)/(model)/user/collaborator/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createUserCollaboratorObj,
  deleteUserCollaboratorObj,
  updateUserCollaboratorObj,
} from '@/graphql/mutations';
import {
  getUserCollaboratorObj,
  listUserCollaboratorObjs,
} from '@/graphql/queries';
import { GqlDbWrapper } from '../../main';

function castSingle(obj: unknown) {
  return obj as UserCollaboratorObj;
}

function castMultiple(objs: unknown[]) {
  return objs as UserCollaboratorObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getUserCollaboratorObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getUserCollaboratorObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getUserCollaboratorObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getUserCollaboratorObj);
}

async function listObjs(key: string, value: string) {
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

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listUserCollaboratorObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listUserCollaboratorObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listUserCollaboratorObjs,
    variables: variables,
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
        ...gqlArgs(updateObj),
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
        ...gqlArgs(newObj),
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

export const userCollaboratorDbWrapper: GqlDbWrapper<UserCollaboratorObj> = {
  getObj,
  listObjs,
  listAllObjs,
  createObj,
  updateObj,
  overwriteObj,
  deleteObj,
  getFromVariables,
  listFromVariables,
};
