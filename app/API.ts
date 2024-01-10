/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSpaceObjInput = {
  title: string,
  description: string,
  chapters: Array< CreateChapterObjInput >,
};

export type CreateChapterObjInput = {
  name: string,
  description: string,
  stormId: string,
  draftId: string,
  flowId: string,
  seaId: string,
};

export type SpaceObj = {
  __typename: "SpaceObj",
  id: string,
  title: string,
  description: string,
  chapters:  Array<ChapterObj >,
};

export type ChapterObj = {
  __typename: "ChapterObj",
  id: string,
  name: string,
  description: string,
  stormId: string,
  draftId: string,
  flowId: string,
  seaId: string,
};

export type UpdateSpaceObjInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteSpaceObjInput = {
  id: string,
};

export type UpdateChapterObjInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  stormId?: string | null,
  draftId?: string | null,
  flowId?: string | null,
  seaId?: string | null,
};

export type DeleteChapterObjInput = {
  id: string,
};

export type TableSpaceObjFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
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

export type SpaceObjConnection = {
  __typename: "SpaceObjConnection",
  items?:  Array<SpaceObj | null > | null,
  nextToken?: string | null,
};

export type TableChapterObjFilterInput = {
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  stormId?: TableIDFilterInput | null,
  draftId?: TableIDFilterInput | null,
  flowId?: TableIDFilterInput | null,
  seaId?: TableIDFilterInput | null,
};

export type ChapterObjConnection = {
  __typename: "ChapterObjConnection",
  items?:  Array<ChapterObj | null > | null,
  nextToken?: string | null,
};

export type CreateSpaceObjMutationVariables = {
  input: CreateSpaceObjInput,
};

export type CreateSpaceObjMutation = {
  createSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    title: string,
    description: string,
    chapters:  Array< {
      __typename: "ChapterObj",
      id: string,
      name: string,
      description: string,
      stormId: string,
      draftId: string,
      flowId: string,
      seaId: string,
    } >,
  } | null,
};

export type UpdateSpaceObjMutationVariables = {
  input: UpdateSpaceObjInput,
};

export type UpdateSpaceObjMutation = {
  updateSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    title: string,
    description: string,
    chapters:  Array< {
      __typename: "ChapterObj",
      id: string,
      name: string,
      description: string,
      stormId: string,
      draftId: string,
      flowId: string,
      seaId: string,
    } >,
  } | null,
};

export type DeleteSpaceObjMutationVariables = {
  input: DeleteSpaceObjInput,
};

export type DeleteSpaceObjMutation = {
  deleteSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    title: string,
    description: string,
    chapters:  Array< {
      __typename: "ChapterObj",
      id: string,
      name: string,
      description: string,
      stormId: string,
      draftId: string,
      flowId: string,
      seaId: string,
    } >,
  } | null,
};

export type CreateChapterObjMutationVariables = {
  input: CreateChapterObjInput,
};

export type CreateChapterObjMutation = {
  createChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    name: string,
    description: string,
    stormId: string,
    draftId: string,
    flowId: string,
    seaId: string,
  } | null,
};

export type UpdateChapterObjMutationVariables = {
  input: UpdateChapterObjInput,
};

export type UpdateChapterObjMutation = {
  updateChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    name: string,
    description: string,
    stormId: string,
    draftId: string,
    flowId: string,
    seaId: string,
  } | null,
};

export type DeleteChapterObjMutationVariables = {
  input: DeleteChapterObjInput,
};

export type DeleteChapterObjMutation = {
  deleteChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    name: string,
    description: string,
    stormId: string,
    draftId: string,
    flowId: string,
    seaId: string,
  } | null,
};

export type GetChapterQueryVariables = {
};

export type GetChapterQuery = {
  getChapter?:  {
    __typename: "ChapterObj",
    id: string,
    name: string,
    description: string,
    stormId: string,
    draftId: string,
    flowId: string,
    seaId: string,
  } | null,
};

export type GetSpaceObjQueryVariables = {
  id: string,
};

export type GetSpaceObjQuery = {
  getSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    title: string,
    description: string,
    chapters:  Array< {
      __typename: "ChapterObj",
      id: string,
      name: string,
      description: string,
      stormId: string,
      draftId: string,
      flowId: string,
      seaId: string,
    } >,
  } | null,
};

export type ListSpaceObjsQueryVariables = {
  filter?: TableSpaceObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpaceObjsQuery = {
  listSpaceObjs?:  {
    __typename: "SpaceObjConnection",
    items?:  Array< {
      __typename: "SpaceObj",
      id: string,
      title: string,
      description: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChapterObjQueryVariables = {
  id: string,
};

export type GetChapterObjQuery = {
  getChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    name: string,
    description: string,
    stormId: string,
    draftId: string,
    flowId: string,
    seaId: string,
  } | null,
};

export type ListChapterObjsQueryVariables = {
  filter?: TableChapterObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChapterObjsQuery = {
  listChapterObjs?:  {
    __typename: "ChapterObjConnection",
    items?:  Array< {
      __typename: "ChapterObj",
      id: string,
      name: string,
      description: string,
      stormId: string,
      draftId: string,
      flowId: string,
      seaId: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSpaceObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateSpaceObjSubscription = {
  onCreateSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    title: string,
    description: string,
    chapters:  Array< {
      __typename: "ChapterObj",
      id: string,
      name: string,
      description: string,
      stormId: string,
      draftId: string,
      flowId: string,
      seaId: string,
    } >,
  } | null,
};

export type OnUpdateSpaceObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateSpaceObjSubscription = {
  onUpdateSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    title: string,
    description: string,
    chapters:  Array< {
      __typename: "ChapterObj",
      id: string,
      name: string,
      description: string,
      stormId: string,
      draftId: string,
      flowId: string,
      seaId: string,
    } >,
  } | null,
};

export type OnDeleteSpaceObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnDeleteSpaceObjSubscription = {
  onDeleteSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    title: string,
    description: string,
    chapters:  Array< {
      __typename: "ChapterObj",
      id: string,
      name: string,
      description: string,
      stormId: string,
      draftId: string,
      flowId: string,
      seaId: string,
    } >,
  } | null,
};

export type OnCreateChapterObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  stormId?: string | null,
  draftId?: string | null,
};

export type OnCreateChapterObjSubscription = {
  onCreateChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    name: string,
    description: string,
    stormId: string,
    draftId: string,
    flowId: string,
    seaId: string,
  } | null,
};

export type OnUpdateChapterObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  stormId?: string | null,
  draftId?: string | null,
};

export type OnUpdateChapterObjSubscription = {
  onUpdateChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    name: string,
    description: string,
    stormId: string,
    draftId: string,
    flowId: string,
    seaId: string,
  } | null,
};

export type OnDeleteChapterObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  stormId?: string | null,
  draftId?: string | null,
};

export type OnDeleteChapterObjSubscription = {
  onDeleteChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    name: string,
    description: string,
    stormId: string,
    draftId: string,
    flowId: string,
    seaId: string,
  } | null,
};
