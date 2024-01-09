/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProcessStepInput = {
  name: string,
  description: string,
};

export type ProcessStep = {
  __typename: "ProcessStep",
  id: string,
  name: string,
  description: string,
  stormPoint: StormPoint,
};

export type StormPoint = {
  __typename: "StormPoint",
  chats:  Array<StormChat >,
};

export type StormChat = {
  __typename: "StormChat",
  id: string,
  title: string,
  summary: string,
  messages:  Array<StormMessage >,
};

export type StormMessage = {
  __typename: "StormMessage",
  id: string,
  source: string,
  time: string,
  message: string,
};

export type UpdateProcessStepInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteProcessStepInput = {
  id: string,
};

export type Process = {
  __typename: "Process",
  steps:  Array<ProcessStep >,
};

export type TableProcessStepFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ProcessStepConnection = {
  __typename: "ProcessStepConnection",
  items?:  Array<ProcessStep | null > | null,
  nextToken?: string | null,
};

export type CreateProcessStepMutationVariables = {
  input: CreateProcessStepInput,
};

export type CreateProcessStepMutation = {
  createProcessStep?:  {
    __typename: "ProcessStep",
    id: string,
    name: string,
    description: string,
    stormPoint:  {
      __typename: "StormPoint",
    },
  } | null,
};

export type UpdateProcessStepMutationVariables = {
  input: UpdateProcessStepInput,
};

export type UpdateProcessStepMutation = {
  updateProcessStep?:  {
    __typename: "ProcessStep",
    id: string,
    name: string,
    description: string,
    stormPoint:  {
      __typename: "StormPoint",
    },
  } | null,
};

export type DeleteProcessStepMutationVariables = {
  input: DeleteProcessStepInput,
};

export type DeleteProcessStepMutation = {
  deleteProcessStep?:  {
    __typename: "ProcessStep",
    id: string,
    name: string,
    description: string,
    stormPoint:  {
      __typename: "StormPoint",
    },
  } | null,
};

export type GetProcessQueryVariables = {
};

export type GetProcessQuery = {
  getProcess?:  {
    __typename: "Process",
    steps:  Array< {
      __typename: "ProcessStep",
      id: string,
      name: string,
      description: string,
    } >,
  } | null,
};

export type GetProcessStepQueryVariables = {
  id: string,
};

export type GetProcessStepQuery = {
  getProcessStep?:  {
    __typename: "ProcessStep",
    id: string,
    name: string,
    description: string,
    stormPoint:  {
      __typename: "StormPoint",
    },
  } | null,
};

export type ListProcessStepsQueryVariables = {
  filter?: TableProcessStepFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProcessStepsQuery = {
  listProcessSteps?:  {
    __typename: "ProcessStepConnection",
    items?:  Array< {
      __typename: "ProcessStep",
      id: string,
      name: string,
      description: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProcessStepSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
};

export type OnCreateProcessStepSubscription = {
  onCreateProcessStep?:  {
    __typename: "ProcessStep",
    id: string,
    name: string,
    description: string,
    stormPoint:  {
      __typename: "StormPoint",
    },
  } | null,
};

export type OnUpdateProcessStepSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
};

export type OnUpdateProcessStepSubscription = {
  onUpdateProcessStep?:  {
    __typename: "ProcessStep",
    id: string,
    name: string,
    description: string,
    stormPoint:  {
      __typename: "StormPoint",
    },
  } | null,
};

export type OnDeleteProcessStepSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
};

export type OnDeleteProcessStepSubscription = {
  onDeleteProcessStep?:  {
    __typename: "ProcessStep",
    id: string,
    name: string,
    description: string,
    stormPoint:  {
      __typename: "StormPoint",
    },
  } | null,
};
