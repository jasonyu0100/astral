/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createChapterSceneObj = /* GraphQL */ `mutation CreateChapterSceneObj($input: CreateChapterSceneObjInput!) {
  createChapterSceneObj(input: $input) {
    id
    userId
    chapterId
    summary
    title
    objective
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChapterSceneObjMutationVariables,
  APITypes.CreateChapterSceneObjMutation
>;
export const updateChapterSceneObj = /* GraphQL */ `mutation UpdateChapterSceneObj($input: UpdateChapterSceneObjInput!) {
  updateChapterSceneObj(input: $input) {
    id
    userId
    chapterId
    summary
    title
    objective
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChapterSceneObjMutationVariables,
  APITypes.UpdateChapterSceneObjMutation
>;
export const deleteChapterSceneObj = /* GraphQL */ `mutation DeleteChapterSceneObj($input: DeleteChapterSceneObjInput!) {
  deleteChapterSceneObj(input: $input) {
    id
    userId
    chapterId
    summary
    title
    objective
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChapterSceneObjMutationVariables,
  APITypes.DeleteChapterSceneObjMutation
>;
export const createConversationMessageObj = /* GraphQL */ `mutation CreateConversationMessageObj(
  $input: CreateConversationMessageObjInput!
) {
  createConversationMessageObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateConversationMessageObjMutationVariables,
  APITypes.CreateConversationMessageObjMutation
>;
export const updateConversationMessageObj = /* GraphQL */ `mutation UpdateConversationMessageObj(
  $input: UpdateConversationMessageObjInput!
) {
  updateConversationMessageObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateConversationMessageObjMutationVariables,
  APITypes.UpdateConversationMessageObjMutation
>;
export const deleteConversationMessageObj = /* GraphQL */ `mutation DeleteConversationMessageObj(
  $input: DeleteConversationMessageObjInput!
) {
  deleteConversationMessageObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteConversationMessageObjMutationVariables,
  APITypes.DeleteConversationMessageObjMutation
>;
export const createSceneIdeaObj = /* GraphQL */ `mutation CreateSceneIdeaObj($input: CreateSceneIdeaObjInput!) {
  createSceneIdeaObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateSceneIdeaObjMutationVariables,
  APITypes.CreateSceneIdeaObjMutation
>;
export const updateSceneIdeaObj = /* GraphQL */ `mutation UpdateSceneIdeaObj($input: UpdateSceneIdeaObjInput!) {
  updateSceneIdeaObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateSceneIdeaObjMutationVariables,
  APITypes.UpdateSceneIdeaObjMutation
>;
export const deleteSceneIdeaObj = /* GraphQL */ `mutation DeleteSceneIdeaObj($input: DeleteSceneIdeaObjInput!) {
  deleteSceneIdeaObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteSceneIdeaObjMutationVariables,
  APITypes.DeleteSceneIdeaObjMutation
>;
export const createCollectionResourceObj = /* GraphQL */ `mutation CreateCollectionResourceObj(
  $input: CreateCollectionResourceObjInput!
) {
  createCollectionResourceObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCollectionResourceObjMutationVariables,
  APITypes.CreateCollectionResourceObjMutation
>;
export const updateCollectionResourceObj = /* GraphQL */ `mutation UpdateCollectionResourceObj(
  $input: UpdateCollectionResourceObjInput!
) {
  updateCollectionResourceObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCollectionResourceObjMutationVariables,
  APITypes.UpdateCollectionResourceObjMutation
>;
export const deleteCollectionResourceObj = /* GraphQL */ `mutation DeleteCollectionResourceObj(
  $input: DeleteCollectionResourceObjInput!
) {
  deleteCollectionResourceObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCollectionResourceObjMutationVariables,
  APITypes.DeleteCollectionResourceObjMutation
>;
export const createUserObj = /* GraphQL */ `mutation CreateUserObj($input: CreateUserObjInput!) {
  createUserObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserObjMutationVariables,
  APITypes.CreateUserObjMutation
>;
export const updateUserObj = /* GraphQL */ `mutation UpdateUserObj($input: UpdateUserObjInput!) {
  updateUserObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserObjMutationVariables,
  APITypes.UpdateUserObjMutation
>;
export const deleteUserObj = /* GraphQL */ `mutation DeleteUserObj($input: DeleteUserObjInput!) {
  deleteUserObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserObjMutationVariables,
  APITypes.DeleteUserObjMutation
>;
export const createSpaceChapterObj = /* GraphQL */ `mutation CreateSpaceChapterObj($input: CreateSpaceChapterObjInput!) {
  createSpaceChapterObj(input: $input) {
    id
    spaceId
    title
    userId
    description
    objective
    context
    idx
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSpaceChapterObjMutationVariables,
  APITypes.CreateSpaceChapterObjMutation
>;
export const updateSpaceChapterObj = /* GraphQL */ `mutation UpdateSpaceChapterObj($input: UpdateSpaceChapterObjInput!) {
  updateSpaceChapterObj(input: $input) {
    id
    spaceId
    title
    userId
    description
    objective
    context
    idx
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSpaceChapterObjMutationVariables,
  APITypes.UpdateSpaceChapterObjMutation
>;
export const deleteSpaceChapterObj = /* GraphQL */ `mutation DeleteSpaceChapterObj($input: DeleteSpaceChapterObjInput!) {
  deleteSpaceChapterObj(input: $input) {
    id
    spaceId
    title
    userId
    description
    objective
    context
    idx
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSpaceChapterObjMutationVariables,
  APITypes.DeleteSpaceChapterObjMutation
>;
export const createSpaceObj = /* GraphQL */ `mutation CreateSpaceObj($input: CreateSpaceObjInput!) {
  createSpaceObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateSpaceObjMutationVariables,
  APITypes.CreateSpaceObjMutation
>;
export const updateSpaceObj = /* GraphQL */ `mutation UpdateSpaceObj($input: UpdateSpaceObjInput!) {
  updateSpaceObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateSpaceObjMutationVariables,
  APITypes.UpdateSpaceObjMutation
>;
export const deleteSpaceObj = /* GraphQL */ `mutation DeleteSpaceObj($input: DeleteSpaceObjInput!) {
  deleteSpaceObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteSpaceObjMutationVariables,
  APITypes.DeleteSpaceObjMutation
>;
export const createSpaceMemberObj = /* GraphQL */ `mutation CreateSpaceMemberObj($input: CreateSpaceMemberObjInput!) {
  createSpaceMemberObj(input: $input) {
    id
    spaceId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSpaceMemberObjMutationVariables,
  APITypes.CreateSpaceMemberObjMutation
>;
export const updateSpaceMemberObj = /* GraphQL */ `mutation UpdateSpaceMemberObj($input: UpdateSpaceMemberObjInput!) {
  updateSpaceMemberObj(input: $input) {
    id
    spaceId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSpaceMemberObjMutationVariables,
  APITypes.UpdateSpaceMemberObjMutation
>;
export const deleteSpaceMemberObj = /* GraphQL */ `mutation DeleteSpaceMemberObj($input: DeleteSpaceMemberObjInput!) {
  deleteSpaceMemberObj(input: $input) {
    id
    spaceId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSpaceMemberObjMutationVariables,
  APITypes.DeleteSpaceMemberObjMutation
>;
export const createUserReservationObj = /* GraphQL */ `mutation CreateUserReservationObj($input: CreateUserReservationObjInput!) {
  createUserReservationObj(input: $input) {
    id
    fname
    lname
    email
    role
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserReservationObjMutationVariables,
  APITypes.CreateUserReservationObjMutation
>;
export const updateUserReservationObj = /* GraphQL */ `mutation UpdateUserReservationObj($input: UpdateUserReservationObjInput!) {
  updateUserReservationObj(input: $input) {
    id
    fname
    lname
    email
    role
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserReservationObjMutationVariables,
  APITypes.UpdateUserReservationObjMutation
>;
export const deleteUserReservationObj = /* GraphQL */ `mutation DeleteUserReservationObj($input: DeleteUserReservationObjInput!) {
  deleteUserReservationObj(input: $input) {
    id
    fname
    lname
    email
    role
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserReservationObjMutationVariables,
  APITypes.DeleteUserReservationObjMutation
>;
export const createAgentObj = /* GraphQL */ `mutation CreateAgentObj($input: CreateAgentObjInput!) {
  createAgentObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateAgentObjMutationVariables,
  APITypes.CreateAgentObjMutation
>;
export const updateAgentObj = /* GraphQL */ `mutation UpdateAgentObj($input: UpdateAgentObjInput!) {
  updateAgentObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateAgentObjMutationVariables,
  APITypes.UpdateAgentObjMutation
>;
export const deleteAgentObj = /* GraphQL */ `mutation DeleteAgentObj($input: DeleteAgentObjInput!) {
  deleteAgentObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteAgentObjMutationVariables,
  APITypes.DeleteAgentObjMutation
>;
export const createChapterSessionObj = /* GraphQL */ `mutation CreateChapterSessionObj($input: CreateChapterSessionObjInput!) {
  createChapterSessionObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateChapterSessionObjMutationVariables,
  APITypes.CreateChapterSessionObjMutation
>;
export const updateChapterSessionObj = /* GraphQL */ `mutation UpdateChapterSessionObj($input: UpdateChapterSessionObjInput!) {
  updateChapterSessionObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateChapterSessionObjMutationVariables,
  APITypes.UpdateChapterSessionObjMutation
>;
export const deleteChapterSessionObj = /* GraphQL */ `mutation DeleteChapterSessionObj($input: DeleteChapterSessionObjInput!) {
  deleteChapterSessionObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteChapterSessionObjMutationVariables,
  APITypes.DeleteChapterSessionObjMutation
>;
export const createChapterSessionUpdateObj = /* GraphQL */ `mutation CreateChapterSessionUpdateObj(
  $input: CreateChapterSessionUpdateObjInput!
) {
  createChapterSessionUpdateObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateChapterSessionUpdateObjMutationVariables,
  APITypes.CreateChapterSessionUpdateObjMutation
>;
export const updateChapterSessionUpdateObj = /* GraphQL */ `mutation UpdateChapterSessionUpdateObj(
  $input: UpdateChapterSessionUpdateObjInput!
) {
  updateChapterSessionUpdateObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateChapterSessionUpdateObjMutationVariables,
  APITypes.UpdateChapterSessionUpdateObjMutation
>;
export const deleteChapterSessionUpdateObj = /* GraphQL */ `mutation DeleteChapterSessionUpdateObj(
  $input: DeleteChapterSessionUpdateObjInput!
) {
  deleteChapterSessionUpdateObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteChapterSessionUpdateObjMutationVariables,
  APITypes.DeleteChapterSessionUpdateObjMutation
>;
export const createChapterSessionUpdateMemberObj = /* GraphQL */ `mutation CreateChapterSessionUpdateMemberObj(
  $input: CreateChapterSessionUpdateMemberObjInput!
) {
  createChapterSessionUpdateMemberObj(input: $input) {
    id
    updateId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChapterSessionUpdateMemberObjMutationVariables,
  APITypes.CreateChapterSessionUpdateMemberObjMutation
>;
export const updateChapterSessionUpdateMemberObj = /* GraphQL */ `mutation UpdateChapterSessionUpdateMemberObj(
  $input: UpdateChapterSessionUpdateMemberObjInput!
) {
  updateChapterSessionUpdateMemberObj(input: $input) {
    id
    updateId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChapterSessionUpdateMemberObjMutationVariables,
  APITypes.UpdateChapterSessionUpdateMemberObjMutation
>;
export const deleteChapterSessionUpdateMemberObj = /* GraphQL */ `mutation DeleteChapterSessionUpdateMemberObj(
  $input: DeleteChapterSessionUpdateMemberObjInput!
) {
  deleteChapterSessionUpdateMemberObj(input: $input) {
    id
    updateId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChapterSessionUpdateMemberObjMutationVariables,
  APITypes.DeleteChapterSessionUpdateMemberObjMutation
>;
export const createUserBackerObj = /* GraphQL */ `mutation CreateUserBackerObj($input: CreateUserBackerObjInput!) {
  createUserBackerObj(input: $input) {
    id
    backedId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserBackerObjMutationVariables,
  APITypes.CreateUserBackerObjMutation
>;
export const updateUserBackerObj = /* GraphQL */ `mutation UpdateUserBackerObj($input: UpdateUserBackerObjInput!) {
  updateUserBackerObj(input: $input) {
    id
    backedId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserBackerObjMutationVariables,
  APITypes.UpdateUserBackerObjMutation
>;
export const deleteUserBackerObj = /* GraphQL */ `mutation DeleteUserBackerObj($input: DeleteUserBackerObjInput!) {
  deleteUserBackerObj(input: $input) {
    id
    backedId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserBackerObjMutationVariables,
  APITypes.DeleteUserBackerObjMutation
>;
export const createUserConnectionObj = /* GraphQL */ `mutation CreateUserConnectionObj($input: CreateUserConnectionObjInput!) {
  createUserConnectionObj(input: $input) {
    id
    sourceId
    destinationId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserConnectionObjMutationVariables,
  APITypes.CreateUserConnectionObjMutation
>;
export const updateUserConnectionObj = /* GraphQL */ `mutation UpdateUserConnectionObj($input: UpdateUserConnectionObjInput!) {
  updateUserConnectionObj(input: $input) {
    id
    sourceId
    destinationId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserConnectionObjMutationVariables,
  APITypes.UpdateUserConnectionObjMutation
>;
export const deleteUserConnectionObj = /* GraphQL */ `mutation DeleteUserConnectionObj($input: DeleteUserConnectionObjInput!) {
  deleteUserConnectionObj(input: $input) {
    id
    sourceId
    destinationId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserConnectionObjMutationVariables,
  APITypes.DeleteUserConnectionObjMutation
>;
export const createChapterSessionContributorObj = /* GraphQL */ `mutation CreateChapterSessionContributorObj(
  $input: CreateChapterSessionContributorObjInput!
) {
  createChapterSessionContributorObj(input: $input) {
    id
    sessionId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChapterSessionContributorObjMutationVariables,
  APITypes.CreateChapterSessionContributorObjMutation
>;
export const updateChapterSessionContributorObj = /* GraphQL */ `mutation UpdateChapterSessionContributorObj(
  $input: UpdateChapterSessionContributorObjInput!
) {
  updateChapterSessionContributorObj(input: $input) {
    id
    sessionId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChapterSessionContributorObjMutationVariables,
  APITypes.UpdateChapterSessionContributorObjMutation
>;
export const deleteChapterSessionContributorObj = /* GraphQL */ `mutation DeleteChapterSessionContributorObj(
  $input: DeleteChapterSessionContributorObjInput!
) {
  deleteChapterSessionContributorObj(input: $input) {
    id
    sessionId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChapterSessionContributorObjMutationVariables,
  APITypes.DeleteChapterSessionContributorObjMutation
>;
export const createSceneMemberObj = /* GraphQL */ `mutation CreateSceneMemberObj($input: CreateSceneMemberObjInput!) {
  createSceneMemberObj(input: $input) {
    id
    sceneId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSceneMemberObjMutationVariables,
  APITypes.CreateSceneMemberObjMutation
>;
export const updateSceneMemberObj = /* GraphQL */ `mutation UpdateSceneMemberObj($input: UpdateSceneMemberObjInput!) {
  updateSceneMemberObj(input: $input) {
    id
    sceneId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSceneMemberObjMutationVariables,
  APITypes.UpdateSceneMemberObjMutation
>;
export const deleteSceneMemberObj = /* GraphQL */ `mutation DeleteSceneMemberObj($input: DeleteSceneMemberObjInput!) {
  deleteSceneMemberObj(input: $input) {
    id
    sceneId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSceneMemberObjMutationVariables,
  APITypes.DeleteSceneMemberObjMutation
>;
export const createSpaceIdeaRelationshipObj = /* GraphQL */ `mutation CreateSpaceIdeaRelationshipObj(
  $input: CreateSpaceIdeaRelationshipObjInput!
) {
  createSpaceIdeaRelationshipObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateSpaceIdeaRelationshipObjMutationVariables,
  APITypes.CreateSpaceIdeaRelationshipObjMutation
>;
export const updateSpaceIdeaRelationshipObj = /* GraphQL */ `mutation UpdateSpaceIdeaRelationshipObj(
  $input: UpdateSpaceIdeaRelationshipObjInput!
) {
  updateSpaceIdeaRelationshipObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateSpaceIdeaRelationshipObjMutationVariables,
  APITypes.UpdateSpaceIdeaRelationshipObjMutation
>;
export const deleteSpaceIdeaRelationshipObj = /* GraphQL */ `mutation DeleteSpaceIdeaRelationshipObj(
  $input: DeleteSpaceIdeaRelationshipObjInput!
) {
  deleteSpaceIdeaRelationshipObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteSpaceIdeaRelationshipObjMutationVariables,
  APITypes.DeleteSpaceIdeaRelationshipObjMutation
>;
export const createCommentKarmaObj = /* GraphQL */ `mutation CreateCommentKarmaObj($input: CreateCommentKarmaObjInput!) {
  createCommentKarmaObj(input: $input) {
    id
    userId
    commentId
    created
    neutrality
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentKarmaObjMutationVariables,
  APITypes.CreateCommentKarmaObjMutation
>;
export const updateCommentKarmaObj = /* GraphQL */ `mutation UpdateCommentKarmaObj($input: UpdateCommentKarmaObjInput!) {
  updateCommentKarmaObj(input: $input) {
    id
    userId
    commentId
    created
    neutrality
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentKarmaObjMutationVariables,
  APITypes.UpdateCommentKarmaObjMutation
>;
export const deleteCommentKarmaObj = /* GraphQL */ `mutation DeleteCommentKarmaObj($input: DeleteCommentKarmaObjInput!) {
  deleteCommentKarmaObj(input: $input) {
    id
    userId
    commentId
    created
    neutrality
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentKarmaObjMutationVariables,
  APITypes.DeleteCommentKarmaObjMutation
>;
export const createSpaceChapterMemberObj = /* GraphQL */ `mutation CreateSpaceChapterMemberObj(
  $input: CreateSpaceChapterMemberObjInput!
) {
  createSpaceChapterMemberObj(input: $input) {
    id
    spaceId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSpaceChapterMemberObjMutationVariables,
  APITypes.CreateSpaceChapterMemberObjMutation
>;
export const updateSpaceChapterMemberObj = /* GraphQL */ `mutation UpdateSpaceChapterMemberObj(
  $input: UpdateSpaceChapterMemberObjInput!
) {
  updateSpaceChapterMemberObj(input: $input) {
    id
    spaceId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSpaceChapterMemberObjMutationVariables,
  APITypes.UpdateSpaceChapterMemberObjMutation
>;
export const deleteSpaceChapterMemberObj = /* GraphQL */ `mutation DeleteSpaceChapterMemberObj(
  $input: DeleteSpaceChapterMemberObjInput!
) {
  deleteSpaceChapterMemberObj(input: $input) {
    id
    spaceId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSpaceChapterMemberObjMutationVariables,
  APITypes.DeleteSpaceChapterMemberObjMutation
>;
export const createGalleryObj = /* GraphQL */ `mutation CreateGalleryObj($input: CreateGalleryObjInput!) {
  createGalleryObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateGalleryObjMutationVariables,
  APITypes.CreateGalleryObjMutation
>;
export const updateGalleryObj = /* GraphQL */ `mutation UpdateGalleryObj($input: UpdateGalleryObjInput!) {
  updateGalleryObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateGalleryObjMutationVariables,
  APITypes.UpdateGalleryObjMutation
>;
export const deleteGalleryObj = /* GraphQL */ `mutation DeleteGalleryObj($input: DeleteGalleryObjInput!) {
  deleteGalleryObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteGalleryObjMutationVariables,
  APITypes.DeleteGalleryObjMutation
>;
export const createGalleryCollectionObj = /* GraphQL */ `mutation CreateGalleryCollectionObj($input: CreateGalleryCollectionObjInput!) {
  createGalleryCollectionObj(input: $input) {
    id
    galleryId
    title
    description
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGalleryCollectionObjMutationVariables,
  APITypes.CreateGalleryCollectionObjMutation
>;
export const updateGalleryCollectionObj = /* GraphQL */ `mutation UpdateGalleryCollectionObj($input: UpdateGalleryCollectionObjInput!) {
  updateGalleryCollectionObj(input: $input) {
    id
    galleryId
    title
    description
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGalleryCollectionObjMutationVariables,
  APITypes.UpdateGalleryCollectionObjMutation
>;
export const deleteGalleryCollectionObj = /* GraphQL */ `mutation DeleteGalleryCollectionObj($input: DeleteGalleryCollectionObjInput!) {
  deleteGalleryCollectionObj(input: $input) {
    id
    galleryId
    title
    description
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGalleryCollectionObjMutationVariables,
  APITypes.DeleteGalleryCollectionObjMutation
>;
export const createGalleryMemberObj = /* GraphQL */ `mutation CreateGalleryMemberObj($input: CreateGalleryMemberObjInput!) {
  createGalleryMemberObj(input: $input) {
    id
    galleryId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGalleryMemberObjMutationVariables,
  APITypes.CreateGalleryMemberObjMutation
>;
export const updateGalleryMemberObj = /* GraphQL */ `mutation UpdateGalleryMemberObj($input: UpdateGalleryMemberObjInput!) {
  updateGalleryMemberObj(input: $input) {
    id
    galleryId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGalleryMemberObjMutationVariables,
  APITypes.UpdateGalleryMemberObjMutation
>;
export const deleteGalleryMemberObj = /* GraphQL */ `mutation DeleteGalleryMemberObj($input: DeleteGalleryMemberObjInput!) {
  deleteGalleryMemberObj(input: $input) {
    id
    galleryId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGalleryMemberObjMutationVariables,
  APITypes.DeleteGalleryMemberObjMutation
>;
export const createUserActivityObj = /* GraphQL */ `mutation CreateUserActivityObj($input: CreateUserActivityObjInput!) {
  createUserActivityObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserActivityObjMutationVariables,
  APITypes.CreateUserActivityObjMutation
>;
export const updateUserActivityObj = /* GraphQL */ `mutation UpdateUserActivityObj($input: UpdateUserActivityObjInput!) {
  updateUserActivityObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserActivityObjMutationVariables,
  APITypes.UpdateUserActivityObjMutation
>;
export const deleteUserActivityObj = /* GraphQL */ `mutation DeleteUserActivityObj($input: DeleteUserActivityObjInput!) {
  deleteUserActivityObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserActivityObjMutationVariables,
  APITypes.DeleteUserActivityObjMutation
>;
export const createPostAttachmentObj = /* GraphQL */ `mutation CreatePostAttachmentObj($input: CreatePostAttachmentObjInput!) {
  createPostAttachmentObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreatePostAttachmentObjMutationVariables,
  APITypes.CreatePostAttachmentObjMutation
>;
export const updatePostAttachmentObj = /* GraphQL */ `mutation UpdatePostAttachmentObj($input: UpdatePostAttachmentObjInput!) {
  updatePostAttachmentObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdatePostAttachmentObjMutationVariables,
  APITypes.UpdatePostAttachmentObjMutation
>;
export const deletePostAttachmentObj = /* GraphQL */ `mutation DeletePostAttachmentObj($input: DeletePostAttachmentObjInput!) {
  deletePostAttachmentObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeletePostAttachmentObjMutationVariables,
  APITypes.DeletePostAttachmentObjMutation
>;
export const createPostCommentObj = /* GraphQL */ `mutation CreatePostCommentObj($input: CreatePostCommentObjInput!) {
  createPostCommentObj(input: $input) {
    id
    userId
    postId
    created
    message
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostCommentObjMutationVariables,
  APITypes.CreatePostCommentObjMutation
>;
export const updatePostCommentObj = /* GraphQL */ `mutation UpdatePostCommentObj($input: UpdatePostCommentObjInput!) {
  updatePostCommentObj(input: $input) {
    id
    userId
    postId
    created
    message
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostCommentObjMutationVariables,
  APITypes.UpdatePostCommentObjMutation
>;
export const deletePostCommentObj = /* GraphQL */ `mutation DeletePostCommentObj($input: DeletePostCommentObjInput!) {
  deletePostCommentObj(input: $input) {
    id
    userId
    postId
    created
    message
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostCommentObjMutationVariables,
  APITypes.DeletePostCommentObjMutation
>;
export const createPostKarmaObj = /* GraphQL */ `mutation CreatePostKarmaObj($input: CreatePostKarmaObjInput!) {
  createPostKarmaObj(input: $input) {
    id
    userId
    postId
    created
    neutrality
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostKarmaObjMutationVariables,
  APITypes.CreatePostKarmaObjMutation
>;
export const updatePostKarmaObj = /* GraphQL */ `mutation UpdatePostKarmaObj($input: UpdatePostKarmaObjInput!) {
  updatePostKarmaObj(input: $input) {
    id
    userId
    postId
    created
    neutrality
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostKarmaObjMutationVariables,
  APITypes.UpdatePostKarmaObjMutation
>;
export const deletePostKarmaObj = /* GraphQL */ `mutation DeletePostKarmaObj($input: DeletePostKarmaObjInput!) {
  deletePostKarmaObj(input: $input) {
    id
    userId
    postId
    created
    neutrality
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostKarmaObjMutationVariables,
  APITypes.DeletePostKarmaObjMutation
>;
export const createPostMemberObj = /* GraphQL */ `mutation CreatePostMemberObj($input: CreatePostMemberObjInput!) {
  createPostMemberObj(input: $input) {
    id
    postId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostMemberObjMutationVariables,
  APITypes.CreatePostMemberObjMutation
>;
export const updatePostMemberObj = /* GraphQL */ `mutation UpdatePostMemberObj($input: UpdatePostMemberObjInput!) {
  updatePostMemberObj(input: $input) {
    id
    postId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostMemberObjMutationVariables,
  APITypes.UpdatePostMemberObjMutation
>;
export const deletePostMemberObj = /* GraphQL */ `mutation DeletePostMemberObj($input: DeletePostMemberObjInput!) {
  deletePostMemberObj(input: $input) {
    id
    postId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostMemberObjMutationVariables,
  APITypes.DeletePostMemberObjMutation
>;
export const createUserPostObj = /* GraphQL */ `mutation CreateUserPostObj($input: CreateUserPostObjInput!) {
  createUserPostObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserPostObjMutationVariables,
  APITypes.CreateUserPostObjMutation
>;
export const updateUserPostObj = /* GraphQL */ `mutation UpdateUserPostObj($input: UpdateUserPostObjInput!) {
  updateUserPostObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserPostObjMutationVariables,
  APITypes.UpdateUserPostObjMutation
>;
export const deleteUserPostObj = /* GraphQL */ `mutation DeleteUserPostObj($input: DeleteUserPostObjInput!) {
  deleteUserPostObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserPostObjMutationVariables,
  APITypes.DeleteUserPostObjMutation
>;
export const createIdeaRelationshipObj = /* GraphQL */ `mutation CreateIdeaRelationshipObj($input: CreateIdeaRelationshipObjInput!) {
  createIdeaRelationshipObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateIdeaRelationshipObjMutationVariables,
  APITypes.CreateIdeaRelationshipObjMutation
>;
export const updateIdeaRelationshipObj = /* GraphQL */ `mutation UpdateIdeaRelationshipObj($input: UpdateIdeaRelationshipObjInput!) {
  updateIdeaRelationshipObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateIdeaRelationshipObjMutationVariables,
  APITypes.UpdateIdeaRelationshipObjMutation
>;
export const deleteIdeaRelationshipObj = /* GraphQL */ `mutation DeleteIdeaRelationshipObj($input: DeleteIdeaRelationshipObjInput!) {
  deleteIdeaRelationshipObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteIdeaRelationshipObjMutationVariables,
  APITypes.DeleteIdeaRelationshipObjMutation
>;
export const createIdeaObj = /* GraphQL */ `mutation CreateIdeaObj($input: CreateIdeaObjInput!) {
  createIdeaObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateIdeaObjMutationVariables,
  APITypes.CreateIdeaObjMutation
>;
export const updateIdeaObj = /* GraphQL */ `mutation UpdateIdeaObj($input: UpdateIdeaObjInput!) {
  updateIdeaObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateIdeaObjMutationVariables,
  APITypes.UpdateIdeaObjMutation
>;
export const deleteIdeaObj = /* GraphQL */ `mutation DeleteIdeaObj($input: DeleteIdeaObjInput!) {
  deleteIdeaObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteIdeaObjMutationVariables,
  APITypes.DeleteIdeaObjMutation
>;
export const createIdeaSceneObj = /* GraphQL */ `mutation CreateIdeaSceneObj($input: CreateIdeaSceneObjInput!) {
  createIdeaSceneObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateIdeaSceneObjMutationVariables,
  APITypes.CreateIdeaSceneObjMutation
>;
export const updateIdeaSceneObj = /* GraphQL */ `mutation UpdateIdeaSceneObj($input: UpdateIdeaSceneObjInput!) {
  updateIdeaSceneObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateIdeaSceneObjMutationVariables,
  APITypes.UpdateIdeaSceneObjMutation
>;
export const deleteIdeaSceneObj = /* GraphQL */ `mutation DeleteIdeaSceneObj($input: DeleteIdeaSceneObjInput!) {
  deleteIdeaSceneObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteIdeaSceneObjMutationVariables,
  APITypes.DeleteIdeaSceneObjMutation
>;
export const createTaskMemberObj = /* GraphQL */ `mutation CreateTaskMemberObj($input: CreateTaskMemberObjInput!) {
  createTaskMemberObj(input: $input) {
    id
    taskId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTaskMemberObjMutationVariables,
  APITypes.CreateTaskMemberObjMutation
>;
export const updateTaskMemberObj = /* GraphQL */ `mutation UpdateTaskMemberObj($input: UpdateTaskMemberObjInput!) {
  updateTaskMemberObj(input: $input) {
    id
    taskId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTaskMemberObjMutationVariables,
  APITypes.UpdateTaskMemberObjMutation
>;
export const deleteTaskMemberObj = /* GraphQL */ `mutation DeleteTaskMemberObj($input: DeleteTaskMemberObjInput!) {
  deleteTaskMemberObj(input: $input) {
    id
    taskId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTaskMemberObjMutationVariables,
  APITypes.DeleteTaskMemberObjMutation
>;
export const createTaskObj = /* GraphQL */ `mutation CreateTaskObj($input: CreateTaskObjInput!) {
  createTaskObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTaskObjMutationVariables,
  APITypes.CreateTaskObjMutation
>;
export const updateTaskObj = /* GraphQL */ `mutation UpdateTaskObj($input: UpdateTaskObjInput!) {
  updateTaskObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTaskObjMutationVariables,
  APITypes.UpdateTaskObjMutation
>;
export const deleteTaskObj = /* GraphQL */ `mutation DeleteTaskObj($input: DeleteTaskObjInput!) {
  deleteTaskObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTaskObjMutationVariables,
  APITypes.DeleteTaskObjMutation
>;
export const createConversationObj = /* GraphQL */ `mutation CreateConversationObj($input: CreateConversationObjInput!) {
  createConversationObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateConversationObjMutationVariables,
  APITypes.CreateConversationObjMutation
>;
export const updateConversationObj = /* GraphQL */ `mutation UpdateConversationObj($input: UpdateConversationObjInput!) {
  updateConversationObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateConversationObjMutationVariables,
  APITypes.UpdateConversationObjMutation
>;
export const deleteConversationObj = /* GraphQL */ `mutation DeleteConversationObj($input: DeleteConversationObjInput!) {
  deleteConversationObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteConversationObjMutationVariables,
  APITypes.DeleteConversationObjMutation
>;
export const createHorizonObj = /* GraphQL */ `mutation CreateHorizonObj($input: CreateHorizonObjInput!) {
  createHorizonObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateHorizonObjMutationVariables,
  APITypes.CreateHorizonObjMutation
>;
export const updateHorizonObj = /* GraphQL */ `mutation UpdateHorizonObj($input: UpdateHorizonObjInput!) {
  updateHorizonObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateHorizonObjMutationVariables,
  APITypes.UpdateHorizonObjMutation
>;
export const deleteHorizonObj = /* GraphQL */ `mutation DeleteHorizonObj($input: DeleteHorizonObjInput!) {
  deleteHorizonObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteHorizonObjMutationVariables,
  APITypes.DeleteHorizonObjMutation
>;
export const createQuadrantMemberObj = /* GraphQL */ `mutation CreateQuadrantMemberObj($input: CreateQuadrantMemberObjInput!) {
  createQuadrantMemberObj(input: $input) {
    id
    quadrantId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuadrantMemberObjMutationVariables,
  APITypes.CreateQuadrantMemberObjMutation
>;
export const updateQuadrantMemberObj = /* GraphQL */ `mutation UpdateQuadrantMemberObj($input: UpdateQuadrantMemberObjInput!) {
  updateQuadrantMemberObj(input: $input) {
    id
    quadrantId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuadrantMemberObjMutationVariables,
  APITypes.UpdateQuadrantMemberObjMutation
>;
export const deleteQuadrantMemberObj = /* GraphQL */ `mutation DeleteQuadrantMemberObj($input: DeleteQuadrantMemberObjInput!) {
  deleteQuadrantMemberObj(input: $input) {
    id
    quadrantId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuadrantMemberObjMutationVariables,
  APITypes.DeleteQuadrantMemberObjMutation
>;
export const createDecisionQuadrantObj = /* GraphQL */ `mutation CreateDecisionQuadrantObj($input: CreateDecisionQuadrantObjInput!) {
  createDecisionQuadrantObj(input: $input) {
    id
    decisionId
    title
    description
    variant
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDecisionQuadrantObjMutationVariables,
  APITypes.CreateDecisionQuadrantObjMutation
>;
export const updateDecisionQuadrantObj = /* GraphQL */ `mutation UpdateDecisionQuadrantObj($input: UpdateDecisionQuadrantObjInput!) {
  updateDecisionQuadrantObj(input: $input) {
    id
    decisionId
    title
    description
    variant
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDecisionQuadrantObjMutationVariables,
  APITypes.UpdateDecisionQuadrantObjMutation
>;
export const deleteDecisionQuadrantObj = /* GraphQL */ `mutation DeleteDecisionQuadrantObj($input: DeleteDecisionQuadrantObjInput!) {
  deleteDecisionQuadrantObj(input: $input) {
    id
    decisionId
    title
    description
    variant
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDecisionQuadrantObjMutationVariables,
  APITypes.DeleteDecisionQuadrantObjMutation
>;
export const createHorizonDecisionObj = /* GraphQL */ `mutation CreateHorizonDecisionObj($input: CreateHorizonDecisionObjInput!) {
  createHorizonDecisionObj(input: $input) {
    id
    horizonId
    title
    description
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateHorizonDecisionObjMutationVariables,
  APITypes.CreateHorizonDecisionObjMutation
>;
export const updateHorizonDecisionObj = /* GraphQL */ `mutation UpdateHorizonDecisionObj($input: UpdateHorizonDecisionObjInput!) {
  updateHorizonDecisionObj(input: $input) {
    id
    horizonId
    title
    description
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateHorizonDecisionObjMutationVariables,
  APITypes.UpdateHorizonDecisionObjMutation
>;
export const deleteHorizonDecisionObj = /* GraphQL */ `mutation DeleteHorizonDecisionObj($input: DeleteHorizonDecisionObjInput!) {
  deleteHorizonDecisionObj(input: $input) {
    id
    horizonId
    title
    description
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteHorizonDecisionObjMutationVariables,
  APITypes.DeleteHorizonDecisionObjMutation
>;
export const createHorizonSpaceMemberObj = /* GraphQL */ `mutation CreateHorizonSpaceMemberObj(
  $input: CreateHorizonSpaceMemberObjInput!
) {
  createHorizonSpaceMemberObj(input: $input) {
    id
    horizonId
    spaceId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateHorizonSpaceMemberObjMutationVariables,
  APITypes.CreateHorizonSpaceMemberObjMutation
>;
export const updateHorizonSpaceMemberObj = /* GraphQL */ `mutation UpdateHorizonSpaceMemberObj(
  $input: UpdateHorizonSpaceMemberObjInput!
) {
  updateHorizonSpaceMemberObj(input: $input) {
    id
    horizonId
    spaceId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateHorizonSpaceMemberObjMutationVariables,
  APITypes.UpdateHorizonSpaceMemberObjMutation
>;
export const deleteHorizonSpaceMemberObj = /* GraphQL */ `mutation DeleteHorizonSpaceMemberObj(
  $input: DeleteHorizonSpaceMemberObjInput!
) {
  deleteHorizonSpaceMemberObj(input: $input) {
    id
    horizonId
    spaceId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteHorizonSpaceMemberObjMutationVariables,
  APITypes.DeleteHorizonSpaceMemberObjMutation
>;
export const createHorizonUserMemberObj = /* GraphQL */ `mutation CreateHorizonUserMemberObj($input: CreateHorizonUserMemberObjInput!) {
  createHorizonUserMemberObj(input: $input) {
    id
    horizonId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateHorizonUserMemberObjMutationVariables,
  APITypes.CreateHorizonUserMemberObjMutation
>;
export const updateHorizonUserMemberObj = /* GraphQL */ `mutation UpdateHorizonUserMemberObj($input: UpdateHorizonUserMemberObjInput!) {
  updateHorizonUserMemberObj(input: $input) {
    id
    horizonId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateHorizonUserMemberObjMutationVariables,
  APITypes.UpdateHorizonUserMemberObjMutation
>;
export const deleteHorizonUserMemberObj = /* GraphQL */ `mutation DeleteHorizonUserMemberObj($input: DeleteHorizonUserMemberObjInput!) {
  deleteHorizonUserMemberObj(input: $input) {
    id
    horizonId
    userId
    created
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteHorizonUserMemberObjMutationVariables,
  APITypes.DeleteHorizonUserMemberObjMutation
>;
export const createArcSectionObj = /* GraphQL */ `mutation CreateArcSectionObj($input: CreateArcSectionObjInput!) {
  createArcSectionObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateArcSectionObjMutationVariables,
  APITypes.CreateArcSectionObjMutation
>;
export const updateArcSectionObj = /* GraphQL */ `mutation UpdateArcSectionObj($input: UpdateArcSectionObjInput!) {
  updateArcSectionObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateArcSectionObjMutationVariables,
  APITypes.UpdateArcSectionObjMutation
>;
export const deleteArcSectionObj = /* GraphQL */ `mutation DeleteArcSectionObj($input: DeleteArcSectionObjInput!) {
  deleteArcSectionObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteArcSectionObjMutationVariables,
  APITypes.DeleteArcSectionObjMutation
>;
export const createHorizonArcObj = /* GraphQL */ `mutation CreateHorizonArcObj($input: CreateHorizonArcObjInput!) {
  createHorizonArcObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateHorizonArcObjMutationVariables,
  APITypes.CreateHorizonArcObjMutation
>;
export const updateHorizonArcObj = /* GraphQL */ `mutation UpdateHorizonArcObj($input: UpdateHorizonArcObjInput!) {
  updateHorizonArcObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateHorizonArcObjMutationVariables,
  APITypes.UpdateHorizonArcObjMutation
>;
export const deleteHorizonArcObj = /* GraphQL */ `mutation DeleteHorizonArcObj($input: DeleteHorizonArcObjInput!) {
  deleteHorizonArcObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteHorizonArcObjMutationVariables,
  APITypes.DeleteHorizonArcObjMutation
>;
