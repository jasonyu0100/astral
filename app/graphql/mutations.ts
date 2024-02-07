/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createResourceObj = /* GraphQL */ `mutation CreateResourceObj($input: CreateResourceObjInput!) {
  createResourceObj(input: $input) {
    id
    userId
    collectionId
    title
    description
    variant
    file {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
    log {
      id
      loomId
      height
      width
      sharedUrl
      embedUrl
      thumbnailHeight
      thumbnailWidth
      thumbnailUrl
      duration
      providerUrl
      __typename
    }
    link {
      id
      url
      title
      variant
      __typename
    }
    note {
      id
      title
      text
      variant
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateResourceObjMutationVariables,
  APITypes.CreateResourceObjMutation
>;
export const updateResourceObj = /* GraphQL */ `mutation UpdateResourceObj($input: UpdateResourceObjInput!) {
  updateResourceObj(input: $input) {
    id
    userId
    collectionId
    title
    description
    variant
    file {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
    log {
      id
      loomId
      height
      width
      sharedUrl
      embedUrl
      thumbnailHeight
      thumbnailWidth
      thumbnailUrl
      duration
      providerUrl
      __typename
    }
    link {
      id
      url
      title
      variant
      __typename
    }
    note {
      id
      title
      text
      variant
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateResourceObjMutationVariables,
  APITypes.UpdateResourceObjMutation
>;
export const deleteResourceObj = /* GraphQL */ `mutation DeleteResourceObj($input: DeleteResourceObjInput!) {
  deleteResourceObj(input: $input) {
    id
    userId
    collectionId
    title
    description
    variant
    file {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
    log {
      id
      loomId
      height
      width
      sharedUrl
      embedUrl
      thumbnailHeight
      thumbnailWidth
      thumbnailUrl
      duration
      providerUrl
      __typename
    }
    link {
      id
      url
      title
      variant
      __typename
    }
    note {
      id
      title
      text
      variant
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteResourceObjMutationVariables,
  APITypes.DeleteResourceObjMutation
>;
export const createConstellationObj = /* GraphQL */ `mutation CreateConstellationObj($input: CreateConstellationObjInput!) {
  createConstellationObj(input: $input) {
    id
    chapterId
    title
    description
    variant
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateConstellationObjMutationVariables,
  APITypes.CreateConstellationObjMutation
>;
export const updateConstellationObj = /* GraphQL */ `mutation UpdateConstellationObj($input: UpdateConstellationObjInput!) {
  updateConstellationObj(input: $input) {
    id
    chapterId
    title
    description
    variant
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateConstellationObjMutationVariables,
  APITypes.UpdateConstellationObjMutation
>;
export const deleteConstellationObj = /* GraphQL */ `mutation DeleteConstellationObj($input: DeleteConstellationObjInput!) {
  deleteConstellationObj(input: $input) {
    id
    chapterId
    title
    description
    variant
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteConstellationObjMutationVariables,
  APITypes.DeleteConstellationObjMutation
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
      fileType
      title
      size
      variant
      __typename
    }
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
      fileType
      title
      size
      variant
      __typename
    }
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
      fileType
      title
      size
      variant
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGalleryObjMutationVariables,
  APITypes.DeleteGalleryObjMutation
>;
export const createUserObj = /* GraphQL */ `mutation CreateUserObj($input: CreateUserObjInput!) {
  createUserObj(input: $input) {
    id
    fname
    lname
    passwordHash
    email
    googleId
    profilePicture {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
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
    fname
    lname
    passwordHash
    email
    googleId
    profilePicture {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
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
    fname
    lname
    passwordHash
    email
    googleId
    profilePicture {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserObjMutationVariables,
  APITypes.DeleteUserObjMutation
>;
export const createChapterObj = /* GraphQL */ `mutation CreateChapterObj($input: CreateChapterObjInput!) {
  createChapterObj(input: $input) {
    id
    spaceId
    title
    description
    idx
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
    spaceId
    title
    description
    idx
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
    spaceId
    title
    description
    idx
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChapterObjMutationVariables,
  APITypes.DeleteChapterObjMutation
>;
export const createMessageObj = /* GraphQL */ `mutation CreateMessageObj($input: CreateMessageObjInput!) {
  createMessageObj(input: $input) {
    id
    chatId
    source
    time
    message
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageObjMutationVariables,
  APITypes.CreateMessageObjMutation
>;
export const updateMessageObj = /* GraphQL */ `mutation UpdateMessageObj($input: UpdateMessageObjInput!) {
  updateMessageObj(input: $input) {
    id
    chatId
    source
    time
    message
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageObjMutationVariables,
  APITypes.UpdateMessageObjMutation
>;
export const deleteMessageObj = /* GraphQL */ `mutation DeleteMessageObj($input: DeleteMessageObjInput!) {
  deleteMessageObj(input: $input) {
    id
    chatId
    source
    time
    message
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageObjMutationVariables,
  APITypes.DeleteMessageObjMutation
>;
export const createSpaceObj = /* GraphQL */ `mutation CreateSpaceObj($input: CreateSpaceObjInput!) {
  createSpaceObj(input: $input) {
    id
    userId
    title
    time
    description
    thumbnail {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
    variant
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
    time
    description
    thumbnail {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
    variant
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
    time
    description
    thumbnail {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
    variant
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSpaceObjMutationVariables,
  APITypes.DeleteSpaceObjMutation
>;
export const createCollectionObj = /* GraphQL */ `mutation CreateCollectionObj($input: CreateCollectionObjInput!) {
  createCollectionObj(input: $input) {
    id
    galleryId
    title
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCollectionObjMutationVariables,
  APITypes.CreateCollectionObjMutation
>;
export const updateCollectionObj = /* GraphQL */ `mutation UpdateCollectionObj($input: UpdateCollectionObjInput!) {
  updateCollectionObj(input: $input) {
    id
    galleryId
    title
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCollectionObjMutationVariables,
  APITypes.UpdateCollectionObjMutation
>;
export const deleteCollectionObj = /* GraphQL */ `mutation DeleteCollectionObj($input: DeleteCollectionObjInput!) {
  deleteCollectionObj(input: $input) {
    id
    galleryId
    title
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCollectionObjMutationVariables,
  APITypes.DeleteCollectionObjMutation
>;
export const createFileObj = /* GraphQL */ `mutation CreateFileObj($input: CreateFileObjInput!) {
  createFileObj(input: $input) {
    id
    src
    fileType
    title
    size
    variant
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFileObjMutationVariables,
  APITypes.CreateFileObjMutation
>;
export const updateFileObj = /* GraphQL */ `mutation UpdateFileObj($input: UpdateFileObjInput!) {
  updateFileObj(input: $input) {
    id
    src
    fileType
    title
    size
    variant
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFileObjMutationVariables,
  APITypes.UpdateFileObjMutation
>;
export const deleteFileObj = /* GraphQL */ `mutation DeleteFileObj($input: DeleteFileObjInput!) {
  deleteFileObj(input: $input) {
    id
    src
    fileType
    title
    size
    variant
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFileObjMutationVariables,
  APITypes.DeleteFileObjMutation
>;
export const createJourneyObj = /* GraphQL */ `mutation CreateJourneyObj($input: CreateJourneyObjInput!) {
  createJourneyObj(input: $input) {
    id
    chapterId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateJourneyObjMutationVariables,
  APITypes.CreateJourneyObjMutation
>;
export const updateJourneyObj = /* GraphQL */ `mutation UpdateJourneyObj($input: UpdateJourneyObjInput!) {
  updateJourneyObj(input: $input) {
    id
    chapterId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateJourneyObjMutationVariables,
  APITypes.UpdateJourneyObjMutation
>;
export const deleteJourneyObj = /* GraphQL */ `mutation DeleteJourneyObj($input: DeleteJourneyObjInput!) {
  deleteJourneyObj(input: $input) {
    id
    chapterId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteJourneyObjMutationVariables,
  APITypes.DeleteJourneyObjMutation
>;
export const createCommentObj = /* GraphQL */ `mutation CreateCommentObj($input: CreateCommentObjInput!) {
  createCommentObj(input: $input) {
    id
    momentId
    time
    content
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentObjMutationVariables,
  APITypes.CreateCommentObjMutation
>;
export const updateCommentObj = /* GraphQL */ `mutation UpdateCommentObj($input: UpdateCommentObjInput!) {
  updateCommentObj(input: $input) {
    id
    momentId
    time
    content
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentObjMutationVariables,
  APITypes.UpdateCommentObjMutation
>;
export const deleteCommentObj = /* GraphQL */ `mutation DeleteCommentObj($input: DeleteCommentObjInput!) {
  deleteCommentObj(input: $input) {
    id
    momentId
    time
    content
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentObjMutationVariables,
  APITypes.DeleteCommentObjMutation
>;
export const createChatObj = /* GraphQL */ `mutation CreateChatObj($input: CreateChatObjInput!) {
  createChatObj(input: $input) {
    id
    chapterId
    title
    summary
    time
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
    chapterId
    title
    summary
    time
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
    chapterId
    title
    summary
    time
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatObjMutationVariables,
  APITypes.DeleteChatObjMutation
>;
export const createReservationObj = /* GraphQL */ `mutation CreateReservationObj($input: CreateReservationObjInput!) {
  createReservationObj(input: $input) {
    id
    fname
    lname
    email
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReservationObjMutationVariables,
  APITypes.CreateReservationObjMutation
>;
export const updateReservationObj = /* GraphQL */ `mutation UpdateReservationObj($input: UpdateReservationObjInput!) {
  updateReservationObj(input: $input) {
    id
    fname
    lname
    email
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReservationObjMutationVariables,
  APITypes.UpdateReservationObjMutation
>;
export const deleteReservationObj = /* GraphQL */ `mutation DeleteReservationObj($input: DeleteReservationObjInput!) {
  deleteReservationObj(input: $input) {
    id
    fname
    lname
    email
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReservationObjMutationVariables,
  APITypes.DeleteReservationObjMutation
>;
export const createNoteObj = /* GraphQL */ `mutation CreateNoteObj($input: CreateNoteObjInput!) {
  createNoteObj(input: $input) {
    id
    title
    text
    variant
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateNoteObjMutationVariables,
  APITypes.CreateNoteObjMutation
>;
export const updateNoteObj = /* GraphQL */ `mutation UpdateNoteObj($input: UpdateNoteObjInput!) {
  updateNoteObj(input: $input) {
    id
    title
    text
    variant
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateNoteObjMutationVariables,
  APITypes.UpdateNoteObjMutation
>;
export const deleteNoteObj = /* GraphQL */ `mutation DeleteNoteObj($input: DeleteNoteObjInput!) {
  deleteNoteObj(input: $input) {
    id
    title
    text
    variant
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteNoteObjMutationVariables,
  APITypes.DeleteNoteObjMutation
>;
export const createLogObj = /* GraphQL */ `mutation CreateLogObj($input: CreateLogObjInput!) {
  createLogObj(input: $input) {
    id
    loomId
    height
    width
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
` as GeneratedMutation<
  APITypes.CreateLogObjMutationVariables,
  APITypes.CreateLogObjMutation
>;
export const updateLogObj = /* GraphQL */ `mutation UpdateLogObj($input: UpdateLogObjInput!) {
  updateLogObj(input: $input) {
    id
    loomId
    height
    width
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
` as GeneratedMutation<
  APITypes.UpdateLogObjMutationVariables,
  APITypes.UpdateLogObjMutation
>;
export const deleteLogObj = /* GraphQL */ `mutation DeleteLogObj($input: DeleteLogObjInput!) {
  deleteLogObj(input: $input) {
    id
    loomId
    height
    width
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
` as GeneratedMutation<
  APITypes.DeleteLogObjMutationVariables,
  APITypes.DeleteLogObjMutation
>;
export const createLinkObj = /* GraphQL */ `mutation CreateLinkObj($input: CreateLinkObjInput!) {
  createLinkObj(input: $input) {
    id
    url
    title
    variant
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLinkObjMutationVariables,
  APITypes.CreateLinkObjMutation
>;
export const updateLinkObj = /* GraphQL */ `mutation UpdateLinkObj($input: UpdateLinkObjInput!) {
  updateLinkObj(input: $input) {
    id
    url
    title
    variant
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLinkObjMutationVariables,
  APITypes.UpdateLinkObjMutation
>;
export const deleteLinkObj = /* GraphQL */ `mutation DeleteLinkObj($input: DeleteLinkObjInput!) {
  deleteLinkObj(input: $input) {
    id
    url
    title
    variant
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLinkObjMutationVariables,
  APITypes.DeleteLinkObjMutation
>;
export const createMomentObj = /* GraphQL */ `mutation CreateMomentObj($input: CreateMomentObjInput!) {
  createMomentObj(input: $input) {
    id
    chapterId
    spaceId
    userId
    time
    title
    description
    visibility
    variant
    file {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
    log {
      id
      loomId
      height
      width
      sharedUrl
      embedUrl
      thumbnailHeight
      thumbnailWidth
      thumbnailUrl
      duration
      providerUrl
      __typename
    }
    link {
      id
      url
      title
      variant
      __typename
    }
    note {
      id
      title
      text
      variant
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMomentObjMutationVariables,
  APITypes.CreateMomentObjMutation
>;
export const updateMomentObj = /* GraphQL */ `mutation UpdateMomentObj($input: UpdateMomentObjInput!) {
  updateMomentObj(input: $input) {
    id
    chapterId
    spaceId
    userId
    time
    title
    description
    visibility
    variant
    file {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
    log {
      id
      loomId
      height
      width
      sharedUrl
      embedUrl
      thumbnailHeight
      thumbnailWidth
      thumbnailUrl
      duration
      providerUrl
      __typename
    }
    link {
      id
      url
      title
      variant
      __typename
    }
    note {
      id
      title
      text
      variant
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMomentObjMutationVariables,
  APITypes.UpdateMomentObjMutation
>;
export const deleteMomentObj = /* GraphQL */ `mutation DeleteMomentObj($input: DeleteMomentObjInput!) {
  deleteMomentObj(input: $input) {
    id
    chapterId
    spaceId
    userId
    time
    title
    description
    visibility
    variant
    file {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
    log {
      id
      loomId
      height
      width
      sharedUrl
      embedUrl
      thumbnailHeight
      thumbnailWidth
      thumbnailUrl
      duration
      providerUrl
      __typename
    }
    link {
      id
      url
      title
      variant
      __typename
    }
    note {
      id
      title
      text
      variant
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMomentObjMutationVariables,
  APITypes.DeleteMomentObjMutation
>;
export const createStarObj = /* GraphQL */ `mutation CreateStarObj($input: CreateStarObjInput!) {
  createStarObj(input: $input) {
    id
    constellationId
    title
    description
    x
    y
    variant
    file {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
    log {
      id
      loomId
      height
      width
      sharedUrl
      embedUrl
      thumbnailHeight
      thumbnailWidth
      thumbnailUrl
      duration
      providerUrl
      __typename
    }
    note {
      id
      title
      text
      variant
      __typename
    }
    link {
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
  APITypes.CreateStarObjMutationVariables,
  APITypes.CreateStarObjMutation
>;
export const updateStarObj = /* GraphQL */ `mutation UpdateStarObj($input: UpdateStarObjInput!) {
  updateStarObj(input: $input) {
    id
    constellationId
    title
    description
    x
    y
    variant
    file {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
    log {
      id
      loomId
      height
      width
      sharedUrl
      embedUrl
      thumbnailHeight
      thumbnailWidth
      thumbnailUrl
      duration
      providerUrl
      __typename
    }
    note {
      id
      title
      text
      variant
      __typename
    }
    link {
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
  APITypes.UpdateStarObjMutationVariables,
  APITypes.UpdateStarObjMutation
>;
export const deleteStarObj = /* GraphQL */ `mutation DeleteStarObj($input: DeleteStarObjInput!) {
  deleteStarObj(input: $input) {
    id
    constellationId
    title
    description
    x
    y
    variant
    file {
      id
      src
      fileType
      title
      size
      variant
      __typename
    }
    log {
      id
      loomId
      height
      width
      sharedUrl
      embedUrl
      thumbnailHeight
      thumbnailWidth
      thumbnailUrl
      duration
      providerUrl
      __typename
    }
    note {
      id
      title
      text
      variant
      __typename
    }
    link {
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
  APITypes.DeleteStarObjMutationVariables,
  APITypes.DeleteStarObjMutation
>;
