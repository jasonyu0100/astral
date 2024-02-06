/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from './API';
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateStarObj =
  /* GraphQL */ `subscription OnCreateStarObj($id: String, $name: String, $x: Float, $y: Float) {
  onCreateStarObj(id: $id, name: $name, x: $x, y: $y) {
    id
    constellationId
    name
    x
    y
    file {
      id
      src
      fileType
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
    variant
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateStarObjSubscriptionVariables,
    APITypes.OnCreateStarObjSubscription
  >;
export const onUpdateStarObj =
  /* GraphQL */ `subscription OnUpdateStarObj($id: String, $name: String, $x: Float, $y: Float) {
  onUpdateStarObj(id: $id, name: $name, x: $x, y: $y) {
    id
    constellationId
    name
    x
    y
    file {
      id
      src
      fileType
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
    variant
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateStarObjSubscriptionVariables,
    APITypes.OnUpdateStarObjSubscription
  >;
export const onDeleteStarObj =
  /* GraphQL */ `subscription OnDeleteStarObj($id: String, $name: String, $x: Float, $y: Float) {
  onDeleteStarObj(id: $id, name: $name, x: $x, y: $y) {
    id
    constellationId
    name
    x
    y
    file {
      id
      src
      fileType
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
    variant
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteStarObjSubscriptionVariables,
    APITypes.OnDeleteStarObjSubscription
  >;
export const onCreateResourceObj =
  /* GraphQL */ `subscription OnCreateResourceObj(
  $id: String
  $collectionId: String
  $name: String
  $description: String
) {
  onCreateResourceObj(
    id: $id
    collectionId: $collectionId
    name: $name
    description: $description
  ) {
    id
    userId
    collectionId
    name
    description
    variant
    file {
      id
      src
      fileType
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
` as GeneratedSubscription<
    APITypes.OnCreateResourceObjSubscriptionVariables,
    APITypes.OnCreateResourceObjSubscription
  >;
export const onUpdateResourceObj =
  /* GraphQL */ `subscription OnUpdateResourceObj(
  $id: String
  $collectionId: String
  $name: String
  $description: String
) {
  onUpdateResourceObj(
    id: $id
    collectionId: $collectionId
    name: $name
    description: $description
  ) {
    id
    userId
    collectionId
    name
    description
    variant
    file {
      id
      src
      fileType
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
` as GeneratedSubscription<
    APITypes.OnUpdateResourceObjSubscriptionVariables,
    APITypes.OnUpdateResourceObjSubscription
  >;
export const onDeleteResourceObj =
  /* GraphQL */ `subscription OnDeleteResourceObj(
  $id: String
  $collectionId: String
  $name: String
  $description: String
) {
  onDeleteResourceObj(
    id: $id
    collectionId: $collectionId
    name: $name
    description: $description
  ) {
    id
    userId
    collectionId
    name
    description
    variant
    file {
      id
      src
      fileType
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
` as GeneratedSubscription<
    APITypes.OnDeleteResourceObjSubscriptionVariables,
    APITypes.OnDeleteResourceObjSubscription
  >;
export const onCreateConstellationObj =
  /* GraphQL */ `subscription OnCreateConstellationObj(
  $id: String
  $chapterId: String
  $title: String
  $description: String
) {
  onCreateConstellationObj(
    id: $id
    chapterId: $chapterId
    title: $title
    description: $description
  ) {
    id
    chapterId
    title
    description
    variant
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateConstellationObjSubscriptionVariables,
    APITypes.OnCreateConstellationObjSubscription
  >;
export const onUpdateConstellationObj =
  /* GraphQL */ `subscription OnUpdateConstellationObj(
  $id: String
  $chapterId: String
  $title: String
  $description: String
) {
  onUpdateConstellationObj(
    id: $id
    chapterId: $chapterId
    title: $title
    description: $description
  ) {
    id
    chapterId
    title
    description
    variant
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateConstellationObjSubscriptionVariables,
    APITypes.OnUpdateConstellationObjSubscription
  >;
export const onDeleteConstellationObj =
  /* GraphQL */ `subscription OnDeleteConstellationObj(
  $id: String
  $chapterId: String
  $title: String
  $description: String
) {
  onDeleteConstellationObj(
    id: $id
    chapterId: $chapterId
    title: $title
    description: $description
  ) {
    id
    chapterId
    title
    description
    variant
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteConstellationObjSubscriptionVariables,
    APITypes.OnDeleteConstellationObjSubscription
  >;
export const onCreateGalleryObj =
  /* GraphQL */ `subscription OnCreateGalleryObj(
  $id: String
  $userId: String
  $title: String
  $description: String
) {
  onCreateGalleryObj(
    id: $id
    userId: $userId
    title: $title
    description: $description
  ) {
    id
    userId
    title
    description
    thumbnail {
      id
      src
      fileType
      name
      size
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateGalleryObjSubscriptionVariables,
    APITypes.OnCreateGalleryObjSubscription
  >;
export const onUpdateGalleryObj =
  /* GraphQL */ `subscription OnUpdateGalleryObj(
  $id: String
  $userId: String
  $title: String
  $description: String
) {
  onUpdateGalleryObj(
    id: $id
    userId: $userId
    title: $title
    description: $description
  ) {
    id
    userId
    title
    description
    thumbnail {
      id
      src
      fileType
      name
      size
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateGalleryObjSubscriptionVariables,
    APITypes.OnUpdateGalleryObjSubscription
  >;
export const onDeleteGalleryObj =
  /* GraphQL */ `subscription OnDeleteGalleryObj(
  $id: String
  $userId: String
  $title: String
  $description: String
) {
  onDeleteGalleryObj(
    id: $id
    userId: $userId
    title: $title
    description: $description
  ) {
    id
    userId
    title
    description
    thumbnail {
      id
      src
      fileType
      name
      size
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteGalleryObjSubscriptionVariables,
    APITypes.OnDeleteGalleryObjSubscription
  >;
export const onCreateUserObj = /* GraphQL */ `subscription OnCreateUserObj(
  $id: String
  $fname: String
  $passwordHash: String
  $email: String
  $googleId: String
) {
  onCreateUserObj(
    id: $id
    fname: $fname
    passwordHash: $passwordHash
    email: $email
    googleId: $googleId
  ) {
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
      name
      size
      __typename
    }
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
  $passwordHash: String
  $email: String
  $googleId: String
) {
  onUpdateUserObj(
    id: $id
    fname: $fname
    passwordHash: $passwordHash
    email: $email
    googleId: $googleId
  ) {
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
      name
      size
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserObjSubscriptionVariables,
  APITypes.OnUpdateUserObjSubscription
>;
export const onDeleteUserObj = /* GraphQL */ `subscription OnDeleteUserObj(
  $id: String
  $name: String
  $passwordHash: String
  $email: String
  $googleId: String
) {
  onDeleteUserObj(
    id: $id
    name: $name
    passwordHash: $passwordHash
    email: $email
    googleId: $googleId
  ) {
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
      name
      size
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserObjSubscriptionVariables,
  APITypes.OnDeleteUserObjSubscription
>;
export const onCreateChapterObj =
  /* GraphQL */ `subscription OnCreateChapterObj(
  $id: String
  $spaceId: String
  $title: String
  $description: String
) {
  onCreateChapterObj(
    id: $id
    spaceId: $spaceId
    title: $title
    description: $description
  ) {
    id
    spaceId
    title
    description
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateChapterObjSubscriptionVariables,
    APITypes.OnCreateChapterObjSubscription
  >;
export const onUpdateChapterObj =
  /* GraphQL */ `subscription OnUpdateChapterObj(
  $id: String
  $spaceId: String
  $title: String
  $description: String
) {
  onUpdateChapterObj(
    id: $id
    spaceId: $spaceId
    title: $title
    description: $description
  ) {
    id
    spaceId
    title
    description
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateChapterObjSubscriptionVariables,
    APITypes.OnUpdateChapterObjSubscription
  >;
export const onDeleteChapterObj =
  /* GraphQL */ `subscription OnDeleteChapterObj(
  $id: String
  $spaceId: String
  $title: String
  $description: String
) {
  onDeleteChapterObj(
    id: $id
    spaceId: $spaceId
    title: $title
    description: $description
  ) {
    id
    spaceId
    title
    description
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteChapterObjSubscriptionVariables,
    APITypes.OnDeleteChapterObjSubscription
  >;
export const onCreateMessageObj =
  /* GraphQL */ `subscription OnCreateMessageObj(
  $id: String
  $chatId: String
  $source: String
  $time: String
  $message: String
) {
  onCreateMessageObj(
    id: $id
    chatId: $chatId
    source: $source
    time: $time
    message: $message
  ) {
    id
    chatId
    source
    time
    message
    userId
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateMessageObjSubscriptionVariables,
    APITypes.OnCreateMessageObjSubscription
  >;
export const onUpdateMessageObj =
  /* GraphQL */ `subscription OnUpdateMessageObj(
  $id: String
  $chatId: String
  $source: String
  $time: String
  $message: String
) {
  onUpdateMessageObj(
    id: $id
    chatId: $chatId
    source: $source
    time: $time
    message: $message
  ) {
    id
    chatId
    source
    time
    message
    userId
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateMessageObjSubscriptionVariables,
    APITypes.OnUpdateMessageObjSubscription
  >;
export const onDeleteMessageObj =
  /* GraphQL */ `subscription OnDeleteMessageObj(
  $id: String
  $chatId: String
  $source: String
  $time: String
  $message: String
) {
  onDeleteMessageObj(
    id: $id
    chatId: $chatId
    source: $source
    time: $time
    message: $message
  ) {
    id
    chatId
    source
    time
    message
    userId
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteMessageObjSubscriptionVariables,
    APITypes.OnDeleteMessageObjSubscription
  >;
export const onCreateSpaceObj = /* GraphQL */ `subscription OnCreateSpaceObj(
  $id: String
  $userId: String
  $title: String
  $description: String
) {
  onCreateSpaceObj(
    id: $id
    userId: $userId
    title: $title
    description: $description
  ) {
    id
    userId
    title
    time
    description
    thumbnail {
      id
      src
      fileType
      name
      size
      __typename
    }
    variant
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
  $description: String
) {
  onUpdateSpaceObj(
    id: $id
    userId: $userId
    title: $title
    description: $description
  ) {
    id
    userId
    title
    time
    description
    thumbnail {
      id
      src
      fileType
      name
      size
      __typename
    }
    variant
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
  $description: String
) {
  onDeleteSpaceObj(
    id: $id
    userId: $userId
    title: $title
    description: $description
  ) {
    id
    userId
    title
    time
    description
    thumbnail {
      id
      src
      fileType
      name
      size
      __typename
    }
    variant
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSpaceObjSubscriptionVariables,
  APITypes.OnDeleteSpaceObjSubscription
>;
export const onCreateMomentObj = /* GraphQL */ `subscription OnCreateMomentObj(
  $id: String
  $chapterId: String
  $spaceId: String
  $userId: String
) {
  onCreateMomentObj(
    id: $id
    chapterId: $chapterId
    spaceId: $spaceId
    userId: $userId
  ) {
    id
    chapterId
    spaceId
    userId
    time
    title
    log
    visibility
    variant
    file {
      id
      src
      fileType
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
` as GeneratedSubscription<
  APITypes.OnCreateMomentObjSubscriptionVariables,
  APITypes.OnCreateMomentObjSubscription
>;
export const onUpdateMomentObj = /* GraphQL */ `subscription OnUpdateMomentObj(
  $id: String
  $chapterId: String
  $spaceId: String
  $userId: String
) {
  onUpdateMomentObj(
    id: $id
    chapterId: $chapterId
    spaceId: $spaceId
    userId: $userId
  ) {
    id
    chapterId
    spaceId
    userId
    time
    title
    log
    visibility
    variant
    file {
      id
      src
      fileType
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
` as GeneratedSubscription<
  APITypes.OnUpdateMomentObjSubscriptionVariables,
  APITypes.OnUpdateMomentObjSubscription
>;
export const onDeleteMomentObj = /* GraphQL */ `subscription OnDeleteMomentObj(
  $id: String
  $chapterId: String
  $spaceId: String
  $userId: String
) {
  onDeleteMomentObj(
    id: $id
    chapterId: $chapterId
    spaceId: $spaceId
    userId: $userId
  ) {
    id
    chapterId
    spaceId
    userId
    time
    title
    log
    visibility
    variant
    file {
      id
      src
      fileType
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
` as GeneratedSubscription<
  APITypes.OnDeleteMomentObjSubscriptionVariables,
  APITypes.OnDeleteMomentObjSubscription
>;
export const onCreateCollectionObj =
  /* GraphQL */ `subscription OnCreateCollectionObj(
  $id: String
  $galleryId: String
  $name: String
) {
  onCreateCollectionObj(id: $id, galleryId: $galleryId, name: $name) {
    id
    galleryId
    name
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateCollectionObjSubscriptionVariables,
    APITypes.OnCreateCollectionObjSubscription
  >;
export const onUpdateCollectionObj =
  /* GraphQL */ `subscription OnUpdateCollectionObj(
  $id: String
  $galleryId: String
  $name: String
) {
  onUpdateCollectionObj(id: $id, galleryId: $galleryId, name: $name) {
    id
    galleryId
    name
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateCollectionObjSubscriptionVariables,
    APITypes.OnUpdateCollectionObjSubscription
  >;
export const onDeleteCollectionObj =
  /* GraphQL */ `subscription OnDeleteCollectionObj(
  $id: String
  $galleryId: String
  $name: String
) {
  onDeleteCollectionObj(id: $id, galleryId: $galleryId, name: $name) {
    id
    galleryId
    name
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteCollectionObjSubscriptionVariables,
    APITypes.OnDeleteCollectionObjSubscription
  >;
export const onCreateFileObj = /* GraphQL */ `subscription OnCreateFileObj(
  $id: String
  $src: String
  $variant: String
  $name: String
  $size: Int
) {
  onCreateFileObj(
    id: $id
    src: $src
    variant: $variant
    name: $name
    size: $size
  ) {
    id
    src
    fileType
    name
    size
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFileObjSubscriptionVariables,
  APITypes.OnCreateFileObjSubscription
>;
export const onUpdateFileObj = /* GraphQL */ `subscription OnUpdateFileObj(
  $id: String
  $src: String
  $variant: String
  $name: String
  $size: Int
) {
  onUpdateFileObj(
    id: $id
    src: $src
    variant: $variant
    name: $name
    size: $size
  ) {
    id
    src
    fileType
    name
    size
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFileObjSubscriptionVariables,
  APITypes.OnUpdateFileObjSubscription
>;
export const onDeleteFileObj = /* GraphQL */ `subscription OnDeleteFileObj(
  $id: String
  $src: String
  $variant: String
  $name: String
  $size: Int
) {
  onDeleteFileObj(
    id: $id
    src: $src
    variant: $variant
    name: $name
    size: $size
  ) {
    id
    src
    fileType
    name
    size
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFileObjSubscriptionVariables,
  APITypes.OnDeleteFileObjSubscription
>;
export const onCreateJourneyObj =
  /* GraphQL */ `subscription OnCreateJourneyObj($id: String, $chapterId: String) {
  onCreateJourneyObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateJourneyObjSubscriptionVariables,
    APITypes.OnCreateJourneyObjSubscription
  >;
export const onUpdateJourneyObj =
  /* GraphQL */ `subscription OnUpdateJourneyObj($id: String, $chapterId: String) {
  onUpdateJourneyObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateJourneyObjSubscriptionVariables,
    APITypes.OnUpdateJourneyObjSubscription
  >;
export const onDeleteJourneyObj =
  /* GraphQL */ `subscription OnDeleteJourneyObj($id: String, $chapterId: String) {
  onDeleteJourneyObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteJourneyObjSubscriptionVariables,
    APITypes.OnDeleteJourneyObjSubscription
  >;
export const onCreateCommentObj =
  /* GraphQL */ `subscription OnCreateCommentObj(
  $id: String
  $momentId: String
  $time: String
  $content: String
  $userId: String
) {
  onCreateCommentObj(
    id: $id
    momentId: $momentId
    time: $time
    content: $content
    userId: $userId
  ) {
    id
    momentId
    time
    content
    userId
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateCommentObjSubscriptionVariables,
    APITypes.OnCreateCommentObjSubscription
  >;
export const onUpdateCommentObj =
  /* GraphQL */ `subscription OnUpdateCommentObj(
  $id: String
  $momentId: String
  $time: String
  $content: String
  $userId: String
) {
  onUpdateCommentObj(
    id: $id
    momentId: $momentId
    time: $time
    content: $content
    userId: $userId
  ) {
    id
    momentId
    time
    content
    userId
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateCommentObjSubscriptionVariables,
    APITypes.OnUpdateCommentObjSubscription
  >;
export const onDeleteCommentObj =
  /* GraphQL */ `subscription OnDeleteCommentObj(
  $id: String
  $momentId: String
  $time: String
  $content: String
  $userId: String
) {
  onDeleteCommentObj(
    id: $id
    momentId: $momentId
    time: $time
    content: $content
    userId: $userId
  ) {
    id
    momentId
    time
    content
    userId
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteCommentObjSubscriptionVariables,
    APITypes.OnDeleteCommentObjSubscription
  >;
export const onCreateChatObj = /* GraphQL */ `subscription OnCreateChatObj(
  $id: String
  $chapterId: String
  $title: String
  $summary: String
  $time: String
) {
  onCreateChatObj(
    id: $id
    chapterId: $chapterId
    title: $title
    summary: $summary
    time: $time
  ) {
    id
    chapterId
    title
    summary
    time
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChatObjSubscriptionVariables,
  APITypes.OnCreateChatObjSubscription
>;
export const onUpdateChatObj = /* GraphQL */ `subscription OnUpdateChatObj(
  $id: String
  $chapterId: String
  $title: String
  $summary: String
  $time: String
) {
  onUpdateChatObj(
    id: $id
    chapterId: $chapterId
    title: $title
    summary: $summary
    time: $time
  ) {
    id
    chapterId
    title
    summary
    time
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChatObjSubscriptionVariables,
  APITypes.OnUpdateChatObjSubscription
>;
export const onDeleteChatObj = /* GraphQL */ `subscription OnDeleteChatObj(
  $id: String
  $chapterId: String
  $title: String
  $summary: String
  $time: String
) {
  onDeleteChatObj(
    id: $id
    chapterId: $chapterId
    title: $title
    summary: $summary
    time: $time
  ) {
    id
    chapterId
    title
    summary
    time
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChatObjSubscriptionVariables,
  APITypes.OnDeleteChatObjSubscription
>;
export const onCreateReservationObj =
  /* GraphQL */ `subscription OnCreateReservationObj(
  $id: String
  $fname: String
  $lname: String
  $email: String
) {
  onCreateReservationObj(id: $id, fname: $fname, lname: $lname, email: $email) {
    id
    fname
    lname
    email
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateReservationObjSubscriptionVariables,
    APITypes.OnCreateReservationObjSubscription
  >;
export const onUpdateReservationObj =
  /* GraphQL */ `subscription OnUpdateReservationObj(
  $id: String
  $fname: String
  $lname: String
  $email: String
) {
  onUpdateReservationObj(id: $id, fname: $fname, lname: $lname, email: $email) {
    id
    fname
    lname
    email
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateReservationObjSubscriptionVariables,
    APITypes.OnUpdateReservationObjSubscription
  >;
export const onDeleteReservationObj =
  /* GraphQL */ `subscription OnDeleteReservationObj(
  $id: String
  $fname: String
  $lname: String
  $email: String
) {
  onDeleteReservationObj(id: $id, fname: $fname, lname: $lname, email: $email) {
    id
    fname
    lname
    email
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteReservationObjSubscriptionVariables,
    APITypes.OnDeleteReservationObjSubscription
  >;
export const onCreateLoomObj = /* GraphQL */ `subscription OnCreateLoomObj(
  $id: String
  $loomId: String
  $height: Float
  $width: Float
  $sharedUrl: String
) {
  onCreateLoomObj(
    id: $id
    loomId: $loomId
    height: $height
    width: $width
    sharedUrl: $sharedUrl
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLoomObjSubscriptionVariables,
  APITypes.OnCreateLoomObjSubscription
>;
export const onUpdateLoomObj = /* GraphQL */ `subscription OnUpdateLoomObj(
  $id: String
  $loomId: String
  $height: Float
  $width: Float
  $sharedUrl: String
) {
  onUpdateLoomObj(
    id: $id
    loomId: $loomId
    height: $height
    width: $width
    sharedUrl: $sharedUrl
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLoomObjSubscriptionVariables,
  APITypes.OnUpdateLoomObjSubscription
>;
export const onDeleteLoomObj = /* GraphQL */ `subscription OnDeleteLoomObj(
  $id: String
  $loomId: String
  $height: Float
  $width: Float
  $sharedUrl: String
) {
  onDeleteLoomObj(
    id: $id
    loomId: $loomId
    height: $height
    width: $width
    sharedUrl: $sharedUrl
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLoomObjSubscriptionVariables,
  APITypes.OnDeleteLoomObjSubscription
>;
export const onCreateStickyObj = /* GraphQL */ `subscription OnCreateStickyObj(
  $id: String
  $color: String
  $name: String
  $content: String
) {
  onCreateStickyObj(id: $id, color: $color, name: $name, content: $content) {
    id
    color
    name
    content
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStickyObjSubscriptionVariables,
  APITypes.OnCreateStickyObjSubscription
>;
export const onUpdateStickyObj = /* GraphQL */ `subscription OnUpdateStickyObj(
  $id: String
  $color: String
  $name: String
  $content: String
) {
  onUpdateStickyObj(id: $id, color: $color, name: $name, content: $content) {
    id
    color
    name
    content
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStickyObjSubscriptionVariables,
  APITypes.OnUpdateStickyObjSubscription
>;
export const onDeleteStickyObj = /* GraphQL */ `subscription OnDeleteStickyObj(
  $id: String
  $color: String
  $name: String
  $content: String
) {
  onDeleteStickyObj(id: $id, color: $color, name: $name, content: $content) {
    id
    color
    name
    content
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStickyObjSubscriptionVariables,
  APITypes.OnDeleteStickyObjSubscription
>;
