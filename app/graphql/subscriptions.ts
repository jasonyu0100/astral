/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateChapterObj = /* GraphQL */ `subscription OnCreateChapterObj(
  $id: String
  $title: String
  $description: String
  $stormId: String
  $draftId: String
) {
  onCreateChapterObj(
    id: $id
    title: $title
    description: $description
    stormId: $stormId
    draftId: $draftId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChapterObjSubscriptionVariables,
  APITypes.OnCreateChapterObjSubscription
>;
export const onUpdateChapterObj = /* GraphQL */ `subscription OnUpdateChapterObj(
  $id: String
  $title: String
  $description: String
  $stormId: String
  $draftId: String
) {
  onUpdateChapterObj(
    id: $id
    title: $title
    description: $description
    stormId: $stormId
    draftId: $draftId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChapterObjSubscriptionVariables,
  APITypes.OnUpdateChapterObjSubscription
>;
export const onDeleteChapterObj = /* GraphQL */ `subscription OnDeleteChapterObj(
  $id: String
  $title: String
  $description: String
  $stormId: String
  $draftId: String
) {
  onDeleteChapterObj(
    id: $id
    title: $title
    description: $description
    stormId: $stormId
    draftId: $draftId
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChapterObjSubscriptionVariables,
  APITypes.OnDeleteChapterObjSubscription
>;
export const onCreateSpaceObj = /* GraphQL */ `subscription OnCreateSpaceObj(
  $id: String
  $title: String
  $description: String
) {
  onCreateSpaceObj(id: $id, title: $title, description: $description) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSpaceObjSubscriptionVariables,
  APITypes.OnCreateSpaceObjSubscription
>;
export const onUpdateSpaceObj = /* GraphQL */ `subscription OnUpdateSpaceObj(
  $id: String
  $title: String
  $description: String
) {
  onUpdateSpaceObj(id: $id, title: $title, description: $description) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSpaceObjSubscriptionVariables,
  APITypes.OnUpdateSpaceObjSubscription
>;
export const onDeleteSpaceObj = /* GraphQL */ `subscription OnDeleteSpaceObj(
  $id: String
  $title: String
  $description: String
) {
  onDeleteSpaceObj(id: $id, title: $title, description: $description) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSpaceObjSubscriptionVariables,
  APITypes.OnDeleteSpaceObjSubscription
>;
export const onCreateStormObj = /* GraphQL */ `subscription OnCreateStormObj($id: String, $chatIds: [String!]) {
  onCreateStormObj(id: $id, chatIds: $chatIds) {
    id
    chatIds
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStormObjSubscriptionVariables,
  APITypes.OnCreateStormObjSubscription
>;
export const onUpdateStormObj = /* GraphQL */ `subscription OnUpdateStormObj($id: String, $chatIds: [String!]) {
  onUpdateStormObj(id: $id, chatIds: $chatIds) {
    id
    chatIds
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStormObjSubscriptionVariables,
  APITypes.OnUpdateStormObjSubscription
>;
export const onDeleteStormObj = /* GraphQL */ `subscription OnDeleteStormObj($id: String, $chatIds: [String!]) {
  onDeleteStormObj(id: $id, chatIds: $chatIds) {
    id
    chatIds
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStormObjSubscriptionVariables,
  APITypes.OnDeleteStormObjSubscription
>;
export const onCreateChatObj = /* GraphQL */ `subscription OnCreateChatObj(
  $id: String
  $title: String
  $summary: String
  $time: String
) {
  onCreateChatObj(id: $id, title: $title, summary: $summary, time: $time) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatObjSubscriptionVariables,
  APITypes.OnCreateChatObjSubscription
>;
export const onUpdateChatObj = /* GraphQL */ `subscription OnUpdateChatObj(
  $id: String
  $title: String
  $summary: String
  $time: String
) {
  onUpdateChatObj(id: $id, title: $title, summary: $summary, time: $time) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatObjSubscriptionVariables,
  APITypes.OnUpdateChatObjSubscription
>;
export const onDeleteChatObj = /* GraphQL */ `subscription OnDeleteChatObj(
  $id: String
  $title: String
  $summary: String
  $time: String
) {
  onDeleteChatObj(id: $id, title: $title, summary: $summary, time: $time) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatObjSubscriptionVariables,
  APITypes.OnDeleteChatObjSubscription
>;
export const onCreateDraftObj = /* GraphQL */ `subscription OnCreateDraftObj($id: String, $constellationIds: [String!]) {
  onCreateDraftObj(id: $id, constellationIds: $constellationIds) {
    id
    constellationIds
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDraftObjSubscriptionVariables,
  APITypes.OnCreateDraftObjSubscription
>;
export const onUpdateDraftObj = /* GraphQL */ `subscription OnUpdateDraftObj($id: String, $constellationIds: [String!]) {
  onUpdateDraftObj(id: $id, constellationIds: $constellationIds) {
    id
    constellationIds
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDraftObjSubscriptionVariables,
  APITypes.OnUpdateDraftObjSubscription
>;
export const onDeleteDraftObj = /* GraphQL */ `subscription OnDeleteDraftObj($id: String, $constellationIds: [String!]) {
  onDeleteDraftObj(id: $id, constellationIds: $constellationIds) {
    id
    constellationIds
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDraftObjSubscriptionVariables,
  APITypes.OnDeleteDraftObjSubscription
>;
export const onCreateConstellationObj = /* GraphQL */ `subscription OnCreateConstellationObj(
  $id: String
  $title: String
  $description: String
) {
  onCreateConstellationObj(id: $id, title: $title, description: $description) {
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
` as GeneratedSubscription<
  APITypes.OnCreateConstellationObjSubscriptionVariables,
  APITypes.OnCreateConstellationObjSubscription
>;
export const onUpdateConstellationObj = /* GraphQL */ `subscription OnUpdateConstellationObj(
  $id: String
  $title: String
  $description: String
) {
  onUpdateConstellationObj(id: $id, title: $title, description: $description) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateConstellationObjSubscriptionVariables,
  APITypes.OnUpdateConstellationObjSubscription
>;
export const onDeleteConstellationObj = /* GraphQL */ `subscription OnDeleteConstellationObj(
  $id: String
  $title: String
  $description: String
) {
  onDeleteConstellationObj(id: $id, title: $title, description: $description) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteConstellationObjSubscriptionVariables,
  APITypes.OnDeleteConstellationObjSubscription
>;
export const onCreateFlowObj = /* GraphQL */ `subscription OnCreateFlowObj($id: String, $momentIds: [String!]) {
  onCreateFlowObj(id: $id, momentIds: $momentIds) {
    id
    momentIds
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFlowObjSubscriptionVariables,
  APITypes.OnCreateFlowObjSubscription
>;
export const onUpdateFlowObj = /* GraphQL */ `subscription OnUpdateFlowObj($id: String, $momentIds: [String!]) {
  onUpdateFlowObj(id: $id, momentIds: $momentIds) {
    id
    momentIds
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFlowObjSubscriptionVariables,
  APITypes.OnUpdateFlowObjSubscription
>;
export const onDeleteFlowObj = /* GraphQL */ `subscription OnDeleteFlowObj($id: String, $momentIds: [String!]) {
  onDeleteFlowObj(id: $id, momentIds: $momentIds) {
    id
    momentIds
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFlowObjSubscriptionVariables,
  APITypes.OnDeleteFlowObjSubscription
>;
export const onCreateMomentObj = /* GraphQL */ `subscription OnCreateMomentObj(
  $id: String
  $spaceId: String
  $userId: String
  $time: String
  $title: String
) {
  onCreateMomentObj(
    id: $id
    spaceId: $spaceId
    userId: $userId
    time: $time
    title: $title
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMomentObjSubscriptionVariables,
  APITypes.OnCreateMomentObjSubscription
>;
export const onUpdateMomentObj = /* GraphQL */ `subscription OnUpdateMomentObj(
  $id: String
  $spaceId: String
  $userId: String
  $time: String
  $title: String
) {
  onUpdateMomentObj(
    id: $id
    spaceId: $spaceId
    userId: $userId
    time: $time
    title: $title
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMomentObjSubscriptionVariables,
  APITypes.OnUpdateMomentObjSubscription
>;
export const onDeleteMomentObj = /* GraphQL */ `subscription OnDeleteMomentObj(
  $id: String
  $spaceId: String
  $userId: String
  $time: String
  $title: String
) {
  onDeleteMomentObj(
    id: $id
    spaceId: $spaceId
    userId: $userId
    time: $time
    title: $title
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMomentObjSubscriptionVariables,
  APITypes.OnDeleteMomentObjSubscription
>;
export const onCreateResourceObj = /* GraphQL */ `subscription OnCreateResourceObj(
  $id: String
  $label: String
  $description: String
) {
  onCreateResourceObj(id: $id, label: $label, description: $description) {
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
` as GeneratedSubscription<
  APITypes.OnCreateResourceObjSubscriptionVariables,
  APITypes.OnCreateResourceObjSubscription
>;
export const onUpdateResourceObj = /* GraphQL */ `subscription OnUpdateResourceObj(
  $id: String
  $label: String
  $description: String
) {
  onUpdateResourceObj(id: $id, label: $label, description: $description) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateResourceObjSubscriptionVariables,
  APITypes.OnUpdateResourceObjSubscription
>;
export const onDeleteResourceObj = /* GraphQL */ `subscription OnDeleteResourceObj(
  $id: String
  $label: String
  $description: String
) {
  onDeleteResourceObj(id: $id, label: $label, description: $description) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteResourceObjSubscriptionVariables,
  APITypes.OnDeleteResourceObjSubscription
>;
export const onCreateCollectionObj = /* GraphQL */ `subscription OnCreateCollectionObj(
  $id: String
  $name: String
  $resourceIds: [String!]
) {
  onCreateCollectionObj(id: $id, name: $name, resourceIds: $resourceIds) {
    id
    name
    resourceIds
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCollectionObjSubscriptionVariables,
  APITypes.OnCreateCollectionObjSubscription
>;
export const onUpdateCollectionObj = /* GraphQL */ `subscription OnUpdateCollectionObj(
  $id: String
  $name: String
  $resourceIds: [String!]
) {
  onUpdateCollectionObj(id: $id, name: $name, resourceIds: $resourceIds) {
    id
    name
    resourceIds
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCollectionObjSubscriptionVariables,
  APITypes.OnUpdateCollectionObjSubscription
>;
export const onDeleteCollectionObj = /* GraphQL */ `subscription OnDeleteCollectionObj(
  $id: String
  $name: String
  $resourceIds: [String!]
) {
  onDeleteCollectionObj(id: $id, name: $name, resourceIds: $resourceIds) {
    id
    name
    resourceIds
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCollectionObjSubscriptionVariables,
  APITypes.OnDeleteCollectionObjSubscription
>;
export const onCreateGalleryObj = /* GraphQL */ `subscription OnCreateGalleryObj(
  $id: String
  $title: String
  $description: String
  $collectionIds: [String!]
) {
  onCreateGalleryObj(
    id: $id
    title: $title
    description: $description
    collectionIds: $collectionIds
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGalleryObjSubscriptionVariables,
  APITypes.OnCreateGalleryObjSubscription
>;
export const onUpdateGalleryObj = /* GraphQL */ `subscription OnUpdateGalleryObj(
  $id: String
  $title: String
  $description: String
  $collectionIds: [String!]
) {
  onUpdateGalleryObj(
    id: $id
    title: $title
    description: $description
    collectionIds: $collectionIds
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGalleryObjSubscriptionVariables,
  APITypes.OnUpdateGalleryObjSubscription
>;
export const onDeleteGalleryObj = /* GraphQL */ `subscription OnDeleteGalleryObj(
  $id: String
  $title: String
  $description: String
  $collectionIds: [String!]
) {
  onDeleteGalleryObj(
    id: $id
    title: $title
    description: $description
    collectionIds: $collectionIds
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGalleryObjSubscriptionVariables,
  APITypes.OnDeleteGalleryObjSubscription
>;
export const onCreateUserObj = /* GraphQL */ `subscription OnCreateUserObj(
  $id: String
  $name: String
  $email: String
  $googleId: String
  $accessToken: String
) {
  onCreateUserObj(
    id: $id
    name: $name
    email: $email
    googleId: $googleId
    accessToken: $accessToken
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserObjSubscriptionVariables,
  APITypes.OnCreateUserObjSubscription
>;
export const onUpdateUserObj = /* GraphQL */ `subscription OnUpdateUserObj(
  $id: String
  $name: String
  $email: String
  $googleId: String
  $accessToken: String
) {
  onUpdateUserObj(
    id: $id
    name: $name
    email: $email
    googleId: $googleId
    accessToken: $accessToken
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserObjSubscriptionVariables,
  APITypes.OnUpdateUserObjSubscription
>;
export const onDeleteUserObj = /* GraphQL */ `subscription OnDeleteUserObj(
  $id: String
  $name: String
  $email: String
  $googleId: String
  $accessToken: String
) {
  onDeleteUserObj(
    id: $id
    name: $name
    email: $email
    googleId: $googleId
    accessToken: $accessToken
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserObjSubscriptionVariables,
  APITypes.OnDeleteUserObjSubscription
>;
