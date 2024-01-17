/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChapterObjInput = {
  title: string,
  description: string,
  stormId: string,
  draftId: string,
  flowId: string,
  seaId: string,
};

export type ChapterObj = {
  __typename: "ChapterObj",
  id: string,
  title: string,
  description: string,
  stormId: string,
  draftId: string,
  flowId: string,
  seaId: string,
};

export type UpdateChapterObjInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  stormId?: string | null,
  draftId?: string | null,
  flowId?: string | null,
  seaId?: string | null,
};

export type DeleteChapterObjInput = {
  id: string,
};

export type CreateSpaceObjInput = {
  title: string,
  description: string,
};

export type SpaceObj = {
  __typename: "SpaceObj",
  id: string,
  title: string,
  description: string,
  chapters:  Array<ChapterObj >,
};

export type UpdateSpaceObjInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteSpaceObjInput = {
  id: string,
};

export type CreateStormObjInput = {
  chatIds: Array< string >,
};

export type StormObj = {
  __typename: "StormObj",
  id: string,
  chatIds: Array< string >,
};

export type UpdateStormObjInput = {
  id: string,
  chatIds?: Array< string > | null,
};

export type DeleteStormObjInput = {
  id: string,
};

export type CreateChatObjInput = {
  title: string,
  summary: string,
  time: string,
};

export type ChatObj = {
  __typename: "ChatObj",
  id: string,
  title: string,
  summary: string,
  time: string,
  messages:  Array<MessageObj >,
};

export type MessageObj = {
  __typename: "MessageObj",
  id: string,
  source: string,
  time: string,
  message: string,
};

export type UpdateChatObjInput = {
  id: string,
  title?: string | null,
  summary?: string | null,
  time?: string | null,
  messages?: Array< UpdateMessageObjInput > | null,
};

export type UpdateMessageObjInput = {
  id: string,
  source?: string | null,
  time?: string | null,
  message?: string | null,
};

export type DeleteChatObjInput = {
  id: string,
};

export type CreateDraftObjInput = {
  constellationIds: Array< string >,
};

export type DraftObj = {
  __typename: "DraftObj",
  id: string,
  constellationIds: Array< string >,
};

export type UpdateDraftObjInput = {
  id: string,
  constellationIds?: Array< string > | null,
};

export type DeleteDraftObjInput = {
  id: string,
};

export type CreateConstellationObjInput = {
  title: string,
  description: string,
};

export type ConstellationObj = {
  __typename: "ConstellationObj",
  id: string,
  title: string,
  description: string,
  stars:  Array<StarObj >,
};

export type StarObj = {
  __typename: "StarObj",
  id: string,
  name: string,
  x: number,
  y: number,
  file: FileObj,
};

export type FileObj = {
  __typename: "FileObj",
  id: string,
  name: string,
  src: string,
  type: string,
  size?: number | null,
};

export type UpdateConstellationObjInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteConstellationObjInput = {
  id: string,
};

export type CreateFlowObjInput = {
  momentIds: Array< string >,
};

export type FlowObj = {
  __typename: "FlowObj",
  id: string,
  momentIds: Array< string >,
};

export type UpdateFlowObjInput = {
  id: string,
  momentIds?: Array< string > | null,
};

export type DeleteFlowObjInput = {
  id: string,
};

export type CreateMomentObjInput = {
  spaceId: string,
  userId: string,
  time: string,
  title: string,
  log: string,
  visibility: string,
};

export type MomentObj = {
  __typename: "MomentObj",
  id: string,
  spaceId: string,
  userId: string,
  time: string,
  title: string,
  log: string,
  file?: FileObj | null,
  visibility: string,
  comments:  Array<CommentObj >,
};

export type CommentObj = {
  __typename: "CommentObj",
  id: string,
  time: string,
  content: string,
  userId: string,
};

export type UpdateMomentObjInput = {
  id: string,
  spaceId?: string | null,
  userId?: string | null,
  time?: string | null,
  title?: string | null,
  log?: string | null,
  file?: UpdateFileObjInput | null,
  comments?: Array< UpdateCommentObjInput > | null,
};

export type UpdateFileObjInput = {
  id: string,
  name?: string | null,
  src?: string | null,
  type?: string | null,
  size?: number | null,
};

export type UpdateCommentObjInput = {
  id: string,
  time?: string | null,
  content?: string | null,
  userId?: string | null,
};

export type DeleteMomentObjInput = {
  id: string,
};

export type CreateResourceObjInput = {
  label: string,
  description: string,
};

export type ResourceObj = {
  __typename: "ResourceObj",
  id: string,
  label: string,
  description: string,
  file: FileObj,
};

export type UpdateResourceObjInput = {
  id: string,
  label?: string | null,
  description?: string | null,
  file?: UpdateFileObjInput | null,
};

export type DeleteResourceObjInput = {
  id: string,
};

