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
