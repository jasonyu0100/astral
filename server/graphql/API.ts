/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateResourceObjInput = {
  userId: string,
  collectionId: string,
  title: string,
  description: string,
  variant: string,
  file?: UpdateFileObjInput | null,
  log?: UpdateLogObjInput | null,
  link?: UpdateLinkObjInput | null,
  note?: UpdateNoteObjInput | null,
};

export type UpdateFileObjInput = {
  id: string,
  src?: string | null,
  fileType?: string | null,
  title?: string | null,
  size?: number | null,
  variant?: string | null,
};

export type UpdateLogObjInput = {
  id: string,
  loomId?: string | null,
  height?: number | null,
  width?: number | null,
  sharedUrl?: string | null,
  embedUrl?: string | null,
  thumbnailHeight?: number | null,
  thumbnailWidth?: number | null,
  thumbnailUrl?: string | null,
  duration?: number | null,
  providerUrl?: string | null,
};

export type UpdateLinkObjInput = {
  id: string,
  url?: string | null,
  title?: string | null,
  variant?: string | null,
};

export type UpdateNoteObjInput = {
  id: string,
  title?: string | null,
  text?: string | null,
  variant?: string | null,
};

export type ResourceObj = {
  __typename: "ResourceObj",
  id: string,
  userId: string,
  collectionId: string,
  title: string,
  description: string,
  variant: string,
  file?: FileObj | null,
  log?: LogObj | null,
  link?: LinkObj | null,
  note?: NoteObj | null,
};

export type FileObj = {
  __typename: "FileObj",
  id: string,
  src: string,
  fileType: string,
  title: string,
  size: number,
  variant: string,
};

export type LogObj = {
  __typename: "LogObj",
  id: string,
  loomId: string,
  height: number,
  width: number,
  sharedUrl: string,
  embedUrl: string,
  thumbnailHeight?: number | null,
  thumbnailWidth?: number | null,
  thumbnailUrl?: string | null,
  duration?: number | null,
  providerUrl: string,
};

export type LinkObj = {
  __typename: "LinkObj",
  id: string,
  url: string,
  title: string,
  variant: string,
};

export type NoteObj = {
  __typename: "NoteObj",
  id: string,
  title: string,
  text: string,
  variant: string,
};

export type UpdateResourceObjInput = {
  id: string,
  userId?: string | null,
  collectionId?: string | null,
  title?: string | null,
  description?: string | null,
  variant?: string | null,
  file?: UpdateFileObjInput | null,
  log?: UpdateLogObjInput | null,
  link?: UpdateLinkObjInput | null,
  note?: UpdateNoteObjInput | null,
};

export type DeleteResourceObjInput = {
  id: string,
};

export type CreateConstellationObjInput = {
  chapterId: string,
  title: string,
  description: string,
  variant: string,
};

export type ConstellationObj = {
  __typename: "ConstellationObj",
  id: string,
  chapterId: string,
  title: string,
  description: string,
  variant: string,
};

export type UpdateConstellationObjInput = {
  id: string,
  chapterId?: string | null,
  title?: string | null,
  description?: string | null,
  variant?: string | null,
};

export type DeleteConstellationObjInput = {
  id: string,
};

export type CreateGalleryObjInput = {
  userId: string,
  title: string,
  description: string,
  thumbnail?: UpdateFileObjInput | null,
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
  thumbnail?: UpdateFileObjInput | null,
};

export type DeleteGalleryObjInput = {
  id: string,
};

export type CreateUserObjInput = {
  fname: string,
  lname: string,
  passwordHash?: string | null,
  email: string,
  googleId?: string | null,
  profilePicture?: UpdateFileObjInput | null,
};

export type UserObj = {
  __typename: "UserObj",
  id: string,
  fname: string,
  lname: string,
  passwordHash?: string | null,
  email: string,
  googleId?: string | null,
  profilePicture?: FileObj | null,
};

export type UpdateUserObjInput = {
  id: string,
  fname?: string | null,
  lname?: string | null,
  passwordHash?: string | null,
  email?: string | null,
  googleId?: string | null,
  profilePicture?: UpdateFileObjInput | null,
};

export type DeleteUserObjInput = {
  id: string,
};

export type CreateChapterObjInput = {
  spaceId: string,
  title: string,
  description: string,
  idx: number,
};

export type ChapterObj = {
  __typename: "ChapterObj",
  id: string,
  spaceId: string,
  title: string,
  description: string,
  idx: number,
};

export type UpdateChapterObjInput = {
  id: string,
  spaceId?: string | null,
  title?: string | null,
  description?: string | null,
  idx?: number | null,
};

export type DeleteChapterObjInput = {
  id: string,
};

export type CreateMessageObjInput = {
  chatId: string,
  source: string,
  time: string,
  message: string,
  userId?: string | null,
};

export type MessageObj = {
  __typename: "MessageObj",
  id: string,
  chatId: string,
  source: string,
  time: string,
  message: string,
  userId?: string | null,
};

export type UpdateMessageObjInput = {
  id: string,
  chatId?: string | null,
  source?: string | null,
  time?: string | null,
  message?: string | null,
  userId?: string | null,
};

export type DeleteMessageObjInput = {
  id: string,
};