export type CreateCollectionObjInput = {
  name: string,
  resourceIds: Array< string >,
};

export type CollectionObj = {
  __typename: "CollectionObj",
  id: string,
  name: string,
  resourceIds: Array< string >,
};

export type UpdateCollectionObjInput = {
  id: string,
  name?: string | null,
  resourceIds?: Array< string > | null,
};

export type DeleteCollectionObjInput = {
  id: string,
};

export type CreateGalleryObjInput = {
  title: string,
  description: string,
  collectionIds: Array< string >,
};

export type GalleryObj = {
  __typename: "GalleryObj",
  id: string,
  title: string,
  description: string,
  thumbnail: FileObj,
  collectionIds: Array< string >,
};

export type UpdateGalleryObjInput = {
  id: string,
  title?: string | null,
  thumbnail?: UpdateFileObjInput | null,
  description?: string | null,
  collectionIds?: Array< string > | null,
};

export type DeleteGalleryObjInput = {
  id: string,
};

export type CreateUserObjInput = {
  fname: string,
  lname: string,
  passwordHash?: string | null,
  profileImage?: CreateFileObjInput | null,
  email: string,
  googleId?: string | null,
  spaceIds: Array< string >,
  galleryIds: Array< string >,
};

export type CreateFileObjInput = {
  id: string,
  name?: string | null,
  src: string,
  type: string,
  size?: number | null,
};

export type UserObj = {
  __typename: "UserObj",
  id: string,
  fname: string,
  lname: string,
  email: string,
  passwordHash?: string | null,
  googleId?: string | null,
  profileImage?: FileObj | null,
  spaceIds: Array< string >,
  galleryIds: Array< string >,
};

export type UpdateUserObjInput = {
  id: string,
  fname?: string | null,
  lname?: string | null,
  passwordHash?: string | null,
  profileImage?: UpdateFileObjInput | null,
  email?: string | null,
  googleId?: string | null,
  spaceIds?: Array< string > | null,
  galleryIds?: Array< string > | null,
};

export type DeleteUserObjInput = {
  id: string,
};

export type CreateReservationObjInput = {
  fname: string,
  lname: string,
  email: string,
};

export type ReservationObj = {
  __typename: "ReservationObj",
  id: string,
  fname: string,
  lname: string,
  email: string,
};

export type UpdateReservationObjInput = {
  id: string,
  fname?: string | null,
  lname?: string | null,
  email?: string | null,
};

export type DeleteReservationObjInput = {
  id: string,
};

export type TableChapterObjFilterInput = {
  id?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  stormId?: TableStringFilterInput | null,
  draftId?: TableStringFilterInput | null,
  flowId?: TableStringFilterInput | null,
  seaId?: TableStringFilterInput | null,
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

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ChapterObjConnection = {
  __typename: "ChapterObjConnection",
  items?:  Array<ChapterObj | null > | null,
  nextToken?: string | null,
};

export type TableSpaceObjFilterInput = {
  id?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
};

export type SpaceObjConnection = {
  __typename: "SpaceObjConnection",
  items?:  Array<SpaceObj | null > | null,
  nextToken?: string | null,
};

export type TableStormObjFilterInput = {
  id?: TableStringFilterInput | null,
  chatIds?: TableStringFilterInput | null,
};

export type StormObjConnection = {
  __typename: "StormObjConnection",
  items?:  Array<StormObj | null > | null,
  nextToken?: string | null,
};

export type TableChatObjFilterInput = {
  id?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  summary?: TableStringFilterInput | null,
  time?: TableStringFilterInput | null,
};

export type ChatObjConnection = {
  __typename: "ChatObjConnection",
  items?:  Array<ChatObj | null > | null,
  nextToken?: string | null,
};

export type TableDraftObjFilterInput = {
  id?: TableStringFilterInput | null,
  constellationIds?: TableStringFilterInput | null,
};

export type DraftObjConnection = {
  __typename: "DraftObjConnection",
  items?:  Array<DraftObj | null > | null,
  nextToken?: string | null,
};

export type TableConstellationObjFilterInput = {
  id?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
};

export type ConstellationObjConnection = {
  __typename: "ConstellationObjConnection",
  items?:  Array<ConstellationObj | null > | null,
  nextToken?: string | null,
};

export type TableFlowObjFilterInput = {
  id?: TableStringFilterInput | null,
  momentIds?: TableStringFilterInput | null,
};

export type FlowObjConnection = {
  __typename: "FlowObjConnection",
  items?:  Array<FlowObj | null > | null,
  nextToken?: string | null,
};

export type TableMomentObjFilterInput = {
  id?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  time?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  log?: TableStringFilterInput | null,
  visibility?: TableStringFilterInput | null,
};

export type MomentObjConnection = {
  __typename: "MomentObjConnection",
  items?:  Array<MomentObj | null > | null,
  nextToken?: string | null,
};

export type TableResourceObjFilterInput = {
  id?: TableStringFilterInput | null,
  label?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
};

export type ResourceObjConnection = {
  __typename: "ResourceObjConnection",
  items?:  Array<ResourceObj | null > | null,
  nextToken?: string | null,
};

export type TableCollectionObjFilterInput = {
  id?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  resourceIds?: TableStringFilterInput | null,
};

export type CollectionObjConnection = {
  __typename: "CollectionObjConnection",
  items?:  Array<CollectionObj | null > | null,
  nextToken?: string | null,
};

export type TableGalleryObjFilterInput = {
  id?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  collectionIds?: TableStringFilterInput | null,
};

export type GalleryObjConnection = {
  __typename: "GalleryObjConnection",
  items?:  Array<GalleryObj | null > | null,
  nextToken?: string | null,
};

export type TableUserObjFilterInput = {
  id?: TableStringFilterInput | null,
  fname?: TableStringFilterInput | null,
  lname?: TableStringFilterInput | null,
  email?: TableStringFilterInput | null,
  googleId?: TableStringFilterInput | null,
  spaceIds?: TableStringFilterInput | null,
  galleryIds?: TableStringFilterInput | null,
};

export type UserObjConnection = {
  __typename: "UserObjConnection",
  items?:  Array<UserObj | null > | null,
  nextToken?: string | null,
};

export type TableReservationObjFilterInput = {
  id?: TableStringFilterInput | null,
  fname?: TableStringFilterInput | null,
  lname?: TableStringFilterInput | null,
  email?: TableStringFilterInput | null,
};

export type ReservationObjConnection = {
  __typename: "ReservationObjConnection",
  items?:  Array<ReservationObj | null > | null,
  nextToken?: string | null,
};

export type CreateChapterObjMutationVariables = {
  input: CreateChapterObjInput,
};

export type CreateChapterObjMutation = {
  createChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    title: string,
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
    title: string,
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
    title: string,
    description: string,
    stormId: string,
    draftId: string,
    flowId: string,
    seaId: string,
  } | null,
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
      title: string,
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
      title: string,
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
      title: string,
      description: string,
      stormId: string,
      draftId: string,
      flowId: string,
      seaId: string,
    } >,
  } | null,
};

