/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getSpace = /* GraphQL */ `query GetSpace {
  getSpace {
    id
    userId
    title
    time
    description
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSpaceQueryVariables, APITypes.GetSpaceQuery>;
export const getStarObj = /* GraphQL */ `query GetStarObj($id: String!) {
  getStarObj(id: $id) {
    id
    constellationId
    name
    x
    y
    file {
      id
      src
      type
      name
      size
      __typename
    }
    loom {
      id
      loomId
      height
      width
      title
      sharedUrl
      embedUrl
      thumbnailHeight
      thumbnailWidth
      thumbnailUrl
      duration
      providerUrl
      __typename
    }
    sticky {
      id
      color
      name
      content
      __typename
    }
    resourceType
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStarObjQueryVariables,
  APITypes.GetStarObjQuery
>;
export const listStarObjs = /* GraphQL */ `query ListStarObjs(
  $filter: TableStarObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listStarObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      constellationId
      name
      x
      y
      file {
        id
        src
        type
        name
        size
        __typename
      }
      loom {
        id
        loomId
        height
        width
        title
        sharedUrl
        embedUrl
        thumbnailHeight
        thumbnailWidth
        thumbnailUrl
        duration
        providerUrl
        __typename
      }
      sticky {
        id
        color
        name
        content
        __typename
      }
      resourceType
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStarObjsQueryVariables,
  APITypes.ListStarObjsQuery
>;
export const getResourceObj = /* GraphQL */ `query GetResourceObj($id: String!) {
  getResourceObj(id: $id) {
    id
    collectionId
    name
    description
    resourceType
    file {
      id
      src
      type
      name
      size
      __typename
    }
    loom {
      id
      loomId
      height
      width
      title
      sharedUrl
      embedUrl
      thumbnailHeight
      thumbnailWidth
      thumbnailUrl
      duration
      providerUrl
      __typename
    }
    sticky {
      id
      color
      name
      content
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
      collectionId
      name
      description
      resourceType
      file {
        id
        src
        type
        name
        size
        __typename
      }
      loom {
        id
        loomId
        height
        width
        title
        sharedUrl
        embedUrl
        thumbnailHeight
        thumbnailWidth
        thumbnailUrl
        duration
        providerUrl
        __typename
      }
      sticky {
        id
        color
        name
        content
        __typename
      }
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
export const getConstellationObj = /* GraphQL */ `query GetConstellationObj($id: String!) {
  getConstellationObj(id: $id) {
    id
    chapterId
    title
    description
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
      chapterId
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
export const getGalleryObj = /* GraphQL */ `query GetGalleryObj($id: String!) {
  getGalleryObj(id: $id) {
    id
    userId
    title
    description
    thumbnail {
      id
      src
      type
      name
      size
      __typename
    }
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
      userId
      title
      description
      thumbnail {
        id
        src
        type
        name
        size
        __typename
      }
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
    fname
    lname
    passwordHash
    email
    googleId
    profilePicture {
      id
      src
      type
      name
      size
      __typename
    }
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
      fname
      lname
      passwordHash
      email
      googleId
      profilePicture {
        id
        src
        type
        name
        size
        __typename
      }
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
export const getChapterObj = /* GraphQL */ `query GetChapterObj($id: String!) {
  getChapterObj(id: $id) {
    id
    spaceId
    title
    description
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
      spaceId
      title
      description
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
export const getMessageObj = /* GraphQL */ `query GetMessageObj($id: String!) {
  getMessageObj(id: $id) {
    id
    chatId
    source
    time
    message
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageObjQueryVariables,
  APITypes.GetMessageObjQuery
>;
export const listMessageObjs = /* GraphQL */ `query ListMessageObjs(
  $filter: TableMessageObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessageObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      chatId
      source
      time
      message
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessageObjsQueryVariables,
  APITypes.ListMessageObjsQuery
>;
export const getSpaceObj = /* GraphQL */ `query GetSpaceObj($id: String!) {
  getSpaceObj(id: $id) {
    id
    userId
    title
    time
    description
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
      userId
      title
      time
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
export const getMomentObj = /* GraphQL */ `query GetMomentObj($id: String!) {
  getMomentObj(id: $id) {
    id
    chapterId
    spaceId
    userId
    time
    title
    log
    visibility
    resourceType
    file {
      id
      src
      type
      name
      size
      __typename
    }
    loom {
      id
      loomId
      height
      width
      title
      sharedUrl
      embedUrl
      thumbnailHeight
      thumbnailWidth
      thumbnailUrl
      duration
      providerUrl
      __typename
    }
    sticky {
      id
      color
      name
      content
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
      chapterId
      spaceId
      userId
      time
      title
      log
      visibility
      resourceType
      file {
        id
        src
        type
        name
        size
        __typename
      }
      loom {
        id
        loomId
        height
        width
        title
        sharedUrl
        embedUrl
        thumbnailHeight
        thumbnailWidth
        thumbnailUrl
        duration
        providerUrl
        __typename
      }
      sticky {
        id
        color
        name
        content
        __typename
      }
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
export const getCollectionObj = /* GraphQL */ `query GetCollectionObj($id: String!) {
  getCollectionObj(id: $id) {
    id
    galleryId
    name
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
      galleryId
      name
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
export const getFileObj = /* GraphQL */ `query GetFileObj($id: String!) {
  getFileObj(id: $id) {
    id
    src
    type
    name
    size
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFileObjQueryVariables,
  APITypes.GetFileObjQuery
>;
export const listFileObjs = /* GraphQL */ `query ListFileObjs(
  $filter: TableFileObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listFileObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      src
      type
      name
      size
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFileObjsQueryVariables,
  APITypes.ListFileObjsQuery
>;
export const getJourneyObj = /* GraphQL */ `query GetJourneyObj($id: String!) {
  getJourneyObj(id: $id) {
    id
    chapterId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetJourneyObjQueryVariables,
  APITypes.GetJourneyObjQuery
>;
export const listJourneyObjs = /* GraphQL */ `query ListJourneyObjs(
  $filter: TableJourneyObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listJourneyObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      chapterId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListJourneyObjsQueryVariables,
  APITypes.ListJourneyObjsQuery
>;
export const getCommentObj = /* GraphQL */ `query GetCommentObj($id: String!) {
  getCommentObj(id: $id) {
    id
    momentId
    time
    content
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentObjQueryVariables,
  APITypes.GetCommentObjQuery
>;
export const listCommentObjs = /* GraphQL */ `query ListCommentObjs(
  $filter: TableCommentObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommentObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      momentId
      time
      content
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentObjsQueryVariables,
  APITypes.ListCommentObjsQuery
>;
export const getChatObj = /* GraphQL */ `query GetChatObj($id: String!) {
  getChatObj(id: $id) {
    id
    chapterId
    title
    summary
    time
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
      chapterId
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
export const getReservationObj = /* GraphQL */ `query GetReservationObj($id: String!) {
  getReservationObj(id: $id) {
    id
    fname
    lname
    email
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetReservationObjQueryVariables,
  APITypes.GetReservationObjQuery
>;
export const listReservationObjs = /* GraphQL */ `query ListReservationObjs(
  $filter: TableReservationObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listReservationObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      fname
      lname
      email
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReservationObjsQueryVariables,
  APITypes.ListReservationObjsQuery
>;
export const getLoomObj = /* GraphQL */ `query GetLoomObj($id: String!) {
  getLoomObj(id: $id) {
    id
    loomId
    height
    width
    title
    sharedUrl
    embedUrl
    thumbnailHeight
    thumbnailWidth
    thumbnailUrl
    duration
    providerUrl
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLoomObjQueryVariables,
  APITypes.GetLoomObjQuery
>;
export const listLoomObjs = /* GraphQL */ `query ListLoomObjs(
  $filter: TableLoomObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listLoomObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      loomId
      height
      width
      title
      sharedUrl
      embedUrl
      thumbnailHeight
      thumbnailWidth
      thumbnailUrl
      duration
      providerUrl
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLoomObjsQueryVariables,
  APITypes.ListLoomObjsQuery
>;
export const getStickyObj = /* GraphQL */ `query GetStickyObj($id: String!) {
  getStickyObj(id: $id) {
    id
    color
    name
    content
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStickyObjQueryVariables,
  APITypes.GetStickyObjQuery
>;
export const listStickyObjs = /* GraphQL */ `query ListStickyObjs(
  $filter: TableStickyObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listStickyObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      color
      name
      content
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStickyObjsQueryVariables,
  APITypes.ListStickyObjsQuery
>;