export type CreateSpaceObjInput = {
  userId: string,
  title: string,
  description: string,
  time: string,
  thumbnail: UpdateFileObjInput,
  variant: string,
};

export type SpaceObj = {
  __typename: "SpaceObj",
  id: string,
  userId: string,
  title: string,
  time: string,
  description: string,
  thumbnail: FileObj,
  variant: string,
};

export type UpdateSpaceObjInput = {
  id: string,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
  time?: string | null,
  thumbnail?: UpdateFileObjInput | null,
  variant?: string | null,
};

export type DeleteSpaceObjInput = {
  id: string,
};

export type CreateCollectionObjInput = {
  galleryId: string,
  title: string,
};

export type CollectionObj = {
  __typename: "CollectionObj",
  id: string,
  galleryId: string,
  title: string,
};

export type UpdateCollectionObjInput = {
  id: string,
  galleryId?: string | null,
  title?: string | null,
};

export type DeleteCollectionObjInput = {
  id: string,
};

export type CreateFileObjInput = {
  src: string,
  fileType: string,
  title: string,
  size: number,
  variant: string,
};

export type DeleteFileObjInput = {
  id: string,
};

export type CreateJourneyObjInput = {
  chapterId: string,
};

export type JourneyObj = {
  __typename: "JourneyObj",
  id: string,
  chapterId: string,
};

export type UpdateJourneyObjInput = {
  id: string,
  chapterId?: string | null,
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
  chapterId: string,
  title: string,
  summary: string,
  time: string,
};

export type ChatObj = {
  __typename: "ChatObj",
  id: string,
  chapterId: string,
  title: string,
  summary: string,
  time: string,
};

export type UpdateChatObjInput = {
  id: string,
  chapterId?: string | null,
  title?: string | null,
  summary?: string | null,
  time?: string | null,
};

