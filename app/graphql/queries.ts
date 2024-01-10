/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getChapter = /* GraphQL */ `query GetChapter {
  getChapter {
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
` as GeneratedQuery<
  APITypes.GetChapterQueryVariables,
  APITypes.GetChapterQuery
>;
export const getSpaceObj = /* GraphQL */ `query GetSpaceObj($id: ID!) {
  getSpaceObj(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSpaceObjQueryVariables,
  APITypes.GetSpaceObjQuery
>;
export const listSpaceObjs = /* GraphQL */ `query ListSpaceObjs(
  $filter: TableSpaceObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpaceObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSpaceObjsQueryVariables,
  APITypes.ListSpaceObjsQuery
>;
export const getChapterObj = /* GraphQL */ `query GetChapterObj($id: ID!) {
  getChapterObj(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetChapterObjQueryVariables,
  APITypes.GetChapterObjQuery
>;
export const listChapterObjs = /* GraphQL */ `query ListChapterObjs(
  $filter: TableChapterObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listChapterObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      stormId
      draftId
      flowId
      seaId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChapterObjsQueryVariables,
  APITypes.ListChapterObjsQuery
>;
export const getStormObj = /* GraphQL */ `query GetStormObj($id: ID!) {
  getStormObj(id: $id) {
    id
    chatIds
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStormObjQueryVariables,
  APITypes.GetStormObjQuery
>;
export const listStormObjs = /* GraphQL */ `query ListStormObjs(
  $filter: TableStormObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listStormObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      chatIds
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStormObjsQueryVariables,
  APITypes.ListStormObjsQuery
>;
export const getChatObj = /* GraphQL */ `query GetChatObj($id: ID!) {
  getChatObj(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetChatObjQueryVariables,
  APITypes.GetChatObjQuery
>;
export const listChatObjs = /* GraphQL */ `query ListChatObjs(
  $filter: TableChatObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      summary
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChatObjsQueryVariables,
  APITypes.ListChatObjsQuery
>;
