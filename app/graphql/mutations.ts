/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createSpaceObj = /* GraphQL */ `mutation CreateSpaceObj($input: CreateSpaceObjInput!) {
  createSpaceObj(input: $input) {
    id
    title
    description
    chapters {
      id
      name
      description
      stormId
      draftId
      flowId
      seaId
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSpaceObjMutationVariables,
  APITypes.CreateSpaceObjMutation
>;
export const updateSpaceObj = /* GraphQL */ `mutation UpdateSpaceObj($input: UpdateSpaceObjInput!) {
  updateSpaceObj(input: $input) {
    id
    title
    description
    chapters {
      id
      name
      description
      stormId
      draftId
      flowId
      seaId
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSpaceObjMutationVariables,
  APITypes.UpdateSpaceObjMutation
>;
export const deleteSpaceObj = /* GraphQL */ `mutation DeleteSpaceObj($input: DeleteSpaceObjInput!) {
  deleteSpaceObj(input: $input) {
    id
    title
    description
    chapters {
      id
      name
      description
      stormId
      draftId
      flowId
      seaId
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSpaceObjMutationVariables,
  APITypes.DeleteSpaceObjMutation
>;
export const createChapterObj = /* GraphQL */ `mutation CreateChapterObj($input: CreateChapterObjInput!) {
  createChapterObj(input: $input) {
    id
    name
    description
    stormId
    draftId
    flowId
    seaId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChapterObjMutationVariables,
  APITypes.CreateChapterObjMutation
>;
export const updateChapterObj = /* GraphQL */ `mutation UpdateChapterObj($input: UpdateChapterObjInput!) {
  updateChapterObj(input: $input) {
    id
    name
    description
    stormId
    draftId
    flowId
    seaId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChapterObjMutationVariables,
  APITypes.UpdateChapterObjMutation
>;
export const deleteChapterObj = /* GraphQL */ `mutation DeleteChapterObj($input: DeleteChapterObjInput!) {
  deleteChapterObj(input: $input) {
    id
    name
    description
    stormId
    draftId
    flowId
    seaId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChapterObjMutationVariables,
  APITypes.DeleteChapterObjMutation
>;
export const createStormObj = /* GraphQL */ `mutation CreateStormObj($input: CreateStormObjInput!) {
  createStormObj(input: $input) {
    id
    chatIds
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStormObjMutationVariables,
  APITypes.CreateStormObjMutation
>;
export const updateStormObj = /* GraphQL */ `mutation UpdateStormObj($input: UpdateStormObjInput!) {
  updateStormObj(input: $input) {
    id
    chatIds
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStormObjMutationVariables,
  APITypes.UpdateStormObjMutation
>;
export const deleteStormObj = /* GraphQL */ `mutation DeleteStormObj($input: DeleteStormObjInput!) {
  deleteStormObj(input: $input) {
    id
    chatIds
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStormObjMutationVariables,
  APITypes.DeleteStormObjMutation
>;
export const createChatObj = /* GraphQL */ `mutation CreateChatObj($input: CreateChatObjInput!) {
  createChatObj(input: $input) {
    id
    title
    summary
    messages {
      source
      time
      message
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChatObjMutationVariables,
  APITypes.CreateChatObjMutation
>;
export const updateChatObj = /* GraphQL */ `mutation UpdateChatObj($input: UpdateChatObjInput!) {
  updateChatObj(input: $input) {
    id
    title
    summary
    messages {
      source
      time
      message
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChatObjMutationVariables,
  APITypes.UpdateChatObjMutation
>;
export const deleteChatObj = /* GraphQL */ `mutation DeleteChatObj($input: DeleteChatObjInput!) {
  deleteChatObj(input: $input) {
    id
    title
    summary
    messages {
      source
      time
      message
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatObjMutationVariables,
  APITypes.DeleteChatObjMutation
>;
