import { HorizonMemberTermsObj } from '@/(server)/model/horizon/member/terms/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createHorizonMemberTermsObj,
  deleteHorizonMemberTermsObj,
  updateHorizonMemberTermsObj,
} from '@/graphql/mutations';
import {
  getHorizonMemberTermsObj,
  listHorizonMemberTermsObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';
import { GqlDbWrapper } from '../../../main';

function castSingle(obj: unknown) {
  return obj as HorizonMemberTermsObj;
}

function castMultiple(objs: unknown[]) {
  return objs as HorizonMemberTermsObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getHorizonMemberTermsObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getHorizonMemberTermsObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getHorizonMemberTermsObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getHorizonMemberTermsObj);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listHorizonMemberTermsObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listHorizonMemberTermsObjs?.items || []);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listHorizonMemberTermsObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listHorizonMemberTermsObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listHorizonMemberTermsObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listHorizonMemberTermsObjs?.items || []);
}

async function createObj(newObj: Omit<HorizonMemberTermsObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createHorizonMemberTermsObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createHorizonMemberTermsObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<HorizonMemberTermsObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonMemberTermsObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonMemberTermsObj);
}

async function overwriteObj(id: string, newObj: HorizonMemberTermsObj) {
  const payload = await amplifyClient.graphql({
    query: updateHorizonMemberTermsObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateHorizonMemberTermsObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteHorizonMemberTermsObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteHorizonMemberTermsObj);
}

export const horizonMemberTermsDbWrapper: GqlDbWrapper<HorizonMemberTermsObj> =
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
