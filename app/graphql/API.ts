/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStarObjInput = {
  name: string,
  x: number,
  y: number,
  file: CreateFileObjInput,
};

export type CreateFileObjInput = {
  src: string,
  type: string,
  name?: string | null,
  size?: number | null,
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
  src: string,
  type: string,
  name?: string | null,
  size?: number | null,
};

export type UpdateStarObjInput = {
  id: string,
  name?: string | null,
  x?: number | null,
  y?: number | null,
  file?: CreateFileObjInput | null,
};

export type DeleteStarObjInput = {
  id: string,
};

export type CreateFlowObjInput = {
  chapterId: string,
};

export type FlowObj = {
  __typename: "FlowObj",
  id: string,
  chapterId: string,
};

export type UpdateFlowObjInput = {
  id: string,
  chapterId?: string | null,
};

export type DeleteFlowObjInput = {
  id: string,
};

export type CreateResourceObjInput = {
  collectionId: string,
  name: string,
  description: string,
  file: CreateFileObjInput,
};

export type ResourceObj = {
  __typename: "ResourceObj",
  id: string,
  collectionId: string,
  name: string,
  description: string,
  file: FileObj,
};

export type UpdateResourceObjInput = {
  id: string,
  collectionId?: string | null,
  name?: string | null,
  description?: string | null,
  file?: CreateFileObjInput | null,
};

export type DeleteResourceObjInput = {
  id: string,
};

export type CreateConstellationObjInput = {
  draftId: string,
  title: string,
  description: string,
};

export type ConstellationObj = {
  __typename: "ConstellationObj",
  id: string,
  draftId: string,
  title: string,
  description: string,
};