export type DeleteChatObjInput = {
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

export type CreateNoteObjInput = {
  title: string,
  text: string,
  variant: string,
};

export type DeleteNoteObjInput = {
  id: string,
};

export type CreateLogObjInput = {
  loomId: string,
  height: number,
  width: number,
  sharedUrl: string,
  embedUrl: string,
  thumbnailHeight?: number | null,
  thumbnailWidth?: number | null,
  thumbnailUrl?: string | null,
  duration?: number | null,
  providerUrl: string,
};

export type DeleteLogObjInput = {
  id: string,
};

export type CreateLinkObjInput = {
  url: string,
  title: string,
  variant: string,
};

export type DeleteLinkObjInput = {
  id: string,
};

export type CreateStarObjInput = {
  constellationId: string,
  title: string,
  description: string,
  x: number,
  y: number,
  variant: string,
  file?: UpdateFileObjInput | null,
  log?: UpdateLogObjInput | null,
  link?: UpdateLinkObjInput | null,
  note?: UpdateNoteObjInput | null,
};

export type StarObj = {
  __typename: "StarObj",
  id: string,
  constellationId: string,
  title: string,
  description: string,
  x: number,
  y: number,
  variant: string,
  file?: FileObj | null,
  log?: LogObj | null,
  note?: NoteObj | null,
  link?: LinkObj | null,
};

export type UpdateStarObjInput = {
  id: string,
  constellationId?: string | null,
  title?: string | null,
  description?: string | null,
  x?: number | null,
  y?: number | null,
  variant?: string | null,
  file?: UpdateFileObjInput | null,
  log?: UpdateLogObjInput | null,
  link?: UpdateLinkObjInput | null,
  note?: UpdateNoteObjInput | null,
};

export type DeleteStarObjInput = {
  id: string,
};

export type CreateMomentObjInput = {
  chapterId: string,
  spaceId: string,
  userId: string,
  time: string,
  title: string,
  description: string,
  visibility: string,
  variant: string,
  file?: UpdateFileObjInput | null,
  log?: UpdateLogObjInput | null,
  link?: UpdateLinkObjInput | null,
  note?: UpdateNoteObjInput | null,
};

export type MomentObj = {
  __typename: "MomentObj",
  id: string,
  chapterId: string,
  spaceId: string,
  userId: string,
  time: string,
  title: string,
  description: string,
  visibility: string,
  variant: string,
  file?: FileObj | null,
  log?: LogObj | null,
  link?: LinkObj | null,
  note?: NoteObj | null,
};

export type UpdateMomentObjInput = {
  id: string,
  chapterId?: string | null,
  spaceId?: string | null,
  userId?: string | null,
  time?: string | null,
  title?: string | null,
  description?: string | null,
  visibility?: string | null,
  variant?: string | null,
  file?: UpdateFileObjInput | null,
  log?: UpdateLogObjInput | null,
  link?: UpdateLinkObjInput | null,
  note?: UpdateNoteObjInput | null,
};

export type DeleteMomentObjInput = {
  id: string,
};

export type TableResourceObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  collectionId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  variant?: TableStringFilterInput | null,
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

export type ResourceObjConnection = {
  __typename: "ResourceObjConnection",
  items?:  Array<ResourceObj | null > | null,
  nextToken?: string | null,
};

export type TableConstellationObjFilterInput = {
  id?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  variant?: TableStringFilterInput | null,
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
  fname?: TableStringFilterInput | null,
  lname?: TableStringFilterInput | null,
  passwordHash?: TableStringFilterInput | null,
  email?: TableStringFilterInput | null,
  googleId?: TableStringFilterInput | null,
};

export type UserObjConnection = {
  __typename: "UserObjConnection",
  items?:  Array<UserObj | null > | null,
  nextToken?: string | null,
};

export type TableChapterObjFilterInput = {
  id?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  idx?: TableIntFilterInput | null,
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

export type ChapterObjConnection = {
  __typename: "ChapterObjConnection",
  items?:  Array<ChapterObj | null > | null,
  nextToken?: string | null,
};

export type TableMessageObjFilterInput = {
  id?: TableStringFilterInput | null,
  chatId?: TableStringFilterInput | null,
  source?: TableStringFilterInput | null,
  time?: TableStringFilterInput | null,
  message?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
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
  variant?: TableStringFilterInput | null,
};

export type SpaceObjConnection = {
  __typename: "SpaceObjConnection",
  items?:  Array<SpaceObj | null > | null,
  nextToken?: string | null,
};

export type TableCollectionObjFilterInput = {
  id?: TableStringFilterInput | null,
  galleryId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
};

export type CollectionObjConnection = {
  __typename: "CollectionObjConnection",
  items?:  Array<CollectionObj | null > | null,
  nextToken?: string | null,
};

export type TableFileObjFilterInput = {
  id?: TableStringFilterInput | null,
  src?: TableStringFilterInput | null,
  variant?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  size?: TableIntFilterInput | null,
};

export type FileObjConnection = {
  __typename: "FileObjConnection",
  items?:  Array<FileObj | null > | null,
  nextToken?: string | null,
};

export type TableJourneyObjFilterInput = {
  id?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
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
  chapterId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  summary?: TableStringFilterInput | null,
  time?: TableStringFilterInput | null,
};

export type ChatObjConnection = {
  __typename: "ChatObjConnection",
  items?:  Array<ChatObj | null > | null,
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

export type TableNoteObjFilterInput = {
  id?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  text?: TableStringFilterInput | null,
  variant?: TableStringFilterInput | null,
};

export type NoteObjConnection = {
  __typename: "NoteObjConnection",
  items?:  Array<NoteObj | null > | null,
  nextToken?: string | null,
};

export type TableLogObjFilterInput = {
  id?: TableStringFilterInput | null,
  loomId?: TableStringFilterInput | null,
  height?: TableIntFilterInput | null,
  width?: TableIntFilterInput | null,
  sharedUrl?: TableStringFilterInput | null,
  embedUrl?: TableStringFilterInput | null,
  thumbnailHeight?: TableIntFilterInput | null,
  thumbnailWidth?: TableIntFilterInput | null,
  thumbnailUrl?: TableStringFilterInput | null,
  duration?: TableIntFilterInput | null,
  providerUrl?: TableStringFilterInput | null,
};

export type LogObjConnection = {
  __typename: "LogObjConnection",
  items?:  Array<LogObj | null > | null,
  nextToken?: string | null,
};

export type TableLinkObjFilterInput = {
  id?: TableStringFilterInput | null,
  url?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  variant?: TableStringFilterInput | null,
};

export type LinkObjConnection = {
  __typename: "LinkObjConnection",
  items?:  Array<LinkObj | null > | null,
  nextToken?: string | null,
};

export type TableStarObjFilterInput = {
  id?: TableStringFilterInput | null,
  constellationId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  x?: TableFloatFilterInput | null,
  y?: TableFloatFilterInput | null,
  variant?: TableStringFilterInput | null,
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

export type TableMomentObjFilterInput = {
  id?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  time?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  visibility?: TableStringFilterInput | null,
  variant?: TableStringFilterInput | null,
};

export type MomentObjConnection = {
  __typename: "MomentObjConnection",
  items?:  Array<MomentObj | null > | null,
  nextToken?: string | null,
};

export type CreateResourceObjMutationVariables = {
  input: CreateResourceObjInput,
};

export type CreateResourceObjMutation = {
  createResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
  } | null,
};

export type UpdateResourceObjMutationVariables = {
  input: UpdateResourceObjInput,
};

export type UpdateResourceObjMutation = {
  updateResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
  } | null,
};

export type DeleteResourceObjMutationVariables = {
  input: DeleteResourceObjInput,
};

export type DeleteResourceObjMutation = {
  deleteResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
  } | null,
};

export type CreateConstellationObjMutationVariables = {
  input: CreateConstellationObjInput,
};

export type CreateConstellationObjMutation = {
  createConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    chapterId: string,
    title: string,
    description: string,
    variant: string,
  } | null,
};

export type UpdateConstellationObjMutationVariables = {
  input: UpdateConstellationObjInput,
};

export type UpdateConstellationObjMutation = {
  updateConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    chapterId: string,
    title: string,
    description: string,
    variant: string,
  } | null,
};

export type DeleteConstellationObjMutationVariables = {
  input: DeleteConstellationObjInput,
};

