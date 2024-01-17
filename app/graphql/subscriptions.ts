/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateStarObj = /* GraphQL */ `subscription OnCreateStarObj($id: String, $name: String, $x: Float, $y: Float) {
  onCreateStarObj(id: $id, name: $name, x: $x, y: $y) {
    id
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStarObjSubscriptionVariables,
  APITypes.OnCreateStarObjSubscription
>;
export const onUpdateStarObj = /* GraphQL */ `subscription OnUpdateStarObj($id: String, $name: String, $x: Float, $y: Float) {
  onUpdateStarObj(id: $id, name: $name, x: $x, y: $y) {
    id
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStarObjSubscriptionVariables,
  APITypes.OnUpdateStarObjSubscription
>;
export const onDeleteStarObj = /* GraphQL */ `subscription OnDeleteStarObj($id: String, $name: String, $x: Float, $y: Float) {
  onDeleteStarObj(id: $id, name: $name, x: $x, y: $y) {
    id
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStarObjSubscriptionVariables,
  APITypes.OnDeleteStarObjSubscription
>;
export const onCreateFlowObj = /* GraphQL */ `subscription OnCreateFlowObj($id: String, $chapterId: String) {
  onCreateFlowObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFlowObjSubscriptionVariables,
  APITypes.OnCreateFlowObjSubscription
>;
export const onUpdateFlowObj = /* GraphQL */ `subscription OnUpdateFlowObj($id: String, $chapterId: String) {
  onUpdateFlowObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFlowObjSubscriptionVariables,
  APITypes.OnUpdateFlowObjSubscription
>;
export const onDeleteFlowObj = /* GraphQL */ `subscription OnDeleteFlowObj($id: String, $chapterId: String) {
  onDeleteFlowObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFlowObjSubscriptionVariables,
  APITypes.OnDeleteFlowObjSubscription
>;
export const onCreateResourceObj = /* GraphQL */ `subscription OnCreateResourceObj(
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
    collectionId
    name
    description
    file {
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
` as GeneratedSubscription<
  APITypes.OnCreateResourceObjSubscriptionVariables,
  APITypes.OnCreateResourceObjSubscription
>;
export const onUpdateResourceObj = /* GraphQL */ `subscription OnUpdateResourceObj(
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
    collectionId
    name
    description
    file {
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
` as GeneratedSubscription<
  APITypes.OnUpdateResourceObjSubscriptionVariables,
  APITypes.OnUpdateResourceObjSubscription
>;
export const onDeleteResourceObj = /* GraphQL */ `subscription OnDeleteResourceObj(
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
    collectionId
    name
    description
    file {
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
` as GeneratedSubscription<
  APITypes.OnDeleteResourceObjSubscriptionVariables,
  APITypes.OnDeleteResourceObjSubscription
>;
export const onCreateConstellationObj = /* GraphQL */ `subscription OnCreateConstellationObj(
  $id: String
  $draftId: String
  $title: String
  $description: String
) {
  onCreateConstellationObj(
    id: $id
    draftId: $draftId
    title: $title
    description: $description
  ) {
    id
    draftId
    title
    description
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateConstellationObjSubscriptionVariables,
  APITypes.OnCreateConstellationObjSubscription
>;
export const onUpdateConstellationObj = /* GraphQL */ `subscription OnUpdateConstellationObj(
  $id: String
  $draftId: String
  $title: String
  $description: String
) {
  onUpdateConstellationObj(
    id: $id
    draftId: $draftId
    title: $title
    description: $description
  ) {
    id
    draftId
    title
    description
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateConstellationObjSubscriptionVariables,
  APITypes.OnUpdateConstellationObjSubscription
>;
export const onDeleteConstellationObj = /* GraphQL */ `subscription OnDeleteConstellationObj(
  $id: String
  $draftId: String
  $title: String
  $description: String
) {
  onDeleteConstellationObj(
    id: $id
    draftId: $draftId
    title: $title
    description: $description
  ) {
    id
    draftId
    title
    description
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
      type
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
      type
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
      type
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
  $name: String
  $passwordHash: String
  $email: String
  $googleId: String
) {
  onCreateUserObj(
    id: $id
    name: $name
    passwordHash: $passwordHash
    email: $email
    googleId: $googleId
  ) {
    id
    name
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
` as GeneratedSubscription<
  APITypes.OnCreateUserObjSubscriptionVariables,
  APITypes.OnCreateUserObjSubscription
>;
export const onUpdateUserObj = /* GraphQL */ `subscription OnUpdateUserObj(
  $id: String
  $name: String
  $passwordHash: String
  $email: String
  $googleId: String
) {
  onUpdateUserObj(
    id: $id
    name: $name
    passwordHash: $passwordHash
    email: $email
    googleId: $googleId
  ) {
    id
    name
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
    name
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserObjSubscriptionVariables,
  APITypes.OnDeleteUserObjSubscription
>;
export const onCreateSeaObj = /* GraphQL */ `subscription OnCreateSeaObj($id: String, $chapterId: String) {
  onCreateSeaObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSeaObjSubscriptionVariables,
  APITypes.OnCreateSeaObjSubscription
>;
export const onUpdateSeaObj = /* GraphQL */ `subscription OnUpdateSeaObj($id: String, $chapterId: String) {
  onUpdateSeaObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSeaObjSubscriptionVariables,
  APITypes.OnUpdateSeaObjSubscription
>;
export const onDeleteSeaObj = /* GraphQL */ `subscription OnDeleteSeaObj($id: String, $chapterId: String) {
  onDeleteSeaObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSeaObjSubscriptionVariables,
  APITypes.OnDeleteSeaObjSubscription
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChapterObjSubscriptionVariables,
  APITypes.OnDeleteChapterObjSubscription
>;
export const onCreateStormObj = /* GraphQL */ `subscription OnCreateStormObj($id: String, $chapterId: String) {
  onCreateStormObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStormObjSubscriptionVariables,
  APITypes.OnCreateStormObjSubscription
>;
export const onUpdateStormObj = /* GraphQL */ `subscription OnUpdateStormObj($id: String, $chapterId: String) {
  onUpdateStormObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStormObjSubscriptionVariables,
  APITypes.OnUpdateStormObjSubscription
>;
export const onDeleteStormObj = /* GraphQL */ `subscription OnDeleteStormObj($id: String, $chapterId: String) {
  onDeleteStormObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStormObjSubscriptionVariables,
  APITypes.OnDeleteStormObjSubscription
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
    description
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
    description
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
    description
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSpaceObjSubscriptionVariables,
  APITypes.OnDeleteSpaceObjSubscription
>;
export const onCreateMomentObj = /* GraphQL */ `subscription OnCreateMomentObj(
  $id: String
  $flowId: String
  $chapterId: String
  $spaceId: String
  $userId: String
) {
  onCreateMomentObj(
    id: $id
    flowId: $flowId
    chapterId: $chapterId
    spaceId: $spaceId
    userId: $userId
  ) {
    id
    flowId
    chapterId
    spaceId
    userId
    time
    title
    log
    file {
      id
      src
      type
      name
      size
      __typename
    }
    visibility
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMomentObjSubscriptionVariables,
  APITypes.OnCreateMomentObjSubscription
>;
export const onUpdateMomentObj = /* GraphQL */ `subscription OnUpdateMomentObj(
  $id: String
  $flowId: String
  $chapterId: String
  $spaceId: String
  $userId: String
) {
  onUpdateMomentObj(
    id: $id
    flowId: $flowId
    chapterId: $chapterId
    spaceId: $spaceId
    userId: $userId
  ) {
    id
    flowId
    chapterId
    spaceId
    userId
    time
    title
    log
    file {
      id
      src
      type
      name
      size
      __typename
    }
    visibility
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMomentObjSubscriptionVariables,
  APITypes.OnUpdateMomentObjSubscription
>;
export const onDeleteMomentObj = /* GraphQL */ `subscription OnDeleteMomentObj(
  $id: String
  $flowId: String
  $chapterId: String
  $spaceId: String
  $userId: String
) {
  onDeleteMomentObj(
    id: $id
    flowId: $flowId
    chapterId: $chapterId
    spaceId: $spaceId
    userId: $userId
  ) {
    id
    flowId
    chapterId
    spaceId
    userId
    time
    title
    log
    file {
      id
      src
      type
      name
      size
      __typename
    }
    visibility
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMomentObjSubscriptionVariables,
  APITypes.OnDeleteMomentObjSubscription
>;
export const onCreateCollectionObj = /* GraphQL */ `subscription OnCreateCollectionObj(
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
export const onUpdateCollectionObj = /* GraphQL */ `subscription OnUpdateCollectionObj(
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
export const onDeleteCollectionObj = /* GraphQL */ `subscription OnDeleteCollectionObj(
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
  $type: String
  $name: String
  $size: Int
) {
  onCreateFileObj(id: $id, src: $src, type: $type, name: $name, size: $size) {
    id
    src
    type
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
  $type: String
  $name: String
  $size: Int
) {
  onUpdateFileObj(id: $id, src: $src, type: $type, name: $name, size: $size) {
    id
    src
    type
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
  $type: String
  $name: String
  $size: Int
) {
  onDeleteFileObj(id: $id, src: $src, type: $type, name: $name, size: $size) {
    id
    src
    type
    name
    size
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFileObjSubscriptionVariables,
  APITypes.OnDeleteFileObjSubscription
>;
export const onCreateDraftObj = /* GraphQL */ `subscription OnCreateDraftObj($id: String, $chapterId: String) {
  onCreateDraftObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDraftObjSubscriptionVariables,
  APITypes.OnCreateDraftObjSubscription
>;
export const onUpdateDraftObj = /* GraphQL */ `subscription OnUpdateDraftObj($id: String, $chapterId: String) {
  onUpdateDraftObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDraftObjSubscriptionVariables,
  APITypes.OnUpdateDraftObjSubscription
>;
export const onDeleteDraftObj = /* GraphQL */ `subscription OnDeleteDraftObj($id: String, $chapterId: String) {
  onDeleteDraftObj(id: $id, chapterId: $chapterId) {
    id
    chapterId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDraftObjSubscriptionVariables,
  APITypes.OnDeleteDraftObjSubscription
>;
export const onCreateJourneyObj = /* GraphQL */ `subscription OnCreateJourneyObj($id: String, $seaId: String) {
  onCreateJourneyObj(id: $id, seaId: $seaId) {
    id
    seaId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateJourneyObjSubscriptionVariables,
  APITypes.OnCreateJourneyObjSubscription
>;
export const onUpdateJourneyObj = /* GraphQL */ `subscription OnUpdateJourneyObj($id: String, $seaId: String) {
  onUpdateJourneyObj(id: $id, seaId: $seaId) {
    id
    seaId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateJourneyObjSubscriptionVariables,
  APITypes.OnUpdateJourneyObjSubscription
>;
export const onDeleteJourneyObj = /* GraphQL */ `subscription OnDeleteJourneyObj($id: String, $seaId: String) {
  onDeleteJourneyObj(id: $id, seaId: $seaId) {
    id
    seaId
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
  $stormId: String
  $title: String
  $summary: String
  $time: String
) {
  onCreateChatObj(
    id: $id
    stormId: $stormId
    title: $title
    summary: $summary
    time: $time
  ) {
    id
    stormId
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
  $stormId: String
  $title: String
  $summary: String
  $time: String
) {
  onUpdateChatObj(
    id: $id
    stormId: $stormId
    title: $title
    summary: $summary
    time: $time
  ) {
    id
    stormId
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
  $stormId: String
  $title: String
  $summary: String
  $time: String
) {
  onDeleteChatObj(
    id: $id
    stormId: $stormId
    title: $title
    summary: $summary
    time: $time
  ) {
    id
    stormId
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