export type UpdateConstellationObjInput = {
  id: string,
  draftId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type DeleteConstellationObjInput = {
  id: string,
};

export type CreateGalleryObjInput = {
  userId: string,
  title: string,
  description: string,
  thumbnail?: CreateFileObjInput | null,
};

export type GalleryObj = {
  __typename: "GalleryObj",
  id: string,
  userId: string,
  title: string,
  description: string,
  thumbnail: FileObj,
};

export type UpdateGalleryObjInput = {
  id: string,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
  thumbnail?: CreateFileObjInput | null,
};

export type DeleteGalleryObjInput = {
  id: string,
};

export type CreateUserObjInput = {
  name: string,
  passwordHash?: string | null,
  email: string,
  googleId?: string | null,
  profilePicture?: CreateFileObjInput | null,
};

export type UserObj = {
  __typename: "UserObj",
  id: string,
  name: string,
  passwordHash?: string | null,
  email: string,
  googleId?: string | null,
  profilePicture: FileObj,
};

export type UpdateUserObjInput = {
  id: string,
  name?: string | null,
  passwordHash?: string | null,
  email?: string | null,
  googleId?: string | null,
  profilePicture?: CreateFileObjInput | null,
};

export type DeleteUserObjInput = {
  id: string,
};

export type CreateSeaObjInput = {
  chapterId: string,
};

export type SeaObj = {
  __typename: "SeaObj",
  id: string,
  chapterId: string,
};

export type UpdateSeaObjInput = {
  id: string,
  chapterId?: string | null,
};

export type DeleteSeaObjInput = {
  id: string,
};

export type CreateChapterObjInput = {
  spaceId: string,
  title: string,
  description: string,
};

export type ChapterObj = {
  __typename: "ChapterObj",
  id: string,
  spaceId: string,
  title: string,
  description: string,
};

export type UpdateChapterObjInput = {
  id: string,
  spaceId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type DeleteChapterObjInput = {
  id: string,
};

export type CreateStormObjInput = {
  chapterId: string,
};

export type StormObj = {
  __typename: "StormObj",
  id: string,
  chapterId: string,
};

export type UpdateStormObjInput = {
  id: string,
  chapterId?: string | null,
};

export type DeleteStormObjInput = {
  id: string,
};

export type CreateMessageObjInput = {
  chatId: string,
  source: string,
  time: string,
  message: string,
};

export type MessageObj = {
  __typename: "MessageObj",
  id: string,
  chatId: string,
  source: string,
  time: string,
  message: string,
};

export type UpdateMessageObjInput = {
  id: string,
  chatId?: string | null,
  source?: string | null,
  time?: string | null,
  message?: string | null,
};

export type DeleteMessageObjInput = {
  id: string,
};

export type CreateSpaceObjInput = {
  userId: string,
  title: string,
  description: string,
};

export type SpaceObj = {
  __typename: "SpaceObj",
  id: string,
  userId: string,
  title: string,
  description: string,
};

export type UpdateSpaceObjInput = {
  id: string,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type DeleteSpaceObjInput = {
  id: string,
};

export type CreateMomentObjInput = {
  flowId: string,
  chapterId: string,
  spaceId: string,
  userId: string,
  time: string,
  title: string,
  log: string,
  visibility: string,
  file: CreateFileObjInput,
};

export type MomentObj = {
  __typename: "MomentObj",
  id: string,
  flowId: string,
  chapterId: string,
  spaceId: string,
  userId: string,
  time: string,
  title: string,
  log: string,
  file: FileObj,
  visibility: string,
};

export type UpdateMomentObjInput = {
  id: string,
  flowId?: string | null,
  chapterId?: string | null,
  spaceId?: string | null,
  userId?: string | null,
  time?: string | null,
  title?: string | null,
  log?: string | null,
  visibility?: string | null,
  file?: CreateFileObjInput | null,
};

export type DeleteMomentObjInput = {
  id: string,
};

export type CreateCollectionObjInput = {
  galleryId: string,
  name: string,
};

export type CollectionObj = {
  __typename: "CollectionObj",
  id: string,
  galleryId: string,
  name: string,
};

export type UpdateCollectionObjInput = {
  id: string,
  galleryId?: string | null,
  name?: string | null,
};

export type DeleteCollectionObjInput = {
  id: string,
};

export type UpdateFileObjInput = {
  id: string,
  src?: string | null,
  type?: string | null,
  name?: string | null,
  size?: number | null,
};

export type DeleteFileObjInput = {
  id: string,
};

export type CreateDraftObjInput = {
  chapterId: string,
};

export type DraftObj = {
  __typename: "DraftObj",
  id: string,
  chapterId: string,
};

export type UpdateDraftObjInput = {
  id: string,
  chapterId?: string | null,
};

export type DeleteDraftObjInput = {
  id: string,
};

export type CreateJourneyObjInput = {
  seaId: string,
};

export type JourneyObj = {
  __typename: "JourneyObj",
  id: string,
  seaId: string,
};

export type UpdateJourneyObjInput = {
  id: string,
  seaId?: string | null,
};

export type DeleteJourneyObjInput = {
  id: string,
};

export type CreateCommentObjInput = {
  momentId: string,
  time: string,
  content: string,
  userId: string,
};

export type CommentObj = {
  __typename: "CommentObj",
  id: string,
  momentId: string,
  time: string,
  content: string,
  userId: string,
};

export type UpdateCommentObjInput = {
  id: string,
  momentId?: string | null,
  time?: string | null,
  content?: string | null,
  userId?: string | null,
};

export type DeleteCommentObjInput = {
  id: string,
};

export type CreateChatObjInput = {
  stormId: string,
  title: string,
  summary: string,
  time: string,
};

export type ChatObj = {
  __typename: "ChatObj",
  id: string,
  stormId: string,
  title: string,
  summary: string,
  time: string,
};

export type UpdateChatObjInput = {
  id: string,
  stormId?: string | null,
  title?: string | null,
  summary?: string | null,
  time?: string | null,
};

export type DeleteChatObjInput = {
  id: string,
};

export type TableStarObjFilterInput = {
  id?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  x?: TableFloatFilterInput | null,
  y?: TableFloatFilterInput | null,
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

export type TableFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
};

export type StarObjConnection = {
  __typename: "StarObjConnection",
  items?:  Array<StarObj | null > | null,
  nextToken?: string | null,
};

export type TableFlowObjFilterInput = {
  id?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
};

export type FlowObjConnection = {
  __typename: "FlowObjConnection",
  items?:  Array<FlowObj | null > | null,
  nextToken?: string | null,
};

export type TableResourceObjFilterInput = {
  id?: TableStringFilterInput | null,
  collectionId?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
};

export type ResourceObjConnection = {
  __typename: "ResourceObjConnection",
  items?:  Array<ResourceObj | null > | null,
  nextToken?: string | null,
};

export type TableConstellationObjFilterInput = {
  id?: TableStringFilterInput | null,
  draftId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
};

export type ConstellationObjConnection = {
  __typename: "ConstellationObjConnection",
  items?:  Array<ConstellationObj | null > | null,
  nextToken?: string | null,
};

export type TableGalleryObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
};

export type GalleryObjConnection = {
  __typename: "GalleryObjConnection",
  items?:  Array<GalleryObj | null > | null,
  nextToken?: string | null,
};

export type TableUserObjFilterInput = {
  id?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  passwordHash?: TableStringFilterInput | null,
  email?: TableStringFilterInput | null,
  googleId?: TableStringFilterInput | null,
};

export type UserObjConnection = {
  __typename: "UserObjConnection",
  items?:  Array<UserObj | null > | null,
  nextToken?: string | null,
};

export type TableSeaObjFilterInput = {
  id?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
};

export type SeaObjConnection = {
  __typename: "SeaObjConnection",
  items?:  Array<SeaObj | null > | null,
  nextToken?: string | null,
};

export type TableChapterObjFilterInput = {
  id?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
};

export type ChapterObjConnection = {
  __typename: "ChapterObjConnection",
  items?:  Array<ChapterObj | null > | null,
  nextToken?: string | null,
};

export type TableStormObjFilterInput = {
  id?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
};

export type StormObjConnection = {
  __typename: "StormObjConnection",
  items?:  Array<StormObj | null > | null,
  nextToken?: string | null,
};

export type TableMessageObjFilterInput = {
  id?: TableStringFilterInput | null,
  chatId?: TableStringFilterInput | null,
  source?: TableStringFilterInput | null,
  time?: TableStringFilterInput | null,
  message?: TableStringFilterInput | null,
};

export type MessageObjConnection = {
  __typename: "MessageObjConnection",
  items?:  Array<MessageObj | null > | null,
  nextToken?: string | null,
};

export type TableSpaceObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
};

export type SpaceObjConnection = {
  __typename: "SpaceObjConnection",
  items?:  Array<SpaceObj | null > | null,
  nextToken?: string | null,
};

export type TableMomentObjFilterInput = {
  id?: TableStringFilterInput | null,
  flowId?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
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

export type TableCollectionObjFilterInput = {
  id?: TableStringFilterInput | null,
  galleryId?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
};

export type CollectionObjConnection = {
  __typename: "CollectionObjConnection",
  items?:  Array<CollectionObj | null > | null,
  nextToken?: string | null,
};

export type TableFileObjFilterInput = {
  id?: TableStringFilterInput | null,
  src?: TableStringFilterInput | null,
  type?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  size?: TableIntFilterInput | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
};

export type FileObjConnection = {
  __typename: "FileObjConnection",
  items?:  Array<FileObj | null > | null,
  nextToken?: string | null,
};

export type TableDraftObjFilterInput = {
  id?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
};

export type DraftObjConnection = {
  __typename: "DraftObjConnection",
  items?:  Array<DraftObj | null > | null,
  nextToken?: string | null,
};

export type TableJourneyObjFilterInput = {
  id?: TableStringFilterInput | null,
  seaId?: TableStringFilterInput | null,
};

export type JourneyObjConnection = {
  __typename: "JourneyObjConnection",
  items?:  Array<JourneyObj | null > | null,
  nextToken?: string | null,
};

export type TableCommentObjFilterInput = {
  id?: TableStringFilterInput | null,
  momentId?: TableStringFilterInput | null,
  time?: TableStringFilterInput | null,
  content?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
};

export type CommentObjConnection = {
  __typename: "CommentObjConnection",
  items?:  Array<CommentObj | null > | null,
  nextToken?: string | null,
};

export type TableChatObjFilterInput = {
  id?: TableStringFilterInput | null,
  stormId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  summary?: TableStringFilterInput | null,
  time?: TableStringFilterInput | null,
};

export type ChatObjConnection = {
  __typename: "ChatObjConnection",
  items?:  Array<ChatObj | null > | null,
  nextToken?: string | null,
};

export type CreateStarObjMutationVariables = {
  input: CreateStarObjInput,
};

export type CreateStarObjMutation = {
  createStarObj?:  {
    __typename: "StarObj",
    id: string,
    name: string,
    x: number,
    y: number,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type UpdateStarObjMutationVariables = {
  input: UpdateStarObjInput,
};

export type UpdateStarObjMutation = {
  updateStarObj?:  {
    __typename: "StarObj",
    id: string,
    name: string,
    x: number,
    y: number,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type DeleteStarObjMutationVariables = {
  input: DeleteStarObjInput,
};

export type DeleteStarObjMutation = {
  deleteStarObj?:  {
    __typename: "StarObj",
    id: string,
    name: string,
    x: number,
    y: number,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type CreateFlowObjMutationVariables = {
  input: CreateFlowObjInput,
};

export type CreateFlowObjMutation = {
  createFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    chapterId: string,
  } | null,
};

export type UpdateFlowObjMutationVariables = {
  input: UpdateFlowObjInput,
};

export type UpdateFlowObjMutation = {
  updateFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    chapterId: string,
  } | null,
};

export type DeleteFlowObjMutationVariables = {
  input: DeleteFlowObjInput,
};

export type DeleteFlowObjMutation = {
  deleteFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    chapterId: string,
  } | null,
};

export type CreateResourceObjMutationVariables = {
  input: CreateResourceObjInput,
};

export type CreateResourceObjMutation = {
  createResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    collectionId: string,
    name: string,
    description: string,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
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
    collectionId: string,
    name: string,
    description: string,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
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
    collectionId: string,
    name: string,
    description: string,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type CreateConstellationObjMutationVariables = {
  input: CreateConstellationObjInput,
};

export type CreateConstellationObjMutation = {
  createConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    draftId: string,
    title: string,
    description: string,
  } | null,
};

export type UpdateConstellationObjMutationVariables = {
  input: UpdateConstellationObjInput,
};

export type UpdateConstellationObjMutation = {
  updateConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    draftId: string,
    title: string,
    description: string,
  } | null,
};

export type DeleteConstellationObjMutationVariables = {
  input: DeleteConstellationObjInput,
};

export type DeleteConstellationObjMutation = {
  deleteConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    draftId: string,
    title: string,
    description: string,
  } | null,
};

export type CreateGalleryObjMutationVariables = {
  input: CreateGalleryObjInput,
};

export type CreateGalleryObjMutation = {
  createGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type UpdateGalleryObjMutationVariables = {
  input: UpdateGalleryObjInput,
};

export type UpdateGalleryObjMutation = {
  updateGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type DeleteGalleryObjMutationVariables = {
  input: DeleteGalleryObjInput,
};

export type DeleteGalleryObjMutation = {
  deleteGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type CreateUserObjMutationVariables = {
  input: CreateUserObjInput,
};

export type CreateUserObjMutation = {
  createUserObj?:  {
    __typename: "UserObj",
    id: string,
    name: string,
    passwordHash?: string | null,
    email: string,
    googleId?: string | null,
    profilePicture:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type UpdateUserObjMutationVariables = {
  input: UpdateUserObjInput,
};

export type UpdateUserObjMutation = {
  updateUserObj?:  {
    __typename: "UserObj",
    id: string,
    name: string,
    passwordHash?: string | null,
    email: string,
    googleId?: string | null,
    profilePicture:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type DeleteUserObjMutationVariables = {
  input: DeleteUserObjInput,
};

export type DeleteUserObjMutation = {
  deleteUserObj?:  {
    __typename: "UserObj",
    id: string,
    name: string,
    passwordHash?: string | null,
    email: string,
    googleId?: string | null,
    profilePicture:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type CreateSeaObjMutationVariables = {
  input: CreateSeaObjInput,
};

export type CreateSeaObjMutation = {
  createSeaObj?:  {
    __typename: "SeaObj",
    id: string,
    chapterId: string,
  } | null,
};

export type UpdateSeaObjMutationVariables = {
  input: UpdateSeaObjInput,
};

export type UpdateSeaObjMutation = {
  updateSeaObj?:  {
    __typename: "SeaObj",
    id: string,
    chapterId: string,
  } | null,
};

export type DeleteSeaObjMutationVariables = {
  input: DeleteSeaObjInput,
};

export type DeleteSeaObjMutation = {
  deleteSeaObj?:  {
    __typename: "SeaObj",
    id: string,
    chapterId: string,
  } | null,
};

export type CreateChapterObjMutationVariables = {
  input: CreateChapterObjInput,
};

export type CreateChapterObjMutation = {
  createChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    spaceId: string,
    title: string,
    description: string,
  } | null,
};

export type UpdateChapterObjMutationVariables = {
  input: UpdateChapterObjInput,
};

export type UpdateChapterObjMutation = {
  updateChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    spaceId: string,
    title: string,
    description: string,
  } | null,
};

export type DeleteChapterObjMutationVariables = {
  input: DeleteChapterObjInput,
};

export type DeleteChapterObjMutation = {
  deleteChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    spaceId: string,
    title: string,
    description: string,
  } | null,
};

export type CreateStormObjMutationVariables = {
  input: CreateStormObjInput,
};

export type CreateStormObjMutation = {
  createStormObj?:  {
    __typename: "StormObj",
    id: string,
    chapterId: string,
  } | null,
};

export type UpdateStormObjMutationVariables = {
  input: UpdateStormObjInput,
};

export type UpdateStormObjMutation = {
  updateStormObj?:  {
    __typename: "StormObj",
    id: string,
    chapterId: string,
  } | null,
};

export type DeleteStormObjMutationVariables = {
  input: DeleteStormObjInput,
};

export type DeleteStormObjMutation = {
  deleteStormObj?:  {
    __typename: "StormObj",
    id: string,
    chapterId: string,
  } | null,
};

export type CreateMessageObjMutationVariables = {
  input: CreateMessageObjInput,
};

export type CreateMessageObjMutation = {
  createMessageObj?:  {
    __typename: "MessageObj",
    id: string,
    chatId: string,
    source: string,
    time: string,
    message: string,
  } | null,
};

export type UpdateMessageObjMutationVariables = {
  input: UpdateMessageObjInput,
};

export type UpdateMessageObjMutation = {
  updateMessageObj?:  {
    __typename: "MessageObj",
    id: string,
    chatId: string,
    source: string,
    time: string,
    message: string,
  } | null,
};

export type DeleteMessageObjMutationVariables = {
  input: DeleteMessageObjInput,
};

export type DeleteMessageObjMutation = {
  deleteMessageObj?:  {
    __typename: "MessageObj",
    id: string,
    chatId: string,
    source: string,
    time: string,
    message: string,
  } | null,
};

export type CreateSpaceObjMutationVariables = {
  input: CreateSpaceObjInput,
};

export type CreateSpaceObjMutation = {
  createSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    userId: string,
    title: string,
    description: string,
  } | null,
};

export type UpdateSpaceObjMutationVariables = {
  input: UpdateSpaceObjInput,
};

export type UpdateSpaceObjMutation = {
  updateSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    userId: string,
    title: string,
    description: string,
  } | null,
};

export type DeleteSpaceObjMutationVariables = {
  input: DeleteSpaceObjInput,
};

export type DeleteSpaceObjMutation = {
  deleteSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    userId: string,
    title: string,
    description: string,
  } | null,
};

export type CreateMomentObjMutationVariables = {
  input: CreateMomentObjInput,
};

export type CreateMomentObjMutation = {
  createMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    flowId: string,
    chapterId: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    log: string,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
    visibility: string,
  } | null,
};

export type UpdateMomentObjMutationVariables = {
  input: UpdateMomentObjInput,
};

export type UpdateMomentObjMutation = {
  updateMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    flowId: string,
    chapterId: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    log: string,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
    visibility: string,
  } | null,
};

export type DeleteMomentObjMutationVariables = {
  input: DeleteMomentObjInput,
};

export type DeleteMomentObjMutation = {
  deleteMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    flowId: string,
    chapterId: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    log: string,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
    visibility: string,
  } | null,
};

export type CreateCollectionObjMutationVariables = {
  input: CreateCollectionObjInput,
};

export type CreateCollectionObjMutation = {
  createCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    galleryId: string,
    name: string,
  } | null,
};

export type UpdateCollectionObjMutationVariables = {
  input: UpdateCollectionObjInput,
};

export type UpdateCollectionObjMutation = {
  updateCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    galleryId: string,
    name: string,
  } | null,
};

export type DeleteCollectionObjMutationVariables = {
  input: DeleteCollectionObjInput,
};

export type DeleteCollectionObjMutation = {
  deleteCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    galleryId: string,
    name: string,
  } | null,
};

