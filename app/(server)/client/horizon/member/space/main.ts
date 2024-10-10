import { GqlDbWrapper } from '@/(server)/client/main';
import { HorizonSpaceMemberObj } from '@/(server)/model/horizon/member/space/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createHorizonSpaceMemberObj,
  deleteHorizonSpaceMemberObj,
  updateHorizonSpaceMemberObj,
} from '@/graphql/mutations';
import {
  getHorizonSpaceMemberObj,
  listHorizonSpaceMemberObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

type TargetObj = HorizonSpaceMemberObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonSpaceMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonSpaceMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonSpaceMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonSpaceMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listHorizonSpaceMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonSpaceMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonSpaceMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listHorizonSpaceMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonSpaceMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listHorizonSpaceMemberObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonSpaceMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonSpaceMemberObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonSpaceMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonSpaceMemberObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonSpaceMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonSpaceMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonSpaceMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonSpaceMemberObj);
}

export const horizonDbWrapper: GqlDbWrapper<TargetObj> = {
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
