/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProcessStep = /* GraphQL */ `subscription OnCreateProcessStep($id: ID, $name: String, $description: String) {
  onCreateProcessStep(id: $id, name: $name, description: $description) {
    id
    name
    description
    stormPoint {
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProcessStepSubscriptionVariables,
  APITypes.OnCreateProcessStepSubscription
>;
export const onUpdateProcessStep = /* GraphQL */ `subscription OnUpdateProcessStep($id: ID, $name: String, $description: String) {
  onUpdateProcessStep(id: $id, name: $name, description: $description) {
    id
    name
    description
    stormPoint {
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProcessStepSubscriptionVariables,
  APITypes.OnUpdateProcessStepSubscription
>;
export const onDeleteProcessStep = /* GraphQL */ `subscription OnDeleteProcessStep($id: ID, $name: String, $description: String) {
  onDeleteProcessStep(id: $id, name: $name, description: $description) {
    id
    name
    description
    stormPoint {
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProcessStepSubscriptionVariables,
  APITypes.OnDeleteProcessStepSubscription
>;