export type CreateFileObjMutationVariables = {
  input: CreateFileObjInput,
};

export type CreateFileObjMutation = {
  createFileObj?:  {
    __typename: "FileObj",
    id: string,
    src: string,
    type: string,
    name?: string | null,
    size?: number | null,
  } | null,
};

export type UpdateFileObjMutationVariables = {
  input: UpdateFileObjInput,
};

export type UpdateFileObjMutation = {
  updateFileObj?:  {
    __typename: "FileObj",
    id: string,
    src: string,
    type: string,
    name?: string | null,
    size?: number | null,
  } | null,
};

export type DeleteFileObjMutationVariables = {
  input: DeleteFileObjInput,
};

export type DeleteFileObjMutation = {
  deleteFileObj?:  {
    __typename: "FileObj",
    id: string,
    src: string,
    type: string,
    name?: string | null,
    size?: number | null,
  } | null,
};

export type CreateDraftObjMutationVariables = {
  input: CreateDraftObjInput,
};

export type CreateDraftObjMutation = {
  createDraftObj?:  {
    __typename: "DraftObj",
    id: string,
    chapterId: string,
  } | null,
};

export type UpdateDraftObjMutationVariables = {
  input: UpdateDraftObjInput,
};

export type UpdateDraftObjMutation = {
  updateDraftObj?:  {
    __typename: "DraftObj",
    id: string,
    chapterId: string,
  } | null,
};

