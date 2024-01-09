/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProcessStep = /* GraphQL */ `mutation CreateProcessStep($input: CreateProcessStepInput!) {
  createProcessStep(input: $input) {
    id
    name
    description
    stormPoint {
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProcessStepMutationVariables,
  APITypes.CreateProcessStepMutation
>;
export const updateProcessStep = /* GraphQL */ `mutation UpdateProcessStep($input: UpdateProcessStepInput!) {
  updateProcessStep(input: $input) {
    id
    name
    description
    stormPoint {
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProcessStepMutationVariables,
  APITypes.UpdateProcessStepMutation
>;
export const deleteProcessStep = /* GraphQL */ `mutation DeleteProcessStep($input: DeleteProcessStepInput!) {
  deleteProcessStep(input: $input) {
    id
    name
    description
    stormPoint {
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProcessStepMutationVariables,
  APITypes.DeleteProcessStepMutation
>;
