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

type TargetObj = HorizonUserMemberObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
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

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonUserMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonUserMemberObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
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

async function overwriteObj(id: string, newObj: TargetObj) {
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

export const horizonUserMemberDbWrapper: GqlDbWrapper<TargetObj> = {
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