export type DeleteDraftObjMutationVariables = {
  input: DeleteDraftObjInput,
};

export type DeleteDraftObjMutation = {
  deleteDraftObj?:  {
    __typename: "DraftObj",
    id: string,
    chapterId: string,
  } | null,
};

export type CreateJourneyObjMutationVariables = {
  input: CreateJourneyObjInput,
};

export type CreateJourneyObjMutation = {
  createJourneyObj?:  {
    __typename: "JourneyObj",
    id: string,
    seaId: string,
  } | null,
};

export type UpdateJourneyObjMutationVariables = {
  input: UpdateJourneyObjInput,
};

export type UpdateJourneyObjMutation = {
  updateJourneyObj?:  {
    __typename: "JourneyObj",
    id: string,
    seaId: string,
  } | null,
};

export type DeleteJourneyObjMutationVariables = {
  input: DeleteJourneyObjInput,
};

export type DeleteJourneyObjMutation = {
  deleteJourneyObj?:  {
    __typename: "JourneyObj",
    id: string,
    seaId: string,
  } | null,
};

export type CreateCommentObjMutationVariables = {
  input: CreateCommentObjInput,
};

export type CreateCommentObjMutation = {
  createCommentObj?:  {
    __typename: "CommentObj",
    id: string,
    momentId: string,
    time: string,
    content: string,
    userId: string,
  } | null,
};

