import { amplifyClient } from '@/(api)/aws/graphql/main';
import { UserReservationObj } from '@/(server)/(model)/user/reservation/main';
import { gqlArgs } from '@/(utils)/clean';
import { GqlDbWrapper } from '../../main';
import {
  getUserReservationObj,
  listUserReservationObjs,
} from '@/graphql/queries';
import {
  createUserReservationObj,
  deleteUserReservationObj,
  updateUserReservationObj,
} from '@/graphql/mutations';

function castSingle(obj: any) {
  return obj as UserReservationObj;
}

function castMultiple(objs: any[]) {
  return objs as UserReservationObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: getUserReservationObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getUserReservationObj);
}

async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getUserReservationObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getUserReservationObj);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listUserReservationObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listUserReservationObjs?.items || []);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listUserReservationObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listUserReservationObjs?.items || []);
}

async function listFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listUserReservationObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listUserReservationObjs?.items || []);
}

async function createObj(newObj: Omit<UserReservationObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createUserReservationObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createUserReservationObj);
}

async function updateObj(id: string, updateObj: Partial<UserReservationObj>) {
  const payload = await amplifyClient.graphql({
    query: updateUserReservationObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserReservationObj);
}

async function overwriteObj(id: string, newObj: UserReservationObj) {
  const payload = await amplifyClient.graphql({
    query: updateUserReservationObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateUserReservationObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteUserReservationObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteUserReservationObj);
}

export const userReservationDbWrapper: GqlDbWrapper<UserReservationObj> = {
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
