/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getSpace = /* GraphQL */ `query GetSpace {
  getSpace {
    id
    title
    description
    chapters {
      id
      title
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
` as GeneratedQuery<APITypes.GetSpaceQueryVariables, APITypes.GetSpaceQuery>;
export const getChapterObj = /* GraphQL */ `query GetChapterObj($id: String!) {
  getChapterObj(id: $id) {
    id
    title
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
      title
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
export const getSpaceObj = /* GraphQL */ `query GetSpaceObj($id: String!) {
  getSpaceObj(id: $id) {
    id
    title
    description
    chapters {
      id
      title
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
export const getStormObj = /* GraphQL */ `query GetStormObj($id: String!) {
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
export const getChatObj = /* GraphQL */ `query GetChatObj($id: String!) {
  getChatObj(id: $id) {
    id
    title
    summary
    time
    messages {
      id
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
      time
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
export const getDraftObj = /* GraphQL */ `query GetDraftObj($id: String!) {
  getDraftObj(id: $id) {
    id
    constellationIds
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDraftObjQueryVariables,
  APITypes.GetDraftObjQuery
>;
export const listDraftObjs = /* GraphQL */ `query ListDraftObjs(
  $filter: TableDraftObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listDraftObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      constellationIds
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDraftObjsQueryVariables,
  APITypes.ListDraftObjsQuery
>;
export const getConstellationObj = /* GraphQL */ `query GetConstellationObj($id: String!) {
  getConstellationObj(id: $id) {
    id
    title
    description
    stars {
      id
      name
      x
      y
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetConstellationObjQueryVariables,
  APITypes.GetConstellationObjQuery
>;
export const listConstellationObjs = /* GraphQL */ `query ListConstellationObjs(
  $filter: TableConstellationObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listConstellationObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  APITypes.ListConstellationObjsQueryVariables,
  APITypes.ListConstellationObjsQuery
>;
export const getFlowObj = /* GraphQL */ `query GetFlowObj($id: String!) {
  getFlowObj(id: $id) {
    id
    momentIds
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFlowObjQueryVariables,
  APITypes.GetFlowObjQuery
>;
export const listFlowObjs = /* GraphQL */ `query ListFlowObjs(
  $filter: TableFlowObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listFlowObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      momentIds
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFlowObjsQueryVariables,
  APITypes.ListFlowObjsQuery
>;
export const getMomentObj = /* GraphQL */ `query GetMomentObj($id: String!) {
  getMomentObj(id: $id) {
    id
    spaceId
    userId
    time
    title
    log
    file {
      id
      name
      src
      content
      url
      type
      __typename
    }
    visibility
    comments {
      id
      time
      content
      userId
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMomentObjQueryVariables,
  APITypes.GetMomentObjQuery
>;
export const listMomentObjs = /* GraphQL */ `query ListMomentObjs(
  $filter: TableMomentObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listMomentObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      spaceId
      userId
      time
      title
      log
      visibility
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMomentObjsQueryVariables,
  APITypes.ListMomentObjsQuery
>;
export const getResourceObj = /* GraphQL */ `query GetResourceObj($id: String!) {
  getResourceObj(id: $id) {
    id
    label
    description
    file {
      id
      name
      src
      content
      url
      type
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResourceObjQueryVariables,
  APITypes.GetResourceObjQuery
>;
export const listResourceObjs = /* GraphQL */ `query ListResourceObjs(
  $filter: TableResourceObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listResourceObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      label
      description
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResourceObjsQueryVariables,
  APITypes.ListResourceObjsQuery
>;
export const getCollectionObj = /* GraphQL */ `query GetCollectionObj($id: String!) {
  getCollectionObj(id: $id) {
    id
    name
    resourceIds
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCollectionObjQueryVariables,
  APITypes.GetCollectionObjQuery
>;
export const listCollectionObjs = /* GraphQL */ `query ListCollectionObjs(
  $filter: TableCollectionObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listCollectionObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      resourceIds
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCollectionObjsQueryVariables,
  APITypes.ListCollectionObjsQuery
>;
export const getGalleryObj = /* GraphQL */ `query GetGalleryObj($id: String!) {
  getGalleryObj(id: $id) {
    id
    title
    description
    thumbnail {
      id
      name
      src
      content
      url
      type
      __typename
    }
    collectionIds
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGalleryObjQueryVariables,
  APITypes.GetGalleryObjQuery
>;
export const listGalleryObjs = /* GraphQL */ `query ListGalleryObjs(
  $filter: TableGalleryObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listGalleryObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      collectionIds
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGalleryObjsQueryVariables,
  APITypes.ListGalleryObjsQuery
>;
export const getUserObj = /* GraphQL */ `query GetUserObj($id: String!) {
  getUserObj(id: $id) {
    id
    name
    email
    googleId
    accessToken
    profileImage {
      id
      name
      src
      content
      url
      type
      __typename
    }
    spaceIds
    galleryIds
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserObjQueryVariables,
  APITypes.GetUserObjQuery
>;
export const listUserObjs = /* GraphQL */ `query ListUserObjs(
  $filter: TableUserObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      googleId
      accessToken
      spaceIds
      galleryIds
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserObjsQueryVariables,
  APITypes.ListUserObjsQuery
>;