export type CreateStormObjMutationVariables = {
  input: CreateStormObjInput,
};

export type CreateStormObjMutation = {
  createStormObj?:  {
    __typename: "StormObj",
    id: string,
    chatIds: Array< string >,
  } | null,
};

export type UpdateStormObjMutationVariables = {
  input: UpdateStormObjInput,
};

export type UpdateStormObjMutation = {
  updateStormObj?:  {
    __typename: "StormObj",
    id: string,
    chatIds: Array< string >,
  } | null,
};

export type DeleteStormObjMutationVariables = {
  input: DeleteStormObjInput,
};

export type DeleteStormObjMutation = {
  deleteStormObj?:  {
    __typename: "StormObj",
    id: string,
    chatIds: Array< string >,
  } | null,
};

export type CreateChatObjMutationVariables = {
  input: CreateChatObjInput,
};

export type CreateChatObjMutation = {
  createChatObj?:  {
    __typename: "ChatObj",
    id: string,
    title: string,
    summary: string,
    time: string,
    messages:  Array< {
      __typename: "MessageObj",
      id: string,
      source: string,
      time: string,
      message: string,
    } >,
  } | null,
};

export type UpdateChatObjMutationVariables = {
  input: UpdateChatObjInput,
};

export type UpdateChatObjMutation = {
  updateChatObj?:  {
    __typename: "ChatObj",
    id: string,
    title: string,
    summary: string,
    time: string,
    messages:  Array< {
      __typename: "MessageObj",
      id: string,
      source: string,
      time: string,
      message: string,
    } >,
  } | null,
};

export type DeleteChatObjMutationVariables = {
  input: DeleteChatObjInput,
};

export type DeleteChatObjMutation = {
  deleteChatObj?:  {
    __typename: "ChatObj",
    id: string,
    title: string,
    summary: string,
    time: string,
    messages:  Array< {
      __typename: "MessageObj",
      id: string,
      source: string,
      time: string,
      message: string,
    } >,
  } | null,
};

export type CreateDraftObjMutationVariables = {
  input: CreateDraftObjInput,
};

export type CreateDraftObjMutation = {
  createDraftObj?:  {
    __typename: "DraftObj",
    id: string,
    constellationIds: Array< string >,
  } | null,
};

export type UpdateDraftObjMutationVariables = {
  input: UpdateDraftObjInput,
};

export type UpdateDraftObjMutation = {
  updateDraftObj?:  {
    __typename: "DraftObj",
    id: string,
    constellationIds: Array< string >,
  } | null,
};

export type DeleteDraftObjMutationVariables = {
  input: DeleteDraftObjInput,
};