export type UpdateCommentObjMutationVariables = {
  input: UpdateCommentObjInput,
};

export type UpdateCommentObjMutation = {
  updateCommentObj?:  {
    __typename: "CommentObj",
    id: string,
    momentId: string,
    time: string,
    content: string,
    userId: string,
  } | null,
};

export type DeleteCommentObjMutationVariables = {
  input: DeleteCommentObjInput,
};

export type DeleteCommentObjMutation = {
  deleteCommentObj?:  {
    __typename: "CommentObj",
    id: string,
    momentId: string,
    time: string,
    content: string,
    userId: string,
  } | null,
};

export type CreateChatObjMutationVariables = {
  input: CreateChatObjInput,
};

export type CreateChatObjMutation = {
  createChatObj?:  {
    __typename: "ChatObj",
    id: string,
    stormId: string,
    title: string,
    summary: string,
    time: string,
  } | null,
};

export type UpdateChatObjMutationVariables = {
  input: UpdateChatObjInput,
};

export type UpdateChatObjMutation = {
  updateChatObj?:  {
    __typename: "ChatObj",
    id: string,
    stormId: string,
    title: string,
    summary: string,
    time: string,
  } | null,
};

export type DeleteChatObjMutationVariables = {
  input: DeleteChatObjInput,
};

export type DeleteChatObjMutation = {
  deleteChatObj?:  {
    __typename: "ChatObj",
    id: string,
    stormId: string,
    title: string,
    summary: string,
    time: string,
  } | null,
};

export type GetSpaceQueryVariables = {
};

export type GetSpaceQuery = {
  getSpace?:  {
    __typename: "SpaceObj",
    id: string,
    userId: string,
    title: string,
    description: string,
  } | null,
};

export type GetStarObjQueryVariables = {
  id: string,
};

