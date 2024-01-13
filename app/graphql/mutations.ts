/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createChapterObj = /* GraphQL */ `mutation CreateChapterObj($input: CreateChapterObjInput!) {
  createChapterObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateChapterObjMutationVariables,
  APITypes.CreateChapterObjMutation
>;
export const updateChapterObj = /* GraphQL */ `mutation UpdateChapterObj($input: UpdateChapterObjInput!) {
  updateChapterObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateChapterObjMutationVariables,
  APITypes.UpdateChapterObjMutation
>;
export const deleteChapterObj = /* GraphQL */ `mutation DeleteChapterObj($input: DeleteChapterObjInput!) {
  deleteChapterObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteChapterObjMutationVariables,
  APITypes.DeleteChapterObjMutation
>;
export const createSpaceObj = /* GraphQL */ `mutation CreateSpaceObj($input: CreateSpaceObjInput!) {
  createSpaceObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateSpaceObjMutationVariables,
  APITypes.CreateSpaceObjMutation
>;
export const updateSpaceObj = /* GraphQL */ `mutation UpdateSpaceObj($input: UpdateSpaceObjInput!) {
  updateSpaceObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateSpaceObjMutationVariables,
  APITypes.UpdateSpaceObjMutation
>;
export const deleteSpaceObj = /* GraphQL */ `mutation DeleteSpaceObj($input: DeleteSpaceObjInput!) {
  deleteSpaceObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteSpaceObjMutationVariables,
  APITypes.DeleteSpaceObjMutation
>;
export const createStormObj = /* GraphQL */ `mutation CreateStormObj($input: CreateStormObjInput!) {
  createStormObj(input: $input) {
    id
    chatIds
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStormObjMutationVariables,
  APITypes.CreateStormObjMutation
>;
export const updateStormObj = /* GraphQL */ `mutation UpdateStormObj($input: UpdateStormObjInput!) {
  updateStormObj(input: $input) {
    id
    chatIds
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStormObjMutationVariables,
  APITypes.UpdateStormObjMutation
>;
export const deleteStormObj = /* GraphQL */ `mutation DeleteStormObj($input: DeleteStormObjInput!) {
  deleteStormObj(input: $input) {
    id
    chatIds
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStormObjMutationVariables,
  APITypes.DeleteStormObjMutation
>;
export const createChatObj = /* GraphQL */ `mutation CreateChatObj($input: CreateChatObjInput!) {
  createChatObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateChatObjMutationVariables,
  APITypes.CreateChatObjMutation
>;
export const updateChatObj = /* GraphQL */ `mutation UpdateChatObj($input: UpdateChatObjInput!) {
  updateChatObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateChatObjMutationVariables,
  APITypes.UpdateChatObjMutation
>;
export const deleteChatObj = /* GraphQL */ `mutation DeleteChatObj($input: DeleteChatObjInput!) {
  deleteChatObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteChatObjMutationVariables,
  APITypes.DeleteChatObjMutation
>;
export const createDraftObj = /* GraphQL */ `mutation CreateDraftObj($input: CreateDraftObjInput!) {
  createDraftObj(input: $input) {
    id
    constellationIds
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDraftObjMutationVariables,
  APITypes.CreateDraftObjMutation
>;
export const updateDraftObj = /* GraphQL */ `mutation UpdateDraftObj($input: UpdateDraftObjInput!) {
  updateDraftObj(input: $input) {
    id
    constellationIds
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDraftObjMutationVariables,
  APITypes.UpdateDraftObjMutation
>;
export const deleteDraftObj = /* GraphQL */ `mutation DeleteDraftObj($input: DeleteDraftObjInput!) {
  deleteDraftObj(input: $input) {
    id
    constellationIds
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDraftObjMutationVariables,
  APITypes.DeleteDraftObjMutation
>;
export const createConstellationObj = /* GraphQL */ `mutation CreateConstellationObj($input: CreateConstellationObjInput!) {
  createConstellationObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateConstellationObjMutationVariables,
  APITypes.CreateConstellationObjMutation
>;
export const updateConstellationObj = /* GraphQL */ `mutation UpdateConstellationObj($input: UpdateConstellationObjInput!) {
  updateConstellationObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateConstellationObjMutationVariables,
  APITypes.UpdateConstellationObjMutation
>;
export const deleteConstellationObj = /* GraphQL */ `mutation DeleteConstellationObj($input: DeleteConstellationObjInput!) {
  deleteConstellationObj(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteConstellationObjMutationVariables,
  APITypes.DeleteConstellationObjMutation
>;
export const createFlowObj = /* GraphQL */ `mutation CreateFlowObj($input: CreateFlowObjInput!) {
  createFlowObj(input: $input) {
    id
    momentIds
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFlowObjMutationVariables,
  APITypes.CreateFlowObjMutation
>;
export const updateFlowObj = /* GraphQL */ `mutation UpdateFlowObj($input: UpdateFlowObjInput!) {
  updateFlowObj(input: $input) {
    id
    momentIds
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFlowObjMutationVariables,
  APITypes.UpdateFlowObjMutation
>;
export const deleteFlowObj = /* GraphQL */ `mutation DeleteFlowObj($input: DeleteFlowObjInput!) {
  deleteFlowObj(input: $input) {
    id
    momentIds
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFlowObjMutationVariables,
  APITypes.DeleteFlowObjMutation
>;
export const createMomentObj = /* GraphQL */ `mutation CreateMomentObj($input: CreateMomentObjInput!) {
  createMomentObj(input: $input) {
    id
    spaceId
    userId
    time
    title
    log
    file {
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
` as GeneratedMutation<
  APITypes.CreateMomentObjMutationVariables,
  APITypes.CreateMomentObjMutation
>;
export const updateMomentObj = /* GraphQL */ `mutation UpdateMomentObj($input: UpdateMomentObjInput!) {
  updateMomentObj(input: $input) {
    id
    spaceId
    userId
    time
    title
    log
    file {
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
` as GeneratedMutation<
  APITypes.UpdateMomentObjMutationVariables,
  APITypes.UpdateMomentObjMutation
>;
export const deleteMomentObj = /* GraphQL */ `mutation DeleteMomentObj($input: DeleteMomentObjInput!) {
  deleteMomentObj(input: $input) {
    id
    spaceId
    userId
    time
    title
    log
    file {
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
` as GeneratedMutation<
  APITypes.DeleteMomentObjMutationVariables,
  APITypes.DeleteMomentObjMutation
>;
export const createResourceObj = /* GraphQL */ `mutation CreateResourceObj($input: CreateResourceObjInput!) {
  createResourceObj(input: $input) {
    id
    label
    description
    file {
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
` as GeneratedMutation<
  APITypes.CreateResourceObjMutationVariables,
  APITypes.CreateResourceObjMutation
>;
export const updateResourceObj = /* GraphQL */ `mutation UpdateResourceObj($input: UpdateResourceObjInput!) {
  updateResourceObj(input: $input) {
    id
    label
    description
    file {
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
` as GeneratedMutation<
  APITypes.UpdateResourceObjMutationVariables,
  APITypes.UpdateResourceObjMutation
>;
export const deleteResourceObj = /* GraphQL */ `mutation DeleteResourceObj($input: DeleteResourceObjInput!) {
  deleteResourceObj(input: $input) {
    id
    label
    description
    file {
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
` as GeneratedMutation<
  APITypes.DeleteResourceObjMutationVariables,
  APITypes.DeleteResourceObjMutation
>;
export const createCollectionObj = /* GraphQL */ `mutation CreateCollectionObj($input: CreateCollectionObjInput!) {
  createCollectionObj(input: $input) {
    id
    name
    resourceIds
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
    name
    resourceIds
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
    name
    resourceIds
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCollectionObjMutationVariables,
  APITypes.DeleteCollectionObjMutation
>;
export const createGalleryObj = /* GraphQL */ `mutation CreateGalleryObj($input: CreateGalleryObjInput!) {
  createGalleryObj(input: $input) {
    id
    title
    description
    thumbnail {
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
` as GeneratedMutation<
  APITypes.CreateGalleryObjMutationVariables,
  APITypes.CreateGalleryObjMutation
>;
export const updateGalleryObj = /* GraphQL */ `mutation UpdateGalleryObj($input: UpdateGalleryObjInput!) {
  updateGalleryObj(input: $input) {
    id
    title
    description
    thumbnail {
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
` as GeneratedMutation<
  APITypes.UpdateGalleryObjMutationVariables,
  APITypes.UpdateGalleryObjMutation
>;
export const deleteGalleryObj = /* GraphQL */ `mutation DeleteGalleryObj($input: DeleteGalleryObjInput!) {
  deleteGalleryObj(input: $input) {
    id
    title
    description
    thumbnail {
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
` as GeneratedMutation<
  APITypes.DeleteGalleryObjMutationVariables,
  APITypes.DeleteGalleryObjMutation
>;
export const createUserObj = /* GraphQL */ `mutation CreateUserObj($input: CreateUserObjInput!) {
  createUserObj(input: $input) {
    id
    name
    email
    googleId
    accessToken
    profileImage {
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
` as GeneratedMutation<
  APITypes.CreateUserObjMutationVariables,
  APITypes.CreateUserObjMutation
>;
export const updateUserObj = /* GraphQL */ `mutation UpdateUserObj($input: UpdateUserObjInput!) {
  updateUserObj(input: $input) {
    id
    name
    email
    googleId
    accessToken
    profileImage {
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
` as GeneratedMutation<
  APITypes.UpdateUserObjMutationVariables,
  APITypes.UpdateUserObjMutation
>;
export const deleteUserObj = /* GraphQL */ `mutation DeleteUserObj($input: DeleteUserObjInput!) {
  deleteUserObj(input: $input) {
    id
    name
    email
    googleId
    accessToken
    profileImage {
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
` as GeneratedMutation<
  APITypes.DeleteUserObjMutationVariables,
  APITypes.DeleteUserObjMutation
>;