export type DeleteDraftObjMutation = {
  deleteDraftObj?:  {
    __typename: "DraftObj",
    id: string,
    constellationIds: Array< string >,
  } | null,
};

export type CreateConstellationObjMutationVariables = {
  input: CreateConstellationObjInput,
};

export type CreateConstellationObjMutation = {
  createConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    title: string,
    description: string,
    stars:  Array< {
      __typename: "StarObj",
      id: string,
      name: string,
      x: number,
      y: number,
    } >,
  } | null,
};

export type UpdateConstellationObjMutationVariables = {
  input: UpdateConstellationObjInput,
};

export type UpdateConstellationObjMutation = {
  updateConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    title: string,
    description: string,
    stars:  Array< {
      __typename: "StarObj",
      id: string,
      name: string,
      x: number,
      y: number,
    } >,
  } | null,
};

export type DeleteConstellationObjMutationVariables = {
  input: DeleteConstellationObjInput,
};

export type DeleteConstellationObjMutation = {
  deleteConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    title: string,
    description: string,
    stars:  Array< {
      __typename: "StarObj",
      id: string,
      name: string,
      x: number,
      y: number,
    } >,
  } | null,
};

export type CreateFlowObjMutationVariables = {
  input: CreateFlowObjInput,
};

export type CreateFlowObjMutation = {
  createFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    momentIds: Array< string >,
  } | null,
};

export type UpdateFlowObjMutationVariables = {
  input: UpdateFlowObjInput,
};

export type UpdateFlowObjMutation = {
  updateFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    momentIds: Array< string >,
  } | null,
};

export type DeleteFlowObjMutationVariables = {
  input: DeleteFlowObjInput,
};

export type DeleteFlowObjMutation = {
  deleteFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    momentIds: Array< string >,
  } | null,
};

export type CreateMomentObjMutationVariables = {
  input: CreateMomentObjInput,
};

export type CreateMomentObjMutation = {
  createMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    log: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    } | null,
    visibility: string,
    comments:  Array< {
      __typename: "CommentObj",
      id: string,
      time: string,
      content: string,
      userId: string,
    } >,
  } | null,
};

export type UpdateMomentObjMutationVariables = {
  input: UpdateMomentObjInput,
};

export type UpdateMomentObjMutation = {
  updateMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    log: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    } | null,
    visibility: string,
    comments:  Array< {
      __typename: "CommentObj",
      id: string,
      time: string,
      content: string,
      userId: string,
    } >,
  } | null,
};

export type DeleteMomentObjMutationVariables = {
  input: DeleteMomentObjInput,
};

export type DeleteMomentObjMutation = {
  deleteMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    log: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    } | null,
    visibility: string,
    comments:  Array< {
      __typename: "CommentObj",
      id: string,
      time: string,
      content: string,
      userId: string,
    } >,
  } | null,
};

export type CreateResourceObjMutationVariables = {
  input: CreateResourceObjInput,
};

export type CreateResourceObjMutation = {
  createResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    label: string,
    description: string,
    file:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    },
  } | null,
};

export type UpdateResourceObjMutationVariables = {
  input: UpdateResourceObjInput,
};

export type UpdateResourceObjMutation = {
  updateResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    label: string,
    description: string,
    file:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    },
  } | null,
};

export type DeleteResourceObjMutationVariables = {
  input: DeleteResourceObjInput,
};

export type DeleteResourceObjMutation = {
  deleteResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    label: string,
    description: string,
    file:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    },
  } | null,
};

export type CreateCollectionObjMutationVariables = {
  input: CreateCollectionObjInput,
};

export type CreateCollectionObjMutation = {
  createCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    name: string,
    resourceIds: Array< string >,
  } | null,
};

export type UpdateCollectionObjMutationVariables = {
  input: UpdateCollectionObjInput,
};

export type UpdateCollectionObjMutation = {
  updateCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    name: string,
    resourceIds: Array< string >,
  } | null,
};

export type DeleteCollectionObjMutationVariables = {
  input: DeleteCollectionObjInput,
};

export type DeleteCollectionObjMutation = {
  deleteCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    name: string,
    resourceIds: Array< string >,
  } | null,
};

export type CreateGalleryObjMutationVariables = {
  input: CreateGalleryObjInput,
};

export type CreateGalleryObjMutation = {
  createGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    },
    collectionIds: Array< string >,
  } | null,
};

export type UpdateGalleryObjMutationVariables = {
  input: UpdateGalleryObjInput,
};

export type UpdateGalleryObjMutation = {
  updateGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    },
    collectionIds: Array< string >,
  } | null,
};

export type DeleteGalleryObjMutationVariables = {
  input: DeleteGalleryObjInput,
};

export type DeleteGalleryObjMutation = {
  deleteGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    },
    collectionIds: Array< string >,
  } | null,
};

export type CreateUserObjMutationVariables = {
  input: CreateUserObjInput,
};

