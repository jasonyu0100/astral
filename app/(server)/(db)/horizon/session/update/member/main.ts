import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { HorizonSessionUpdateMemberObj } from '@/(server)/(model)/horizon/session/update/member/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createHorizonSessionUpdateMemberObj,
  deleteHorizonSessionUpdateMemberObj,
  updateHorizonSessionUpdateMemberObj,
} from '@/graphql/mutations';
import {
  getHorizonSessionUpdateMemberObj,
  listHorizonSessionUpdateMemberObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as HorizonSessionUpdateMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonSessionUpdateMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonSessionUpdateMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonSessionUpdateMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonSessionUpdateMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonSessionUpdateMemberObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listHorizonSessionUpdateMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(
    payload?.data?.listHorizonSessionUpdateMemberObjs?.items || [],
  );
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonSessionUpdateMemberObjs,
    variables: {},
  });

  return castMultiple(
    payload?.data?.listHorizonSessionUpdateMemberObjs?.items || [],
  );
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonSessionUpdateMemberObjs,
    variables: variables,
  });

  return castMultiple(
    payload?.data?.listHorizonSessionUpdateMemberObjs?.items || [],
  );
}

async function createObj(newObj: Omit<HorizonSessionUpdateMemberObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonSessionUpdateMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonSessionUpdateMemberObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<HorizonSessionUpdateMemberObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonSessionUpdateMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonSessionUpdateMemberObj);
}

async function overwriteObj(id: string, newObj: HorizonSessionUpdateMemberObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonSessionUpdateMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonSessionUpdateMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonSessionUpdateMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonSessionUpdateMemberObj);
}

export const horizonSessionUpdateMemberDbWrapper: GqlDbWrapper<HorizonSessionUpdateMemberObj> =
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
