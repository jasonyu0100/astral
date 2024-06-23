import { amplifyClient } from '@/(api)/aws/graphql/main';
import { GqlDbWrapper } from '@/(server)/(db)/main';
import { HorizonGroupMemberTermsObj } from '@/(server)/(model)/horizon/group/member/terms/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createHorizonGroupMemberTermsObj,
  deleteHorizonGroupMemberTermsObj,
  updateHorizonGroupMemberTermsObj,
} from '@/graphql/mutations';
import {
  getHorizonGroupMemberTermsObj,
  listHorizonGroupMemberTermsObjs,
} from '@/graphql/queries';

function castSingle(obj: unknown) {
  return obj as HorizonGroupMemberTermsObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonGroupMemberTermsObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonGroupMemberTermsObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonGroupMemberTermsObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonGroupMemberTermsObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonGroupMemberTermsObj);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupMemberTermsObjs,
    variables: {},
  });

  return castMultiple(
    payload?.data?.listHorizonGroupMemberTermsObjs?.items || [],
  );
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupMemberTermsObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(
    payload?.data?.listHorizonGroupMemberTermsObjs?.items || [],
  );
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonGroupMemberTermsObjs,
    variables: variables,
  });

  return castMultiple(
    payload?.data?.listHorizonGroupMemberTermsObjs?.items || [],
  );
}

async function createObj(newObj: Omit<HorizonGroupMemberTermsObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonGroupMemberTermsObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonGroupMemberTermsObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<HorizonGroupMemberTermsObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonGroupMemberTermsObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonGroupMemberTermsObj);
}

async function overwriteObj(id: string, newObj: HorizonGroupMemberTermsObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonGroupMemberTermsObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonGroupMemberTermsObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonGroupMemberTermsObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonGroupMemberTermsObj);
}

export const horizonGroupMemberTermsDbWrapper: GqlDbWrapper<HorizonGroupMemberTermsObj> =
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