export type CreateUserObjMutation = {
  createUserObj?:  {
    __typename: "UserObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
    passwordHash?: string | null,
    googleId?: string | null,
    profileImage?:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    } | null,
    spaceIds: Array< string >,
    galleryIds: Array< string >,
  } | null,
};

export type UpdateUserObjMutationVariables = {
  input: UpdateUserObjInput,
};

export type UpdateUserObjMutation = {
  updateUserObj?:  {
    __typename: "UserObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
    passwordHash?: string | null,
    googleId?: string | null,
    profileImage?:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    } | null,
    spaceIds: Array< string >,
    galleryIds: Array< string >,
  } | null,
};

export type DeleteUserObjMutationVariables = {
  input: DeleteUserObjInput,
};

export type DeleteUserObjMutation = {
  deleteUserObj?:  {
    __typename: "UserObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
    passwordHash?: string | null,
    googleId?: string | null,
    profileImage?:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    } | null,
    spaceIds: Array< string >,
    galleryIds: Array< string >,
  } | null,
};

export type CreateReservationObjMutationVariables = {
  input: CreateReservationObjInput,
};

export type CreateReservationObjMutation = {
  createReservationObj?:  {
    __typename: "ReservationObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
  } | null,
};

export type UpdateReservationObjMutationVariables = {
  input: UpdateReservationObjInput,
};

export type UpdateReservationObjMutation = {
  updateReservationObj?:  {
    __typename: "ReservationObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
  } | null,
};

export type DeleteReservationObjMutationVariables = {
  input: DeleteReservationObjInput,
};

export type DeleteReservationObjMutation = {
  deleteReservationObj?:  {
    __typename: "ReservationObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
  } | null,
};

export type GetSpaceQueryVariables = {
};

export type GetSpaceQuery = {
  getSpace?:  {
    __typename: "SpaceObj",
    id: string,
    title: string,
    description: string,
    chapters:  Array< {
      __typename: "ChapterObj",
      id: string,
      title: string,
      description: string,
      stormId: string,
      draftId: string,
      flowId: string,
      seaId: string,
    } >,
  } | null,
};

export type GetChapterObjQueryVariables = {
  id: string,
};

export type GetChapterObjQuery = {
  getChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    title: string,
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
      title: string,
      description: string,
      stormId: string,
      draftId: string,
      flowId: string,
      seaId: string,
    } | null > | null,
    nextToken?: string | null,
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
      title: string,
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

export type GetStormObjQueryVariables = {
  id: string,
};

export type GetStormObjQuery = {
  getStormObj?:  {
    __typename: "StormObj",
    id: string,
    chatIds: Array< string >,
  } | null,
};