export type DeleteConstellationObjMutation = {
  deleteConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    chapterId: string,
    title: string,
    description: string,
    variant: string,
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
      fileType: string,
      title: string,
      size: number,
      variant: string,
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
      fileType: string,
      title: string,
      size: number,
      variant: string,
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
      fileType: string,
      title: string,
      size: number,
      variant: string,
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
    fname: string,
    lname: string,
    passwordHash?: string | null,
    email: string,
    googleId?: string | null,
    profilePicture?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
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
    passwordHash?: string | null,
    email: string,
    googleId?: string | null,
    profilePicture?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
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
    passwordHash?: string | null,
    email: string,
    googleId?: string | null,
    profilePicture?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
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
    idx: number,
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
    idx: number,
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
    idx: number,
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
    userId?: string | null,
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
    userId?: string | null,
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
    userId?: string | null,
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
    time: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    },
    variant: string,
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
    time: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    },
    variant: string,
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
    time: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    },
    variant: string,
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
    title: string,
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
    title: string,
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
    title: string,
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
    fileType: string,
    title: string,
    size: number,
    variant: string,
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
    fileType: string,
    title: string,
    size: number,
    variant: string,
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
    fileType: string,
    title: string,
    size: number,
    variant: string,
  } | null,
};

export type CreateJourneyObjMutationVariables = {
  input: CreateJourneyObjInput,
};

export type CreateJourneyObjMutation = {
  createJourneyObj?:  {
    __typename: "JourneyObj",
    id: string,
    chapterId: string,
  } | null,
};

export type UpdateJourneyObjMutationVariables = {
  input: UpdateJourneyObjInput,
};

export type UpdateJourneyObjMutation = {
  updateJourneyObj?:  {
    __typename: "JourneyObj",
    id: string,
    chapterId: string,
  } | null,
};

export type DeleteJourneyObjMutationVariables = {
  input: DeleteJourneyObjInput,
};

export type DeleteJourneyObjMutation = {
  deleteJourneyObj?:  {
    __typename: "JourneyObj",
    id: string,
    chapterId: string,
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
    chapterId: string,
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
    chapterId: string,
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
    chapterId: string,
    title: string,
    summary: string,
    time: string,
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

export type CreateNoteObjMutationVariables = {
  input: CreateNoteObjInput,
};

export type CreateNoteObjMutation = {
  createNoteObj?:  {
    __typename: "NoteObj",
    id: string,
    title: string,
    text: string,
    variant: string,
  } | null,
};

export type UpdateNoteObjMutationVariables = {
  input: UpdateNoteObjInput,
};

export type UpdateNoteObjMutation = {
  updateNoteObj?:  {
    __typename: "NoteObj",
    id: string,
    title: string,
    text: string,
    variant: string,
  } | null,
};

export type DeleteNoteObjMutationVariables = {
  input: DeleteNoteObjInput,
};

export type DeleteNoteObjMutation = {
  deleteNoteObj?:  {
    __typename: "NoteObj",
    id: string,
    title: string,
    text: string,
    variant: string,
  } | null,
};

export type CreateLogObjMutationVariables = {
  input: CreateLogObjInput,
};

export type CreateLogObjMutation = {
  createLogObj?:  {
    __typename: "LogObj",
    id: string,
    loomId: string,
    height: number,
    width: number,
    sharedUrl: string,
    embedUrl: string,
    thumbnailHeight?: number | null,
    thumbnailWidth?: number | null,
    thumbnailUrl?: string | null,
    duration?: number | null,
    providerUrl: string,
  } | null,
};

export type UpdateLogObjMutationVariables = {
  input: UpdateLogObjInput,
};

export type UpdateLogObjMutation = {
  updateLogObj?:  {
    __typename: "LogObj",
    id: string,
    loomId: string,
    height: number,
    width: number,
    sharedUrl: string,
    embedUrl: string,
    thumbnailHeight?: number | null,
    thumbnailWidth?: number | null,
    thumbnailUrl?: string | null,
    duration?: number | null,
    providerUrl: string,
  } | null,
};

export type DeleteLogObjMutationVariables = {
  input: DeleteLogObjInput,
};

export type DeleteLogObjMutation = {
  deleteLogObj?:  {
    __typename: "LogObj",
    id: string,
    loomId: string,
    height: number,
    width: number,
    sharedUrl: string,
    embedUrl: string,
    thumbnailHeight?: number | null,
    thumbnailWidth?: number | null,
    thumbnailUrl?: string | null,
    duration?: number | null,
    providerUrl: string,
  } | null,
};

export type CreateLinkObjMutationVariables = {
  input: CreateLinkObjInput,
};

export type CreateLinkObjMutation = {
  createLinkObj?:  {
    __typename: "LinkObj",
    id: string,
    url: string,
    title: string,
    variant: string,
  } | null,
};

export type UpdateLinkObjMutationVariables = {
  input: UpdateLinkObjInput,
};

export type UpdateLinkObjMutation = {
  updateLinkObj?:  {
    __typename: "LinkObj",
    id: string,
    url: string,
    title: string,
    variant: string,
  } | null,
};

export type DeleteLinkObjMutationVariables = {
  input: DeleteLinkObjInput,
};

export type DeleteLinkObjMutation = {
  deleteLinkObj?:  {
    __typename: "LinkObj",
    id: string,
    url: string,
    title: string,
    variant: string,
  } | null,
};

export type CreateStarObjMutationVariables = {
  input: CreateStarObjInput,
};

export type CreateStarObjMutation = {
  createStarObj?:  {
    __typename: "StarObj",
    id: string,
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
  } | null,
};

export type UpdateStarObjMutationVariables = {
  input: UpdateStarObjInput,
};

export type UpdateStarObjMutation = {
  updateStarObj?:  {
    __typename: "StarObj",
    id: string,
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
  } | null,
};

export type DeleteStarObjMutationVariables = {
  input: DeleteStarObjInput,
};

export type DeleteStarObjMutation = {
  deleteStarObj?:  {
    __typename: "StarObj",
    id: string,
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
  } | null,
};

export type CreateMomentObjMutationVariables = {
  input: CreateMomentObjInput,
};

export type CreateMomentObjMutation = {
  createMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    chapterId: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    description: string,
    visibility: string,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
  } | null,
};

export type UpdateMomentObjMutationVariables = {
  input: UpdateMomentObjInput,
};

export type UpdateMomentObjMutation = {
  updateMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    chapterId: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    description: string,
    visibility: string,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
  } | null,
};

