/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateChapterSceneObj = /* GraphQL */ `subscription OnCreateChapterSceneObj(
  $id: String
  $chapterId: String
  $title: String
  $description: String
  $variant: String
) {
  onCreateChapterSceneObj(
    id: $id
    chapterId: $chapterId
    title: $title
    description: $description
    variant: $variant
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChapterSceneObjSubscriptionVariables,
  APITypes.OnCreateChapterSceneObjSubscription
>;
export const onUpdateChapterSceneObj = /* GraphQL */ `subscription OnUpdateChapterSceneObj(
  $id: String
  $chapterId: String
  $title: String
  $description: String
  $variant: String
) {
  onUpdateChapterSceneObj(
    id: $id
    chapterId: $chapterId
    title: $title
    description: $description
    variant: $variant
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChapterSceneObjSubscriptionVariables,
  APITypes.OnUpdateChapterSceneObjSubscription
>;
export const onDeleteChapterSceneObj = /* GraphQL */ `subscription OnDeleteChapterSceneObj(
  $id: String
  $chapterId: String
  $title: String
  $description: String
  $variant: String
) {
  onDeleteChapterSceneObj(
    id: $id
    chapterId: $chapterId
    title: $title
    description: $description
    variant: $variant
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChapterSceneObjSubscriptionVariables,
  APITypes.OnDeleteChapterSceneObjSubscription
>;
export const onCreateConversationMessageObj = /* GraphQL */ `subscription OnCreateConversationMessageObj(
  $id: String
  $userId: String
  $conversationId: String
  $created: String
) {
  onCreateConversationMessageObj(
    id: $id
    userId: $userId
    conversationId: $conversationId
    created: $created
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateConversationMessageObjSubscriptionVariables,
  APITypes.OnCreateConversationMessageObjSubscription
>;
export const onUpdateConversationMessageObj = /* GraphQL */ `subscription OnUpdateConversationMessageObj(
  $id: String
  $userId: String
  $conversationId: String
  $created: String
) {
  onUpdateConversationMessageObj(
    id: $id
    userId: $userId
    conversationId: $conversationId
    created: $created
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateConversationMessageObjSubscriptionVariables,
  APITypes.OnUpdateConversationMessageObjSubscription
>;
export const onDeleteConversationMessageObj = /* GraphQL */ `subscription OnDeleteConversationMessageObj(
  $id: String
  $userId: String
  $conversationId: String
  $created: String
) {
  onDeleteConversationMessageObj(
    id: $id
    userId: $userId
    conversationId: $conversationId
    created: $created
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteConversationMessageObjSubscriptionVariables,
  APITypes.OnDeleteConversationMessageObjSubscription
>;
export const onCreateSceneIdeaObj = /* GraphQL */ `subscription OnCreateSceneIdeaObj(
  $id: String
  $sceneId: String
  $title: String
  $description: String
  $x: Int
) {
  onCreateSceneIdeaObj(
    id: $id
    sceneId: $sceneId
    title: $title
    description: $description
    x: $x
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSceneIdeaObjSubscriptionVariables,
  APITypes.OnCreateSceneIdeaObjSubscription
>;
export const onUpdateSceneIdeaObj = /* GraphQL */ `subscription OnUpdateSceneIdeaObj(
  $id: String
  $sceneId: String
  $title: String
  $description: String
  $x: Int
) {
  onUpdateSceneIdeaObj(
    id: $id
    sceneId: $sceneId
    title: $title
    description: $description
    x: $x
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSceneIdeaObjSubscriptionVariables,
  APITypes.OnUpdateSceneIdeaObjSubscription
>;
export const onDeleteSceneIdeaObj = /* GraphQL */ `subscription OnDeleteSceneIdeaObj(
  $id: String
  $sceneId: String
  $title: String
  $description: String
  $x: Int
) {
  onDeleteSceneIdeaObj(
    id: $id
    sceneId: $sceneId
    title: $title
    description: $description
    x: $x
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSceneIdeaObjSubscriptionVariables,
  APITypes.OnDeleteSceneIdeaObjSubscription
>;
export const onCreateCollectionResourceObj = /* GraphQL */ `subscription OnCreateCollectionResourceObj(
  $id: String
  $userId: String
  $collectionId: String
  $title: String
  $description: String
) {
  onCreateCollectionResourceObj(
    id: $id
    userId: $userId
    collectionId: $collectionId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCollectionResourceObjSubscriptionVariables,
  APITypes.OnCreateCollectionResourceObjSubscription
>;
export const onUpdateCollectionResourceObj = /* GraphQL */ `subscription OnUpdateCollectionResourceObj(
  $id: String
  $userId: String
  $collectionId: String
  $title: String
  $description: String
) {
  onUpdateCollectionResourceObj(
    id: $id
    userId: $userId
    collectionId: $collectionId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCollectionResourceObjSubscriptionVariables,
  APITypes.OnUpdateCollectionResourceObjSubscription
>;
export const onDeleteCollectionResourceObj = /* GraphQL */ `subscription OnDeleteCollectionResourceObj(
  $id: String
  $userId: String
  $collectionId: String
  $title: String
  $description: String
) {
  onDeleteCollectionResourceObj(
    id: $id
    userId: $userId
    collectionId: $collectionId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCollectionResourceObjSubscriptionVariables,
  APITypes.OnDeleteCollectionResourceObjSubscription
>;
export const onCreateUserObj = /* GraphQL */ `subscription OnCreateUserObj(
  $id: String
  $fname: String
  $lname: String
  $passwordHash: String
  $email: String
) {
  onCreateUserObj(
    id: $id
    fname: $fname
    lname: $lname
    passwordHash: $passwordHash
    email: $email
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserObjSubscriptionVariables,
  APITypes.OnCreateUserObjSubscription
>;
export const onUpdateUserObj = /* GraphQL */ `subscription OnUpdateUserObj(
  $id: String
  $fname: String
  $lname: String
  $passwordHash: String
  $email: String
) {
  onUpdateUserObj(
    id: $id
    fname: $fname
    lname: $lname
    passwordHash: $passwordHash
    email: $email
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserObjSubscriptionVariables,
  APITypes.OnUpdateUserObjSubscription
>;
export const onDeleteUserObj = /* GraphQL */ `subscription OnDeleteUserObj(
  $id: String
  $fname: String
  $lname: String
  $passwordHash: String
  $email: String
) {
  onDeleteUserObj(
    id: $id
    fname: $fname
    lname: $lname
    passwordHash: $passwordHash
    email: $email
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserObjSubscriptionVariables,
  APITypes.OnDeleteUserObjSubscription
>;
export const onCreateSpaceChapterObj = /* GraphQL */ `subscription OnCreateSpaceChapterObj(
  $id: String
  $spaceId: String
  $title: String
  $description: String
  $idx: Int
) {
  onCreateSpaceChapterObj(
    id: $id
    spaceId: $spaceId
    title: $title
    description: $description
    idx: $idx
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSpaceChapterObjSubscriptionVariables,
  APITypes.OnCreateSpaceChapterObjSubscription
>;
export const onUpdateSpaceChapterObj = /* GraphQL */ `subscription OnUpdateSpaceChapterObj(
  $id: String
  $spaceId: String
  $title: String
  $description: String
  $idx: Int
) {
  onUpdateSpaceChapterObj(
    id: $id
    spaceId: $spaceId
    title: $title
    description: $description
    idx: $idx
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSpaceChapterObjSubscriptionVariables,
  APITypes.OnUpdateSpaceChapterObjSubscription
>;
export const onDeleteSpaceChapterObj = /* GraphQL */ `subscription OnDeleteSpaceChapterObj(
  $id: String
  $spaceId: String
  $title: String
  $description: String
  $idx: Int
) {
  onDeleteSpaceChapterObj(
    id: $id
    spaceId: $spaceId
    title: $title
    description: $description
    idx: $idx
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSpaceChapterObjSubscriptionVariables,
  APITypes.OnDeleteSpaceChapterObjSubscription
>;
export const onCreateSpaceObj = /* GraphQL */ `subscription OnCreateSpaceObj(
  $id: String
  $userId: String
  $title: String
  $created: String
  $description: String
) {
  onCreateSpaceObj(
    id: $id
    userId: $userId
    title: $title
    created: $created
    description: $description
  ) {
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
    target
    flowId
    starred
    visibility
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSpaceObjSubscriptionVariables,
  APITypes.OnCreateSpaceObjSubscription
>;
export const onUpdateSpaceObj = /* GraphQL */ `subscription OnUpdateSpaceObj(
  $id: String
  $userId: String
  $title: String
  $created: String
  $description: String
) {
  onUpdateSpaceObj(
    id: $id
    userId: $userId
    title: $title
    created: $created
    description: $description
  ) {
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
    target
    flowId
    starred
    visibility
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSpaceObjSubscriptionVariables,
  APITypes.OnUpdateSpaceObjSubscription
>;
export const onDeleteSpaceObj = /* GraphQL */ `subscription OnDeleteSpaceObj(
  $id: String
  $userId: String
  $title: String
  $created: String
  $description: String
) {
  onDeleteSpaceObj(
    id: $id
    userId: $userId
    title: $title
    created: $created
    description: $description
  ) {
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
    target
    flowId
    starred
    visibility
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSpaceObjSubscriptionVariables,
  APITypes.OnDeleteSpaceObjSubscription
>;
export const onCreateSpaceMemberObj = /* GraphQL */ `subscription OnCreateSpaceMemberObj(
  $id: String
  $spaceId: String
  $userId: String
) {
  onCreateSpaceMemberObj(id: $id, spaceId: $spaceId, userId: $userId) {
    id
    spaceId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSpaceMemberObjSubscriptionVariables,
  APITypes.OnCreateSpaceMemberObjSubscription
>;
export const onUpdateSpaceMemberObj = /* GraphQL */ `subscription OnUpdateSpaceMemberObj(
  $id: String
  $spaceId: String
  $userId: String
) {
  onUpdateSpaceMemberObj(id: $id, spaceId: $spaceId, userId: $userId) {
    id
    spaceId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSpaceMemberObjSubscriptionVariables,
  APITypes.OnUpdateSpaceMemberObjSubscription
>;
export const onDeleteSpaceMemberObj = /* GraphQL */ `subscription OnDeleteSpaceMemberObj(
  $id: String
  $spaceId: String
  $userId: String
) {
  onDeleteSpaceMemberObj(id: $id, spaceId: $spaceId, userId: $userId) {
    id
    spaceId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSpaceMemberObjSubscriptionVariables,
  APITypes.OnDeleteSpaceMemberObjSubscription
>;
export const onCreateUserReservationObj = /* GraphQL */ `subscription OnCreateUserReservationObj(
  $id: String
  $fname: String
  $lname: String
  $email: String
  $role: String
) {
  onCreateUserReservationObj(
    id: $id
    fname: $fname
    lname: $lname
    email: $email
    role: $role
  ) {
    id
    fname
    lname
    email
    role
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserReservationObjSubscriptionVariables,
  APITypes.OnCreateUserReservationObjSubscription
>;
export const onUpdateUserReservationObj = /* GraphQL */ `subscription OnUpdateUserReservationObj(
  $id: String
  $fname: String
  $lname: String
  $email: String
  $role: String
) {
  onUpdateUserReservationObj(
    id: $id
    fname: $fname
    lname: $lname
    email: $email
    role: $role
  ) {
    id
    fname
    lname
    email
    role
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserReservationObjSubscriptionVariables,
  APITypes.OnUpdateUserReservationObjSubscription
>;
export const onDeleteUserReservationObj = /* GraphQL */ `subscription OnDeleteUserReservationObj(
  $id: String
  $fname: String
  $lname: String
  $email: String
  $role: String
) {
  onDeleteUserReservationObj(
    id: $id
    fname: $fname
    lname: $lname
    email: $email
    role: $role
  ) {
    id
    fname
    lname
    email
    role
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserReservationObjSubscriptionVariables,
  APITypes.OnDeleteUserReservationObjSubscription
>;
export const onCreateAgentObj = /* GraphQL */ `subscription OnCreateAgentObj(
  $id: String
  $name: String
  $role: String
  $created: String
  $bio: String
) {
  onCreateAgentObj(
    id: $id
    name: $name
    role: $role
    created: $created
    bio: $bio
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAgentObjSubscriptionVariables,
  APITypes.OnCreateAgentObjSubscription
>;
export const onUpdateAgentObj = /* GraphQL */ `subscription OnUpdateAgentObj(
  $id: String
  $name: String
  $role: String
  $created: String
  $bio: String
) {
  onUpdateAgentObj(
    id: $id
    name: $name
    role: $role
    created: $created
    bio: $bio
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAgentObjSubscriptionVariables,
  APITypes.OnUpdateAgentObjSubscription
>;
export const onDeleteAgentObj = /* GraphQL */ `subscription OnDeleteAgentObj(
  $id: String
  $name: String
  $role: String
  $created: String
  $bio: String
) {
  onDeleteAgentObj(
    id: $id
    name: $name
    role: $role
    created: $created
    bio: $bio
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAgentObjSubscriptionVariables,
  APITypes.OnDeleteAgentObjSubscription
>;
export const onCreateChapterSessionObj = /* GraphQL */ `subscription OnCreateChapterSessionObj(
  $id: String
  $spaceId: String
  $userId: String
  $chapterId: String
  $title: String
) {
  onCreateChapterSessionObj(
    id: $id
    spaceId: $spaceId
    userId: $userId
    chapterId: $chapterId
    title: $title
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChapterSessionObjSubscriptionVariables,
  APITypes.OnCreateChapterSessionObjSubscription
>;
export const onUpdateChapterSessionObj = /* GraphQL */ `subscription OnUpdateChapterSessionObj(
  $id: String
  $spaceId: String
  $userId: String
  $chapterId: String
  $title: String
) {
  onUpdateChapterSessionObj(
    id: $id
    spaceId: $spaceId
    userId: $userId
    chapterId: $chapterId
    title: $title
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChapterSessionObjSubscriptionVariables,
  APITypes.OnUpdateChapterSessionObjSubscription
>;
export const onDeleteChapterSessionObj = /* GraphQL */ `subscription OnDeleteChapterSessionObj(
  $id: String
  $spaceId: String
  $userId: String
  $chapterId: String
  $title: String
) {
  onDeleteChapterSessionObj(
    id: $id
    spaceId: $spaceId
    userId: $userId
    chapterId: $chapterId
    title: $title
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChapterSessionObjSubscriptionVariables,
  APITypes.OnDeleteChapterSessionObjSubscription
>;
export const onCreateChapterSessionUpdateObj = /* GraphQL */ `subscription OnCreateChapterSessionUpdateObj(
  $id: String
  $userId: String
  $chapterId: String
  $sessionId: String
  $added: Boolean
) {
  onCreateChapterSessionUpdateObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    sessionId: $sessionId
    added: $added
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChapterSessionUpdateObjSubscriptionVariables,
  APITypes.OnCreateChapterSessionUpdateObjSubscription
>;
export const onUpdateChapterSessionUpdateObj = /* GraphQL */ `subscription OnUpdateChapterSessionUpdateObj(
  $id: String
  $userId: String
  $chapterId: String
  $sessionId: String
  $added: Boolean
) {
  onUpdateChapterSessionUpdateObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    sessionId: $sessionId
    added: $added
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChapterSessionUpdateObjSubscriptionVariables,
  APITypes.OnUpdateChapterSessionUpdateObjSubscription
>;
export const onDeleteChapterSessionUpdateObj = /* GraphQL */ `subscription OnDeleteChapterSessionUpdateObj(
  $id: String
  $userId: String
  $chapterId: String
  $sessionId: String
  $added: Boolean
) {
  onDeleteChapterSessionUpdateObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    sessionId: $sessionId
    added: $added
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChapterSessionUpdateObjSubscriptionVariables,
  APITypes.OnDeleteChapterSessionUpdateObjSubscription
>;
export const onCreateChapterSessionUpdateMemberObj = /* GraphQL */ `subscription OnCreateChapterSessionUpdateMemberObj(
  $id: String
  $updateId: String
  $userId: String
  $created: String
) {
  onCreateChapterSessionUpdateMemberObj(
    id: $id
    updateId: $updateId
    userId: $userId
    created: $created
  ) {
    id
    updateId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChapterSessionUpdateMemberObjSubscriptionVariables,
  APITypes.OnCreateChapterSessionUpdateMemberObjSubscription
>;
export const onUpdateChapterSessionUpdateMemberObj = /* GraphQL */ `subscription OnUpdateChapterSessionUpdateMemberObj(
  $id: String
  $updateId: String
  $userId: String
  $created: String
) {
  onUpdateChapterSessionUpdateMemberObj(
    id: $id
    updateId: $updateId
    userId: $userId
    created: $created
  ) {
    id
    updateId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChapterSessionUpdateMemberObjSubscriptionVariables,
  APITypes.OnUpdateChapterSessionUpdateMemberObjSubscription
>;
export const onDeleteChapterSessionUpdateMemberObj = /* GraphQL */ `subscription OnDeleteChapterSessionUpdateMemberObj(
  $id: String
  $updateId: String
  $userId: String
  $created: String
) {
  onDeleteChapterSessionUpdateMemberObj(
    id: $id
    updateId: $updateId
    userId: $userId
    created: $created
  ) {
    id
    updateId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChapterSessionUpdateMemberObjSubscriptionVariables,
  APITypes.OnDeleteChapterSessionUpdateMemberObjSubscription
>;
export const onCreateUserBackerObj = /* GraphQL */ `subscription OnCreateUserBackerObj(
  $id: String
  $backedId: String
  $userId: String
  $created: String
) {
  onCreateUserBackerObj(
    id: $id
    backedId: $backedId
    userId: $userId
    created: $created
  ) {
    id
    backedId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserBackerObjSubscriptionVariables,
  APITypes.OnCreateUserBackerObjSubscription
>;
export const onUpdateUserBackerObj = /* GraphQL */ `subscription OnUpdateUserBackerObj(
  $id: String
  $backedId: String
  $userId: String
  $created: String
) {
  onUpdateUserBackerObj(
    id: $id
    backedId: $backedId
    userId: $userId
    created: $created
  ) {
    id
    backedId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserBackerObjSubscriptionVariables,
  APITypes.OnUpdateUserBackerObjSubscription
>;
export const onDeleteUserBackerObj = /* GraphQL */ `subscription OnDeleteUserBackerObj(
  $id: String
  $backedId: String
  $userId: String
  $created: String
) {
  onDeleteUserBackerObj(
    id: $id
    backedId: $backedId
    userId: $userId
    created: $created
  ) {
    id
    backedId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserBackerObjSubscriptionVariables,
  APITypes.OnDeleteUserBackerObjSubscription
>;
export const onCreateUserConnectionObj = /* GraphQL */ `subscription OnCreateUserConnectionObj(
  $id: String
  $userId: String
  $connectedId: String
  $created: String
) {
  onCreateUserConnectionObj(
    id: $id
    userId: $userId
    connectedId: $connectedId
    created: $created
  ) {
    id
    sourceId
    destinationId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserConnectionObjSubscriptionVariables,
  APITypes.OnCreateUserConnectionObjSubscription
>;
export const onUpdateUserConnectionObj = /* GraphQL */ `subscription OnUpdateUserConnectionObj(
  $id: String
  $userId: String
  $connectedId: String
  $created: String
) {
  onUpdateUserConnectionObj(
    id: $id
    userId: $userId
    connectedId: $connectedId
    created: $created
  ) {
    id
    sourceId
    destinationId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserConnectionObjSubscriptionVariables,
  APITypes.OnUpdateUserConnectionObjSubscription
>;
export const onDeleteUserConnectionObj = /* GraphQL */ `subscription OnDeleteUserConnectionObj(
  $id: String
  $userId: String
  $connectedId: String
  $created: String
) {
  onDeleteUserConnectionObj(
    id: $id
    userId: $userId
    connectedId: $connectedId
    created: $created
  ) {
    id
    sourceId
    destinationId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserConnectionObjSubscriptionVariables,
  APITypes.OnDeleteUserConnectionObjSubscription
>;
export const onCreateChapterSessionContributorObj = /* GraphQL */ `subscription OnCreateChapterSessionContributorObj(
  $id: String
  $sessionId: String
  $userId: String
  $created: String
) {
  onCreateChapterSessionContributorObj(
    id: $id
    sessionId: $sessionId
    userId: $userId
    created: $created
  ) {
    id
    sessionId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChapterSessionContributorObjSubscriptionVariables,
  APITypes.OnCreateChapterSessionContributorObjSubscription
>;
export const onUpdateChapterSessionContributorObj = /* GraphQL */ `subscription OnUpdateChapterSessionContributorObj(
  $id: String
  $sessionId: String
  $userId: String
  $created: String
) {
  onUpdateChapterSessionContributorObj(
    id: $id
    sessionId: $sessionId
    userId: $userId
    created: $created
  ) {
    id
    sessionId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChapterSessionContributorObjSubscriptionVariables,
  APITypes.OnUpdateChapterSessionContributorObjSubscription
>;
export const onDeleteChapterSessionContributorObj = /* GraphQL */ `subscription OnDeleteChapterSessionContributorObj(
  $id: String
  $sessionId: String
  $userId: String
  $created: String
) {
  onDeleteChapterSessionContributorObj(
    id: $id
    sessionId: $sessionId
    userId: $userId
    created: $created
  ) {
    id
    sessionId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChapterSessionContributorObjSubscriptionVariables,
  APITypes.OnDeleteChapterSessionContributorObjSubscription
>;
export const onCreateSceneMemberObj = /* GraphQL */ `subscription OnCreateSceneMemberObj(
  $id: String
  $sceneId: String
  $userId: String
  $created: String
) {
  onCreateSceneMemberObj(
    id: $id
    sceneId: $sceneId
    userId: $userId
    created: $created
  ) {
    id
    sceneId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSceneMemberObjSubscriptionVariables,
  APITypes.OnCreateSceneMemberObjSubscription
>;
export const onUpdateSceneMemberObj = /* GraphQL */ `subscription OnUpdateSceneMemberObj(
  $id: String
  $sceneId: String
  $userId: String
  $created: String
) {
  onUpdateSceneMemberObj(
    id: $id
    sceneId: $sceneId
    userId: $userId
    created: $created
  ) {
    id
    sceneId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSceneMemberObjSubscriptionVariables,
  APITypes.OnUpdateSceneMemberObjSubscription
>;
export const onDeleteSceneMemberObj = /* GraphQL */ `subscription OnDeleteSceneMemberObj(
  $id: String
  $sceneId: String
  $userId: String
  $created: String
) {
  onDeleteSceneMemberObj(
    id: $id
    sceneId: $sceneId
    userId: $userId
    created: $created
  ) {
    id
    sceneId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSceneMemberObjSubscriptionVariables,
  APITypes.OnDeleteSceneMemberObjSubscription
>;
export const onCreateSpaceIdeaRelationshipObj = /* GraphQL */ `subscription OnCreateSpaceIdeaRelationshipObj(
  $id: String
  $userId: String
  $spaceId: String
  $fromChapterId: String
  $fromSceneId: String
) {
  onCreateSpaceIdeaRelationshipObj(
    id: $id
    userId: $userId
    spaceId: $spaceId
    fromChapterId: $fromChapterId
    fromSceneId: $fromSceneId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSpaceIdeaRelationshipObjSubscriptionVariables,
  APITypes.OnCreateSpaceIdeaRelationshipObjSubscription
>;
export const onUpdateSpaceIdeaRelationshipObj = /* GraphQL */ `subscription OnUpdateSpaceIdeaRelationshipObj(
  $id: String
  $userId: String
  $spaceId: String
  $fromChapterId: String
  $fromSceneId: String
) {
  onUpdateSpaceIdeaRelationshipObj(
    id: $id
    userId: $userId
    spaceId: $spaceId
    fromChapterId: $fromChapterId
    fromSceneId: $fromSceneId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSpaceIdeaRelationshipObjSubscriptionVariables,
  APITypes.OnUpdateSpaceIdeaRelationshipObjSubscription
>;
export const onDeleteSpaceIdeaRelationshipObj = /* GraphQL */ `subscription OnDeleteSpaceIdeaRelationshipObj(
  $id: String
  $userId: String
  $spaceId: String
  $fromChapterId: String
  $fromSceneId: String
) {
  onDeleteSpaceIdeaRelationshipObj(
    id: $id
    userId: $userId
    spaceId: $spaceId
    fromChapterId: $fromChapterId
    fromSceneId: $fromSceneId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSpaceIdeaRelationshipObjSubscriptionVariables,
  APITypes.OnDeleteSpaceIdeaRelationshipObjSubscription
>;
export const onCreateCommentKarmaObj = /* GraphQL */ `subscription OnCreateCommentKarmaObj(
  $id: String
  $userId: String
  $commentId: String
  $created: String
  $neutrality: Boolean
) {
  onCreateCommentKarmaObj(
    id: $id
    userId: $userId
    commentId: $commentId
    created: $created
    neutrality: $neutrality
  ) {
    id
    userId
    commentId
    created
    neutrality
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommentKarmaObjSubscriptionVariables,
  APITypes.OnCreateCommentKarmaObjSubscription
>;
export const onUpdateCommentKarmaObj = /* GraphQL */ `subscription OnUpdateCommentKarmaObj(
  $id: String
  $userId: String
  $commentId: String
  $created: String
  $neutrality: Boolean
) {
  onUpdateCommentKarmaObj(
    id: $id
    userId: $userId
    commentId: $commentId
    created: $created
    neutrality: $neutrality
  ) {
    id
    userId
    commentId
    created
    neutrality
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommentKarmaObjSubscriptionVariables,
  APITypes.OnUpdateCommentKarmaObjSubscription
>;
export const onDeleteCommentKarmaObj = /* GraphQL */ `subscription OnDeleteCommentKarmaObj(
  $id: String
  $userId: String
  $commentId: String
  $created: String
  $neutrality: Boolean
) {
  onDeleteCommentKarmaObj(
    id: $id
    userId: $userId
    commentId: $commentId
    created: $created
    neutrality: $neutrality
  ) {
    id
    userId
    commentId
    created
    neutrality
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommentKarmaObjSubscriptionVariables,
  APITypes.OnDeleteCommentKarmaObjSubscription
>;
export const onCreateSpaceChapterMemberObj = /* GraphQL */ `subscription OnCreateSpaceChapterMemberObj(
  $id: String
  $spaceId: String
  $userId: String
  $created: String
) {
  onCreateSpaceChapterMemberObj(
    id: $id
    spaceId: $spaceId
    userId: $userId
    created: $created
  ) {
    id
    spaceId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSpaceChapterMemberObjSubscriptionVariables,
  APITypes.OnCreateSpaceChapterMemberObjSubscription
>;
export const onUpdateSpaceChapterMemberObj = /* GraphQL */ `subscription OnUpdateSpaceChapterMemberObj(
  $id: String
  $spaceId: String
  $userId: String
  $created: String
) {
  onUpdateSpaceChapterMemberObj(
    id: $id
    spaceId: $spaceId
    userId: $userId
    created: $created
  ) {
    id
    spaceId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSpaceChapterMemberObjSubscriptionVariables,
  APITypes.OnUpdateSpaceChapterMemberObjSubscription
>;
export const onDeleteSpaceChapterMemberObj = /* GraphQL */ `subscription OnDeleteSpaceChapterMemberObj(
  $id: String
  $spaceId: String
  $userId: String
  $created: String
) {
  onDeleteSpaceChapterMemberObj(
    id: $id
    spaceId: $spaceId
    userId: $userId
    created: $created
  ) {
    id
    spaceId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSpaceChapterMemberObjSubscriptionVariables,
  APITypes.OnDeleteSpaceChapterMemberObjSubscription
>;
export const onCreateGalleryObj = /* GraphQL */ `subscription OnCreateGalleryObj(
  $id: String
  $userId: String
  $title: String
  $description: String
  $created: String
) {
  onCreateGalleryObj(
    id: $id
    userId: $userId
    title: $title
    description: $description
    created: $created
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGalleryObjSubscriptionVariables,
  APITypes.OnCreateGalleryObjSubscription
>;
export const onUpdateGalleryObj = /* GraphQL */ `subscription OnUpdateGalleryObj(
  $id: String
  $userId: String
  $title: String
  $description: String
  $created: String
) {
  onUpdateGalleryObj(
    id: $id
    userId: $userId
    title: $title
    description: $description
    created: $created
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGalleryObjSubscriptionVariables,
  APITypes.OnUpdateGalleryObjSubscription
>;
export const onDeleteGalleryObj = /* GraphQL */ `subscription OnDeleteGalleryObj(
  $id: String
  $userId: String
  $title: String
  $description: String
  $created: String
) {
  onDeleteGalleryObj(
    id: $id
    userId: $userId
    title: $title
    description: $description
    created: $created
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGalleryObjSubscriptionVariables,
  APITypes.OnDeleteGalleryObjSubscription
>;
export const onCreateGalleryCollectionObj = /* GraphQL */ `subscription OnCreateGalleryCollectionObj(
  $id: String
  $galleryId: String
  $title: String
  $description: String
  $created: String
) {
  onCreateGalleryCollectionObj(
    id: $id
    galleryId: $galleryId
    title: $title
    description: $description
    created: $created
  ) {
    id
    galleryId
    title
    description
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGalleryCollectionObjSubscriptionVariables,
  APITypes.OnCreateGalleryCollectionObjSubscription
>;
export const onUpdateGalleryCollectionObj = /* GraphQL */ `subscription OnUpdateGalleryCollectionObj(
  $id: String
  $galleryId: String
  $title: String
  $description: String
  $created: String
) {
  onUpdateGalleryCollectionObj(
    id: $id
    galleryId: $galleryId
    title: $title
    description: $description
    created: $created
  ) {
    id
    galleryId
    title
    description
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGalleryCollectionObjSubscriptionVariables,
  APITypes.OnUpdateGalleryCollectionObjSubscription
>;
export const onDeleteGalleryCollectionObj = /* GraphQL */ `subscription OnDeleteGalleryCollectionObj(
  $id: String
  $galleryId: String
  $title: String
  $description: String
  $created: String
) {
  onDeleteGalleryCollectionObj(
    id: $id
    galleryId: $galleryId
    title: $title
    description: $description
    created: $created
  ) {
    id
    galleryId
    title
    description
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGalleryCollectionObjSubscriptionVariables,
  APITypes.OnDeleteGalleryCollectionObjSubscription
>;
export const onCreateGalleryMemberObj = /* GraphQL */ `subscription OnCreateGalleryMemberObj(
  $id: String
  $galleryId: String
  $userId: String
  $created: String
) {
  onCreateGalleryMemberObj(
    id: $id
    galleryId: $galleryId
    userId: $userId
    created: $created
  ) {
    id
    galleryId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGalleryMemberObjSubscriptionVariables,
  APITypes.OnCreateGalleryMemberObjSubscription
>;
export const onUpdateGalleryMemberObj = /* GraphQL */ `subscription OnUpdateGalleryMemberObj(
  $id: String
  $galleryId: String
  $userId: String
  $created: String
) {
  onUpdateGalleryMemberObj(
    id: $id
    galleryId: $galleryId
    userId: $userId
    created: $created
  ) {
    id
    galleryId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGalleryMemberObjSubscriptionVariables,
  APITypes.OnUpdateGalleryMemberObjSubscription
>;
export const onDeleteGalleryMemberObj = /* GraphQL */ `subscription OnDeleteGalleryMemberObj(
  $id: String
  $galleryId: String
  $userId: String
  $created: String
) {
  onDeleteGalleryMemberObj(
    id: $id
    galleryId: $galleryId
    userId: $userId
    created: $created
  ) {
    id
    galleryId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGalleryMemberObjSubscriptionVariables,
  APITypes.OnDeleteGalleryMemberObjSubscription
>;
export const onCreateUserActivityObj = /* GraphQL */ `subscription OnCreateUserActivityObj(
  $id: String
  $userId: String
  $chapterId: String
  $spaceId: String
  $horizonId: String
) {
  onCreateUserActivityObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    spaceId: $spaceId
    horizonId: $horizonId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserActivityObjSubscriptionVariables,
  APITypes.OnCreateUserActivityObjSubscription
>;
export const onUpdateUserActivityObj = /* GraphQL */ `subscription OnUpdateUserActivityObj(
  $id: String
  $userId: String
  $chapterId: String
  $spaceId: String
  $horizonId: String
) {
  onUpdateUserActivityObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    spaceId: $spaceId
    horizonId: $horizonId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserActivityObjSubscriptionVariables,
  APITypes.OnUpdateUserActivityObjSubscription
>;
export const onDeleteUserActivityObj = /* GraphQL */ `subscription OnDeleteUserActivityObj(
  $id: String
  $userId: String
  $chapterId: String
  $spaceId: String
  $horizonId: String
) {
  onDeleteUserActivityObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    spaceId: $spaceId
    horizonId: $horizonId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserActivityObjSubscriptionVariables,
  APITypes.OnDeleteUserActivityObjSubscription
>;
export const onCreatePostAttachmentObj = /* GraphQL */ `subscription OnCreatePostAttachmentObj(
  $id: String
  $userId: String
  $postId: String
  $created: String
  $variant: String
) {
  onCreatePostAttachmentObj(
    id: $id
    userId: $userId
    postId: $postId
    created: $created
    variant: $variant
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostAttachmentObjSubscriptionVariables,
  APITypes.OnCreatePostAttachmentObjSubscription
>;
export const onUpdatePostAttachmentObj = /* GraphQL */ `subscription OnUpdatePostAttachmentObj(
  $id: String
  $userId: String
  $postId: String
  $created: String
  $variant: String
) {
  onUpdatePostAttachmentObj(
    id: $id
    userId: $userId
    postId: $postId
    created: $created
    variant: $variant
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostAttachmentObjSubscriptionVariables,
  APITypes.OnUpdatePostAttachmentObjSubscription
>;
export const onDeletePostAttachmentObj = /* GraphQL */ `subscription OnDeletePostAttachmentObj(
  $id: String
  $userId: String
  $postId: String
  $created: String
  $variant: String
) {
  onDeletePostAttachmentObj(
    id: $id
    userId: $userId
    postId: $postId
    created: $created
    variant: $variant
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostAttachmentObjSubscriptionVariables,
  APITypes.OnDeletePostAttachmentObjSubscription
>;
export const onCreatePostCommentObj = /* GraphQL */ `subscription OnCreatePostCommentObj(
  $id: String
  $userId: String
  $postId: String
  $created: String
  $message: String
) {
  onCreatePostCommentObj(
    id: $id
    userId: $userId
    postId: $postId
    created: $created
    message: $message
  ) {
    id
    userId
    postId
    created
    message
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostCommentObjSubscriptionVariables,
  APITypes.OnCreatePostCommentObjSubscription
>;
export const onUpdatePostCommentObj = /* GraphQL */ `subscription OnUpdatePostCommentObj(
  $id: String
  $userId: String
  $postId: String
  $created: String
  $message: String
) {
  onUpdatePostCommentObj(
    id: $id
    userId: $userId
    postId: $postId
    created: $created
    message: $message
  ) {
    id
    userId
    postId
    created
    message
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostCommentObjSubscriptionVariables,
  APITypes.OnUpdatePostCommentObjSubscription
>;
export const onDeletePostCommentObj = /* GraphQL */ `subscription OnDeletePostCommentObj(
  $id: String
  $userId: String
  $postId: String
  $created: String
  $message: String
) {
  onDeletePostCommentObj(
    id: $id
    userId: $userId
    postId: $postId
    created: $created
    message: $message
  ) {
    id
    userId
    postId
    created
    message
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostCommentObjSubscriptionVariables,
  APITypes.OnDeletePostCommentObjSubscription
>;
export const onCreatePostKarmaObj = /* GraphQL */ `subscription OnCreatePostKarmaObj(
  $id: String
  $userId: String
  $postId: String
  $created: String
  $neutrality: Boolean
) {
  onCreatePostKarmaObj(
    id: $id
    userId: $userId
    postId: $postId
    created: $created
    neutrality: $neutrality
  ) {
    id
    userId
    postId
    created
    neutrality
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostKarmaObjSubscriptionVariables,
  APITypes.OnCreatePostKarmaObjSubscription
>;
export const onUpdatePostKarmaObj = /* GraphQL */ `subscription OnUpdatePostKarmaObj(
  $id: String
  $userId: String
  $postId: String
  $created: String
  $neutrality: Boolean
) {
  onUpdatePostKarmaObj(
    id: $id
    userId: $userId
    postId: $postId
    created: $created
    neutrality: $neutrality
  ) {
    id
    userId
    postId
    created
    neutrality
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostKarmaObjSubscriptionVariables,
  APITypes.OnUpdatePostKarmaObjSubscription
>;
export const onDeletePostKarmaObj = /* GraphQL */ `subscription OnDeletePostKarmaObj(
  $id: String
  $userId: String
  $postId: String
  $created: String
  $neutrality: Boolean
) {
  onDeletePostKarmaObj(
    id: $id
    userId: $userId
    postId: $postId
    created: $created
    neutrality: $neutrality
  ) {
    id
    userId
    postId
    created
    neutrality
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostKarmaObjSubscriptionVariables,
  APITypes.OnDeletePostKarmaObjSubscription
>;
export const onCreatePostMemberObj = /* GraphQL */ `subscription OnCreatePostMemberObj(
  $id: String
  $postId: String
  $userId: String
  $created: String
) {
  onCreatePostMemberObj(
    id: $id
    postId: $postId
    userId: $userId
    created: $created
  ) {
    id
    postId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostMemberObjSubscriptionVariables,
  APITypes.OnCreatePostMemberObjSubscription
>;
export const onUpdatePostMemberObj = /* GraphQL */ `subscription OnUpdatePostMemberObj(
  $id: String
  $postId: String
  $userId: String
  $created: String
) {
  onUpdatePostMemberObj(
    id: $id
    postId: $postId
    userId: $userId
    created: $created
  ) {
    id
    postId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostMemberObjSubscriptionVariables,
  APITypes.OnUpdatePostMemberObjSubscription
>;
export const onDeletePostMemberObj = /* GraphQL */ `subscription OnDeletePostMemberObj(
  $id: String
  $postId: String
  $userId: String
  $created: String
) {
  onDeletePostMemberObj(
    id: $id
    postId: $postId
    userId: $userId
    created: $created
  ) {
    id
    postId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostMemberObjSubscriptionVariables,
  APITypes.OnDeletePostMemberObjSubscription
>;
export const onCreateUserPostObj = /* GraphQL */ `subscription OnCreateUserPostObj(
  $id: String
  $userId: String
  $chapterId: String
  $title: String
  $description: String
) {
  onCreateUserPostObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserPostObjSubscriptionVariables,
  APITypes.OnCreateUserPostObjSubscription
>;
export const onUpdateUserPostObj = /* GraphQL */ `subscription OnUpdateUserPostObj(
  $id: String
  $userId: String
  $chapterId: String
  $title: String
  $description: String
) {
  onUpdateUserPostObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserPostObjSubscriptionVariables,
  APITypes.OnUpdateUserPostObjSubscription
>;
export const onDeleteUserPostObj = /* GraphQL */ `subscription OnDeleteUserPostObj(
  $id: String
  $userId: String
  $chapterId: String
  $title: String
  $description: String
) {
  onDeleteUserPostObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserPostObjSubscriptionVariables,
  APITypes.OnDeleteUserPostObjSubscription
>;
export const onCreateIdeaRelationshipObj = /* GraphQL */ `subscription OnCreateIdeaRelationshipObj(
  $id: String
  $spaceId: String
  $horizonId: String
  $fromUserId: String
  $fromChapterId: String
) {
  onCreateIdeaRelationshipObj(
    id: $id
    spaceId: $spaceId
    horizonId: $horizonId
    fromUserId: $fromUserId
    fromChapterId: $fromChapterId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIdeaRelationshipObjSubscriptionVariables,
  APITypes.OnCreateIdeaRelationshipObjSubscription
>;
export const onUpdateIdeaRelationshipObj = /* GraphQL */ `subscription OnUpdateIdeaRelationshipObj(
  $id: String
  $spaceId: String
  $horizonId: String
  $fromUserId: String
  $fromChapterId: String
) {
  onUpdateIdeaRelationshipObj(
    id: $id
    spaceId: $spaceId
    horizonId: $horizonId
    fromUserId: $fromUserId
    fromChapterId: $fromChapterId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIdeaRelationshipObjSubscriptionVariables,
  APITypes.OnUpdateIdeaRelationshipObjSubscription
>;
export const onDeleteIdeaRelationshipObj = /* GraphQL */ `subscription OnDeleteIdeaRelationshipObj(
  $id: String
  $spaceId: String
  $horizonId: String
  $fromUserId: String
  $fromChapterId: String
) {
  onDeleteIdeaRelationshipObj(
    id: $id
    spaceId: $spaceId
    horizonId: $horizonId
    fromUserId: $fromUserId
    fromChapterId: $fromChapterId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIdeaRelationshipObjSubscriptionVariables,
  APITypes.OnDeleteIdeaRelationshipObjSubscription
>;
export const onCreateIdeaObj = /* GraphQL */ `subscription OnCreateIdeaObj(
  $id: String
  $idx: Int
  $userId: String
  $sceneId: String
  $title: String
) {
  onCreateIdeaObj(
    id: $id
    idx: $idx
    userId: $userId
    sceneId: $sceneId
    title: $title
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIdeaObjSubscriptionVariables,
  APITypes.OnCreateIdeaObjSubscription
>;
export const onUpdateIdeaObj = /* GraphQL */ `subscription OnUpdateIdeaObj(
  $id: String
  $idx: Int
  $userId: String
  $sceneId: String
  $title: String
) {
  onUpdateIdeaObj(
    id: $id
    idx: $idx
    userId: $userId
    sceneId: $sceneId
    title: $title
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIdeaObjSubscriptionVariables,
  APITypes.OnUpdateIdeaObjSubscription
>;
export const onDeleteIdeaObj = /* GraphQL */ `subscription OnDeleteIdeaObj(
  $id: String
  $idx: Int
  $userId: String
  $sceneId: String
  $title: String
) {
  onDeleteIdeaObj(
    id: $id
    idx: $idx
    userId: $userId
    sceneId: $sceneId
    title: $title
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIdeaObjSubscriptionVariables,
  APITypes.OnDeleteIdeaObjSubscription
>;
export const onCreateIdeaSceneObj = /* GraphQL */ `subscription OnCreateIdeaSceneObj(
  $id: String
  $userId: String
  $chapterId: String
  $arcId: String
  $title: String
) {
  onCreateIdeaSceneObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    arcId: $arcId
    title: $title
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIdeaSceneObjSubscriptionVariables,
  APITypes.OnCreateIdeaSceneObjSubscription
>;
export const onUpdateIdeaSceneObj = /* GraphQL */ `subscription OnUpdateIdeaSceneObj(
  $id: String
  $userId: String
  $chapterId: String
  $arcId: String
  $title: String
) {
  onUpdateIdeaSceneObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    arcId: $arcId
    title: $title
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIdeaSceneObjSubscriptionVariables,
  APITypes.OnUpdateIdeaSceneObjSubscription
>;
export const onDeleteIdeaSceneObj = /* GraphQL */ `subscription OnDeleteIdeaSceneObj(
  $id: String
  $userId: String
  $chapterId: String
  $arcId: String
  $title: String
) {
  onDeleteIdeaSceneObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    arcId: $arcId
    title: $title
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIdeaSceneObjSubscriptionVariables,
  APITypes.OnDeleteIdeaSceneObjSubscription
>;
export const onCreateTaskMemberObj = /* GraphQL */ `subscription OnCreateTaskMemberObj(
  $id: String
  $taskId: String
  $userId: String
  $created: String
) {
  onCreateTaskMemberObj(
    id: $id
    taskId: $taskId
    userId: $userId
    created: $created
  ) {
    id
    taskId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTaskMemberObjSubscriptionVariables,
  APITypes.OnCreateTaskMemberObjSubscription
>;
export const onUpdateTaskMemberObj = /* GraphQL */ `subscription OnUpdateTaskMemberObj(
  $id: String
  $taskId: String
  $userId: String
  $created: String
) {
  onUpdateTaskMemberObj(
    id: $id
    taskId: $taskId
    userId: $userId
    created: $created
  ) {
    id
    taskId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTaskMemberObjSubscriptionVariables,
  APITypes.OnUpdateTaskMemberObjSubscription
>;
export const onDeleteTaskMemberObj = /* GraphQL */ `subscription OnDeleteTaskMemberObj(
  $id: String
  $taskId: String
  $userId: String
  $created: String
) {
  onDeleteTaskMemberObj(
    id: $id
    taskId: $taskId
    userId: $userId
    created: $created
  ) {
    id
    taskId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTaskMemberObjSubscriptionVariables,
  APITypes.OnDeleteTaskMemberObjSubscription
>;
export const onCreateTaskObj = /* GraphQL */ `subscription OnCreateTaskObj(
  $id: String
  $userId: String
  $chapterId: String
  $title: String
  $description: String
) {
  onCreateTaskObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTaskObjSubscriptionVariables,
  APITypes.OnCreateTaskObjSubscription
>;
export const onUpdateTaskObj = /* GraphQL */ `subscription OnUpdateTaskObj(
  $id: String
  $userId: String
  $chapterId: String
  $title: String
  $description: String
) {
  onUpdateTaskObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTaskObjSubscriptionVariables,
  APITypes.OnUpdateTaskObjSubscription
>;
export const onDeleteTaskObj = /* GraphQL */ `subscription OnDeleteTaskObj(
  $id: String
  $userId: String
  $chapterId: String
  $title: String
  $description: String
) {
  onDeleteTaskObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTaskObjSubscriptionVariables,
  APITypes.OnDeleteTaskObjSubscription
>;
export const onCreateConversationObj = /* GraphQL */ `subscription OnCreateConversationObj(
  $id: String
  $userId: String
  $chapterId: String
  $decisionId: String
  $toUserId: String
) {
  onCreateConversationObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    decisionId: $decisionId
    toUserId: $toUserId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateConversationObjSubscriptionVariables,
  APITypes.OnCreateConversationObjSubscription
>;
export const onUpdateConversationObj = /* GraphQL */ `subscription OnUpdateConversationObj(
  $id: String
  $userId: String
  $chapterId: String
  $decisionId: String
  $toUserId: String
) {
  onUpdateConversationObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    decisionId: $decisionId
    toUserId: $toUserId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateConversationObjSubscriptionVariables,
  APITypes.OnUpdateConversationObjSubscription
>;
export const onDeleteConversationObj = /* GraphQL */ `subscription OnDeleteConversationObj(
  $id: String
  $userId: String
  $chapterId: String
  $decisionId: String
  $toUserId: String
) {
  onDeleteConversationObj(
    id: $id
    userId: $userId
    chapterId: $chapterId
    decisionId: $decisionId
    toUserId: $toUserId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteConversationObjSubscriptionVariables,
  APITypes.OnDeleteConversationObjSubscription
>;
export const onCreateHorizonObj = /* GraphQL */ `subscription OnCreateHorizonObj(
  $id: String
  $userId: String
  $title: String
  $created: String
  $description: String
) {
  onCreateHorizonObj(
    id: $id
    userId: $userId
    title: $title
    created: $created
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateHorizonObjSubscriptionVariables,
  APITypes.OnCreateHorizonObjSubscription
>;
export const onUpdateHorizonObj = /* GraphQL */ `subscription OnUpdateHorizonObj(
  $id: String
  $userId: String
  $title: String
  $created: String
  $description: String
) {
  onUpdateHorizonObj(
    id: $id
    userId: $userId
    title: $title
    created: $created
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateHorizonObjSubscriptionVariables,
  APITypes.OnUpdateHorizonObjSubscription
>;
export const onDeleteHorizonObj = /* GraphQL */ `subscription OnDeleteHorizonObj(
  $id: String
  $userId: String
  $title: String
  $created: String
  $description: String
) {
  onDeleteHorizonObj(
    id: $id
    userId: $userId
    title: $title
    created: $created
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteHorizonObjSubscriptionVariables,
  APITypes.OnDeleteHorizonObjSubscription
>;
export const onCreateQuadrantMemberObj = /* GraphQL */ `subscription OnCreateQuadrantMemberObj(
  $id: String
  $quadrantId: String
  $userId: String
  $created: String
) {
  onCreateQuadrantMemberObj(
    id: $id
    quadrantId: $quadrantId
    userId: $userId
    created: $created
  ) {
    id
    quadrantId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateQuadrantMemberObjSubscriptionVariables,
  APITypes.OnCreateQuadrantMemberObjSubscription
>;
export const onUpdateQuadrantMemberObj = /* GraphQL */ `subscription OnUpdateQuadrantMemberObj(
  $id: String
  $quadrantId: String
  $userId: String
  $created: String
) {
  onUpdateQuadrantMemberObj(
    id: $id
    quadrantId: $quadrantId
    userId: $userId
    created: $created
  ) {
    id
    quadrantId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateQuadrantMemberObjSubscriptionVariables,
  APITypes.OnUpdateQuadrantMemberObjSubscription
>;
export const onDeleteQuadrantMemberObj = /* GraphQL */ `subscription OnDeleteQuadrantMemberObj(
  $id: String
  $quadrantId: String
  $userId: String
  $created: String
) {
  onDeleteQuadrantMemberObj(
    id: $id
    quadrantId: $quadrantId
    userId: $userId
    created: $created
  ) {
    id
    quadrantId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteQuadrantMemberObjSubscriptionVariables,
  APITypes.OnDeleteQuadrantMemberObjSubscription
>;
export const onCreateDecisionQuadrantObj = /* GraphQL */ `subscription OnCreateDecisionQuadrantObj(
  $id: String
  $decisionId: String
  $title: String
  $description: String
  $variant: String
) {
  onCreateDecisionQuadrantObj(
    id: $id
    decisionId: $decisionId
    title: $title
    description: $description
    variant: $variant
  ) {
    id
    decisionId
    title
    description
    variant
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDecisionQuadrantObjSubscriptionVariables,
  APITypes.OnCreateDecisionQuadrantObjSubscription
>;
export const onUpdateDecisionQuadrantObj = /* GraphQL */ `subscription OnUpdateDecisionQuadrantObj(
  $id: String
  $decisionId: String
  $title: String
  $description: String
  $variant: String
) {
  onUpdateDecisionQuadrantObj(
    id: $id
    decisionId: $decisionId
    title: $title
    description: $description
    variant: $variant
  ) {
    id
    decisionId
    title
    description
    variant
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDecisionQuadrantObjSubscriptionVariables,
  APITypes.OnUpdateDecisionQuadrantObjSubscription
>;
export const onDeleteDecisionQuadrantObj = /* GraphQL */ `subscription OnDeleteDecisionQuadrantObj(
  $id: String
  $decisionId: String
  $title: String
  $description: String
  $variant: String
) {
  onDeleteDecisionQuadrantObj(
    id: $id
    decisionId: $decisionId
    title: $title
    description: $description
    variant: $variant
  ) {
    id
    decisionId
    title
    description
    variant
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDecisionQuadrantObjSubscriptionVariables,
  APITypes.OnDeleteDecisionQuadrantObjSubscription
>;
export const onCreateHorizonDecisionObj = /* GraphQL */ `subscription OnCreateHorizonDecisionObj(
  $id: String
  $horizonId: String
  $title: String
  $description: String
  $created: String
) {
  onCreateHorizonDecisionObj(
    id: $id
    horizonId: $horizonId
    title: $title
    description: $description
    created: $created
  ) {
    id
    horizonId
    title
    description
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateHorizonDecisionObjSubscriptionVariables,
  APITypes.OnCreateHorizonDecisionObjSubscription
>;
export const onUpdateHorizonDecisionObj = /* GraphQL */ `subscription OnUpdateHorizonDecisionObj(
  $id: String
  $horizonId: String
  $title: String
  $description: String
  $created: String
) {
  onUpdateHorizonDecisionObj(
    id: $id
    horizonId: $horizonId
    title: $title
    description: $description
    created: $created
  ) {
    id
    horizonId
    title
    description
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateHorizonDecisionObjSubscriptionVariables,
  APITypes.OnUpdateHorizonDecisionObjSubscription
>;
export const onDeleteHorizonDecisionObj = /* GraphQL */ `subscription OnDeleteHorizonDecisionObj(
  $id: String
  $horizonId: String
  $title: String
  $description: String
  $created: String
) {
  onDeleteHorizonDecisionObj(
    id: $id
    horizonId: $horizonId
    title: $title
    description: $description
    created: $created
  ) {
    id
    horizonId
    title
    description
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteHorizonDecisionObjSubscriptionVariables,
  APITypes.OnDeleteHorizonDecisionObjSubscription
>;
export const onCreateHorizonSpaceMemberObj = /* GraphQL */ `subscription OnCreateHorizonSpaceMemberObj(
  $id: String
  $horizonId: String
  $spaceId: String
  $created: String
) {
  onCreateHorizonSpaceMemberObj(
    id: $id
    horizonId: $horizonId
    spaceId: $spaceId
    created: $created
  ) {
    id
    horizonId
    spaceId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateHorizonSpaceMemberObjSubscriptionVariables,
  APITypes.OnCreateHorizonSpaceMemberObjSubscription
>;
export const onUpdateHorizonSpaceMemberObj = /* GraphQL */ `subscription OnUpdateHorizonSpaceMemberObj(
  $id: String
  $horizonId: String
  $spaceId: String
  $created: String
) {
  onUpdateHorizonSpaceMemberObj(
    id: $id
    horizonId: $horizonId
    spaceId: $spaceId
    created: $created
  ) {
    id
    horizonId
    spaceId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateHorizonSpaceMemberObjSubscriptionVariables,
  APITypes.OnUpdateHorizonSpaceMemberObjSubscription
>;
export const onDeleteHorizonSpaceMemberObj = /* GraphQL */ `subscription OnDeleteHorizonSpaceMemberObj(
  $id: String
  $horizonId: String
  $spaceId: String
  $created: String
) {
  onDeleteHorizonSpaceMemberObj(
    id: $id
    horizonId: $horizonId
    spaceId: $spaceId
    created: $created
  ) {
    id
    horizonId
    spaceId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteHorizonSpaceMemberObjSubscriptionVariables,
  APITypes.OnDeleteHorizonSpaceMemberObjSubscription
>;
export const onCreateHorizonUserMemberObj = /* GraphQL */ `subscription OnCreateHorizonUserMemberObj(
  $id: String
  $horizonId: String
  $userId: String
  $created: String
) {
  onCreateHorizonUserMemberObj(
    id: $id
    horizonId: $horizonId
    userId: $userId
    created: $created
  ) {
    id
    horizonId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateHorizonUserMemberObjSubscriptionVariables,
  APITypes.OnCreateHorizonUserMemberObjSubscription
>;
export const onUpdateHorizonUserMemberObj = /* GraphQL */ `subscription OnUpdateHorizonUserMemberObj(
  $id: String
  $horizonId: String
  $userId: String
  $created: String
) {
  onUpdateHorizonUserMemberObj(
    id: $id
    horizonId: $horizonId
    userId: $userId
    created: $created
  ) {
    id
    horizonId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateHorizonUserMemberObjSubscriptionVariables,
  APITypes.OnUpdateHorizonUserMemberObjSubscription
>;
export const onDeleteHorizonUserMemberObj = /* GraphQL */ `subscription OnDeleteHorizonUserMemberObj(
  $id: String
  $horizonId: String
  $userId: String
  $created: String
) {
  onDeleteHorizonUserMemberObj(
    id: $id
    horizonId: $horizonId
    userId: $userId
    created: $created
  ) {
    id
    horizonId
    userId
    created
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteHorizonUserMemberObjSubscriptionVariables,
  APITypes.OnDeleteHorizonUserMemberObjSubscription
>;
export const onCreateArcSectionObj = /* GraphQL */ `subscription OnCreateArcSectionObj(
  $id: String
  $userId: String
  $arcId: String
  $title: String
  $description: String
) {
  onCreateArcSectionObj(
    id: $id
    userId: $userId
    arcId: $arcId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateArcSectionObjSubscriptionVariables,
  APITypes.OnCreateArcSectionObjSubscription
>;
export const onUpdateArcSectionObj = /* GraphQL */ `subscription OnUpdateArcSectionObj(
  $id: String
  $userId: String
  $arcId: String
  $title: String
  $description: String
) {
  onUpdateArcSectionObj(
    id: $id
    userId: $userId
    arcId: $arcId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateArcSectionObjSubscriptionVariables,
  APITypes.OnUpdateArcSectionObjSubscription
>;
export const onDeleteArcSectionObj = /* GraphQL */ `subscription OnDeleteArcSectionObj(
  $id: String
  $userId: String
  $arcId: String
  $title: String
  $description: String
) {
  onDeleteArcSectionObj(
    id: $id
    userId: $userId
    arcId: $arcId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteArcSectionObjSubscriptionVariables,
  APITypes.OnDeleteArcSectionObjSubscription
>;
export const onCreateHorizonArcObj = /* GraphQL */ `subscription OnCreateHorizonArcObj(
  $id: String
  $userId: String
  $horizonId: String
  $title: String
  $description: String
) {
  onCreateHorizonArcObj(
    id: $id
    userId: $userId
    horizonId: $horizonId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateHorizonArcObjSubscriptionVariables,
  APITypes.OnCreateHorizonArcObjSubscription
>;
export const onUpdateHorizonArcObj = /* GraphQL */ `subscription OnUpdateHorizonArcObj(
  $id: String
  $userId: String
  $horizonId: String
  $title: String
  $description: String
) {
  onUpdateHorizonArcObj(
    id: $id
    userId: $userId
    horizonId: $horizonId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateHorizonArcObjSubscriptionVariables,
  APITypes.OnUpdateHorizonArcObjSubscription
>;
export const onDeleteHorizonArcObj = /* GraphQL */ `subscription OnDeleteHorizonArcObj(
  $id: String
  $userId: String
  $horizonId: String
  $title: String
  $description: String
) {
  onDeleteHorizonArcObj(
    id: $id
    userId: $userId
    horizonId: $horizonId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteHorizonArcObjSubscriptionVariables,
  APITypes.OnDeleteHorizonArcObjSubscription
>;
export const subscribeToMessages = /* GraphQL */ `subscription SubscribeToMessages {
  subscribeToMessages {
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
` as GeneratedSubscription<
  APITypes.SubscribeToMessagesSubscriptionVariables,
  APITypes.SubscribeToMessagesSubscription
>;
export const onCreateFlowObj = /* GraphQL */ `subscription OnCreateFlowObj(
  $id: String
  $userId: String
  $title: String
  $description: String
  $created: String
) {
  onCreateFlowObj(
    id: $id
    userId: $userId
    title: $title
    description: $description
    created: $created
  ) {
    id
    userId
    title
    description
    created
    target
    completed
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFlowObjSubscriptionVariables,
  APITypes.OnCreateFlowObjSubscription
>;
export const onUpdateFlowObj = /* GraphQL */ `subscription OnUpdateFlowObj(
  $id: String
  $userId: String
  $title: String
  $description: String
  $created: String
) {
  onUpdateFlowObj(
    id: $id
    userId: $userId
    title: $title
    description: $description
    created: $created
  ) {
    id
    userId
    title
    description
    created
    target
    completed
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFlowObjSubscriptionVariables,
  APITypes.OnUpdateFlowObjSubscription
>;
export const onDeleteFlowObj = /* GraphQL */ `subscription OnDeleteFlowObj(
  $id: String
  $userId: String
  $title: String
  $description: String
  $created: String
) {
  onDeleteFlowObj(
    id: $id
    userId: $userId
    title: $title
    description: $description
    created: $created
  ) {
    id
    userId
    title
    description
    created
    target
    completed
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFlowObjSubscriptionVariables,
  APITypes.OnDeleteFlowObjSubscription
>;
