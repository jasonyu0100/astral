import { GqlDbWrapper } from '@/(server)/client/main';
import { HorizonUserMemberObj } from '@/(server)/model/horizon/member/user/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createHorizonUserMemberObj,
  deleteHorizonUserMemberObj,
  updateHorizonUserMemberObj,
} from '@/graphql/mutations';
import {
  getHorizonUserMemberObj,
  listHorizonUserMemberObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as HorizonUserMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonUserMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonUserMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonUserMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonUserMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonUserMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listHorizonUserMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonUserMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonUserMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listHorizonUserMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonUserMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listHorizonUserMemberObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonUserMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonUserMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonUserMemberObj);
}

async function updateObj(id: string, updateObj: Partial<HorizonUserMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonUserMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonUserMemberObj);
}

async function overwriteObj(id: string, newObj: HorizonUserMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonUserMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonUserMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonUserMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonUserMemberObj);
}

export const horizonDbWrapper: GqlDbWrapper<HorizonUserMemberObj> = {
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