export type ListStormObjsQueryVariables = {
  filter?: TableStormObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStormObjsQuery = {
  listStormObjs?:  {
    __typename: "StormObjConnection",
    items?:  Array< {
      __typename: "StormObj",
      id: string,
      chatIds: Array< string >,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatObjQueryVariables = {
  id: string,
};

export type GetChatObjQuery = {
  getChatObj?:  {
    __typename: "ChatObj",
    id: string,
    title: string,
    summary: string,
    time: string,
    messages:  Array< {
      __typename: "MessageObj",
      id: string,
      source: string,
      time: string,
      message: string,
    } >,
  } | null,
};

export type ListChatObjsQueryVariables = {
  filter?: TableChatObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatObjsQuery = {
  listChatObjs?:  {
    __typename: "ChatObjConnection",
    items?:  Array< {
      __typename: "ChatObj",
      id: string,
      title: string,
      summary: string,
      time: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDraftObjQueryVariables = {
  id: string,
};

export type GetDraftObjQuery = {
  getDraftObj?:  {
    __typename: "DraftObj",
    id: string,
    constellationIds: Array< string >,
  } | null,
};

export type ListDraftObjsQueryVariables = {
  filter?: TableDraftObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDraftObjsQuery = {
  listDraftObjs?:  {
    __typename: "DraftObjConnection",
    items?:  Array< {
      __typename: "DraftObj",
      id: string,
      constellationIds: Array< string >,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetConstellationObjQueryVariables = {
  id: string,
};

export type GetConstellationObjQuery = {
  getConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    title: string,
    description: string,
    stars:  Array< {
      __typename: "StarObj",
      id: string,
      name: string,
      x: number,
      y: number,
    } >,
  } | null,
};

export type ListConstellationObjsQueryVariables = {
  filter?: TableConstellationObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConstellationObjsQuery = {
  listConstellationObjs?:  {
    __typename: "ConstellationObjConnection",
    items?:  Array< {
      __typename: "ConstellationObj",
      id: string,
      title: string,
      description: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFlowObjQueryVariables = {
  id: string,
};

export type GetFlowObjQuery = {
  getFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    momentIds: Array< string >,
  } | null,
};

export type ListFlowObjsQueryVariables = {
  filter?: TableFlowObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFlowObjsQuery = {
  listFlowObjs?:  {
    __typename: "FlowObjConnection",
    items?:  Array< {
      __typename: "FlowObj",
      id: string,
      momentIds: Array< string >,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMomentObjQueryVariables = {
  id: string,
};

export type GetMomentObjQuery = {
  getMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    log: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    } | null,
    visibility: string,
    comments:  Array< {
      __typename: "CommentObj",
      id: string,
      time: string,
      content: string,
      userId: string,
    } >,
  } | null,
};

export type ListMomentObjsQueryVariables = {
  filter?: TableMomentObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMomentObjsQuery = {
  listMomentObjs?:  {
    __typename: "MomentObjConnection",
    items?:  Array< {
      __typename: "MomentObj",
      id: string,
      spaceId: string,
      userId: string,
      time: string,
      title: string,
      log: string,
      visibility: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetResourceObjQueryVariables = {
  id: string,
};

export type GetResourceObjQuery = {
  getResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    label: string,
    description: string,
    file:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    },
  } | null,
};

export type ListResourceObjsQueryVariables = {
  filter?: TableResourceObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourceObjsQuery = {
  listResourceObjs?:  {
    __typename: "ResourceObjConnection",
    items?:  Array< {
      __typename: "ResourceObj",
      id: string,
      label: string,
      description: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCollectionObjQueryVariables = {
  id: string,
};

export type GetCollectionObjQuery = {
  getCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    name: string,
    resourceIds: Array< string >,
  } | null,
};

export type ListCollectionObjsQueryVariables = {
  filter?: TableCollectionObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCollectionObjsQuery = {
  listCollectionObjs?:  {
    __typename: "CollectionObjConnection",
    items?:  Array< {
      __typename: "CollectionObj",
      id: string,
      name: string,
      resourceIds: Array< string >,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGalleryObjQueryVariables = {
  id: string,
};

export type GetGalleryObjQuery = {
  getGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    },
    collectionIds: Array< string >,
  } | null,
};

export type ListGalleryObjsQueryVariables = {
  filter?: TableGalleryObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGalleryObjsQuery = {
  listGalleryObjs?:  {
    __typename: "GalleryObjConnection",
    items?:  Array< {
      __typename: "GalleryObj",
      id: string,
      title: string,
      description: string,
      collectionIds: Array< string >,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserObjQueryVariables = {
  id: string,
};

export type GetUserObjQuery = {
  getUserObj?:  {
    __typename: "UserObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
    passwordHash?: string | null,
    googleId?: string | null,
    profileImage?:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    } | null,
    spaceIds: Array< string >,
    galleryIds: Array< string >,
  } | null,
};

export type ListUserObjsQueryVariables = {
  filter?: TableUserObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserObjsQuery = {
  listUserObjs?:  {
    __typename: "UserObjConnection",
    items?:  Array< {
      __typename: "UserObj",
      id: string,
      fname: string,
      lname: string,
      email: string,
      passwordHash?: string | null,
      googleId?: string | null,
      spaceIds: Array< string >,
      galleryIds: Array< string >,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetReservationObjQueryVariables = {
  id: string,
};

export type GetReservationObjQuery = {
  getReservationObj?:  {
    __typename: "ReservationObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
  } | null,
};

export type ListReservationObjsQueryVariables = {
  filter?: TableReservationObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReservationObjsQuery = {
  listReservationObjs?:  {
    __typename: "ReservationObjConnection",
    items?:  Array< {
      __typename: "ReservationObj",
      id: string,
      fname: string,
      lname: string,
      email: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateChapterObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  stormId?: string | null,
  draftId?: string | null,
};

export type OnCreateChapterObjSubscription = {
  onCreateChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    title: string,
    description: string,
    stormId: string,
    draftId: string,
    flowId: string,
    seaId: string,
  } | null,
};

export type OnUpdateChapterObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  stormId?: string | null,
  draftId?: string | null,
};

export type OnUpdateChapterObjSubscription = {
  onUpdateChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    title: string,
    description: string,
    stormId: string,
    draftId: string,
    flowId: string,
    seaId: string,
  } | null,
};

export type OnDeleteChapterObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  stormId?: string | null,
  draftId?: string | null,
};

export type OnDeleteChapterObjSubscription = {
  onDeleteChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    title: string,
    description: string,
    stormId: string,
    draftId: string,
    flowId: string,
    seaId: string,
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
      title: string,
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
      title: string,
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
      title: string,
      description: string,
      stormId: string,
      draftId: string,
      flowId: string,
      seaId: string,
    } >,
  } | null,
};

export type OnCreateStormObjSubscriptionVariables = {
  id?: string | null,
  chatIds?: Array< string > | null,
};

export type OnCreateStormObjSubscription = {
  onCreateStormObj?:  {
    __typename: "StormObj",
    id: string,
    chatIds: Array< string >,
  } | null,
};

export type OnUpdateStormObjSubscriptionVariables = {
  id?: string | null,
  chatIds?: Array< string > | null,
};

export type OnUpdateStormObjSubscription = {
  onUpdateStormObj?:  {
    __typename: "StormObj",
    id: string,
    chatIds: Array< string >,
  } | null,
};

export type OnDeleteStormObjSubscriptionVariables = {
  id?: string | null,
  chatIds?: Array< string > | null,
};

export type OnDeleteStormObjSubscription = {
  onDeleteStormObj?:  {
    __typename: "StormObj",
    id: string,
    chatIds: Array< string >,
  } | null,
};

export type OnCreateChatObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  summary?: string | null,
  time?: string | null,
};

export type OnCreateChatObjSubscription = {
  onCreateChatObj?:  {
    __typename: "ChatObj",
    id: string,
    title: string,
    summary: string,
    time: string,
    messages:  Array< {
      __typename: "MessageObj",
      id: string,
      source: string,
      time: string,
      message: string,
    } >,
  } | null,
};

export type OnUpdateChatObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  summary?: string | null,
  time?: string | null,
};

export type OnUpdateChatObjSubscription = {
  onUpdateChatObj?:  {
    __typename: "ChatObj",
    id: string,
    title: string,
    summary: string,
    time: string,
    messages:  Array< {
      __typename: "MessageObj",
      id: string,
      source: string,
      time: string,
      message: string,
    } >,
  } | null,
};

export type OnDeleteChatObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  summary?: string | null,
  time?: string | null,
};

export type OnDeleteChatObjSubscription = {
  onDeleteChatObj?:  {
    __typename: "ChatObj",
    id: string,
    title: string,
    summary: string,
    time: string,
    messages:  Array< {
      __typename: "MessageObj",
      id: string,
      source: string,
      time: string,
      message: string,
    } >,
  } | null,
};

export type OnCreateDraftObjSubscriptionVariables = {
  id?: string | null,
  constellationIds?: Array< string > | null,
};

export type OnCreateDraftObjSubscription = {
  onCreateDraftObj?:  {
    __typename: "DraftObj",
    id: string,
    constellationIds: Array< string >,
  } | null,
};

export type OnUpdateDraftObjSubscriptionVariables = {
  id?: string | null,
  constellationIds?: Array< string > | null,
};

export type OnUpdateDraftObjSubscription = {
  onUpdateDraftObj?:  {
    __typename: "DraftObj",
    id: string,
    constellationIds: Array< string >,
  } | null,
};

export type OnDeleteDraftObjSubscriptionVariables = {
  id?: string | null,
  constellationIds?: Array< string > | null,
};

export type OnDeleteDraftObjSubscription = {
  onDeleteDraftObj?:  {
    __typename: "DraftObj",
    id: string,
    constellationIds: Array< string >,
  } | null,
};

export type OnCreateConstellationObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateConstellationObjSubscription = {
  onCreateConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    title: string,
    description: string,
    stars:  Array< {
      __typename: "StarObj",
      id: string,
      name: string,
      x: number,
      y: number,
    } >,
  } | null,
};

export type OnUpdateConstellationObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateConstellationObjSubscription = {
  onUpdateConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    title: string,
    description: string,
    stars:  Array< {
      __typename: "StarObj",
      id: string,
      name: string,
      x: number,
      y: number,
    } >,
  } | null,
};

export type OnDeleteConstellationObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnDeleteConstellationObjSubscription = {
  onDeleteConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    title: string,
    description: string,
    stars:  Array< {
      __typename: "StarObj",
      id: string,
      name: string,
      x: number,
      y: number,
    } >,
  } | null,
};

export type OnCreateFlowObjSubscriptionVariables = {
  id?: string | null,
  momentIds?: Array< string > | null,
};

export type OnCreateFlowObjSubscription = {
  onCreateFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    momentIds: Array< string >,
  } | null,
};

export type OnUpdateFlowObjSubscriptionVariables = {
  id?: string | null,
  momentIds?: Array< string > | null,
};

export type OnUpdateFlowObjSubscription = {
  onUpdateFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    momentIds: Array< string >,
  } | null,
};

export type OnDeleteFlowObjSubscriptionVariables = {
  id?: string | null,
  momentIds?: Array< string > | null,
};

export type OnDeleteFlowObjSubscription = {
  onDeleteFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    momentIds: Array< string >,
  } | null,
};

export type OnCreateMomentObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  userId?: string | null,
  time?: string | null,
  title?: string | null,
};

export type OnCreateMomentObjSubscription = {
  onCreateMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    log: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    } | null,
    visibility: string,
    comments:  Array< {
      __typename: "CommentObj",
      id: string,
      time: string,
      content: string,
      userId: string,
    } >,
  } | null,
};

export type OnUpdateMomentObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  userId?: string | null,
  time?: string | null,
  title?: string | null,
};

export type OnUpdateMomentObjSubscription = {
  onUpdateMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    log: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    } | null,
    visibility: string,
    comments:  Array< {
      __typename: "CommentObj",
      id: string,
      time: string,
      content: string,
      userId: string,
    } >,
  } | null,
};

export type OnDeleteMomentObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  userId?: string | null,
  time?: string | null,
  title?: string | null,
};

export type OnDeleteMomentObjSubscription = {
  onDeleteMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    log: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    } | null,
    visibility: string,
    comments:  Array< {
      __typename: "CommentObj",
      id: string,
      time: string,
      content: string,
      userId: string,
    } >,
  } | null,
};

export type OnCreateResourceObjSubscriptionVariables = {
  id?: string | null,
  label?: string | null,
  description?: string | null,
};

export type OnCreateResourceObjSubscription = {
  onCreateResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    label: string,
    description: string,
    file:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    },
  } | null,
};

export type OnUpdateResourceObjSubscriptionVariables = {
  id?: string | null,
  label?: string | null,
  description?: string | null,
};

export type OnUpdateResourceObjSubscription = {
  onUpdateResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    label: string,
    description: string,
    file:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    },
  } | null,
};

export type OnDeleteResourceObjSubscriptionVariables = {
  id?: string | null,
  label?: string | null,
  description?: string | null,
};

export type OnDeleteResourceObjSubscription = {
  onDeleteResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    label: string,
    description: string,
    file:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    },
  } | null,
};

export type OnCreateCollectionObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  resourceIds?: Array< string > | null,
};

export type OnCreateCollectionObjSubscription = {
  onCreateCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    name: string,
    resourceIds: Array< string >,
  } | null,
};

export type OnUpdateCollectionObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  resourceIds?: Array< string > | null,
};

