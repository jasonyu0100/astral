import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { ReviewMemberObj } from '@/(server)/(model)/space/chapter/review/member/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createVerseMemberObj,
  deleteVerseMemberObj,
  updateVerseMemberObj,
} from '@/graphql/mutations';
import { getVerseMemberObj, listVerseMemberObjs } from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as ReviewMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as ReviewMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getVerseMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getVerseMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getVerseMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getVerseMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listVerseMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listVerseMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listVerseMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listVerseMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listVerseMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listVerseMemberObjs?.items || []);
}

async function createObj(newObj: Omit<ReviewMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createVerseMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createVerseMemberObj);
}

async function updateObj(id: string, updateObj: Partial<ReviewMemberObj>) {
  const payload = await amplifyClient.graphql({
    query: updateVerseMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateVerseMemberObj);
}

async function overwriteObj(id: string, newObj: ReviewMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateVerseMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateVerseMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteVerseMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteVerseMemberObj);
}

export const reviewMemberDbWrapper: GqlDbWrapper<ReviewMemberObj> = {
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
