/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateResourceObj = /* GraphQL */ `subscription OnCreateResourceObj(
  $id: String
  $collectionId: String
  $title: String
  $description: String
) {
  onCreateResourceObj(
    id: $id
    collectionId: $collectionId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateResourceObjSubscriptionVariables,
  APITypes.OnCreateResourceObjSubscription
>;
export const onUpdateResourceObj = /* GraphQL */ `subscription OnUpdateResourceObj(
  $id: String
  $collectionId: String
  $title: String
  $description: String
) {
  onUpdateResourceObj(
    id: $id
    collectionId: $collectionId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateResourceObjSubscriptionVariables,
  APITypes.OnUpdateResourceObjSubscription
>;
export const onDeleteResourceObj = /* GraphQL */ `subscription OnDeleteResourceObj(
  $id: String
  $collectionId: String
  $title: String
  $description: String
) {
  onDeleteResourceObj(
    id: $id
    collectionId: $collectionId
    title: $title
    description: $description
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteResourceObjSubscriptionVariables,
  APITypes.OnDeleteResourceObjSubscription
>;
export const onCreateConstellationObj = /* GraphQL */ `subscription OnCreateConstellationObj(
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
export const onUpdateConstellationObj = /* GraphQL */ `subscription OnUpdateConstellationObj(
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
export const onDeleteConstellationObj = /* GraphQL */ `subscription OnDeleteConstellationObj(
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
export const onCreateGalleryObj = /* GraphQL */ `subscription OnCreateGalleryObj(
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
      title
      size
      variant
      __typename
    }
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
      title
      size
      variant
      __typename
    }
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
      title
      size
      variant
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
      title
      size
      variant
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
      title
      size
      variant
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
  $title: String
  $passwordHash: String
  $email: String
  $googleId: String
) {
  onDeleteUserObj(
    id: $id
    title: $title
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
      title
      size
      variant
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserObjSubscriptionVariables,
  APITypes.OnDeleteUserObjSubscription
>;
export const onCreateChapterObj = /* GraphQL */ `subscription OnCreateChapterObj(
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
    idx
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChapterObjSubscriptionVariables,
  APITypes.OnCreateChapterObjSubscription
>;
export const onUpdateChapterObj = /* GraphQL */ `subscription OnUpdateChapterObj(
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
    idx
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChapterObjSubscriptionVariables,
  APITypes.OnUpdateChapterObjSubscription
>;
export const onDeleteChapterObj = /* GraphQL */ `subscription OnDeleteChapterObj(
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
    idx
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChapterObjSubscriptionVariables,
  APITypes.OnDeleteChapterObjSubscription
>;
export const onCreateMessageObj = /* GraphQL */ `subscription OnCreateMessageObj(
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
export const onUpdateMessageObj = /* GraphQL */ `subscription OnUpdateMessageObj(
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
export const onDeleteMessageObj = /* GraphQL */ `subscription OnDeleteMessageObj(
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
      title
      size
      variant
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
      title
      size
      variant
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
      title
      size
      variant
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
export const onCreateCollectionObj = /* GraphQL */ `subscription OnCreateCollectionObj(
  $id: String
  $galleryId: String
  $title: String
) {
  onCreateCollectionObj(id: $id, galleryId: $galleryId, title: $title) {
    id
    galleryId
    title
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCollectionObjSubscriptionVariables,
  APITypes.OnCreateCollectionObjSubscription
>;
export const onUpdateCollectionObj = /* GraphQL */ `subscription OnUpdateCollectionObj(
  $id: String
  $galleryId: String
  $title: String
) {
  onUpdateCollectionObj(id: $id, galleryId: $galleryId, title: $title) {
    id
    galleryId
    title
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCollectionObjSubscriptionVariables,
  APITypes.OnUpdateCollectionObjSubscription
>;
export const onDeleteCollectionObj = /* GraphQL */ `subscription OnDeleteCollectionObj(
  $id: String
  $galleryId: String
  $title: String
) {
  onDeleteCollectionObj(id: $id, galleryId: $galleryId, title: $title) {
    id
    galleryId
    title
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
  $title: String
  $size: Int
) {
  onCreateFileObj(
    id: $id
    src: $src
    variant: $variant
    title: $title
    size: $size
  ) {
    id
    src
    fileType
    title
    size
    variant
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
  $title: String
  $size: Int
) {
  onUpdateFileObj(
    id: $id
    src: $src
    variant: $variant
    title: $title
    size: $size
  ) {
    id
    src
    fileType
    title
    size
    variant
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
  $title: String
  $size: Int
) {
  onDeleteFileObj(
    id: $id
    src: $src
    variant: $variant
    title: $title
    size: $size
  ) {
    id
    src
    fileType
    title
    size
    variant
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFileObjSubscriptionVariables,
  APITypes.OnDeleteFileObjSubscription
>;
export const onCreateJourneyObj = /* GraphQL */ `subscription OnCreateJourneyObj($id: String, $chapterId: String) {
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
export const onUpdateJourneyObj = /* GraphQL */ `subscription OnUpdateJourneyObj($id: String, $chapterId: String) {
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
export const onDeleteJourneyObj = /* GraphQL */ `subscription OnDeleteJourneyObj($id: String, $chapterId: String) {
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
export const onCreateCommentObj = /* GraphQL */ `subscription OnCreateCommentObj(
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
export const onUpdateCommentObj = /* GraphQL */ `subscription OnUpdateCommentObj(
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
export const onDeleteCommentObj = /* GraphQL */ `subscription OnDeleteCommentObj(
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
export const onCreateReservationObj = /* GraphQL */ `subscription OnCreateReservationObj(
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
export const onUpdateReservationObj = /* GraphQL */ `subscription OnUpdateReservationObj(
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
export const onDeleteReservationObj = /* GraphQL */ `subscription OnDeleteReservationObj(
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
export const onCreateNoteObj = /* GraphQL */ `subscription OnCreateNoteObj(
  $id: String
  $title: String
  $text: String
  $variant: String
) {
  onCreateNoteObj(id: $id, title: $title, text: $text, variant: $variant) {
    id
    title
    text
    variant
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNoteObjSubscriptionVariables,
  APITypes.OnCreateNoteObjSubscription
>;
export const onUpdateNoteObj = /* GraphQL */ `subscription OnUpdateNoteObj(
  $id: String
  $title: String
  $text: String
  $variant: String
) {
  onUpdateNoteObj(id: $id, title: $title, text: $text, variant: $variant) {
    id
    title
    text
    variant
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNoteObjSubscriptionVariables,
  APITypes.OnUpdateNoteObjSubscription
>;
export const onDeleteNoteObj = /* GraphQL */ `subscription OnDeleteNoteObj(
  $id: String
  $title: String
  $text: String
  $variant: String
) {
  onDeleteNoteObj(id: $id, title: $title, text: $text, variant: $variant) {
    id
    title
    text
    variant
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNoteObjSubscriptionVariables,
  APITypes.OnDeleteNoteObjSubscription
>;
export const onCreateLogObj = /* GraphQL */ `subscription OnCreateLogObj(
  $id: String
  $loomId: String
  $height: Int
  $width: Int
  $sharedUrl: String
) {
  onCreateLogObj(
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
  APITypes.OnCreateLogObjSubscriptionVariables,
  APITypes.OnCreateLogObjSubscription
>;
export const onUpdateLogObj = /* GraphQL */ `subscription OnUpdateLogObj(
  $id: String
  $loomId: String
  $height: Int
  $width: Int
  $sharedUrl: String
) {
  onUpdateLogObj(
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
  APITypes.OnUpdateLogObjSubscriptionVariables,
  APITypes.OnUpdateLogObjSubscription
>;
export const onDeleteLogObj = /* GraphQL */ `subscription OnDeleteLogObj(
  $id: String
  $loomId: String
  $height: Int
  $width: Int
  $sharedUrl: String
) {
  onDeleteLogObj(
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
  APITypes.OnDeleteLogObjSubscriptionVariables,
  APITypes.OnDeleteLogObjSubscription
>;
export const onCreateLinkObj = /* GraphQL */ `subscription OnCreateLinkObj(
  $id: String
  $url: String
  $title: String
  $variant: String
) {
  onCreateLinkObj(id: $id, url: $url, title: $title, variant: $variant) {
    id
    url
    title
    variant
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLinkObjSubscriptionVariables,
  APITypes.OnCreateLinkObjSubscription
>;
export const onUpdateLinkObj = /* GraphQL */ `subscription OnUpdateLinkObj(
  $id: String
  $url: String
  $title: String
  $variant: String
) {
  onUpdateLinkObj(id: $id, url: $url, title: $title, variant: $variant) {
    id
    url
    title
    variant
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLinkObjSubscriptionVariables,
  APITypes.OnUpdateLinkObjSubscription
>;
export const onDeleteLinkObj = /* GraphQL */ `subscription OnDeleteLinkObj(
  $id: String
  $url: String
  $title: String
  $variant: String
) {
  onDeleteLinkObj(id: $id, url: $url, title: $title, variant: $variant) {
    id
    url
    title
    variant
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLinkObjSubscriptionVariables,
  APITypes.OnDeleteLinkObjSubscription
>;
export const onCreateStarObj = /* GraphQL */ `subscription OnCreateStarObj(
  $id: String
  $constellationId: String
  $title: String
  $description: String
  $x: Float
) {
  onCreateStarObj(
    id: $id
    constellationId: $constellationId
    title: $title
    description: $description
    x: $x
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStarObjSubscriptionVariables,
  APITypes.OnCreateStarObjSubscription
>;
export const onUpdateStarObj = /* GraphQL */ `subscription OnUpdateStarObj(
  $id: String
  $constellationId: String
  $title: String
  $description: String
  $x: Float
) {
  onUpdateStarObj(
    id: $id
    constellationId: $constellationId
    title: $title
    description: $description
    x: $x
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStarObjSubscriptionVariables,
  APITypes.OnUpdateStarObjSubscription
>;
export const onDeleteStarObj = /* GraphQL */ `subscription OnDeleteStarObj(
  $id: String
  $constellationId: String
  $title: String
  $description: String
  $x: Float
) {
  onDeleteStarObj(
    id: $id
    constellationId: $constellationId
    title: $title
    description: $description
    x: $x
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStarObjSubscriptionVariables,
  APITypes.OnDeleteStarObjSubscription
>;
export const onCreateMomentObj = /* GraphQL */ `subscription OnCreateMomentObj(
  $id: String
  $chapterId: String
  $spaceId: String
  $userId: String
  $time: String
) {
  onCreateMomentObj(
    id: $id
    chapterId: $chapterId
    spaceId: $spaceId
    userId: $userId
    time: $time
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMomentObjSubscriptionVariables,
  APITypes.OnCreateMomentObjSubscription
>;
export const onUpdateMomentObj = /* GraphQL */ `subscription OnUpdateMomentObj(
  $id: String
  $chapterId: String
  $spaceId: String
  $userId: String
  $time: String
) {
  onUpdateMomentObj(
    id: $id
    chapterId: $chapterId
    spaceId: $spaceId
    userId: $userId
    time: $time
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMomentObjSubscriptionVariables,
  APITypes.OnUpdateMomentObjSubscription
>;
export const onDeleteMomentObj = /* GraphQL */ `subscription OnDeleteMomentObj(
  $id: String
  $chapterId: String
  $spaceId: String
  $userId: String
  $time: String
) {
  onDeleteMomentObj(
    id: $id
    chapterId: $chapterId
    spaceId: $spaceId
    userId: $userId
    time: $time
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMomentObjSubscriptionVariables,
  APITypes.OnDeleteMomentObjSubscription
>;