export type DeleteMomentObjMutationVariables = {
  input: DeleteMomentObjInput,
};

export type DeleteMomentObjMutation = {
  deleteMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    chapterId: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    description: string,
    visibility: string,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
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
    time: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    },
    variant: string,
  } | null,
};

export type GetResourceObjQueryVariables = {
  id: string,
};

export type GetResourceObjQuery = {
  getResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
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
      userId: string,
      collectionId: string,
      title: string,
      description: string,
      variant: string,
      file?:  {
        __typename: "FileObj",
        id: string,
        src: string,
        fileType: string,
        title: string,
        size: number,
        variant: string,
      } | null,
      log?:  {
        __typename: "LogObj",
        id: string,
        loomId: string,
        height: number,
        width: number,
        sharedUrl: string,
        embedUrl: string,
        thumbnailHeight?: number | null,
        thumbnailWidth?: number | null,
        thumbnailUrl?: string | null,
        duration?: number | null,
        providerUrl: string,
      } | null,
      link?:  {
        __typename: "LinkObj",
        id: string,
        url: string,
        title: string,
        variant: string,
      } | null,
      note?:  {
        __typename: "NoteObj",
        id: string,
        title: string,
        text: string,
        variant: string,
      } | null,
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
    chapterId: string,
    title: string,
    description: string,
    variant: string,
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
      chapterId: string,
      title: string,
      description: string,
      variant: string,
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
      fileType: string,
      title: string,
      size: number,
      variant: string,
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
      thumbnail:  {
        __typename: "FileObj",
        id: string,
        src: string,
        fileType: string,
        title: string,
        size: number,
        variant: string,
      },
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
    passwordHash?: string | null,
    email: string,
    googleId?: string | null,
    profilePicture?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
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
      passwordHash?: string | null,
      email: string,
      googleId?: string | null,
      profilePicture?:  {
        __typename: "FileObj",
        id: string,
        src: string,
        fileType: string,
        title: string,
        size: number,
        variant: string,
      } | null,
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
    idx: number,
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
      idx: number,
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
    userId?: string | null,
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
      userId?: string | null,
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
    time: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    },
    variant: string,
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
      time: string,
      description: string,
      thumbnail:  {
        __typename: "FileObj",
        id: string,
        src: string,
        fileType: string,
        title: string,
        size: number,
        variant: string,
      },
      variant: string,
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
    title: string,
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
      title: string,
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
    fileType: string,
    title: string,
    size: number,
    variant: string,
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
      fileType: string,
      title: string,
      size: number,
      variant: string,
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
    chapterId: string,
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
      chapterId: string,
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
    chapterId: string,
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
      chapterId: string,
      title: string,
      summary: string,
      time: string,
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

export type GetNoteObjQueryVariables = {
  id: string,
};

export type GetNoteObjQuery = {
  getNoteObj?:  {
    __typename: "NoteObj",
    id: string,
    title: string,
    text: string,
    variant: string,
  } | null,
};

