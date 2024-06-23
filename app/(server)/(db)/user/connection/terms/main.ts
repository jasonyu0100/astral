import { amplifyClient } from '@/(api)/aws/graphql/main';
import { UserConnectionTermsObj } from '@/(server)/(model)/user/connection/term/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createUserConnectionTermsObj,
  deleteUserConnectionTermsObj,
  updateUserConnectionTermsObj,
} from '@/graphql/mutations';
import {
  getUserConnectionTermsObj,
  listUserConnectionTermsObjs,
} from '@/graphql/queries';
import { GqlDbWrapper } from '../../../main';

function castSingle(obj: unknown) {
  return obj as UserConnectionTermsObj;
}

function castMultiple(objs: unknown[]) {
  return objs as UserConnectionTermsObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getUserConnectionTermsObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getUserConnectionTermsObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getUserConnectionTermsObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getUserConnectionTermsObj);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listUserConnectionTermsObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listUserConnectionTermsObjs?.items || []);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listUserConnectionTermsObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listUserConnectionTermsObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listUserConnectionTermsObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listUserConnectionTermsObjs?.items || []);
}

async function createObj(newObj: Omit<UserConnectionTermsObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createUserConnectionTermsObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createUserConnectionTermsObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<UserConnectionTermsObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateUserConnectionTermsObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserConnectionTermsObj);
}

async function overwriteObj(id: string, newObj: UserConnectionTermsObj) {
  const payload = await amplifyClient.graphql({
    query: updateUserConnectionTermsObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserConnectionTermsObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteUserConnectionTermsObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteUserConnectionTermsObj);
}

export const userConnectionTermsDbWrapper: GqlDbWrapper<UserConnectionTermsObj> =
  {
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
