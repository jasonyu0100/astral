import { GqlDbWrapper } from '@/(server)/client/main';
import { SpaceIdeaRelationshipObj } from '@/(server)/model/space/relationship/main';
import { amplifyClient } from '@/api/aws/graphql/main';
import {
  createSpaceIdeaRelationshipObj,
  deleteSpaceIdeaRelationshipObj,
  updateSpaceIdeaRelationshipObj,
} from '@/graphql/mutations';
import {
  getSpaceIdeaRelationshipObj,
  listSpaceIdeaRelationshipObjs,
} from '@/graphql/queries';
import { gqlArgs } from '@/utils/clean';

function castSingle(obj: unknown) {
  return obj as SpaceIdeaRelationshipObj;
}

function castMultiple(objs: unknown[]) {
  return objs as SpaceIdeaRelationshipObj[];
}

async function getObj(value: string) {
  const payload = await amplifyClient.graphql({
    query: getSpaceIdeaRelationshipObj,
    variables: {
      id: value,
    },
  });

  return castSingle(payload?.data?.getSpaceIdeaRelationshipObj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFromVariables(variables: any) {
  const payload = await amplifyClient.graphql({
    query: getSpaceIdeaRelationshipObj,
    variables: variables,
  });

  return castSingle(payload?.data?.getSpaceIdeaRelationshipObj);
}

async function listObjs(key: string, value: string | boolean | number) {
  const payload = await amplifyClient.graphql({
    query: listSpaceIdeaRelationshipObjs,
    variables: {
      filter: {
        [key]: {
          eq: value,
        },
      },
    },
  });

  return castMultiple(
    payload?.data?.listSpaceIdeaRelationshipObjs?.items || [],
  );
}

async function listAllObjs() {
  const payload = await amplifyClient.graphql({
    query: listSpaceIdeaRelationshipObjs,
    variables: {},
  });

  return castMultiple(
    payload?.data?.listSpaceIdeaRelationshipObjs?.items || [],
  );
}

async function listFromVariables(variables: object) {
  const payload = await amplifyClient.graphql({
    query: listSpaceIdeaRelationshipObjs,
    variables: variables,
  });

  return castMultiple(
    payload?.data?.listSpaceIdeaRelationshipObjs?.items || [],
  );
}

async function createObj(newObj: Omit<SpaceIdeaRelationshipObj, 'id'>) {
  const payload = await amplifyClient.graphql({
    query: createSpaceIdeaRelationshipObj,
    variables: {
      input: gqlArgs(newObj),
    },
  });

  return castSingle(payload?.data?.createSpaceIdeaRelationshipObj);
}

async function updateObj(
  id: string,
  updateObj: Partial<SpaceIdeaRelationshipObj>,
) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceIdeaRelationshipObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(updateObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceIdeaRelationshipObj);
}

async function overwriteObj(id: string, newObj: SpaceIdeaRelationshipObj) {
  const payload = await amplifyClient.graphql({
    query: updateSpaceIdeaRelationshipObj,
    variables: {
      input: {
        id: id,
        ...gqlArgs(newObj),
      },
    },
  });

  return castSingle(payload?.data?.updateSpaceIdeaRelationshipObj);
}

async function deleteObj(id: string) {
  const payload = await amplifyClient.graphql({
    query: deleteSpaceIdeaRelationshipObj,
    variables: {
      input: {
        id: id,
      },
    },
  });

  return castSingle(payload?.data?.deleteSpaceIdeaRelationshipObj);
}

export const spaceIdeaRelationshipDbWrapper: GqlDbWrapper<SpaceIdeaRelationshipObj> =
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