export type ListNoteObjsQueryVariables = {
  filter?: TableNoteObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNoteObjsQuery = {
  listNoteObjs?:  {
    __typename: "NoteObjConnection",
    items?:  Array< {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLogObjQueryVariables = {
  id: string,
};

export type GetLogObjQuery = {
  getLogObj?:  {
    __typename: "LogObj",
    id: string,
    loomId: string,
    height: number,
    width: number,
    sharedUrl: string,
    embedUrl: string,
    thumbnailHeight?: number | null,
    thumbnailWidth?: number | null,
    thumbnailUrl?: string | null,
    duration?: number | null,
    providerUrl: string,
  } | null,
};

export type ListLogObjsQueryVariables = {
  filter?: TableLogObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogObjsQuery = {
  listLogObjs?:  {
    __typename: "LogObjConnection",
    items?:  Array< {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLinkObjQueryVariables = {
  id: string,
};

export type GetLinkObjQuery = {
  getLinkObj?:  {
    __typename: "LinkObj",
    id: string,
    url: string,
    title: string,
    variant: string,
  } | null,
};

export type ListLinkObjsQueryVariables = {
  filter?: TableLinkObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLinkObjsQuery = {
  listLinkObjs?:  {
    __typename: "LinkObjConnection",
    items?:  Array< {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetStarObjQueryVariables = {
  id: string,
};

export type GetStarObjQuery = {
  getStarObj?:  {
    __typename: "StarObj",
    id: string,
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
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
      constellationId: string,
      title: string,
      description: string,
      x: number,
      y: number,
      variant: string,
      file?:  {
        __typename: "FileObj",
        id: string,
        src: string,
        fileType: string,
        title: string,
        size: number,
        variant: string,
      } | null,
      log?:  {
        __typename: "LogObj",
        id: string,
        loomId: string,
        height: number,
        width: number,
        sharedUrl: string,
        embedUrl: string,
        thumbnailHeight?: number | null,
        thumbnailWidth?: number | null,
        thumbnailUrl?: string | null,
        duration?: number | null,
        providerUrl: string,
      } | null,
      note?:  {
        __typename: "NoteObj",
        id: string,
        title: string,
        text: string,
        variant: string,
      } | null,
      link?:  {
        __typename: "LinkObj",
        id: string,
        url: string,
        title: string,
        variant: string,
      } | null,
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
    chapterId: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    description: string,
    visibility: string,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
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
      chapterId: string,
      spaceId: string,
      userId: string,
      time: string,
      title: string,
      description: string,
      visibility: string,
      variant: string,
      file?:  {
        __typename: "FileObj",
        id: string,
        src: string,
        fileType: string,
        title: string,
        size: number,
        variant: string,
      } | null,
      log?:  {
        __typename: "LogObj",
        id: string,
        loomId: string,
        height: number,
        width: number,
        sharedUrl: string,
        embedUrl: string,
        thumbnailHeight?: number | null,
        thumbnailWidth?: number | null,
        thumbnailUrl?: string | null,
        duration?: number | null,
        providerUrl: string,
      } | null,
      link?:  {
        __typename: "LinkObj",
        id: string,
        url: string,
        title: string,
        variant: string,
      } | null,
      note?:  {
        __typename: "NoteObj",
        id: string,
        title: string,
        text: string,
        variant: string,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateResourceObjSubscriptionVariables = {
  id?: string | null,
  collectionId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateResourceObjSubscription = {
  onCreateResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
  } | null,
};

export type OnUpdateResourceObjSubscriptionVariables = {
  id?: string | null,
  collectionId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateResourceObjSubscription = {
  onUpdateResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
  } | null,
};

export type OnDeleteResourceObjSubscriptionVariables = {
  id?: string | null,
  collectionId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnDeleteResourceObjSubscription = {
  onDeleteResourceObj?:  {
    __typename: "ResourceObj",
    id: string,
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
  } | null,
};

export type OnCreateConstellationObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateConstellationObjSubscription = {
  onCreateConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    chapterId: string,
    title: string,
    description: string,
    variant: string,
  } | null,
};

export type OnUpdateConstellationObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateConstellationObjSubscription = {
  onUpdateConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    chapterId: string,
    title: string,
    description: string,
    variant: string,
  } | null,
};

export type OnDeleteConstellationObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnDeleteConstellationObjSubscription = {
  onDeleteConstellationObj?:  {
    __typename: "ConstellationObj",
    id: string,
    chapterId: string,
    title: string,
    description: string,
    variant: string,
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
      fileType: string,
      title: string,
      size: number,
      variant: string,
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
      fileType: string,
      title: string,
      size: number,
      variant: string,
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
      fileType: string,
      title: string,
      size: number,
      variant: string,
    },
  } | null,
};

export type OnCreateUserObjSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  passwordHash?: string | null,
  email?: string | null,
  googleId?: string | null,
};

export type OnCreateUserObjSubscription = {
  onCreateUserObj?:  {
    __typename: "UserObj",
    id: string,
    fname: string,
    lname: string,
    passwordHash?: string | null,
    email: string,
    googleId?: string | null,
    profilePicture?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
  } | null,
};

export type OnUpdateUserObjSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  passwordHash?: string | null,
  email?: string | null,
  googleId?: string | null,
};

export type OnUpdateUserObjSubscription = {
  onUpdateUserObj?:  {
    __typename: "UserObj",
    id: string,
    fname: string,
    lname: string,
    passwordHash?: string | null,
    email: string,
    googleId?: string | null,
    profilePicture?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
  } | null,
};

export type OnDeleteUserObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  passwordHash?: string | null,
  email?: string | null,
  googleId?: string | null,
};

export type OnDeleteUserObjSubscription = {
  onDeleteUserObj?:  {
    __typename: "UserObj",
    id: string,
    fname: string,
    lname: string,
    passwordHash?: string | null,
    email: string,
    googleId?: string | null,
    profilePicture?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
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
    idx: number,
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
    idx: number,
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
    idx: number,
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
    userId?: string | null,
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
    userId?: string | null,
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
    userId?: string | null,
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
    time: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    },
    variant: string,
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
    time: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    },
    variant: string,
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
    time: string,
    description: string,
    thumbnail:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    },
    variant: string,
  } | null,
};

export type OnCreateCollectionObjSubscriptionVariables = {
  id?: string | null,
  galleryId?: string | null,
  title?: string | null,
};

export type OnCreateCollectionObjSubscription = {
  onCreateCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    galleryId: string,
    title: string,
  } | null,
};

export type OnUpdateCollectionObjSubscriptionVariables = {
  id?: string | null,
  galleryId?: string | null,
  title?: string | null,
};

export type OnUpdateCollectionObjSubscription = {
  onUpdateCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    galleryId: string,
    title: string,
  } | null,
};

export type OnDeleteCollectionObjSubscriptionVariables = {
  id?: string | null,
  galleryId?: string | null,
  title?: string | null,
};

export type OnDeleteCollectionObjSubscription = {
  onDeleteCollectionObj?:  {
    __typename: "CollectionObj",
    id: string,
    galleryId: string,
    title: string,
  } | null,
};

export type OnCreateFileObjSubscriptionVariables = {
  id?: string | null,
  src?: string | null,
  variant?: string | null,
  title?: string | null,
  size?: number | null,
};

export type OnCreateFileObjSubscription = {
  onCreateFileObj?:  {
    __typename: "FileObj",
    id: string,
    src: string,
    fileType: string,
    title: string,
    size: number,
    variant: string,
  } | null,
};

export type OnUpdateFileObjSubscriptionVariables = {
  id?: string | null,
  src?: string | null,
  variant?: string | null,
  title?: string | null,
  size?: number | null,
};

export type OnUpdateFileObjSubscription = {
  onUpdateFileObj?:  {
    __typename: "FileObj",
    id: string,
    src: string,
    fileType: string,
    title: string,
    size: number,
    variant: string,
  } | null,
};

export type OnDeleteFileObjSubscriptionVariables = {
  id?: string | null,
  src?: string | null,
  variant?: string | null,
  title?: string | null,
  size?: number | null,
};

export type OnDeleteFileObjSubscription = {
  onDeleteFileObj?:  {
    __typename: "FileObj",
    id: string,
    src: string,
    fileType: string,
    title: string,
    size: number,
    variant: string,
  } | null,
};

export type OnCreateJourneyObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnCreateJourneyObjSubscription = {
  onCreateJourneyObj?:  {
    __typename: "JourneyObj",
    id: string,
    chapterId: string,
  } | null,
};

export type OnUpdateJourneyObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnUpdateJourneyObjSubscription = {
  onUpdateJourneyObj?:  {
    __typename: "JourneyObj",
    id: string,
    chapterId: string,
  } | null,
};

export type OnDeleteJourneyObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
};

export type OnDeleteJourneyObjSubscription = {
  onDeleteJourneyObj?:  {
    __typename: "JourneyObj",
    id: string,
    chapterId: string,
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
  chapterId?: string | null,
  title?: string | null,
  summary?: string | null,
  time?: string | null,
};

export type OnCreateChatObjSubscription = {
  onCreateChatObj?:  {
    __typename: "ChatObj",
    id: string,
    chapterId: string,
    title: string,
    summary: string,
    time: string,
  } | null,
};

export type OnUpdateChatObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
  title?: string | null,
  summary?: string | null,
  time?: string | null,
};

export type OnUpdateChatObjSubscription = {
  onUpdateChatObj?:  {
    __typename: "ChatObj",
    id: string,
    chapterId: string,
    title: string,
    summary: string,
    time: string,
  } | null,
};

export type OnDeleteChatObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
  title?: string | null,
  summary?: string | null,
  time?: string | null,
};

export type OnDeleteChatObjSubscription = {
  onDeleteChatObj?:  {
    __typename: "ChatObj",
    id: string,
    chapterId: string,
    title: string,
    summary: string,
    time: string,
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

export type OnCreateNoteObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  text?: string | null,
  variant?: string | null,
};

export type OnCreateNoteObjSubscription = {
  onCreateNoteObj?:  {
    __typename: "NoteObj",
    id: string,
    title: string,
    text: string,
    variant: string,
  } | null,
};

export type OnUpdateNoteObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  text?: string | null,
  variant?: string | null,
};

export type OnUpdateNoteObjSubscription = {
  onUpdateNoteObj?:  {
    __typename: "NoteObj",
    id: string,
    title: string,
    text: string,
    variant: string,
  } | null,
};

export type OnDeleteNoteObjSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  text?: string | null,
  variant?: string | null,
};

export type OnDeleteNoteObjSubscription = {
  onDeleteNoteObj?:  {
    __typename: "NoteObj",
    id: string,
    title: string,
    text: string,
    variant: string,
  } | null,
};

export type OnCreateLogObjSubscriptionVariables = {
  id?: string | null,
  loomId?: string | null,
  height?: number | null,
  width?: number | null,
  sharedUrl?: string | null,
};

export type OnCreateLogObjSubscription = {
  onCreateLogObj?:  {
    __typename: "LogObj",
    id: string,
    loomId: string,
    height: number,
    width: number,
    sharedUrl: string,
    embedUrl: string,
    thumbnailHeight?: number | null,
    thumbnailWidth?: number | null,
    thumbnailUrl?: string | null,
    duration?: number | null,
    providerUrl: string,
  } | null,
};

export type OnUpdateLogObjSubscriptionVariables = {
  id?: string | null,
  loomId?: string | null,
  height?: number | null,
  width?: number | null,
  sharedUrl?: string | null,
};

export type OnUpdateLogObjSubscription = {
  onUpdateLogObj?:  {
    __typename: "LogObj",
    id: string,
    loomId: string,
    height: number,
    width: number,
    sharedUrl: string,
    embedUrl: string,
    thumbnailHeight?: number | null,
    thumbnailWidth?: number | null,
    thumbnailUrl?: string | null,
    duration?: number | null,
    providerUrl: string,
  } | null,
};

export type OnDeleteLogObjSubscriptionVariables = {
  id?: string | null,
  loomId?: string | null,
  height?: number | null,
  width?: number | null,
  sharedUrl?: string | null,
};

export type OnDeleteLogObjSubscription = {
  onDeleteLogObj?:  {
    __typename: "LogObj",
    id: string,
    loomId: string,
    height: number,
    width: number,
    sharedUrl: string,
    embedUrl: string,
    thumbnailHeight?: number | null,
    thumbnailWidth?: number | null,
    thumbnailUrl?: string | null,
    duration?: number | null,
    providerUrl: string,
  } | null,
};

export type OnCreateLinkObjSubscriptionVariables = {
  id?: string | null,
  url?: string | null,
  title?: string | null,
  variant?: string | null,
};

export type OnCreateLinkObjSubscription = {
  onCreateLinkObj?:  {
    __typename: "LinkObj",
    id: string,
    url: string,
    title: string,
    variant: string,
  } | null,
};

export type OnUpdateLinkObjSubscriptionVariables = {
  id?: string | null,
  url?: string | null,
  title?: string | null,
  variant?: string | null,
};

export type OnUpdateLinkObjSubscription = {
  onUpdateLinkObj?:  {
    __typename: "LinkObj",
    id: string,
    url: string,
    title: string,
    variant: string,
  } | null,
};

export type OnDeleteLinkObjSubscriptionVariables = {
  id?: string | null,
  url?: string | null,
  title?: string | null,
  variant?: string | null,
};

export type OnDeleteLinkObjSubscription = {
  onDeleteLinkObj?:  {
    __typename: "LinkObj",
    id: string,
    url: string,
    title: string,
    variant: string,
  } | null,
};

export type OnCreateStarObjSubscriptionVariables = {
  id?: string | null,
  constellationId?: string | null,
  title?: string | null,
  description?: string | null,
  x?: number | null,
};

export type OnCreateStarObjSubscription = {
  onCreateStarObj?:  {
    __typename: "StarObj",
    id: string,
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
  } | null,
};

export type OnUpdateStarObjSubscriptionVariables = {
  id?: string | null,
  constellationId?: string | null,
  title?: string | null,
  description?: string | null,
  x?: number | null,
};

export type OnUpdateStarObjSubscription = {
  onUpdateStarObj?:  {
    __typename: "StarObj",
    id: string,
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
  } | null,
};

export type OnDeleteStarObjSubscriptionVariables = {
  id?: string | null,
  constellationId?: string | null,
  title?: string | null,
  description?: string | null,
  x?: number | null,
};

export type OnDeleteStarObjSubscription = {
  onDeleteStarObj?:  {
    __typename: "StarObj",
    id: string,
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
  } | null,
};

export type OnCreateMomentObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
  spaceId?: string | null,
  userId?: string | null,
  time?: string | null,
};

export type OnCreateMomentObjSubscription = {
  onCreateMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    chapterId: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    description: string,
    visibility: string,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
  } | null,
};

