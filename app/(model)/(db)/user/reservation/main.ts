import { amplifyClient } from "@/(api)/aws/graphql/main";
import { UserReservationObj } from "@/(model)/user/reservation/main";
import { gqlArgs } from "@/(utils)/clean";
import { createReservationObj, deleteReservationObj, updateReservationObj } from "@/graphql/mutations";
import { listReservationObjs } from "@/graphql/queries";

function castSingle(obj: any): UserReservationObj {
  return obj as UserReservationObj;
}

function castMultiple(objs: any[]): UserReservationObj[] {
  return objs as UserReservationObj[];
}

async function getObj(key: string, value: string): Promise<UserReservationObj> {
  const payload = await amplifyClient.graphql({
    query: listReservationObjs,
    variables: {
        [key]: {
          eq: value,
        },
    },
  });

  return castSingle(payload?.data?.listReservationObjs);
}

async function getFromVariables(variables: Object): Promise<UserReservationObj> {
  const payload = await amplifyClient.graphql({
    query: listReservationObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listReservationObjs);
}

async function listObjs(key: string, value: string): Promise<UserReservationObj[]> {
  const payload = await amplifyClient.graphql({
    query: listReservationObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listReservationObjs?.items || []);
}

async function listFromVariables(variables: Object): Promise<UserReservationObj[]> {
  const payload = await amplifyClient.graphql({
    query: listReservationObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listReservationObjs?.items || []);
}

async function createObj(newObj: Omit<UserReservationObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createReservationObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createReservationObj);
} 

async function updateObj(id: string, updateObj: Partial<UserReservationObj>) {
  const payload = await amplifyClient.graphql({
    query: updateReservationObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj)
    },
    },
  });

  return castSingle(payload?.data?.updateReservationObj);
} 

async function overwriteObj(id: string, newObj: UserReservationObj) {
  const payload = await amplifyClient.graphql({
    query: updateReservationObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj)
    },
    },
  });

  return castSingle(payload?.data?.updateReservationObj);
} 


async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteReservationObj,
    variables: {
      input: {
        id: id,
    },
    },
  });

  return castSingle(payload?.data?.deleteReservationObj);
} 

interface ReservationDbWrapper {
    getObj: (key: string, value: string) => Promise<UserReservationObj>;
    listObjs: (key: string, value: string) => Promise<UserReservationObj[]>;
    createObj: (newObj: Omit<UserReservationObj, 'id'>) => Promise<UserReservationObj>;
    updateObj: (id: string, updateObj: Partial<UserReservationObj>) => Promise<UserReservationObj>;
    overwriteObj: (id: string, newObj: UserReservationObj) => Promise<UserReservationObj>;
    deleteObj: (id: string) => Promise<UserReservationObj>;
    getFromVariables: (variables: Object) => Promise<UserReservationObj>;
    listFromVariables: (variables: Object) => Promise<UserReservationObj[]>;
}

export const reservationDbWrapper: ReservationDbWrapper = {
    getObj,
    listObjs,
    createObj,
    updateObj,
    overwriteObj,
    deleteObj,
    getFromVariables,
    listFromVariables,
}