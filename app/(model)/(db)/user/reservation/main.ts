import { amplifyClient } from "@/(api)/aws/graphql/main";
import { UserReservationObj } from "@/(model)/user/reservation/main";
import { gqlArgs } from "@/(utils)/clean";
import { GqlDbWrapper } from "../../main";
import { listUserReservationObjs } from "@/graphql/queries";
import { createUserReservationObj, deleteUserReservationObj, updateUserReservationObj } from "@/graphql/mutations";

function castSingle(obj: any) {
  return obj as UserReservationObj;
}

function castMultiple(objs: any[]) {
  return objs as UserReservationObj[];
}

async function getObj(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listUserReservationObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listUserReservationObjs);
}

async function getFromVariables(variables: Object) {
  const payload = await amplifyClient.graphql({
    query: listUserReservationObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listUserReservationObjs);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listUserReservationObjs,
    variables: {
    },
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
    variables: variables
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
        ...gqlArgs(updateObj)
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
        ...gqlArgs(newObj)
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

export const reservationDbWrapper: GqlDbWrapper<UserReservationObj> = {
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