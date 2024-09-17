import { GqlDbWrapper } from '@/(server)/client/main';
import { SpaceChapterMemberObj } from '@/(server)/model/space/chapter/member/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createSpaceChapterMemberObj,
  deleteSpaceChapterMemberObj,
  updateSpaceChapterMemberObj,
} from '@/graphql/mutations';
import {
  getSpaceChapterMemberObj,
  listSpaceChapterMemberObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as SpaceChapterMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as SpaceChapterMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getSpaceChapterMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSpaceChapterMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSpaceChapterMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSpaceChapterMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listSpaceChapterMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listSpaceChapterMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpaceChapterMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listSpaceChapterMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listSpaceChapterMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listSpaceChapterMemberObjs?.items || []);
}

async function createObj(newObj: Omit<SpaceChapterMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceChapterMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceChapterMemberObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<SpaceChapterMemberObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceChapterMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceChapterMemberObj);
}

async function overwriteObj(id: string, newObj: SpaceChapterMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceChapterMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceChapterMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceChapterMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSpaceChapterMemberObj);
}

export const spaceChapterMemberDbWrapper: GqlDbWrapper<SpaceChapterMemberObj> =
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
