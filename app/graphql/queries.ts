/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProcess = /* GraphQL */ `query GetProcess {
  getProcess {
    steps {
      id
      name
      description
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProcessQueryVariables,
  APITypes.GetProcessQuery
>;
export const getProcessStep = /* GraphQL */ `query GetProcessStep($id: ID!) {
  getProcessStep(id: $id) {
    id
    name
    description
    stormPoint {
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProcessStepQueryVariables,
  APITypes.GetProcessStepQuery
>;
export const listProcessSteps = /* GraphQL */ `query ListProcessSteps(
  $filter: TableProcessStepFilterInput
  $limit: Int
  $nextToken: String
) {
  listProcessSteps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProcessStepsQueryVariables,
  APITypes.ListProcessStepsQuery
>;
