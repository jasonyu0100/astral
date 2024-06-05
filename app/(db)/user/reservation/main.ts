import { amplifyClient } from "@/(api)/aws/graphql/main";
import { ReservationObj } from "@/(model)/user/reservation/main";
import { gqlArgs } from "@/(utils)/clean";
import { createReservationObj, deleteReservationObj, updateReservationObj } from "@/graphql/mutations";
import { listReservationObjs } from "@/graphql/queries";

function castSingle(obj: any): ReservationObj {
  return obj as ReservationObj;
}

function castMultiple(objs: any[]): ReservationObj[] {
  return objs as ReservationObj[];
}

async function getObj(key: string, value: string): Promise<ReservationObj> {
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

async function getFromVariables(variables: Object): Promise<ReservationObj> {
  const payload = await amplifyClient.graphql({
    query: listReservationObjs,
    variables: variables,
  });

  return castSingle(payload?.data?.listReservationObjs);
}

async function listObjs(key: string, value: string): Promise<ReservationObj[]> {
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

async function listFromVariables(variables: Object): Promise<ReservationObj[]> {
  const payload = await amplifyClient.graphql({
    query: listReservationObjs,
    variables: variables
  });

  return castMultiple(payload?.data?.listReservationObjs?.items || []);
}

async function createObj(newObj: Omit<ReservationObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createReservationObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createReservationObj);
} 

async function updateObj(id: string, updateObj: Partial<ReservationObj>) {
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

async function overwriteObj(id: string, newObj: ReservationObj) {
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
    getObj: (key: string, value: string) => Promise<ReservationObj>;
    listObjs: (key: string, value: string) => Promise<ReservationObj[]>;
    createObj: (newObj: Omit<ReservationObj, 'id'>) => Promise<ReservationObj>;
    updateObj: (id: string, updateObj: Partial<ReservationObj>) => Promise<ReservationObj>;
    overwriteObj: (id: string, newObj: ReservationObj) => Promise<ReservationObj>;
    deleteObj: (id: string) => Promise<ReservationObj>;
    getFromVariables: (variables: Object) => Promise<ReservationObj>;
    listFromVariables: (variables: Object) => Promise<ReservationObj[]>;
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