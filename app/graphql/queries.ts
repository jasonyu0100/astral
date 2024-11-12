/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser {
  getUser {
    id
    displayName
    fname
    lname
    email
    bio
    dp {
      id
      src
      ext
      title
      size
      variant
      __typename
    }
    visibility
    role
    passwordHash
    customerId
    subscriptionId
    productId
    priceId
    created
    journalId
    clientId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const getChapterSceneObj = /* GraphQL */ `query GetChapterSceneObj($id: String!) {
  getChapterSceneObj(id: $id) {
    id
    userId
    chapterId
    summary
    title
    created
    objective
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChapterSceneObjQueryVariables,
  APITypes.GetChapterSceneObjQuery
>;
export const listChapterSceneObjs = /* GraphQL */ `query ListChapterSceneObjs(
  $filter: TableChapterSceneObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listChapterSceneObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      chapterId
      summary
      title
      created
      objective
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChapterSceneObjsQueryVariables,
  APITypes.ListChapterSceneObjsQuery
>;
export const getConversationMessageObj = /* GraphQL */ `query GetConversationMessageObj($id: String!) {
  getConversationMessageObj(id: $id) {
    id
    userId
    agentId
    conversationId
    sceneId
    created
    message
    hasAttachment
    variant
    fileElem {
      id
      src
      ext
      title
      size
      variant
      __typename
    }
    textElem {
      id
      title
      text
      variant
      __typename
    }
    urlElem {
      id
      url
      title
      variant
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetConversationMessageObjQueryVariables,
  APITypes.GetConversationMessageObjQuery
>;
export const listConversationMessageObjs = /* GraphQL */ `query ListConversationMessageObjs(
  $filter: TableConversationMessageObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversationMessageObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      agentId
      conversationId
      sceneId
      created
      message
      hasAttachment
      variant
      fileElem {
        id
        src
        ext
        title
        size
        variant
        __typename
      }
      textElem {
        id
        title
        text
        variant
        __typename
      }
      urlElem {
        id
        url
        title
        variant
        __typename
      }
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConversationMessageObjsQueryVariables,
  APITypes.ListConversationMessageObjsQuery
>;
export const getSceneIdeaObj = /* GraphQL */ `query GetSceneIdeaObj($id: String!) {
  getSceneIdeaObj(id: $id) {
    id
    userId
    sceneId
    idx
    column
    title
    description
    x
    y
    visible
    width
    height
    scale
    rotation
    variant
    fileElem {
      id
      src
      ext
      title
      size
      variant
      __typename
    }
    textElem {
      id
      title
      text
      variant
      __typename
    }
    urlElem {
      id
      url
      title
      variant
      __typename
    }
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSceneIdeaObjQueryVariables,
  APITypes.GetSceneIdeaObjQuery
>;
export const listSceneIdeaObjs = /* GraphQL */ `query ListSceneIdeaObjs(
  $filter: TableSceneIdeaObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listSceneIdeaObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      sceneId
      idx
      column
      title
      description
      x
      y
      visible
      width
      height
      scale
      rotation
      variant
      fileElem {
        id
        src
        ext
        title
        size
        variant
        __typename
      }
      textElem {
        id
        title
        text
        variant
        __typename
      }
      urlElem {
        id
        url
        title
        variant
        __typename
      }
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSceneIdeaObjsQueryVariables,
  APITypes.ListSceneIdeaObjsQuery
>;
export const getCollectionResourceObj = /* GraphQL */ `query GetCollectionResourceObj($id: String!) {
  getCollectionResourceObj(id: $id) {
    id
    userId
    collectionId
    title
    description
    fileElem {
      id
      src
      ext
      title
      size
      variant
      __typename
    }
    textElem {
      id
      title
      text
      variant
      __typename
    }
    urlElem {
      id
      url
      title
      variant
      __typename
    }
    variant
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCollectionResourceObjQueryVariables,
  APITypes.GetCollectionResourceObjQuery
>;
export const listCollectionResourceObjs = /* GraphQL */ `query ListCollectionResourceObjs(
  $filter: TableCollectionResourceObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listCollectionResourceObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      collectionId
      title
      description
      fileElem {
        id
        src
        ext
        title
        size
        variant
        __typename
      }
      textElem {
        id
        title
        text
        variant
        __typename
      }
      urlElem {
        id
        url
        title
        variant
        __typename
      }
      variant
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCollectionResourceObjsQueryVariables,
  APITypes.ListCollectionResourceObjsQuery
>;
export const getUserObj = /* GraphQL */ `query GetUserObj($id: String!) {
  getUserObj(id: $id) {
    id
    displayName
    fname
    lname
    email
    bio
    dp {
      id
      src
      ext
      title
      size
      variant
      __typename
    }
    visibility
    role
    passwordHash
    customerId
    subscriptionId
    productId
    priceId
    created
    journalId
    clientId
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
      displayName
      fname
      lname
      email
      bio
      dp {
        id
        src
        ext
        title
        size
        variant
        __typename
      }
      visibility
      role
      passwordHash
      customerId
      subscriptionId
      productId
      priceId
      created
      journalId
      clientId
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
export const getSpaceChapterObj = /* GraphQL */ `query GetSpaceChapterObj($id: String!) {
  getSpaceChapterObj(id: $id) {
    id
    spaceId
    title
    userId
    description
    objective
    idx
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSpaceChapterObjQueryVariables,
  APITypes.GetSpaceChapterObjQuery
>;
export const listSpaceChapterObjs = /* GraphQL */ `query ListSpaceChapterObjs(
  $filter: TableSpaceChapterObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpaceChapterObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      spaceId
      title
      userId
      description
      objective
      idx
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSpaceChapterObjsQueryVariables,
  APITypes.ListSpaceChapterObjsQuery
>;
export const getSpaceObj = /* GraphQL */ `query GetSpaceObj($id: String!) {
  getSpaceObj(id: $id) {
    id
    userId
    title
    created
    description
    objective
    summary
    thumbnail {
      id
      src
      ext
      title
      size
      variant
      __typename
    }
    category
    hours
    target
    completed
    starred
    visibility
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
      created
      description
      objective
      summary
      thumbnail {
        id
        src
        ext
        title
        size
        variant
        __typename
      }
      category
      hours
      target
      completed
      starred
      visibility
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
export const getSpaceMemberObj = /* GraphQL */ `query GetSpaceMemberObj($id: String!) {
  getSpaceMemberObj(id: $id) {
    id
    spaceId
    userId
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSpaceMemberObjQueryVariables,
  APITypes.GetSpaceMemberObjQuery
>;
export const listSpaceMemberObjs = /* GraphQL */ `query ListSpaceMemberObjs(
  $filter: TableSpaceMemberObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpaceMemberObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      spaceId
      userId
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSpaceMemberObjsQueryVariables,
  APITypes.ListSpaceMemberObjsQuery
>;
export const getUserReservationObj = /* GraphQL */ `query GetUserReservationObj($id: String!) {
  getUserReservationObj(id: $id) {
    id
    fname
    lname
    email
    role
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserReservationObjQueryVariables,
  APITypes.GetUserReservationObjQuery
>;
export const listUserReservationObjs = /* GraphQL */ `query ListUserReservationObjs(
  $filter: TableUserReservationObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserReservationObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      fname
      lname
      email
      role
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserReservationObjsQueryVariables,
  APITypes.ListUserReservationObjsQuery
>;
export const getAgentObj = /* GraphQL */ `query GetAgentObj($id: String!) {
  getAgentObj(id: $id) {
    id
    name
    dp {
      id
      src
      ext
      title
      size
      variant
      __typename
    }
    role
    bio
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAgentObjQueryVariables,
  APITypes.GetAgentObjQuery
>;
export const listAgentObjs = /* GraphQL */ `query ListAgentObjs(
  $filter: TableAgentObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listAgentObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      dp {
        id
        src
        ext
        title
        size
        variant
        __typename
      }
      role
      bio
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAgentObjsQueryVariables,
  APITypes.ListAgentObjsQuery
>;
export const getChapterSessionObj = /* GraphQL */ `query GetChapterSessionObj($id: String!) {
  getChapterSessionObj(id: $id) {
    id
    spaceId
    userId
    chapterId
    duration
    title
    description
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChapterSessionObjQueryVariables,
  APITypes.GetChapterSessionObjQuery
>;
export const listChapterSessionObjs = /* GraphQL */ `query ListChapterSessionObjs(
  $filter: TableChapterSessionObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listChapterSessionObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      spaceId
      userId
      chapterId
      duration
      title
      description
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChapterSessionObjsQueryVariables,
  APITypes.ListChapterSessionObjsQuery
>;
export const getChapterSessionUpdateObj = /* GraphQL */ `query GetChapterSessionUpdateObj($id: String!) {
  getChapterSessionUpdateObj(id: $id) {
    id
    userId
    spaceId
    chapterId
    sessionId
    added
    title
    description
    created
    variant
    conversationId
    sceneId
    ideaId
    postId
    logId
    commentId
    attachmentId
    memberId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChapterSessionUpdateObjQueryVariables,
  APITypes.GetChapterSessionUpdateObjQuery
>;
export const listChapterSessionUpdateObjs = /* GraphQL */ `query ListChapterSessionUpdateObjs(
  $filter: TableChapterSessionUpdateObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listChapterSessionUpdateObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      spaceId
      chapterId
      sessionId
      added
      title
      description
      created
      variant
      conversationId
      sceneId
      ideaId
      postId
      logId
      commentId
      attachmentId
      memberId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChapterSessionUpdateObjsQueryVariables,
  APITypes.ListChapterSessionUpdateObjsQuery
>;
export const getChapterSessionUpdateMemberObj = /* GraphQL */ `query GetChapterSessionUpdateMemberObj($id: String!) {
  getChapterSessionUpdateMemberObj(id: $id) {
    id
    updateId
    userId
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChapterSessionUpdateMemberObjQueryVariables,
  APITypes.GetChapterSessionUpdateMemberObjQuery
>;
export const listChapterSessionUpdateMemberObjs = /* GraphQL */ `query ListChapterSessionUpdateMemberObjs(
  $filter: TableChapterSessionUpdateMemberObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listChapterSessionUpdateMemberObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      updateId
      userId
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChapterSessionUpdateMemberObjsQueryVariables,
  APITypes.ListChapterSessionUpdateMemberObjsQuery
>;
export const getUserBackerObj = /* GraphQL */ `query GetUserBackerObj($id: String!) {
  getUserBackerObj(id: $id) {
    id
    backedId
    userId
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserBackerObjQueryVariables,
  APITypes.GetUserBackerObjQuery
>;
export const listUserBackerObjs = /* GraphQL */ `query ListUserBackerObjs(
  $filter: TableUserBackerObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserBackerObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      backedId
      userId
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserBackerObjsQueryVariables,
  APITypes.ListUserBackerObjsQuery
>;
export const getUserConnectionObj = /* GraphQL */ `query GetUserConnectionObj($id: String!) {
  getUserConnectionObj(id: $id) {
    id
    sourceId
    destinationId
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserConnectionObjQueryVariables,
  APITypes.GetUserConnectionObjQuery
>;
export const listUserConnectionObjs = /* GraphQL */ `query ListUserConnectionObjs(
  $filter: TableUserConnectionObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserConnectionObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sourceId
      destinationId
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserConnectionObjsQueryVariables,
  APITypes.ListUserConnectionObjsQuery
>;
export const getChapterSessionContributorObj = /* GraphQL */ `query GetChapterSessionContributorObj($id: String!) {
  getChapterSessionContributorObj(id: $id) {
    id
    sessionId
    userId
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChapterSessionContributorObjQueryVariables,
  APITypes.GetChapterSessionContributorObjQuery
>;
export const listChapterSessionContributorObjs = /* GraphQL */ `query ListChapterSessionContributorObjs(
  $filter: TableChapterSessionContributorObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listChapterSessionContributorObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sessionId
      userId
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChapterSessionContributorObjsQueryVariables,
  APITypes.ListChapterSessionContributorObjsQuery
>;
export const getSceneMemberObj = /* GraphQL */ `query GetSceneMemberObj($id: String!) {
  getSceneMemberObj(id: $id) {
    id
    sceneId
    userId
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSceneMemberObjQueryVariables,
  APITypes.GetSceneMemberObjQuery
>;
export const listSceneMemberObjs = /* GraphQL */ `query ListSceneMemberObjs(
  $filter: TableSceneMemberObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listSceneMemberObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      sceneId
      userId
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSceneMemberObjsQueryVariables,
  APITypes.ListSceneMemberObjsQuery
>;
export const getSpaceIdeaRelationshipObj = /* GraphQL */ `query GetSpaceIdeaRelationshipObj($id: String!) {
  getSpaceIdeaRelationshipObj(id: $id) {
    id
    fromUserId
    spaceId
    fromChapterId
    fromSceneId
    fromIdeaId
    toUserId
    toChapterId
    toSceneId
    toIdeaId
    weight
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSpaceIdeaRelationshipObjQueryVariables,
  APITypes.GetSpaceIdeaRelationshipObjQuery
>;
export const listSpaceIdeaRelationshipObjs = /* GraphQL */ `query ListSpaceIdeaRelationshipObjs(
  $filter: TableSpaceIdeaRelationshipObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpaceIdeaRelationshipObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      fromUserId
      spaceId
      fromChapterId
      fromSceneId
      fromIdeaId
      toUserId
      toChapterId
      toSceneId
      toIdeaId
      weight
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSpaceIdeaRelationshipObjsQueryVariables,
  APITypes.ListSpaceIdeaRelationshipObjsQuery
>;
export const getCommentKarmaObj = /* GraphQL */ `query GetCommentKarmaObj($id: String!) {
  getCommentKarmaObj(id: $id) {
    id
    userId
    commentId
    created
    neutrality
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentKarmaObjQueryVariables,
  APITypes.GetCommentKarmaObjQuery
>;
export const listCommentKarmaObjs = /* GraphQL */ `query ListCommentKarmaObjs(
  $filter: TableCommentKarmaObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommentKarmaObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      commentId
      created
      neutrality
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentKarmaObjsQueryVariables,
  APITypes.ListCommentKarmaObjsQuery
>;
export const getSpaceChapterMemberObj = /* GraphQL */ `query GetSpaceChapterMemberObj($id: String!) {
  getSpaceChapterMemberObj(id: $id) {
    id
    spaceId
    userId
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSpaceChapterMemberObjQueryVariables,
  APITypes.GetSpaceChapterMemberObjQuery
>;
export const listSpaceChapterMemberObjs = /* GraphQL */ `query ListSpaceChapterMemberObjs(
  $filter: TableSpaceChapterMemberObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpaceChapterMemberObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      spaceId
      userId
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSpaceChapterMemberObjsQueryVariables,
  APITypes.ListSpaceChapterMemberObjsQuery
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
      ext
      title
      size
      variant
      __typename
    }
    created
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
        ext
        title
        size
        variant
        __typename
      }
      created
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
export const getGalleryCollectionObj = /* GraphQL */ `query GetGalleryCollectionObj($id: String!) {
  getGalleryCollectionObj(id: $id) {
    id
    galleryId
    title
    description
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGalleryCollectionObjQueryVariables,
  APITypes.GetGalleryCollectionObjQuery
>;
export const listGalleryCollectionObjs = /* GraphQL */ `query ListGalleryCollectionObjs(
  $filter: TableGalleryCollectionObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listGalleryCollectionObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      galleryId
      title
      description
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGalleryCollectionObjsQueryVariables,
  APITypes.ListGalleryCollectionObjsQuery
>;
export const getGalleryMemberObj = /* GraphQL */ `query GetGalleryMemberObj($id: String!) {
  getGalleryMemberObj(id: $id) {
    id
    galleryId
    userId
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGalleryMemberObjQueryVariables,
  APITypes.GetGalleryMemberObjQuery
>;
export const listGalleryMemberObjs = /* GraphQL */ `query ListGalleryMemberObjs(
  $filter: TableGalleryMemberObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listGalleryMemberObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      galleryId
      userId
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGalleryMemberObjsQueryVariables,
  APITypes.ListGalleryMemberObjsQuery
>;
export const getUserActivityObj = /* GraphQL */ `query GetUserActivityObj($id: String!) {
  getUserActivityObj(id: $id) {
    id
    userId
    chapterId
    spaceId
    horizonId
    acitivtyId
    added
    title
    description
    created
    variant
    conversationId
    sceneId
    ideaId
    postId
    taskId
    commentId
    attachmentId
    contributorId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserActivityObjQueryVariables,
  APITypes.GetUserActivityObjQuery
>;
export const listUserActivityObjs = /* GraphQL */ `query ListUserActivityObjs(
  $filter: TableUserActivityObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserActivityObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      chapterId
      spaceId
      horizonId
      acitivtyId
      added
      title
      description
      created
      variant
      conversationId
      sceneId
      ideaId
      postId
      taskId
      commentId
      attachmentId
      contributorId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserActivityObjsQueryVariables,
  APITypes.ListUserActivityObjsQuery
>;
export const getPostAttachmentObj = /* GraphQL */ `query GetPostAttachmentObj($id: String!) {
  getPostAttachmentObj(id: $id) {
    id
    userId
    postId
    ideaId
    created
    variant
    title
    fileElem {
      id
      src
      ext
      title
      size
      variant
      __typename
    }
    textElem {
      id
      title
      text
      variant
      __typename
    }
    urlElem {
      id
      url
      title
      variant
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPostAttachmentObjQueryVariables,
  APITypes.GetPostAttachmentObjQuery
>;
export const listPostAttachmentObjs = /* GraphQL */ `query ListPostAttachmentObjs(
  $filter: TablePostAttachmentObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostAttachmentObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      postId
      ideaId
      created
      variant
      title
      fileElem {
        id
        src
        ext
        title
        size
        variant
        __typename
      }
      textElem {
        id
        title
        text
        variant
        __typename
      }
      urlElem {
        id
        url
        title
        variant
        __typename
      }
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPostAttachmentObjsQueryVariables,
  APITypes.ListPostAttachmentObjsQuery
>;
export const getPostCommentObj = /* GraphQL */ `query GetPostCommentObj($id: String!) {
  getPostCommentObj(id: $id) {
    id
    userId
    postId
    created
    message
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPostCommentObjQueryVariables,
  APITypes.GetPostCommentObjQuery
>;
export const listPostCommentObjs = /* GraphQL */ `query ListPostCommentObjs(
  $filter: TablePostCommentObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostCommentObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      postId
      created
      message
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPostCommentObjsQueryVariables,
  APITypes.ListPostCommentObjsQuery
>;
export const getPostKarmaObj = /* GraphQL */ `query GetPostKarmaObj($id: String!) {
  getPostKarmaObj(id: $id) {
    id
    userId
    postId
    created
    neutrality
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPostKarmaObjQueryVariables,
  APITypes.GetPostKarmaObjQuery
>;
export const listPostKarmaObjs = /* GraphQL */ `query ListPostKarmaObjs(
  $filter: TablePostKarmaObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostKarmaObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      postId
      created
      neutrality
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPostKarmaObjsQueryVariables,
  APITypes.ListPostKarmaObjsQuery
>;
export const getPostMemberObj = /* GraphQL */ `query GetPostMemberObj($id: String!) {
  getPostMemberObj(id: $id) {
    id
    postId
    userId
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPostMemberObjQueryVariables,
  APITypes.GetPostMemberObjQuery
>;
export const listPostMemberObjs = /* GraphQL */ `query ListPostMemberObjs(
  $filter: TablePostMemberObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostMemberObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postId
      userId
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPostMemberObjsQueryVariables,
  APITypes.ListPostMemberObjsQuery
>;
export const getUserPostObj = /* GraphQL */ `query GetUserPostObj($id: String!) {
  getUserPostObj(id: $id) {
    id
    userId
    chapterId
    spaceId
    title
    description
    created
    postStatus
    summary
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserPostObjQueryVariables,
  APITypes.GetUserPostObjQuery
>;
export const listUserPostObjs = /* GraphQL */ `query ListUserPostObjs(
  $filter: TableUserPostObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserPostObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      chapterId
      spaceId
      title
      description
      created
      postStatus
      summary
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserPostObjsQueryVariables,
  APITypes.ListUserPostObjsQuery
>;
export const getIdeaRelationshipObj = /* GraphQL */ `query GetIdeaRelationshipObj($id: String!) {
  getIdeaRelationshipObj(id: $id) {
    id
    spaceId
    horizonId
    fromUserId
    fromChapterId
    fromSceneId
    fromIdeaId
    toUserId
    toChapterId
    toSceneId
    toIdeaId
    weight
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIdeaRelationshipObjQueryVariables,
  APITypes.GetIdeaRelationshipObjQuery
>;
export const listIdeaRelationshipObjs = /* GraphQL */ `query ListIdeaRelationshipObjs(
  $filter: TableIdeaRelationshipObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listIdeaRelationshipObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      spaceId
      horizonId
      fromUserId
      fromChapterId
      fromSceneId
      fromIdeaId
      toUserId
      toChapterId
      toSceneId
      toIdeaId
      weight
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIdeaRelationshipObjsQueryVariables,
  APITypes.ListIdeaRelationshipObjsQuery
>;
export const getIdeaObj = /* GraphQL */ `query GetIdeaObj($id: String!) {
  getIdeaObj(id: $id) {
    id
    idx
    userId
    sceneId
    pageId
    title
    description
    column
    visible
    x
    y
    width
    height
    scale
    rotation
    variant
    fileElem {
      id
      src
      ext
      title
      size
      variant
      __typename
    }
    textElem {
      id
      title
      text
      variant
      __typename
    }
    urlElem {
      id
      url
      title
      variant
      __typename
    }
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIdeaObjQueryVariables,
  APITypes.GetIdeaObjQuery
>;
export const listIdeaObjs = /* GraphQL */ `query ListIdeaObjs(
  $filter: TableIdeaObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listIdeaObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      idx
      userId
      sceneId
      pageId
      title
      description
      column
      visible
      x
      y
      width
      height
      scale
      rotation
      variant
      fileElem {
        id
        src
        ext
        title
        size
        variant
        __typename
      }
      textElem {
        id
        title
        text
        variant
        __typename
      }
      urlElem {
        id
        url
        title
        variant
        __typename
      }
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIdeaObjsQueryVariables,
  APITypes.ListIdeaObjsQuery
>;
export const getIdeaSceneObj = /* GraphQL */ `query GetIdeaSceneObj($id: String!) {
  getIdeaSceneObj(id: $id) {
    id
    userId
    chapterId
    arcId
    title
    summary
    objective
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIdeaSceneObjQueryVariables,
  APITypes.GetIdeaSceneObjQuery
>;
export const listIdeaSceneObjs = /* GraphQL */ `query ListIdeaSceneObjs(
  $filter: TableIdeaSceneObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listIdeaSceneObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      chapterId
      arcId
      title
      summary
      objective
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIdeaSceneObjsQueryVariables,
  APITypes.ListIdeaSceneObjsQuery
>;
export const getTaskMemberObj = /* GraphQL */ `query GetTaskMemberObj($id: String!) {
  getTaskMemberObj(id: $id) {
    id
    taskId
    userId
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTaskMemberObjQueryVariables,
  APITypes.GetTaskMemberObjQuery
>;
export const listTaskMemberObjs = /* GraphQL */ `query ListTaskMemberObjs(
  $filter: TableTaskMemberObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listTaskMemberObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      taskId
      userId
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTaskMemberObjsQueryVariables,
  APITypes.ListTaskMemberObjsQuery
>;
export const getTaskObj = /* GraphQL */ `query GetTaskObj($id: String!) {
  getTaskObj(id: $id) {
    id
    userId
    chapterId
    spaceId
    title
    description
    taskStatus
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTaskObjQueryVariables,
  APITypes.GetTaskObjQuery
>;
export const listTaskObjs = /* GraphQL */ `query ListTaskObjs(
  $filter: TableTaskObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listTaskObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      chapterId
      spaceId
      title
      description
      taskStatus
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTaskObjsQueryVariables,
  APITypes.ListTaskObjsQuery
>;
export const getConversationObj = /* GraphQL */ `query GetConversationObj($id: String!) {
  getConversationObj(id: $id) {
    id
    userId
    chapterId
    decisionId
    toUserId
    toAgentId
    summary
    title
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetConversationObjQueryVariables,
  APITypes.GetConversationObjQuery
>;
export const listConversationObjs = /* GraphQL */ `query ListConversationObjs(
  $filter: TableConversationObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversationObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      chapterId
      decisionId
      toUserId
      toAgentId
      summary
      title
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConversationObjsQueryVariables,
  APITypes.ListConversationObjsQuery
>;
export const getHorizonObj = /* GraphQL */ `query GetHorizonObj($id: String!) {
  getHorizonObj(id: $id) {
    id
    userId
    title
    created
    description
    thumbnail {
      id
      src
      ext
      title
      size
      variant
      __typename
    }
    category
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHorizonObjQueryVariables,
  APITypes.GetHorizonObjQuery
>;
export const listHorizonObjs = /* GraphQL */ `query ListHorizonObjs(
  $filter: TableHorizonObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listHorizonObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      title
      created
      description
      thumbnail {
        id
        src
        ext
        title
        size
        variant
        __typename
      }
      category
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHorizonObjsQueryVariables,
  APITypes.ListHorizonObjsQuery
>;
export const getQuadrantMemberObj = /* GraphQL */ `query GetQuadrantMemberObj($id: String!) {
  getQuadrantMemberObj(id: $id) {
    id
    quadrantId
    userId
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetQuadrantMemberObjQueryVariables,
  APITypes.GetQuadrantMemberObjQuery
>;
export const listQuadrantMemberObjs = /* GraphQL */ `query ListQuadrantMemberObjs(
  $filter: TableQuadrantMemberObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuadrantMemberObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      quadrantId
      userId
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuadrantMemberObjsQueryVariables,
  APITypes.ListQuadrantMemberObjsQuery
>;
export const getDecisionQuadrantObj = /* GraphQL */ `query GetDecisionQuadrantObj($id: String!) {
  getDecisionQuadrantObj(id: $id) {
    id
    decisionId
    title
    description
    variant
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDecisionQuadrantObjQueryVariables,
  APITypes.GetDecisionQuadrantObjQuery
>;
export const listDecisionQuadrantObjs = /* GraphQL */ `query ListDecisionQuadrantObjs(
  $filter: TableDecisionQuadrantObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listDecisionQuadrantObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      decisionId
      title
      description
      variant
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDecisionQuadrantObjsQueryVariables,
  APITypes.ListDecisionQuadrantObjsQuery
>;
export const getHorizonDecisionObj = /* GraphQL */ `query GetHorizonDecisionObj($id: String!) {
  getHorizonDecisionObj(id: $id) {
    id
    horizonId
    title
    description
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHorizonDecisionObjQueryVariables,
  APITypes.GetHorizonDecisionObjQuery
>;
export const listHorizonDecisionObjs = /* GraphQL */ `query ListHorizonDecisionObjs(
  $filter: TableHorizonDecisionObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listHorizonDecisionObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      horizonId
      title
      description
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHorizonDecisionObjsQueryVariables,
  APITypes.ListHorizonDecisionObjsQuery
>;
export const getHorizonSpaceMemberObj = /* GraphQL */ `query GetHorizonSpaceMemberObj($id: String!) {
  getHorizonSpaceMemberObj(id: $id) {
    id
    horizonId
    spaceId
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHorizonSpaceMemberObjQueryVariables,
  APITypes.GetHorizonSpaceMemberObjQuery
>;
export const listHorizonSpaceMemberObjs = /* GraphQL */ `query ListHorizonSpaceMemberObjs(
  $filter: TableHorizonSpaceMemberObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listHorizonSpaceMemberObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      horizonId
      spaceId
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHorizonSpaceMemberObjsQueryVariables,
  APITypes.ListHorizonSpaceMemberObjsQuery
>;
export const getHorizonUserMemberObj = /* GraphQL */ `query GetHorizonUserMemberObj($id: String!) {
  getHorizonUserMemberObj(id: $id) {
    id
    horizonId
    userId
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHorizonUserMemberObjQueryVariables,
  APITypes.GetHorizonUserMemberObjQuery
>;
export const listHorizonUserMemberObjs = /* GraphQL */ `query ListHorizonUserMemberObjs(
  $filter: TableHorizonUserMemberObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listHorizonUserMemberObjs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      horizonId
      userId
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHorizonUserMemberObjsQueryVariables,
  APITypes.ListHorizonUserMemberObjsQuery
>;
export const getArcSectionObj = /* GraphQL */ `query GetArcSectionObj($id: String!) {
  getArcSectionObj(id: $id) {
    id
    userId
    arcId
    title
    description
    objective
    idx
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetArcSectionObjQueryVariables,
  APITypes.GetArcSectionObjQuery
>;
export const listArcSectionObjs = /* GraphQL */ `query ListArcSectionObjs(
  $filter: TableArcSectionObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listArcSectionObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      arcId
      title
      description
      objective
      idx
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArcSectionObjsQueryVariables,
  APITypes.ListArcSectionObjsQuery
>;
export const getHorizonArcObj = /* GraphQL */ `query GetHorizonArcObj($id: String!) {
  getHorizonArcObj(id: $id) {
    id
    userId
    horizonId
    title
    description
    objective
    idx
    created
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHorizonArcObjQueryVariables,
  APITypes.GetHorizonArcObjQuery
>;
export const listHorizonArcObjs = /* GraphQL */ `query ListHorizonArcObjs(
  $filter: TableHorizonArcObjFilterInput
  $limit: Int
  $nextToken: String
) {
  listHorizonArcObjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      horizonId
      title
      description
      objective
      idx
      created
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHorizonArcObjsQueryVariables,
  APITypes.ListHorizonArcObjsQuery
>;
