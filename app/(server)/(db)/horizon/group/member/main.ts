import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { HorizonGroupMemberObj } from '@/(server)/(model)/horizon/group/member/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createHorizonGroupMemberObj,
  deleteHorizonGroupMemberObj,
  updateHorizonGroupMemberObj,
} from '@/graphql/mutations';
import {
  getHorizonGroupMemberObj,
  listHorizonGroupMemberObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as HorizonGroupMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonGroupMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonGroupMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonGroupMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonGroupMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonGroupMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonGroupMemberObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupMemberObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listHorizonGroupMemberObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupMemberObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listHorizonGroupMemberObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonGroupMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonGroupMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonGroupMemberObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<HorizonGroupMemberObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonGroupMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonGroupMemberObj);
}

async function overwriteObj(id: string, newObj: HorizonGroupMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonGroupMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonGroupMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonGroupMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonGroupMemberObj);
}

export const horizonGroupMemberDbWrapper: GqlDbWrapper<HorizonGroupMemberObj> =
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