export type OnUpdateCollectionObjSubscription = {
  onUpdateCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    name: string,
    resourceIds: Array< string >,
  } | null,
};

export type OnDeleteCollectionObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  resourceIds?: Array< string > | null,
};

export type OnDeleteCollectionObjSubscription = {
  onDeleteCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    name: string,
    resourceIds: Array< string >,
  } | null,
};

export type OnCreateGalleryObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  collectionIds?: Array< string > | null,
};

export type OnCreateGalleryObjSubscription = {
  onCreateGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    },
    collectionIds: Array< string >,
  } | null,
};

export type OnUpdateGalleryObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  collectionIds?: Array< string > | null,
};

export type OnUpdateGalleryObjSubscription = {
  onUpdateGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    },
    collectionIds: Array< string >,
  } | null,
};

export type OnDeleteGalleryObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  collectionIds?: Array< string > | null,
};

export type OnDeleteGalleryObjSubscription = {
  onDeleteGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    },
    collectionIds: Array< string >,
  } | null,
};

export type OnCreateUserObjSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  email?: string | null,
  googleId?: string | null,
};

export type OnCreateUserObjSubscription = {
  onCreateUserObj?:  {
    __typename: "UserObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
    passwordHash?: string | null,
    googleId?: string | null,
    profileImage?:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    } | null,
    spaceIds: Array< string >,
    galleryIds: Array< string >,
  } | null,
};