export type GetStarObjQuery = {
  getStarObj?:  {
    __typename: "StarObj",
    id: string,
    name: string,
    x: number,
    y: number,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type ListStarObjsQueryVariables = {
  filter?: TableStarObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStarObjsQuery = {
  listStarObjs?:  {
    __typename: "StarObjConnection",
    items?:  Array< {
      __typename: "StarObj",
      id: string,
      name: string,
      x: number,
      y: number,
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
    chapterId: string,
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
      chapterId: string,
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
    collectionId: string,
    name: string,
    description: string,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
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
      collectionId: string,
      name: string,
      description: string,
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
    draftId: string,
    title: string,
    description: string,
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
      draftId: string,
      title: string,
      description: string,
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
    userId: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
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
      userId: string,
      title: string,
      description: string,
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
    name: string,
    passwordHash?: string | null,
    email: string,
    googleId?: string | null,
    profilePicture:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
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
      name: string,
      passwordHash?: string | null,
      email: string,
      googleId?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSeaObjQueryVariables = {
  id: string,
};

export type GetSeaObjQuery = {
  getSeaObj?:  {
    __typename: "SeaObj",
    id: string,
    chapterId: string,
  } | null,
};

export type ListSeaObjsQueryVariables = {
  filter?: TableSeaObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSeaObjsQuery = {
  listSeaObjs?:  {
    __typename: "SeaObjConnection",
    items?:  Array< {
      __typename: "SeaObj",
      id: string,
      chapterId: string,
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
    spaceId: string,
    title: string,
    description: string,
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
      spaceId: string,
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
    chapterId: string,
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
      chapterId: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMessageObjQueryVariables = {
  id: string,
};

export type GetMessageObjQuery = {
  getMessageObj?:  {
    __typename: "MessageObj",
    id: string,
    chatId: string,
    source: string,
    time: string,
    message: string,
  } | null,
};

export type ListMessageObjsQueryVariables = {
  filter?: TableMessageObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessageObjsQuery = {
  listMessageObjs?:  {
    __typename: "MessageObjConnection",
    items?:  Array< {
      __typename: "MessageObj",
      id: string,
      chatId: string,
      source: string,
      time: string,
      message: string,
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
    userId: string,
    title: string,
    description: string,
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
      userId: string,
      title: string,
      description: string,
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
    flowId: string,
    chapterId: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    log: string,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
    visibility: string,
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
      flowId: string,
      chapterId: string,
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

export type GetCollectionObjQueryVariables = {
  id: string,
};

export type GetCollectionObjQuery = {
  getCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    galleryId: string,
    name: string,
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
      galleryId: string,
      name: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFileObjQueryVariables = {
  id: string,
};

export type GetFileObjQuery = {
  getFileObj?:  {
    __typename: "FileObj",
    id: string,
    src: string,
    type: string,
    name?: string | null,
    size?: number | null,
  } | null,
};

export type ListFileObjsQueryVariables = {
  filter?: TableFileObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFileObjsQuery = {
  listFileObjs?:  {
    __typename: "FileObjConnection",
    items?:  Array< {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
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
    chapterId: string,
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
      chapterId: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetJourneyObjQueryVariables = {
  id: string,
};

export type GetJourneyObjQuery = {
  getJourneyObj?:  {
    __typename: "JourneyObj",
    id: string,
    seaId: string,
  } | null,
};

export type ListJourneyObjsQueryVariables = {
  filter?: TableJourneyObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJourneyObjsQuery = {
  listJourneyObjs?:  {
    __typename: "JourneyObjConnection",
    items?:  Array< {
      __typename: "JourneyObj",
      id: string,
      seaId: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentObjQueryVariables = {
  id: string,
};

export type GetCommentObjQuery = {
  getCommentObj?:  {
    __typename: "CommentObj",
    id: string,
    momentId: string,
    time: string,
    content: string,
    userId: string,
  } | null,
};

export type ListCommentObjsQueryVariables = {
  filter?: TableCommentObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentObjsQuery = {
  listCommentObjs?:  {
    __typename: "CommentObjConnection",
    items?:  Array< {
      __typename: "CommentObj",
      id: string,
      momentId: string,
      time: string,
      content: string,
      userId: string,
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
    stormId: string,
    title: string,
    summary: string,
    time: string,
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
      stormId: string,
      title: string,
      summary: string,
      time: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStarObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  x?: number | null,
  y?: number | null,
};

export type OnCreateStarObjSubscription = {
  onCreateStarObj?:  {
    __typename: "StarObj",
    id: string,
    name: string,
    x: number,
    y: number,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type OnUpdateStarObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  x?: number | null,
  y?: number | null,
};

export type OnUpdateStarObjSubscription = {
  onUpdateStarObj?:  {
    __typename: "StarObj",
    id: string,
    name: string,
    x: number,
    y: number,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type OnDeleteStarObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  x?: number | null,
  y?: number | null,
};

export type OnDeleteStarObjSubscription = {
  onDeleteStarObj?:  {
    __typename: "StarObj",
    id: string,
    name: string,
    x: number,
    y: number,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type OnCreateFlowObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnCreateFlowObjSubscription = {
  onCreateFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    chapterId: string,
  } | null,
};

export type OnUpdateFlowObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnUpdateFlowObjSubscription = {
  onUpdateFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    chapterId: string,
  } | null,
};

export type OnDeleteFlowObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnDeleteFlowObjSubscription = {
  onDeleteFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    chapterId: string,
  } | null,
};

export type OnCreateResourceObjSubscriptionVariables = {
  id?: string | null,
  collectionId?: string | null,
  name?: string | null,
  description?: string | null,
};

export type OnCreateResourceObjSubscription = {
  onCreateResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    collectionId: string,
    name: string,
    description: string,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type OnUpdateResourceObjSubscriptionVariables = {
  id?: string | null,
  collectionId?: string | null,
  name?: string | null,
  description?: string | null,
};

export type OnUpdateResourceObjSubscription = {
  onUpdateResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    collectionId: string,
    name: string,
    description: string,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type OnDeleteResourceObjSubscriptionVariables = {
  id?: string | null,
  collectionId?: string | null,
  name?: string | null,
  description?: string | null,
};

export type OnDeleteResourceObjSubscription = {
  onDeleteResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    collectionId: string,
    name: string,
    description: string,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type OnCreateConstellationObjSubscriptionVariables = {
  id?: string | null,
  draftId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateConstellationObjSubscription = {
  onCreateConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    draftId: string,
    title: string,
    description: string,
  } | null,
};

export type OnUpdateConstellationObjSubscriptionVariables = {
  id?: string | null,
  draftId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateConstellationObjSubscription = {
  onUpdateConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    draftId: string,
    title: string,
    description: string,
  } | null,
};

export type OnDeleteConstellationObjSubscriptionVariables = {
  id?: string | null,
  draftId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnDeleteConstellationObjSubscription = {
  onDeleteConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    draftId: string,
    title: string,
    description: string,
  } | null,
};

export type OnCreateGalleryObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateGalleryObjSubscription = {
  onCreateGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type OnUpdateGalleryObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateGalleryObjSubscription = {
  onUpdateGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type OnDeleteGalleryObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnDeleteGalleryObjSubscription = {
  onDeleteGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type OnCreateUserObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  passwordHash?: string | null,
  email?: string | null,
  googleId?: string | null,
};

export type OnCreateUserObjSubscription = {
  onCreateUserObj?:  {
    __typename: "UserObj",
    id: string,
    name: string,
    passwordHash?: string | null,
    email: string,
    googleId?: string | null,
    profilePicture:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type OnUpdateUserObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  passwordHash?: string | null,
  email?: string | null,
  googleId?: string | null,
};

export type OnUpdateUserObjSubscription = {
  onUpdateUserObj?:  {
    __typename: "UserObj",
    id: string,
    name: string,
    passwordHash?: string | null,
    email: string,
    googleId?: string | null,
    profilePicture:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type OnDeleteUserObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  passwordHash?: string | null,
  email?: string | null,
  googleId?: string | null,
};

export type OnDeleteUserObjSubscription = {
  onDeleteUserObj?:  {
    __typename: "UserObj",
    id: string,
    name: string,
    passwordHash?: string | null,
    email: string,
    googleId?: string | null,
    profilePicture:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
  } | null,
};

export type OnCreateSeaObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnCreateSeaObjSubscription = {
  onCreateSeaObj?:  {
    __typename: "SeaObj",
    id: string,
    chapterId: string,
  } | null,
};

export type OnUpdateSeaObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnUpdateSeaObjSubscription = {
  onUpdateSeaObj?:  {
    __typename: "SeaObj",
    id: string,
    chapterId: string,
  } | null,
};

export type OnDeleteSeaObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnDeleteSeaObjSubscription = {
  onDeleteSeaObj?:  {
    __typename: "SeaObj",
    id: string,
    chapterId: string,
  } | null,
};

export type OnCreateChapterObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateChapterObjSubscription = {
  onCreateChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    spaceId: string,
    title: string,
    description: string,
  } | null,
};

export type OnUpdateChapterObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateChapterObjSubscription = {
  onUpdateChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    spaceId: string,
    title: string,
    description: string,
  } | null,
};

export type OnDeleteChapterObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnDeleteChapterObjSubscription = {
  onDeleteChapterObj?:  {
    __typename: "ChapterObj",
    id: string,
    spaceId: string,
    title: string,
    description: string,
  } | null,
};

export type OnCreateStormObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnCreateStormObjSubscription = {
  onCreateStormObj?:  {
    __typename: "StormObj",
    id: string,
    chapterId: string,
  } | null,
};

export type OnUpdateStormObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnUpdateStormObjSubscription = {
  onUpdateStormObj?:  {
    __typename: "StormObj",
    id: string,
    chapterId: string,
  } | null,
};

export type OnDeleteStormObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnDeleteStormObjSubscription = {
  onDeleteStormObj?:  {
    __typename: "StormObj",
    id: string,
    chapterId: string,
  } | null,
};

export type OnCreateMessageObjSubscriptionVariables = {
  id?: string | null,
  chatId?: string | null,
  source?: string | null,
  time?: string | null,
  message?: string | null,
};

export type OnCreateMessageObjSubscription = {
  onCreateMessageObj?:  {
    __typename: "MessageObj",
    id: string,
    chatId: string,
    source: string,
    time: string,
    message: string,
  } | null,
};

export type OnUpdateMessageObjSubscriptionVariables = {
  id?: string | null,
  chatId?: string | null,
  source?: string | null,
  time?: string | null,
  message?: string | null,
};

export type OnUpdateMessageObjSubscription = {
  onUpdateMessageObj?:  {
    __typename: "MessageObj",
    id: string,
    chatId: string,
    source: string,
    time: string,
    message: string,
  } | null,
};

export type OnDeleteMessageObjSubscriptionVariables = {
  id?: string | null,
  chatId?: string | null,
  source?: string | null,
  time?: string | null,
  message?: string | null,
};

export type OnDeleteMessageObjSubscription = {
  onDeleteMessageObj?:  {
    __typename: "MessageObj",
    id: string,
    chatId: string,
    source: string,
    time: string,
    message: string,
  } | null,
};

export type OnCreateSpaceObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateSpaceObjSubscription = {
  onCreateSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    userId: string,
    title: string,
    description: string,
  } | null,
};

export type OnUpdateSpaceObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateSpaceObjSubscription = {
  onUpdateSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    userId: string,
    title: string,
    description: string,
  } | null,
};

export type OnDeleteSpaceObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnDeleteSpaceObjSubscription = {
  onDeleteSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    userId: string,
    title: string,
    description: string,
  } | null,
};

export type OnCreateMomentObjSubscriptionVariables = {
  id?: string | null,
  flowId?: string | null,
  chapterId?: string | null,
  spaceId?: string | null,
  userId?: string | null,
};

export type OnCreateMomentObjSubscription = {
  onCreateMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    flowId: string,
    chapterId: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    log: string,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
    visibility: string,
  } | null,
};

export type OnUpdateMomentObjSubscriptionVariables = {
  id?: string | null,
  flowId?: string | null,
  chapterId?: string | null,
  spaceId?: string | null,
  userId?: string | null,
};

export type OnUpdateMomentObjSubscription = {
  onUpdateMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    flowId: string,
    chapterId: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    log: string,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
    visibility: string,
  } | null,
};

export type OnDeleteMomentObjSubscriptionVariables = {
  id?: string | null,
  flowId?: string | null,
  chapterId?: string | null,
  spaceId?: string | null,
  userId?: string | null,
};

export type OnDeleteMomentObjSubscription = {
  onDeleteMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    flowId: string,
    chapterId: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    log: string,
    file:  {
      __typename: "FileObj",
      id: string,
      src: string,
      type: string,
      name?: string | null,
      size?: number | null,
    },
    visibility: string,
  } | null,
};

export type OnCreateCollectionObjSubscriptionVariables = {
  id?: string | null,
  galleryId?: string | null,
  name?: string | null,
};

export type OnCreateCollectionObjSubscription = {
  onCreateCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    galleryId: string,
    name: string,
  } | null,
};

export type OnUpdateCollectionObjSubscriptionVariables = {
  id?: string | null,
  galleryId?: string | null,
  name?: string | null,
};

export type OnUpdateCollectionObjSubscription = {
  onUpdateCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    galleryId: string,
    name: string,
  } | null,
};

export type OnDeleteCollectionObjSubscriptionVariables = {
  id?: string | null,
  galleryId?: string | null,
  name?: string | null,
};

export type OnDeleteCollectionObjSubscription = {
  onDeleteCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    galleryId: string,
    name: string,
  } | null,
};

export type OnCreateFileObjSubscriptionVariables = {
  id?: string | null,
  src?: string | null,
  type?: string | null,
  name?: string | null,
  size?: number | null,
};

export type OnCreateFileObjSubscription = {
  onCreateFileObj?:  {
    __typename: "FileObj",
    id: string,
    src: string,
    type: string,
    name?: string | null,
    size?: number | null,
  } | null,
};

export type OnUpdateFileObjSubscriptionVariables = {
  id?: string | null,
  src?: string | null,
  type?: string | null,
  name?: string | null,
  size?: number | null,
};

export type OnUpdateFileObjSubscription = {
  onUpdateFileObj?:  {
    __typename: "FileObj",
    id: string,
    src: string,
    type: string,
    name?: string | null,
    size?: number | null,
  } | null,
};

export type OnDeleteFileObjSubscriptionVariables = {
  id?: string | null,
  src?: string | null,
  type?: string | null,
  name?: string | null,
  size?: number | null,
};

export type OnDeleteFileObjSubscription = {
  onDeleteFileObj?:  {
    __typename: "FileObj",
    id: string,
    src: string,
    type: string,
    name?: string | null,
    size?: number | null,
  } | null,
};

export type OnCreateDraftObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnCreateDraftObjSubscription = {
  onCreateDraftObj?:  {
    __typename: "DraftObj",
    id: string,
    chapterId: string,
  } | null,
};

export type OnUpdateDraftObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnUpdateDraftObjSubscription = {
  onUpdateDraftObj?:  {
    __typename: "DraftObj",
    id: string,
    chapterId: string,
  } | null,
};

export type OnDeleteDraftObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnDeleteDraftObjSubscription = {
  onDeleteDraftObj?:  {
    __typename: "DraftObj",
    id: string,
    chapterId: string,
  } | null,
};

export type OnCreateJourneyObjSubscriptionVariables = {
  id?: string | null,
  seaId?: string | null,
};

export type OnCreateJourneyObjSubscription = {
  onCreateJourneyObj?:  {
    __typename: "JourneyObj",
    id: string,
    seaId: string,
  } | null,
};

export type OnUpdateJourneyObjSubscriptionVariables = {
  id?: string | null,
  seaId?: string | null,
};

export type OnUpdateJourneyObjSubscription = {
  onUpdateJourneyObj?:  {
    __typename: "JourneyObj",
    id: string,
    seaId: string,
  } | null,
};

export type OnDeleteJourneyObjSubscriptionVariables = {
  id?: string | null,
  seaId?: string | null,
};

export type OnDeleteJourneyObjSubscription = {
  onDeleteJourneyObj?:  {
    __typename: "JourneyObj",
    id: string,
    seaId: string,
  } | null,
};

export type OnCreateCommentObjSubscriptionVariables = {
  id?: string | null,
  momentId?: string | null,
  time?: string | null,
  content?: string | null,
  userId?: string | null,
};

export type OnCreateCommentObjSubscription = {
  onCreateCommentObj?:  {
    __typename: "CommentObj",
    id: string,
    momentId: string,
    time: string,
    content: string,
    userId: string,
  } | null,
};

export type OnUpdateCommentObjSubscriptionVariables = {
  id?: string | null,
  momentId?: string | null,
  time?: string | null,
  content?: string | null,
  userId?: string | null,
};

export type OnUpdateCommentObjSubscription = {
  onUpdateCommentObj?:  {
    __typename: "CommentObj",
    id: string,
    momentId: string,
    time: string,
    content: string,
    userId: string,
  } | null,
};

export type OnDeleteCommentObjSubscriptionVariables = {
  id?: string | null,
  momentId?: string | null,
  time?: string | null,
  content?: string | null,
  userId?: string | null,
};

export type OnDeleteCommentObjSubscription = {
  onDeleteCommentObj?:  {
    __typename: "CommentObj",
    id: string,
    momentId: string,
    time: string,
    content: string,
    userId: string,
  } | null,
};

export type OnCreateChatObjSubscriptionVariables = {
  id?: string | null,
  stormId?: string | null,
  title?: string | null,
  summary?: string | null,
  time?: string | null,
};

export type OnCreateChatObjSubscription = {
  onCreateChatObj?:  {
    __typename: "ChatObj",
    id: string,
    stormId: string,
    title: string,
    summary: string,
    time: string,
  } | null,
};

export type OnUpdateChatObjSubscriptionVariables = {
  id?: string | null,
  stormId?: string | null,
  title?: string | null,
  summary?: string | null,
  time?: string | null,
};

export type OnUpdateChatObjSubscription = {
  onUpdateChatObj?:  {
    __typename: "ChatObj",
    id: string,
    stormId: string,
    title: string,
    summary: string,
    time: string,
  } | null,
};

export type OnDeleteChatObjSubscriptionVariables = {
  id?: string | null,
  stormId?: string | null,
  title?: string | null,
  summary?: string | null,
  time?: string | null,
};

export type OnDeleteChatObjSubscription = {
  onDeleteChatObj?:  {
    __typename: "ChatObj",
    id: string,
    stormId: string,
    title: string,
    summary: string,
    time: string,
  } | null,
};
