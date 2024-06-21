import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { HorizonGroupSessionUpdateMemberObj } from '@/(server)/(model)/horizon/group/session/update/member/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createHorizonGroupSessionUpdateMemberObj,
  deleteHorizonGroupSessionUpdateMemberObj,
  updateHorizonGroupSessionUpdateMemberObj,
} from '@/graphql/mutations';
import {
  getHorizonGroupSessionUpdateMemberObj,
  listHorizonGroupSessionUpdateMemberObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as HorizonGroupSessionUpdateMemberObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonGroupSessionUpdateMemberObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonGroupSessionUpdateMemberObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonGroupSessionUpdateMemberObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonGroupSessionUpdateMemberObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonGroupSessionUpdateMemberObj);
}

async function listObjs(key: string, value: string) {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupSessionUpdateMemberObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(
    payload?.data?.listHorizonGroupSessionUpdateMemberObjs?.items || [],
  );
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupSessionUpdateMemberObjs,
    variables: {},
  });

  return castMultiple(
    payload?.data?.listHorizonGroupSessionUpdateMemberObjs?.items || [],
  );
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupSessionUpdateMemberObjs,
    variables: variables,
  });

  return castMultiple(
    payload?.data?.listHorizonGroupSessionUpdateMemberObjs?.items || [],
  );
}

async function createObj(
  newObj: Omit<HorizonGroupSessionUpdateMemberObj, 'id'>,
) {
  const payload = await amplifyClient.graphql({
    query: createHorizonGroupSessionUpdateMemberObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonGroupSessionUpdateMemberObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<HorizonGroupSessionUpdateMemberObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonGroupSessionUpdateMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonGroupSessionUpdateMemberObj);
}

async function overwriteObj(
  id: string,
  newObj: HorizonGroupSessionUpdateMemberObj,
) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonGroupSessionUpdateMemberObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonGroupSessionUpdateMemberObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonGroupSessionUpdateMemberObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonGroupSessionUpdateMemberObj);
}

export const horizonGroupSessionUpdateMemberDbWrapper: GqlDbWrapper<HorizonGroupSessionUpdateMemberObj> =
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
