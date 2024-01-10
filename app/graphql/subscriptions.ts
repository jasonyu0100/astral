/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSpaceObj = /* GraphQL */ `subscription OnCreateSpaceObj($id: ID, $title: String, $description: String) {
  onCreateSpaceObj(id: $id, title: $title, description: $description) {
    id
    title
    description
    chapters {
      id
      name
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
export const onUpdateSpaceObj = /* GraphQL */ `subscription OnUpdateSpaceObj($id: ID, $title: String, $description: String) {
  onUpdateSpaceObj(id: $id, title: $title, description: $description) {
    id
    title
    description
    chapters {
      id
      name
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
export const onDeleteSpaceObj = /* GraphQL */ `subscription OnDeleteSpaceObj($id: ID, $title: String, $description: String) {
  onDeleteSpaceObj(id: $id, title: $title, description: $description) {
    id
    title
    description
    chapters {
      id
      name
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
export const onCreateChapterObj = /* GraphQL */ `subscription OnCreateChapterObj(
  $id: ID
  $name: String
  $description: String
  $stormId: ID
  $draftId: ID
) {
  onCreateChapterObj(
    id: $id
    name: $name
    description: $description
    stormId: $stormId
    draftId: $draftId
  ) {
    id
    name
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
  $id: ID
  $name: String
  $description: String
  $stormId: ID
  $draftId: ID
) {
  onUpdateChapterObj(
    id: $id
    name: $name
    description: $description
    stormId: $stormId
    draftId: $draftId
  ) {
    id
    name
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
  $id: ID
  $name: String
  $description: String
  $stormId: ID
  $draftId: ID
) {
  onDeleteChapterObj(
    id: $id
    name: $name
    description: $description
    stormId: $stormId
    draftId: $draftId
  ) {
    id
    name
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
export const onCreateStormObj = /* GraphQL */ `subscription OnCreateStormObj($id: ID, $chatIds: [ID!]) {
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
export const onUpdateStormObj = /* GraphQL */ `subscription OnUpdateStormObj($id: ID, $chatIds: [ID!]) {
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
export const onDeleteStormObj = /* GraphQL */ `subscription OnDeleteStormObj($id: ID, $chatIds: [ID!]) {
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
export const onCreateChatObj = /* GraphQL */ `subscription OnCreateChatObj($id: ID, $title: String, $summary: String) {
  onCreateChatObj(id: $id, title: $title, summary: $summary) {
    id
    title
    summary
    messages {
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
export const onUpdateChatObj = /* GraphQL */ `subscription OnUpdateChatObj($id: ID, $title: String, $summary: String) {
  onUpdateChatObj(id: $id, title: $title, summary: $summary) {
    id
    title
    summary
    messages {
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
export const onDeleteChatObj = /* GraphQL */ `subscription OnDeleteChatObj($id: ID, $title: String, $summary: String) {
  onDeleteChatObj(id: $id, title: $title, summary: $summary) {
    id
    title
    summary
    messages {
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