export type OnUpdateUserObjSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  email?: string | null,
  googleId?: string | null,
};

export type OnUpdateUserObjSubscription = {
  onUpdateUserObj?:  {
    __typename: "UserObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
    passwordHash?: string | null,
    googleId?: string | null,
    profileImage?:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    } | null,
    spaceIds: Array< string >,
    galleryIds: Array< string >,
  } | null,
};

export type OnDeleteUserObjSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  email?: string | null,
  googleId?: string | null,
};

export type OnDeleteUserObjSubscription = {
  onDeleteUserObj?:  {
    __typename: "UserObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
    passwordHash?: string | null,
    googleId?: string | null,
    profileImage?:  {
      __typename: "FileObj",
      id: string,
      name: string,
      src: string,
      type: string,
      size?: number | null,
    } | null,
    spaceIds: Array< string >,
    galleryIds: Array< string >,
  } | null,
};

export type OnCreateReservationObjSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  email?: string | null,
};

export type OnCreateReservationObjSubscription = {
  onCreateReservationObj?:  {
    __typename: "ReservationObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
  } | null,
};

export type OnUpdateReservationObjSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  email?: string | null,
};

export type OnUpdateReservationObjSubscription = {
  onUpdateReservationObj?:  {
    __typename: "ReservationObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
  } | null,
};

export type OnDeleteReservationObjSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  email?: string | null,
};

export type OnDeleteReservationObjSubscription = {
  onDeleteReservationObj?:  {
    __typename: "ReservationObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
  } | null,
};