export type OnUpdateMomentObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
  spaceId?: string | null,
  userId?: string | null,
  time?: string | null,
};

export type OnUpdateMomentObjSubscription = {
  onUpdateMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    chapterId: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    description: string,
    visibility: string,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
  } | null,
};

export type OnDeleteMomentObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
  spaceId?: string | null,
  userId?: string | null,
  time?: string | null,
};

export type OnDeleteMomentObjSubscription = {
  onDeleteMomentObj?:  {
    __typename: "MomentObj",
    id: string,
    chapterId: string,
    spaceId: string,
    userId: string,
    time: string,
    title: string,
    description: string,
    visibility: string,
    variant: string,
    file?:  {
      __typename: "FileObj",
      id: string,
      src: string,
      fileType: string,
      title: string,
      size: number,
      variant: string,
    } | null,
    log?:  {
      __typename: "LogObj",
      id: string,
      loomId: string,
      height: number,
      width: number,
      sharedUrl: string,
      embedUrl: string,
      thumbnailHeight?: number | null,
      thumbnailWidth?: number | null,
      thumbnailUrl?: string | null,
      duration?: number | null,
      providerUrl: string,
    } | null,
    link?:  {
      __typename: "LinkObj",
      id: string,
      url: string,
      title: string,
      variant: string,
    } | null,
    note?:  {
      __typename: "NoteObj",
      id: string,
      title: string,
      text: string,
      variant: string,
    } | null,
  } | null,
};
