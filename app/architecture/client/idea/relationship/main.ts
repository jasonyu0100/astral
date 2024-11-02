import { amplifyClient } from '@/api/aws/graphql/main';
import { GqlDbWrapper } from '@/architecture/client/main';
import { IdeaRelationshipObj } from '@/architecture/model/idea/relationship/main';
import {
  createIdeaRelationshipObj,
  deleteIdeaRelationshipObj,
  updateIdeaRelationshipObj,
} from '@/graphql/mutations';
import {
  getIdeaRelationshipObj,
  listIdeaRelationshipObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

type TargetObj = IdeaRelationshipObj;

function castSingle(obj: unknown) {
  return obj as TargetObj;
}

function castMultiple(objs: unknown[]) {
  return objs as TargetObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getIdeaRelationshipObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getIdeaRelationshipObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getIdeaRelationshipObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getIdeaRelationshipObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listIdeaRelationshipObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(payload?.data?.listIdeaRelationshipObjs?.items || []);
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listIdeaRelationshipObjs,
    variables: {},
  });

  return castMultiple(payload?.data?.listIdeaRelationshipObjs?.items || []);
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listIdeaRelationshipObjs,
    variables: variables,
  });

  return castMultiple(payload?.data?.listIdeaRelationshipObjs?.items || []);
}

async function createObj(newObj: Omit<TargetObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createIdeaRelationshipObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createIdeaRelationshipObj);
}

async function updateObj(id: string, updateObj: Partial<TargetObj>) {
  const payload = await amplifyClient.graphql({
    query: updateIdeaRelationshipObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateIdeaRelationshipObj);
}

async function overwriteObj(id: string, newObj: TargetObj) {
  const payload = await amplifyClient.graphql({
    query: updateIdeaRelationshipObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateIdeaRelationshipObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteIdeaRelationshipObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteIdeaRelationshipObj);
}

export const ideaRelationshipDbWrapper: GqlDbWrapper<TargetObj> = {
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
