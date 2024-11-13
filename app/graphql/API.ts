/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChapterSceneObjInput = {
  chapterId: string,
  userId: string,
  title: string,
  summary: string,
  objective: string,
  created: string,
};

export type ChapterSceneObj = {
  __typename: "ChapterSceneObj",
  id: string,
  userId: string,
  chapterId: string,
  summary: string,
  title: string,
  created: string,
  objective: string,
};

export type UpdateChapterSceneObjInput = {
  id: string,
  userId?: string | null,
  chapterId?: string | null,
  title?: string | null,
  summary?: string | null,
  objective?: string | null,
  created?: string | null,
};

export type DeleteChapterSceneObjInput = {
  id: string,
};

export type CreateConversationMessageObjInput = {
  userId?: string | null,
  agentId?: string | null,
  conversationId: string,
  sceneId: string,
  created: string,
  message: string,
  hasAttachment: boolean,
  variant?: string | null,
  fileElem?: FileElemInput | null,
  textElem?: TextElemInput | null,
  urlElem?: UrlElemInput | null,
};

export type FileElemInput = {
  id: string,
  src?: string | null,
  ext?: string | null,
  title?: string | null,
  size?: number | null,
  variant?: string | null,
};

export type TextElemInput = {
  id: string,
  title?: string | null,
  text?: string | null,
  variant?: string | null,
};

export type UrlElemInput = {
  id: string,
  url?: string | null,
  title?: string | null,
  variant?: string | null,
};

export type ConversationMessageObj = {
  __typename: "ConversationMessageObj",
  id: string,
  userId?: string | null,
  agentId?: string | null,
  conversationId: string,
  sceneId: string,
  created: string,
  message: string,
  hasAttachment: boolean,
  variant?: string | null,
  fileElem?: FileElem | null,
  textElem?: TextElem | null,
  urlElem?: UrlElem | null,
};

export type FileElem = {
  __typename: "FileElem",
  id: string,
  src?: string | null,
  ext?: string | null,
  title?: string | null,
  size?: number | null,
  variant?: string | null,
};

export type TextElem = {
  __typename: "TextElem",
  id: string,
  title?: string | null,
  text?: string | null,
  variant?: string | null,
};

export type UrlElem = {
  __typename: "UrlElem",
  id: string,
  url?: string | null,
  title?: string | null,
  variant?: string | null,
};

export type UpdateConversationMessageObjInput = {
  id: string,
  userId?: string | null,
  agentId?: string | null,
  conversationId?: string | null,
  sceneId?: string | null,
  created?: string | null,
  message?: string | null,
  hasAttachment?: boolean | null,
  variant?: string | null,
  fileElem?: FileElemInput | null,
  textElem?: TextElemInput | null,
  urlElem?: UrlElemInput | null,
};

export type DeleteConversationMessageObjInput = {
  id: string,
};

export type CreateSceneIdeaObjInput = {
  sceneId: string,
  userId: string,
  idx: number,
  column: string,
  title: string,
  description: string,
  visible: boolean,
  x: number,
  y: number,
  width: number,
  height: number,
  scale: number,
  rotation: number,
  variant: string,
  fileElem?: FileElemInput | null,
  textElem?: TextElemInput | null,
  urlElem?: UrlElemInput | null,
  created: string,
};

export type SceneIdeaObj = {
  __typename: "SceneIdeaObj",
  id: string,
  userId: string,
  sceneId: string,
  idx: number,
  column: string,
  title: string,
  description: string,
  x: number,
  y: number,
  visible: boolean,
  width: number,
  height: number,
  scale: number,
  rotation: number,
  variant: string,
  fileElem?: FileElem | null,
  textElem?: TextElem | null,
  urlElem?: UrlElem | null,
  created: string,
};

export type UpdateSceneIdeaObjInput = {
  id: string,
  userId?: string | null,
  sceneId?: string | null,
  idx?: number | null,
  column?: string | null,
  title?: string | null,
  description?: string | null,
  visible?: boolean | null,
  x?: number | null,
  y?: number | null,
  width?: number | null,
  height?: number | null,
  rotation?: number | null,
  scale?: number | null,
  variant?: string | null,
  fileElem?: FileElemInput | null,
  textElem?: TextElemInput | null,
  urlElem?: UrlElemInput | null,
  created?: string | null,
};

export type DeleteSceneIdeaObjInput = {
  id: string,
};

export type CreateCollectionResourceObjInput = {
  userId: string,
  collectionId: string,
  title: string,
  description: string,
  created: string,
  variant: string,
  fileElem?: FileElemInput | null,
  textElem?: TextElemInput | null,
  urlElem?: UrlElemInput | null,
};

export type CollectionResourceObj = {
  __typename: "CollectionResourceObj",
  id: string,
  userId: string,
  collectionId: string,
  title: string,
  description: string,
  fileElem?: FileElem | null,
  textElem?: TextElem | null,
  urlElem?: UrlElem | null,
  variant: string,
  created: string,
};

export type UpdateCollectionResourceObjInput = {
  id: string,
  userId?: string | null,
  collectionId?: string | null,
  title?: string | null,
  description?: string | null,
  variant?: string | null,
  created?: string | null,
};

export type DeleteCollectionResourceObjInput = {
  id: string,
};

export type CreateUserObjInput = {
  displayName: string,
  fname: string,
  lname: string,
  role: string,
  bio: string,
  email: string,
  created: string,
  dp: FileElemInput,
  visibility: string,
  passwordHash?: string | null,
  customerId?: string | null,
  subscriptionId?: string | null,
  priceId?: string | null,
  productId?: string | null,
  journalId?: string | null,
  clientId?: string | null,
};

export type UserObj = {
  __typename: "UserObj",
  id: string,
  displayName: string,
  fname: string,
  lname: string,
  email: string,
  bio: string,
  dp: FileElem,
  visibility: string,
  role: string,
  passwordHash?: string | null,
  customerId?: string | null,
  subscriptionId?: string | null,
  productId?: string | null,
  priceId?: string | null,
  created: string,
  journalId: string,
  clientId?: string | null,
};

export type UpdateUserObjInput = {
  id: string,
  displayName?: string | null,
  fname?: string | null,
  lname?: string | null,
  role?: string | null,
  visibility?: string | null,
  passwordHash?: string | null,
  email?: string | null,
  customerId?: string | null,
  subscriptionId?: string | null,
  priceId?: string | null,
  productId?: string | null,
  created?: string | null,
  dp?: FileElemInput | null,
  journalId?: string | null,
  clientId?: string | null,
  bio?: string | null,
};

export type DeleteUserObjInput = {
  id: string,
};

export type CreateSpaceChapterObjInput = {
  spaceId: string,
  userId: string,
  title: string,
  description: string,
  objective: string,
  idx: number,
  created: string,
};

export type SpaceChapterObj = {
  __typename: "SpaceChapterObj",
  id: string,
  spaceId: string,
  title: string,
  userId: string,
  description: string,
  objective: string,
  idx: number,
  created: string,
};

export type UpdateSpaceChapterObjInput = {
  id: string,
  userId?: string | null,
  spaceId?: string | null,
  title?: string | null,
  description?: string | null,
  objective?: string | null,
  idx?: number | null,
  created?: string | null,
};

export type DeleteSpaceChapterObjInput = {
  id: string,
};

export type CreateSpaceObjInput = {
  userId: string,
  title: string,
  thumbnail?: FileElemInput | null,
  created: string,
  description: string,
  objective: string,
  summary: string,
  category: string,
  flowId?: string | null,
  target: string,
  starred: boolean,
  visibility: string,
};

export type SpaceObj = {
  __typename: "SpaceObj",
  id: string,
  userId: string,
  title: string,
  created: string,
  description: string,
  objective: string,
  summary: string,
  thumbnail: FileElem,
  category: string,
  target: string,
  flowId?: string | null,
  starred: boolean,
  visibility: string,
};

export type UpdateSpaceObjInput = {
  id: string,
  userId?: string | null,
  title?: string | null,
  thumbnail?: FileElemInput | null,
  created?: string | null,
  description?: string | null,
  objective?: string | null,
  summary?: string | null,
  category?: string | null,
  flowId?: string | null,
  target?: string | null,
  starred?: boolean | null,
  visibility?: string | null,
};

export type DeleteSpaceObjInput = {
  id: string,
};

export type CreateSpaceMemberObjInput = {
  spaceId: string,
  userId: string,
  created: string,
};

export type SpaceMemberObj = {
  __typename: "SpaceMemberObj",
  id: string,
  spaceId: string,
  userId: string,
  created: string,
};

export type UpdateSpaceMemberObjInput = {
  id: string,
  spaceId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type DeleteSpaceMemberObjInput = {
  id: string,
};

export type CreateUserReservationObjInput = {
  fname: string,
  lname: string,
  email: string,
  role: string,
  created: string,
};

export type UserReservationObj = {
  __typename: "UserReservationObj",
  id: string,
  fname: string,
  lname: string,
  email: string,
  role: string,
  created: string,
};

export type UpdateUserReservationObjInput = {
  id: string,
  fname?: string | null,
  lname?: string | null,
  email?: string | null,
  role?: string | null,
  created?: string | null,
};

export type DeleteUserReservationObjInput = {
  id: string,
};

export type CreateAgentObjInput = {
  name: string,
  role: string,
  created: string,
  bio: string,
};

export type AgentObj = {
  __typename: "AgentObj",
  id: string,
  name: string,
  dp: FileElem,
  role: string,
  bio: string,
  created: string,
};

export type UpdateAgentObjInput = {
  id: string,
  name?: string | null,
  role?: string | null,
  created?: string | null,
  bio?: string | null,
};

export type DeleteAgentObjInput = {
  id: string,
};

export type CreateChapterSessionObjInput = {
  spaceId: string,
  userId: string,
  chapterId: string,
  duration: number,
  title: string,
  description: string,
  created: string,
};

export type ChapterSessionObj = {
  __typename: "ChapterSessionObj",
  id: string,
  spaceId: string,
  userId: string,
  chapterId: string,
  duration: number,
  title: string,
  description: string,
  created: string,
};

export type UpdateChapterSessionObjInput = {
  id: string,
  spaceId?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  duration?: number | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type DeleteChapterSessionObjInput = {
  id: string,
};

export type CreateChapterSessionUpdateObjInput = {
  userId: string,
  spaceId: string,
  chapterId: string,
  sessionId?: string | null,
  added: boolean,
  title: string,
  description: string,
  created: string,
  variant: string,
  conversationId?: string | null,
  sceneId?: string | null,
  ideaId?: string | null,
  postId?: string | null,
  logId?: string | null,
  commentId?: string | null,
  attachmentId?: string | null,
  memberId?: string | null,
};

export type ChapterSessionUpdateObj = {
  __typename: "ChapterSessionUpdateObj",
  id: string,
  userId: string,
  spaceId: string,
  chapterId: string,
  sessionId?: string | null,
  added: boolean,
  title: string,
  description: string,
  created: string,
  variant: string,
  conversationId?: string | null,
  sceneId?: string | null,
  ideaId?: string | null,
  postId?: string | null,
  logId?: string | null,
  commentId?: string | null,
  attachmentId?: string | null,
  memberId?: string | null,
};

export type UpdateChapterSessionUpdateObjInput = {
  id: string,
  spaceId?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  sessionId?: string | null,
  added?: boolean | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
  variant?: string | null,
  conversationId?: string | null,
  sceneId?: string | null,
  ideaId?: string | null,
  postId?: string | null,
  logId?: string | null,
  commentId?: string | null,
  attachmentId?: string | null,
  memberId?: string | null,
};

export type DeleteChapterSessionUpdateObjInput = {
  id: string,
};

export type CreateChapterSessionUpdateMemberObjInput = {
  updateId: string,
  userId: string,
  created: string,
};

export type ChapterSessionUpdateMemberObj = {
  __typename: "ChapterSessionUpdateMemberObj",
  id: string,
  updateId: string,
  userId: string,
  created: string,
};

export type UpdateChapterSessionUpdateMemberObjInput = {
  id: string,
  updateId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type DeleteChapterSessionUpdateMemberObjInput = {
  id: string,
};

export type CreateUserBackerObjInput = {
  backedId: string,
  userId: string,
  created: string,
};

export type UserBackerObj = {
  __typename: "UserBackerObj",
  id: string,
  backedId: string,
  userId: string,
  created: string,
};

export type UpdateUserBackerObjInput = {
  id: string,
  backedId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type DeleteUserBackerObjInput = {
  id: string,
};

export type CreateUserConnectionObjInput = {
  sourceId: string,
  destinationId: string,
  created: string,
};

export type UserConnectionObj = {
  __typename: "UserConnectionObj",
  id: string,
  sourceId: string,
  destinationId: string,
  created: string,
};

export type UpdateUserConnectionObjInput = {
  id: string,
  sourceId?: string | null,
  destinationId?: string | null,
  created?: string | null,
};

export type DeleteUserConnectionObjInput = {
  id: string,
};

export type CreateChapterSessionContributorObjInput = {
  sessionId: string,
  userId: string,
  created: string,
};

export type ChapterSessionContributorObj = {
  __typename: "ChapterSessionContributorObj",
  id: string,
  sessionId: string,
  userId: string,
  created: string,
};

export type UpdateChapterSessionContributorObjInput = {
  id: string,
  sessionId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type DeleteChapterSessionContributorObjInput = {
  id: string,
};

export type CreateSceneMemberObjInput = {
  sceneId: string,
  userId: string,
  created: string,
};

export type SceneMemberObj = {
  __typename: "SceneMemberObj",
  id: string,
  sceneId: string,
  userId: string,
  created: string,
};

export type UpdateSceneMemberObjInput = {
  id: string,
  sceneId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type DeleteSceneMemberObjInput = {
  id: string,
};

export type CreateSpaceIdeaRelationshipObjInput = {
  spaceId: string,
  fromUserId: string,
  fromChapterId: string,
  fromSceneId: string,
  fromIdeaId: string,
  toUserId: string,
  toChapterId: string,
  toSceneId: string,
  toIdeaId: string,
  weight: number,
  created: string,
};

export type SpaceIdeaRelationshipObj = {
  __typename: "SpaceIdeaRelationshipObj",
  id: string,
  fromUserId: string,
  spaceId: string,
  fromChapterId: string,
  fromSceneId: string,
  fromIdeaId: string,
  toUserId: string,
  toChapterId: string,
  toSceneId: string,
  toIdeaId: string,
  weight: number,
  created: string,
};

export type UpdateSpaceIdeaRelationshipObjInput = {
  id: string,
  fromUserId?: string | null,
  spaceId?: string | null,
  fromChapterId?: string | null,
  fromSceneId?: string | null,
  fromIdeaId?: string | null,
  toUserId?: string | null,
  toChapterId?: string | null,
  toSceneId?: string | null,
  toIdeaId?: string | null,
  weight?: number | null,
  created?: string | null,
};

export type DeleteSpaceIdeaRelationshipObjInput = {
  id: string,
};

export type CreateCommentKarmaObjInput = {
  userId?: string | null,
  commentId: string,
  created: string,
  neutrality: boolean,
};

export type CommentKarmaObj = {
  __typename: "CommentKarmaObj",
  id: string,
  userId?: string | null,
  commentId: string,
  created: string,
  neutrality: boolean,
};

export type UpdateCommentKarmaObjInput = {
  id: string,
  userId?: string | null,
  commentId?: string | null,
  created?: string | null,
  neutrality?: boolean | null,
};

export type DeleteCommentKarmaObjInput = {
  id: string,
};

export type CreateSpaceChapterMemberObjInput = {
  spaceId: string,
  userId: string,
  created: string,
};

export type SpaceChapterMemberObj = {
  __typename: "SpaceChapterMemberObj",
  id: string,
  spaceId: string,
  userId: string,
  created: string,
};

export type UpdateSpaceChapterMemberObjInput = {
  id: string,
  spaceId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type DeleteSpaceChapterMemberObjInput = {
  id: string,
};

export type CreateGalleryObjInput = {
  userId: string,
  title: string,
  description: string,
  created: string,
  thumbnail: FileElemInput,
};

export type GalleryObj = {
  __typename: "GalleryObj",
  id: string,
  userId: string,
  title: string,
  description: string,
  thumbnail: FileElem,
  created: string,
};

export type UpdateGalleryObjInput = {
  id: string,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
  thumbnail?: FileElemInput | null,
};

export type DeleteGalleryObjInput = {
  id: string,
};

export type CreateGalleryCollectionObjInput = {
  galleryId: string,
  title: string,
  description: string,
  created: string,
};

export type GalleryCollectionObj = {
  __typename: "GalleryCollectionObj",
  id: string,
  galleryId: string,
  title: string,
  description: string,
  created: string,
};

export type UpdateGalleryCollectionObjInput = {
  id: string,
  galleryId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type DeleteGalleryCollectionObjInput = {
  id: string,
};

export type CreateGalleryMemberObjInput = {
  galleryId: string,
  userId: string,
  created: string,
};

export type GalleryMemberObj = {
  __typename: "GalleryMemberObj",
  id: string,
  galleryId: string,
  userId: string,
  created: string,
};

export type UpdateGalleryMemberObjInput = {
  id: string,
  galleryId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type DeleteGalleryMemberObjInput = {
  id: string,
};

export type CreateUserActivityObjInput = {
  userId: string,
  chapterId?: string | null,
  spaceId?: string | null,
  horizonId?: string | null,
  acitivtyId?: string | null,
  added: boolean,
  title: string,
  description: string,
  created: string,
  variant: string,
  conversationId?: string | null,
  sceneId?: string | null,
  ideaId?: string | null,
  postId?: string | null,
  taskId?: string | null,
  commentId?: string | null,
  attachmentId?: string | null,
  contributorId?: string | null,
};

export type UserActivityObj = {
  __typename: "UserActivityObj",
  id: string,
  userId: string,
  chapterId?: string | null,
  spaceId?: string | null,
  horizonId?: string | null,
  acitivtyId?: string | null,
  added: boolean,
  title: string,
  description: string,
  created: string,
  variant: string,
  conversationId?: string | null,
  sceneId?: string | null,
  ideaId?: string | null,
  postId?: string | null,
  taskId?: string | null,
  commentId?: string | null,
  attachmentId?: string | null,
  contributorId?: string | null,
};

export type UpdateUserActivityObjInput = {
  id: string,
  userId?: string | null,
  chapterId?: string | null,
  spaceId?: string | null,
  horizonId?: string | null,
  acitivtyId?: string | null,
  added?: boolean | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
  variant?: string | null,
  conversationId?: string | null,
  sceneId?: string | null,
  ideaId?: string | null,
  postId?: string | null,
  taskId?: string | null,
  commentId?: string | null,
  attachmentId?: string | null,
  contributorId?: string | null,
};

export type DeleteUserActivityObjInput = {
  id: string,
};

export type CreatePostAttachmentObjInput = {
  userId?: string | null,
  postId: string,
  ideaId?: string | null,
  created: string,
  variant: string,
  title: string,
  fileElem?: FileElemInput | null,
  textElem?: TextElemInput | null,
  urlElem?: UrlElemInput | null,
};

export type PostAttachmentObj = {
  __typename: "PostAttachmentObj",
  id: string,
  userId?: string | null,
  postId: string,
  ideaId?: string | null,
  created: string,
  variant: string,
  title: string,
  fileElem?: FileElem | null,
  textElem?: TextElem | null,
  urlElem?: UrlElem | null,
};

export type UpdatePostAttachmentObjInput = {
  id: string,
  userId?: string | null,
  postId?: string | null,
  ideaId?: string | null,
  created?: string | null,
  variant?: string | null,
  title?: string | null,
  fileElem?: FileElemInput | null,
  textElem?: TextElemInput | null,
  urlElem?: UrlElemInput | null,
};

export type DeletePostAttachmentObjInput = {
  id: string,
};

export type CreatePostCommentObjInput = {
  userId?: string | null,
  postId: string,
  created: string,
  message: string,
};

export type PostCommentObj = {
  __typename: "PostCommentObj",
  id: string,
  userId?: string | null,
  postId: string,
  created: string,
  message: string,
};

export type UpdatePostCommentObjInput = {
  id: string,
  userId?: string | null,
  postId?: string | null,
  created?: string | null,
  message?: string | null,
};

export type DeletePostCommentObjInput = {
  id: string,
};

export type CreatePostKarmaObjInput = {
  userId?: string | null,
  postId: string,
  created: string,
  neutrality: boolean,
};

export type PostKarmaObj = {
  __typename: "PostKarmaObj",
  id: string,
  userId?: string | null,
  postId: string,
  created: string,
  neutrality: boolean,
};

export type UpdatePostKarmaObjInput = {
  id: string,
  userId?: string | null,
  postId?: string | null,
  created?: string | null,
  neutrality?: boolean | null,
};

export type DeletePostKarmaObjInput = {
  id: string,
};

export type CreatePostMemberObjInput = {
  postId: string,
  userId: string,
  created: string,
};

export type PostMemberObj = {
  __typename: "PostMemberObj",
  id: string,
  postId: string,
  userId: string,
  created: string,
};

export type UpdatePostMemberObjInput = {
  id: string,
  postId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type DeletePostMemberObjInput = {
  id: string,
};

export type CreateUserPostObjInput = {
  userId: string,
  chapterId: string,
  spaceId: string,
  title: string,
  description: string,
  created: string,
  postStatus: string,
  summary: string,
};

export type UserPostObj = {
  __typename: "UserPostObj",
  id: string,
  userId: string,
  chapterId: string,
  spaceId: string,
  title: string,
  description: string,
  created: string,
  postStatus: string,
  summary: string,
};

export type UpdateUserPostObjInput = {
  id: string,
  userId?: string | null,
  chapterId?: string | null,
  spaceId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
  postStatus?: string | null,
  summary?: string | null,
};

export type DeleteUserPostObjInput = {
  id: string,
};

export type CreateIdeaRelationshipObjInput = {
  spaceId?: string | null,
  horizonId?: string | null,
  fromUserId?: string | null,
  fromChapterId?: string | null,
  fromSceneId?: string | null,
  fromIdeaId?: string | null,
  toUserId?: string | null,
  toChapterId?: string | null,
  toSceneId?: string | null,
  toIdeaId?: string | null,
  weight: number,
  created: string,
};

export type IdeaRelationshipObj = {
  __typename: "IdeaRelationshipObj",
  id: string,
  spaceId?: string | null,
  horizonId?: string | null,
  fromUserId?: string | null,
  fromChapterId?: string | null,
  fromSceneId?: string | null,
  fromIdeaId?: string | null,
  toUserId?: string | null,
  toChapterId?: string | null,
  toSceneId?: string | null,
  toIdeaId?: string | null,
  weight: number,
  created: string,
};

export type UpdateIdeaRelationshipObjInput = {
  id: string,
  spaceId?: string | null,
  horizonId?: string | null,
  fromUserId?: string | null,
  fromChapterId?: string | null,
  fromSceneId?: string | null,
  fromIdeaId?: string | null,
  toUserId?: string | null,
  toChapterId?: string | null,
  toSceneId?: string | null,
  toIdeaId?: string | null,
  weight?: number | null,
  created?: string | null,
};

export type DeleteIdeaRelationshipObjInput = {
  id: string,
};

export type CreateIdeaObjInput = {
  sceneId?: string | null,
  pageId?: string | null,
  userId: string,
  idx: number,
  column: string,
  title: string,
  description: string,
  visible: boolean,
  x: number,
  y: number,
  width: number,
  height: number,
  scale: number,
  rotation: number,
  variant: string,
  fileElem?: FileElemInput | null,
  textElem?: TextElemInput | null,
  urlElem?: UrlElemInput | null,
  created: string,
};

export type IdeaObj = {
  __typename: "IdeaObj",
  id: string,
  idx: number,
  userId: string,
  sceneId?: string | null,
  pageId?: string | null,
  title: string,
  description: string,
  column: string,
  visible: boolean,
  x: number,
  y: number,
  width: number,
  height: number,
  scale: number,
  rotation: number,
  variant: string,
  fileElem?: FileElem | null,
  textElem?: TextElem | null,
  urlElem?: UrlElem | null,
  created: string,
};

export type UpdateIdeaObjInput = {
  id: string,
  idx?: number | null,
  userId?: string | null,
  visible?: boolean | null,
  sceneId?: string | null,
  pageId?: string | null,
  title?: string | null,
  description?: string | null,
  column?: string | null,
  x?: number | null,
  y?: number | null,
  width?: number | null,
  height?: number | null,
  scale?: number | null,
  rotation?: number | null,
  variant?: string | null,
  fileElem?: FileElemInput | null,
  textElem?: TextElemInput | null,
  urlElem?: UrlElemInput | null,
  created?: string | null,
};

export type DeleteIdeaObjInput = {
  id: string,
};

export type CreateIdeaSceneObjInput = {
  userId: string,
  chapterId?: string | null,
  arcId?: string | null,
  title: string,
  summary: string,
  objective: string,
  created: string,
};

export type IdeaSceneObj = {
  __typename: "IdeaSceneObj",
  id: string,
  userId: string,
  chapterId?: string | null,
  arcId?: string | null,
  title: string,
  summary: string,
  objective: string,
  created: string,
};

export type UpdateIdeaSceneObjInput = {
  id: string,
  userId?: string | null,
  chapterId?: string | null,
  arcId?: string | null,
  title?: string | null,
  summary?: string | null,
  objective?: string | null,
  created?: string | null,
};

export type DeleteIdeaSceneObjInput = {
  id: string,
};

export type CreateTaskMemberObjInput = {
  taskId: string,
  userId: string,
  created: string,
};

export type TaskMemberObj = {
  __typename: "TaskMemberObj",
  id: string,
  taskId: string,
  userId: string,
  created: string,
};

export type UpdateTaskMemberObjInput = {
  id: string,
  taskId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type DeleteTaskMemberObjInput = {
  id: string,
};

export type CreateTaskObjInput = {
  userId: string,
  chapterId: string,
  spaceId: string,
  title: string,
  description: string,
  taskStatus: string,
  created: string,
};

export type TaskObj = {
  __typename: "TaskObj",
  id: string,
  userId: string,
  chapterId: string,
  spaceId: string,
  title: string,
  description: string,
  taskStatus: string,
  created: string,
};

export type UpdateTaskObjInput = {
  id: string,
  userId?: string | null,
  chapterId?: string | null,
  spaceId?: string | null,
  title?: string | null,
  description?: string | null,
  taskStatus?: string | null,
  created?: string | null,
};

export type DeleteTaskObjInput = {
  id: string,
};

export type CreateConversationObjInput = {
  userId: string,
  chapterId?: string | null,
  decisionId?: string | null,
  toUserId?: string | null,
  toAgentId?: string | null,
  summary: string,
  title: string,
  created: string,
};

export type ConversationObj = {
  __typename: "ConversationObj",
  id: string,
  userId: string,
  chapterId?: string | null,
  decisionId?: string | null,
  toUserId?: string | null,
  toAgentId?: string | null,
  summary: string,
  title: string,
  created: string,
};

export type UpdateConversationObjInput = {
  id: string,
  userId?: string | null,
  chapterId?: string | null,
  decisionId?: string | null,
  toUserId?: string | null,
  toAgentId?: string | null,
  summary?: string | null,
  title?: string | null,
  created?: string | null,
};

export type DeleteConversationObjInput = {
  id: string,
};

export type CreateHorizonObjInput = {
  userId: string,
  title: string,
  created: string,
  description: string,
  category: string,
};

export type HorizonObj = {
  __typename: "HorizonObj",
  id: string,
  userId: string,
  title: string,
  created: string,
  description: string,
  thumbnail: FileElem,
  category: string,
};

export type UpdateHorizonObjInput = {
  id: string,
  userId?: string | null,
  title?: string | null,
  created?: string | null,
  description?: string | null,
  category?: string | null,
};

export type DeleteHorizonObjInput = {
  id: string,
};

export type CreateQuadrantMemberObjInput = {
  quadrantId: string,
  userId: string,
  created: string,
};

export type QuadrantMemberObj = {
  __typename: "QuadrantMemberObj",
  id: string,
  quadrantId: string,
  userId: string,
  created: string,
};

export type UpdateQuadrantMemberObjInput = {
  id: string,
  quadrantId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type DeleteQuadrantMemberObjInput = {
  id: string,
};

export type CreateDecisionQuadrantObjInput = {
  decisionId: string,
  title: string,
  description: string,
  variant: string,
  created: string,
};

export type DecisionQuadrantObj = {
  __typename: "DecisionQuadrantObj",
  id: string,
  decisionId: string,
  title: string,
  description: string,
  variant: string,
  created: string,
};

export type UpdateDecisionQuadrantObjInput = {
  id: string,
  decisionId?: string | null,
  title?: string | null,
  description?: string | null,
  variant?: string | null,
  created?: string | null,
};

export type DeleteDecisionQuadrantObjInput = {
  id: string,
};

export type CreateHorizonDecisionObjInput = {
  horizonId: string,
  title: string,
  description: string,
  created: string,
};

export type HorizonDecisionObj = {
  __typename: "HorizonDecisionObj",
  id: string,
  horizonId: string,
  title: string,
  description: string,
  created: string,
};

export type UpdateHorizonDecisionObjInput = {
  id: string,
  horizonId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type DeleteHorizonDecisionObjInput = {
  id: string,
};

export type CreateHorizonSpaceMemberObjInput = {
  horizonId: string,
  spaceId: string,
  created: string,
};

export type HorizonSpaceMemberObj = {
  __typename: "HorizonSpaceMemberObj",
  id: string,
  horizonId: string,
  spaceId: string,
  created: string,
};

export type UpdateHorizonSpaceMemberObjInput = {
  id: string,
  horizonId?: string | null,
  spaceId?: string | null,
  created?: string | null,
};

export type DeleteHorizonSpaceMemberObjInput = {
  id: string,
};

export type CreateHorizonUserMemberObjInput = {
  horizonId: string,
  userId: string,
  created: string,
};

export type HorizonUserMemberObj = {
  __typename: "HorizonUserMemberObj",
  id: string,
  horizonId: string,
  userId: string,
  created: string,
};

export type UpdateHorizonUserMemberObjInput = {
  id: string,
  horizonId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type DeleteHorizonUserMemberObjInput = {
  id: string,
};

export type CreateArcSectionObjInput = {
  userId: string,
  arcId: string,
  title: string,
  description: string,
  objective: string,
  idx: number,
  created: string,
};

export type ArcSectionObj = {
  __typename: "ArcSectionObj",
  id: string,
  userId: string,
  arcId: string,
  title: string,
  description: string,
  objective: string,
  idx: number,
  created: string,
};

export type UpdateArcSectionObjInput = {
  id: string,
  userId?: string | null,
  arcId?: string | null,
  title?: string | null,
  description?: string | null,
  objective?: string | null,
  idx?: number | null,
  created?: string | null,
};

export type DeleteArcSectionObjInput = {
  id: string,
};

export type CreateHorizonArcObjInput = {
  userId: string,
  horizonId: string,
  title: string,
  description: string,
  objective: string,
  idx: number,
  created: string,
};

export type HorizonArcObj = {
  __typename: "HorizonArcObj",
  id: string,
  userId: string,
  horizonId: string,
  title: string,
  description: string,
  objective: string,
  idx: number,
  created: string,
};

export type UpdateHorizonArcObjInput = {
  id: string,
  userId?: string | null,
  horizonId?: string | null,
  title?: string | null,
  description?: string | null,
  objective?: string | null,
  idx?: number | null,
  created?: string | null,
};

export type DeleteHorizonArcObjInput = {
  id: string,
};

export type CreateFlowObjInput = {
  userId: string,
  title: string,
  description: string,
  created: string,
  target: string,
  completed: boolean,
};

export type FlowObj = {
  __typename: "FlowObj",
  id: string,
  userId: string,
  title: string,
  description: string,
  created: string,
  target: string,
  completed: boolean,
};

export type UpdateFlowObjInput = {
  id: string,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
  target?: string | null,
  completed?: boolean | null,
};

export type DeleteFlowObjInput = {
  id: string,
};

export type TableChapterSceneObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  summary?: TableStringFilterInput | null,
  objective?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
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

export type ChapterSceneObjConnection = {
  __typename: "ChapterSceneObjConnection",
  items?:  Array<ChapterSceneObj | null > | null,
  nextToken?: string | null,
};

export type TableConversationMessageObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  agentId?: TableStringFilterInput | null,
  conversationId?: TableStringFilterInput | null,
  sceneId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
  message?: TableStringFilterInput | null,
  hasAttachment?: TableBooleanFilterInput | null,
  variant?: TableStringFilterInput | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
};

export type ConversationMessageObjConnection = {
  __typename: "ConversationMessageObjConnection",
  items?:  Array<ConversationMessageObj | null > | null,
  nextToken?: string | null,
};

export type TableSceneIdeaObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  sceneId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  idx?: TableIntFilterInput | null,
  column?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  visible?: TableBooleanFilterInput | null,
  x?: TableIntFilterInput | null,
  y?: TableIntFilterInput | null,
  width?: TableIntFilterInput | null,
  height?: TableIntFilterInput | null,
  rotation?: TableIntFilterInput | null,
  scale?: TableFloatFilterInput | null,
  variant?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
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

export type SceneIdeaObjConnection = {
  __typename: "SceneIdeaObjConnection",
  items?:  Array<SceneIdeaObj | null > | null,
  nextToken?: string | null,
};

export type TableCollectionResourceObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  collectionId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  variant?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type CollectionResourceObjConnection = {
  __typename: "CollectionResourceObjConnection",
  items?:  Array<CollectionResourceObj | null > | null,
  nextToken?: string | null,
};

export type TableUserObjFilterInput = {
  id?: TableStringFilterInput | null,
  displayName?: TableStringFilterInput | null,
  role?: TableStringFilterInput | null,
  bio?: TableStringFilterInput | null,
  fname?: TableStringFilterInput | null,
  lname?: TableStringFilterInput | null,
  email?: TableStringFilterInput | null,
  visibility?: TableStringFilterInput | null,
  customerId?: TableStringFilterInput | null,
  subscriptionId?: TableStringFilterInput | null,
  priceId?: TableStringFilterInput | null,
  productId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
  journalId?: TableStringFilterInput | null,
  clientId?: TableStringFilterInput | null,
};

export type UserObjConnection = {
  __typename: "UserObjConnection",
  items?:  Array<UserObj | null > | null,
  nextToken?: string | null,
};

export type TableSpaceChapterObjFilterInput = {
  id?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  objective?: TableStringFilterInput | null,
  idx?: TableIntFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type SpaceChapterObjConnection = {
  __typename: "SpaceChapterObjConnection",
  items?:  Array<SpaceChapterObj | null > | null,
  nextToken?: string | null,
};

export type TableSpaceObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
  objective?: TableStringFilterInput | null,
  summary?: TableStringFilterInput | null,
  category?: TableStringFilterInput | null,
  flowId?: TableStringFilterInput | null,
  target?: TableStringFilterInput | null,
  starred?: TableBooleanFilterInput | null,
  visibility?: TableStringFilterInput | null,
};

export type SpaceObjConnection = {
  __typename: "SpaceObjConnection",
  items?:  Array<SpaceObj | null > | null,
  nextToken?: string | null,
};

export type TableSpaceMemberObjFilterInput = {
  id?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type SpaceMemberObjConnection = {
  __typename: "SpaceMemberObjConnection",
  items?:  Array<SpaceMemberObj | null > | null,
  nextToken?: string | null,
};

export type TableUserReservationObjFilterInput = {
  id?: TableStringFilterInput | null,
  fname?: TableStringFilterInput | null,
  lname?: TableStringFilterInput | null,
  email?: TableStringFilterInput | null,
  role?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type UserReservationObjConnection = {
  __typename: "UserReservationObjConnection",
  items?:  Array<UserReservationObj | null > | null,
  nextToken?: string | null,
};

export type TableAgentObjFilterInput = {
  id?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  role?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
  bio?: TableStringFilterInput | null,
};

export type AgentObjConnection = {
  __typename: "AgentObjConnection",
  items?:  Array<AgentObj | null > | null,
  nextToken?: string | null,
};

export type TableChapterSessionObjFilterInput = {
  id?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  duration?: TableIntFilterInput | null,
  chapterId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type ChapterSessionObjConnection = {
  __typename: "ChapterSessionObjConnection",
  items?:  Array<ChapterSessionObj | null > | null,
  nextToken?: string | null,
};

export type TableChapterSessionUpdateObjFilterInput = {
  id?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
  sessionId?: TableStringFilterInput | null,
  added?: TableBooleanFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
  variant?: TableStringFilterInput | null,
  conversationId?: TableStringFilterInput | null,
  sceneId?: TableStringFilterInput | null,
  ideaId?: TableStringFilterInput | null,
  postId?: TableStringFilterInput | null,
  logId?: TableStringFilterInput | null,
  commentId?: TableStringFilterInput | null,
  attachmentId?: TableStringFilterInput | null,
  memberId?: TableStringFilterInput | null,
};

export type ChapterSessionUpdateObjConnection = {
  __typename: "ChapterSessionUpdateObjConnection",
  items?:  Array<ChapterSessionUpdateObj | null > | null,
  nextToken?: string | null,
};

export type TableChapterSessionUpdateMemberObjFilterInput = {
  id?: TableStringFilterInput | null,
  updateId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type ChapterSessionUpdateMemberObjConnection = {
  __typename: "ChapterSessionUpdateMemberObjConnection",
  items?:  Array<ChapterSessionUpdateMemberObj | null > | null,
  nextToken?: string | null,
};

export type TableUserBackerObjFilterInput = {
  id?: TableStringFilterInput | null,
  backedId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type UserBackerObjConnection = {
  __typename: "UserBackerObjConnection",
  items?:  Array<UserBackerObj | null > | null,
  nextToken?: string | null,
};

export type TableUserConnectionObjFilterInput = {
  id?: TableStringFilterInput | null,
  sourceId?: TableStringFilterInput | null,
  destinationId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type UserConnectionObjConnection = {
  __typename: "UserConnectionObjConnection",
  items?:  Array<UserConnectionObj | null > | null,
  nextToken?: string | null,
};

export type TableChapterSessionContributorObjFilterInput = {
  id?: TableStringFilterInput | null,
  sessionId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type ChapterSessionContributorObjConnection = {
  __typename: "ChapterSessionContributorObjConnection",
  items?:  Array<ChapterSessionContributorObj | null > | null,
  nextToken?: string | null,
};

export type TableSceneMemberObjFilterInput = {
  id?: TableStringFilterInput | null,
  sceneId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type SceneMemberObjConnection = {
  __typename: "SceneMemberObjConnection",
  items?:  Array<SceneMemberObj | null > | null,
  nextToken?: string | null,
};

export type TableSpaceIdeaRelationshipObjFilterInput = {
  id?: TableStringFilterInput | null,
  fromUserId?: TableStringFilterInput | null,
  toUserId?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  fromChapterId?: TableStringFilterInput | null,
  fromSceneId?: TableStringFilterInput | null,
  fromIdeaId?: TableStringFilterInput | null,
  toChapterId?: TableStringFilterInput | null,
  toSceneId?: TableStringFilterInput | null,
  toIdeaId?: TableStringFilterInput | null,
  weight?: TableFloatFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type SpaceIdeaRelationshipObjConnection = {
  __typename: "SpaceIdeaRelationshipObjConnection",
  items?:  Array<SpaceIdeaRelationshipObj | null > | null,
  nextToken?: string | null,
};

export type TableCommentKarmaObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  commentId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
  neutrality?: TableBooleanFilterInput | null,
};

export type CommentKarmaObjConnection = {
  __typename: "CommentKarmaObjConnection",
  items?:  Array<CommentKarmaObj | null > | null,
  nextToken?: string | null,
};

export type TableSpaceChapterMemberObjFilterInput = {
  id?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type SpaceChapterMemberObjConnection = {
  __typename: "SpaceChapterMemberObjConnection",
  items?:  Array<SpaceChapterMemberObj | null > | null,
  nextToken?: string | null,
};

export type TableGalleryObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type GalleryObjConnection = {
  __typename: "GalleryObjConnection",
  items?:  Array<GalleryObj | null > | null,
  nextToken?: string | null,
};

export type TableGalleryCollectionObjFilterInput = {
  id?: TableStringFilterInput | null,
  galleryId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type GalleryCollectionObjConnection = {
  __typename: "GalleryCollectionObjConnection",
  items?:  Array<GalleryCollectionObj | null > | null,
  nextToken?: string | null,
};

export type TableGalleryMemberObjFilterInput = {
  id?: TableStringFilterInput | null,
  galleryId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type GalleryMemberObjConnection = {
  __typename: "GalleryMemberObjConnection",
  items?:  Array<GalleryMemberObj | null > | null,
  nextToken?: string | null,
};

export type TableUserActivityObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  horizonId?: TableStringFilterInput | null,
  acitivtyId?: TableStringFilterInput | null,
  added?: TableBooleanFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
  variant?: TableStringFilterInput | null,
  conversationId?: TableStringFilterInput | null,
  sceneId?: TableStringFilterInput | null,
  ideaId?: TableStringFilterInput | null,
  postId?: TableStringFilterInput | null,
  taskId?: TableStringFilterInput | null,
  commentId?: TableStringFilterInput | null,
  attachmentId?: TableStringFilterInput | null,
  contributorId?: TableStringFilterInput | null,
};

export type UserActivityObjConnection = {
  __typename: "UserActivityObjConnection",
  items?:  Array<UserActivityObj | null > | null,
  nextToken?: string | null,
};

export type TablePostAttachmentObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  postId?: TableStringFilterInput | null,
  ideaId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
  variant?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
};

export type PostAttachmentObjConnection = {
  __typename: "PostAttachmentObjConnection",
  items?:  Array<PostAttachmentObj | null > | null,
  nextToken?: string | null,
};

export type TablePostCommentObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  postId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
  message?: TableStringFilterInput | null,
};

export type PostCommentObjConnection = {
  __typename: "PostCommentObjConnection",
  items?:  Array<PostCommentObj | null > | null,
  nextToken?: string | null,
};

export type TablePostKarmaObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  postId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
  neutrality?: TableBooleanFilterInput | null,
};

export type PostKarmaObjConnection = {
  __typename: "PostKarmaObjConnection",
  items?:  Array<PostKarmaObj | null > | null,
  nextToken?: string | null,
};

export type TablePostMemberObjFilterInput = {
  id?: TableStringFilterInput | null,
  postId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type PostMemberObjConnection = {
  __typename: "PostMemberObjConnection",
  items?:  Array<PostMemberObj | null > | null,
  nextToken?: string | null,
};

export type TableUserPostObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
  postStatus?: TableStringFilterInput | null,
  summary?: TableStringFilterInput | null,
};

export type UserPostObjConnection = {
  __typename: "UserPostObjConnection",
  items?:  Array<UserPostObj | null > | null,
  nextToken?: string | null,
};

export type TableIdeaRelationshipObjFilterInput = {
  id?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  horizonId?: TableStringFilterInput | null,
  fromUserId?: TableStringFilterInput | null,
  fromChapterId?: TableStringFilterInput | null,
  fromSceneId?: TableStringFilterInput | null,
  fromIdeaId?: TableStringFilterInput | null,
  toUserId?: TableStringFilterInput | null,
  toChapterId?: TableStringFilterInput | null,
  toSceneId?: TableStringFilterInput | null,
  toIdeaId?: TableStringFilterInput | null,
  weight?: TableFloatFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type IdeaRelationshipObjConnection = {
  __typename: "IdeaRelationshipObjConnection",
  items?:  Array<IdeaRelationshipObj | null > | null,
  nextToken?: string | null,
};

export type TableIdeaObjFilterInput = {
  id?: TableStringFilterInput | null,
  idx?: TableIntFilterInput | null,
  userId?: TableStringFilterInput | null,
  sceneId?: TableStringFilterInput | null,
  pageId?: TableStringFilterInput | null,
  visible?: TableBooleanFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  column?: TableStringFilterInput | null,
  x?: TableIntFilterInput | null,
  y?: TableIntFilterInput | null,
  width?: TableIntFilterInput | null,
  height?: TableIntFilterInput | null,
  scale?: TableFloatFilterInput | null,
  rotation?: TableIntFilterInput | null,
  variant?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type IdeaObjConnection = {
  __typename: "IdeaObjConnection",
  items?:  Array<IdeaObj | null > | null,
  nextToken?: string | null,
};

export type TableIdeaSceneObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
  arcId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  summary?: TableStringFilterInput | null,
  objective?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type IdeaSceneObjConnection = {
  __typename: "IdeaSceneObjConnection",
  items?:  Array<IdeaSceneObj | null > | null,
  nextToken?: string | null,
};

export type TableTaskMemberObjFilterInput = {
  id?: TableStringFilterInput | null,
  taskId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type TaskMemberObjConnection = {
  __typename: "TaskMemberObjConnection",
  items?:  Array<TaskMemberObj | null > | null,
  nextToken?: string | null,
};

export type TableTaskObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  taskStatus?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type TaskObjConnection = {
  __typename: "TaskObjConnection",
  items?:  Array<TaskObj | null > | null,
  nextToken?: string | null,
};

export type TableConversationObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  chapterId?: TableStringFilterInput | null,
  decisionId?: TableStringFilterInput | null,
  toUserId?: TableStringFilterInput | null,
  toAgentId?: TableStringFilterInput | null,
  summary?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type ConversationObjConnection = {
  __typename: "ConversationObjConnection",
  items?:  Array<ConversationObj | null > | null,
  nextToken?: string | null,
};

export type TableHorizonObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  category?: TableStringFilterInput | null,
};

export type HorizonObjConnection = {
  __typename: "HorizonObjConnection",
  items?:  Array<HorizonObj | null > | null,
  nextToken?: string | null,
};

export type TableQuadrantMemberObjFilterInput = {
  id?: TableStringFilterInput | null,
  quadrantId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type QuadrantMemberObjConnection = {
  __typename: "QuadrantMemberObjConnection",
  items?:  Array<QuadrantMemberObj | null > | null,
  nextToken?: string | null,
};

export type TableDecisionQuadrantObjFilterInput = {
  id?: TableStringFilterInput | null,
  decisionId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  variant?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type DecisionQuadrantObjConnection = {
  __typename: "DecisionQuadrantObjConnection",
  items?:  Array<DecisionQuadrantObj | null > | null,
  nextToken?: string | null,
};

export type TableHorizonDecisionObjFilterInput = {
  id?: TableStringFilterInput | null,
  horizonId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type HorizonDecisionObjConnection = {
  __typename: "HorizonDecisionObjConnection",
  items?:  Array<HorizonDecisionObj | null > | null,
  nextToken?: string | null,
};

export type TableHorizonSpaceMemberObjFilterInput = {
  id?: TableStringFilterInput | null,
  horizonId?: TableStringFilterInput | null,
  spaceId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type HorizonSpaceMemberObjConnection = {
  __typename: "HorizonSpaceMemberObjConnection",
  items?:  Array<HorizonSpaceMemberObj | null > | null,
  nextToken?: string | null,
};

export type TableHorizonUserMemberObjFilterInput = {
  id?: TableStringFilterInput | null,
  horizonId?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type HorizonUserMemberObjConnection = {
  __typename: "HorizonUserMemberObjConnection",
  items?:  Array<HorizonUserMemberObj | null > | null,
  nextToken?: string | null,
};

export type TableArcSectionObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  arcId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  objective?: TableStringFilterInput | null,
  idx?: TableIntFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type ArcSectionObjConnection = {
  __typename: "ArcSectionObjConnection",
  items?:  Array<ArcSectionObj | null > | null,
  nextToken?: string | null,
};

export type TableHorizonArcObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  horizonId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  objective?: TableStringFilterInput | null,
  idx?: TableIntFilterInput | null,
  created?: TableStringFilterInput | null,
};

export type HorizonArcObjConnection = {
  __typename: "HorizonArcObjConnection",
  items?:  Array<HorizonArcObj | null > | null,
  nextToken?: string | null,
};

export type TableFlowObjFilterInput = {
  id?: TableStringFilterInput | null,
  userId?: TableStringFilterInput | null,
  title?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  created?: TableStringFilterInput | null,
  target?: TableStringFilterInput | null,
  completed?: TableBooleanFilterInput | null,
};

export type FlowObjConnection = {
  __typename: "FlowObjConnection",
  items?:  Array<FlowObj | null > | null,
  nextToken?: string | null,
};

export type CreateChapterSceneObjMutationVariables = {
  input: CreateChapterSceneObjInput,
};

export type CreateChapterSceneObjMutation = {
  createChapterSceneObj?:  {
    __typename: "ChapterSceneObj",
    id: string,
    userId: string,
    chapterId: string,
    summary: string,
    title: string,
    created: string,
    objective: string,
  } | null,
};

export type UpdateChapterSceneObjMutationVariables = {
  input: UpdateChapterSceneObjInput,
};

export type UpdateChapterSceneObjMutation = {
  updateChapterSceneObj?:  {
    __typename: "ChapterSceneObj",
    id: string,
    userId: string,
    chapterId: string,
    summary: string,
    title: string,
    created: string,
    objective: string,
  } | null,
};

export type DeleteChapterSceneObjMutationVariables = {
  input: DeleteChapterSceneObjInput,
};

export type DeleteChapterSceneObjMutation = {
  deleteChapterSceneObj?:  {
    __typename: "ChapterSceneObj",
    id: string,
    userId: string,
    chapterId: string,
    summary: string,
    title: string,
    created: string,
    objective: string,
  } | null,
};

export type CreateConversationMessageObjMutationVariables = {
  input: CreateConversationMessageObjInput,
};

export type CreateConversationMessageObjMutation = {
  createConversationMessageObj?:  {
    __typename: "ConversationMessageObj",
    id: string,
    userId?: string | null,
    agentId?: string | null,
    conversationId: string,
    sceneId: string,
    created: string,
    message: string,
    hasAttachment: boolean,
    variant?: string | null,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type UpdateConversationMessageObjMutationVariables = {
  input: UpdateConversationMessageObjInput,
};

export type UpdateConversationMessageObjMutation = {
  updateConversationMessageObj?:  {
    __typename: "ConversationMessageObj",
    id: string,
    userId?: string | null,
    agentId?: string | null,
    conversationId: string,
    sceneId: string,
    created: string,
    message: string,
    hasAttachment: boolean,
    variant?: string | null,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type DeleteConversationMessageObjMutationVariables = {
  input: DeleteConversationMessageObjInput,
};

export type DeleteConversationMessageObjMutation = {
  deleteConversationMessageObj?:  {
    __typename: "ConversationMessageObj",
    id: string,
    userId?: string | null,
    agentId?: string | null,
    conversationId: string,
    sceneId: string,
    created: string,
    message: string,
    hasAttachment: boolean,
    variant?: string | null,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type CreateSceneIdeaObjMutationVariables = {
  input: CreateSceneIdeaObjInput,
};

export type CreateSceneIdeaObjMutation = {
  createSceneIdeaObj?:  {
    __typename: "SceneIdeaObj",
    id: string,
    userId: string,
    sceneId: string,
    idx: number,
    column: string,
    title: string,
    description: string,
    x: number,
    y: number,
    visible: boolean,
    width: number,
    height: number,
    scale: number,
    rotation: number,
    variant: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    created: string,
  } | null,
};

export type UpdateSceneIdeaObjMutationVariables = {
  input: UpdateSceneIdeaObjInput,
};

export type UpdateSceneIdeaObjMutation = {
  updateSceneIdeaObj?:  {
    __typename: "SceneIdeaObj",
    id: string,
    userId: string,
    sceneId: string,
    idx: number,
    column: string,
    title: string,
    description: string,
    x: number,
    y: number,
    visible: boolean,
    width: number,
    height: number,
    scale: number,
    rotation: number,
    variant: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    created: string,
  } | null,
};

export type DeleteSceneIdeaObjMutationVariables = {
  input: DeleteSceneIdeaObjInput,
};

export type DeleteSceneIdeaObjMutation = {
  deleteSceneIdeaObj?:  {
    __typename: "SceneIdeaObj",
    id: string,
    userId: string,
    sceneId: string,
    idx: number,
    column: string,
    title: string,
    description: string,
    x: number,
    y: number,
    visible: boolean,
    width: number,
    height: number,
    scale: number,
    rotation: number,
    variant: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    created: string,
  } | null,
};

export type CreateCollectionResourceObjMutationVariables = {
  input: CreateCollectionResourceObjInput,
};

export type CreateCollectionResourceObjMutation = {
  createCollectionResourceObj?:  {
    __typename: "CollectionResourceObj",
    id: string,
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    variant: string,
    created: string,
  } | null,
};

export type UpdateCollectionResourceObjMutationVariables = {
  input: UpdateCollectionResourceObjInput,
};

export type UpdateCollectionResourceObjMutation = {
  updateCollectionResourceObj?:  {
    __typename: "CollectionResourceObj",
    id: string,
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    variant: string,
    created: string,
  } | null,
};

export type DeleteCollectionResourceObjMutationVariables = {
  input: DeleteCollectionResourceObjInput,
};

export type DeleteCollectionResourceObjMutation = {
  deleteCollectionResourceObj?:  {
    __typename: "CollectionResourceObj",
    id: string,
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    variant: string,
    created: string,
  } | null,
};

export type CreateUserObjMutationVariables = {
  input: CreateUserObjInput,
};

export type CreateUserObjMutation = {
  createUserObj?:  {
    __typename: "UserObj",
    id: string,
    displayName: string,
    fname: string,
    lname: string,
    email: string,
    bio: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    visibility: string,
    role: string,
    passwordHash?: string | null,
    customerId?: string | null,
    subscriptionId?: string | null,
    productId?: string | null,
    priceId?: string | null,
    created: string,
    journalId: string,
    clientId?: string | null,
  } | null,
};

export type UpdateUserObjMutationVariables = {
  input: UpdateUserObjInput,
};

export type UpdateUserObjMutation = {
  updateUserObj?:  {
    __typename: "UserObj",
    id: string,
    displayName: string,
    fname: string,
    lname: string,
    email: string,
    bio: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    visibility: string,
    role: string,
    passwordHash?: string | null,
    customerId?: string | null,
    subscriptionId?: string | null,
    productId?: string | null,
    priceId?: string | null,
    created: string,
    journalId: string,
    clientId?: string | null,
  } | null,
};

export type DeleteUserObjMutationVariables = {
  input: DeleteUserObjInput,
};

export type DeleteUserObjMutation = {
  deleteUserObj?:  {
    __typename: "UserObj",
    id: string,
    displayName: string,
    fname: string,
    lname: string,
    email: string,
    bio: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    visibility: string,
    role: string,
    passwordHash?: string | null,
    customerId?: string | null,
    subscriptionId?: string | null,
    productId?: string | null,
    priceId?: string | null,
    created: string,
    journalId: string,
    clientId?: string | null,
  } | null,
};

export type CreateSpaceChapterObjMutationVariables = {
  input: CreateSpaceChapterObjInput,
};

export type CreateSpaceChapterObjMutation = {
  createSpaceChapterObj?:  {
    __typename: "SpaceChapterObj",
    id: string,
    spaceId: string,
    title: string,
    userId: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type UpdateSpaceChapterObjMutationVariables = {
  input: UpdateSpaceChapterObjInput,
};

export type UpdateSpaceChapterObjMutation = {
  updateSpaceChapterObj?:  {
    __typename: "SpaceChapterObj",
    id: string,
    spaceId: string,
    title: string,
    userId: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type DeleteSpaceChapterObjMutationVariables = {
  input: DeleteSpaceChapterObjInput,
};

export type DeleteSpaceChapterObjMutation = {
  deleteSpaceChapterObj?:  {
    __typename: "SpaceChapterObj",
    id: string,
    spaceId: string,
    title: string,
    userId: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
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
    created: string,
    description: string,
    objective: string,
    summary: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    category: string,
    target: string,
    flowId?: string | null,
    starred: boolean,
    visibility: string,
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
    created: string,
    description: string,
    objective: string,
    summary: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    category: string,
    target: string,
    flowId?: string | null,
    starred: boolean,
    visibility: string,
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
    created: string,
    description: string,
    objective: string,
    summary: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    category: string,
    target: string,
    flowId?: string | null,
    starred: boolean,
    visibility: string,
  } | null,
};

export type CreateSpaceMemberObjMutationVariables = {
  input: CreateSpaceMemberObjInput,
};

export type CreateSpaceMemberObjMutation = {
  createSpaceMemberObj?:  {
    __typename: "SpaceMemberObj",
    id: string,
    spaceId: string,
    userId: string,
    created: string,
  } | null,
};

export type UpdateSpaceMemberObjMutationVariables = {
  input: UpdateSpaceMemberObjInput,
};

export type UpdateSpaceMemberObjMutation = {
  updateSpaceMemberObj?:  {
    __typename: "SpaceMemberObj",
    id: string,
    spaceId: string,
    userId: string,
    created: string,
  } | null,
};

export type DeleteSpaceMemberObjMutationVariables = {
  input: DeleteSpaceMemberObjInput,
};

export type DeleteSpaceMemberObjMutation = {
  deleteSpaceMemberObj?:  {
    __typename: "SpaceMemberObj",
    id: string,
    spaceId: string,
    userId: string,
    created: string,
  } | null,
};

export type CreateUserReservationObjMutationVariables = {
  input: CreateUserReservationObjInput,
};

export type CreateUserReservationObjMutation = {
  createUserReservationObj?:  {
    __typename: "UserReservationObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
    role: string,
    created: string,
  } | null,
};

export type UpdateUserReservationObjMutationVariables = {
  input: UpdateUserReservationObjInput,
};

export type UpdateUserReservationObjMutation = {
  updateUserReservationObj?:  {
    __typename: "UserReservationObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
    role: string,
    created: string,
  } | null,
};

export type DeleteUserReservationObjMutationVariables = {
  input: DeleteUserReservationObjInput,
};

export type DeleteUserReservationObjMutation = {
  deleteUserReservationObj?:  {
    __typename: "UserReservationObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
    role: string,
    created: string,
  } | null,
};

export type CreateAgentObjMutationVariables = {
  input: CreateAgentObjInput,
};

export type CreateAgentObjMutation = {
  createAgentObj?:  {
    __typename: "AgentObj",
    id: string,
    name: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    role: string,
    bio: string,
    created: string,
  } | null,
};

export type UpdateAgentObjMutationVariables = {
  input: UpdateAgentObjInput,
};

export type UpdateAgentObjMutation = {
  updateAgentObj?:  {
    __typename: "AgentObj",
    id: string,
    name: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    role: string,
    bio: string,
    created: string,
  } | null,
};

export type DeleteAgentObjMutationVariables = {
  input: DeleteAgentObjInput,
};

export type DeleteAgentObjMutation = {
  deleteAgentObj?:  {
    __typename: "AgentObj",
    id: string,
    name: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    role: string,
    bio: string,
    created: string,
  } | null,
};

export type CreateChapterSessionObjMutationVariables = {
  input: CreateChapterSessionObjInput,
};

export type CreateChapterSessionObjMutation = {
  createChapterSessionObj?:  {
    __typename: "ChapterSessionObj",
    id: string,
    spaceId: string,
    userId: string,
    chapterId: string,
    duration: number,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type UpdateChapterSessionObjMutationVariables = {
  input: UpdateChapterSessionObjInput,
};

export type UpdateChapterSessionObjMutation = {
  updateChapterSessionObj?:  {
    __typename: "ChapterSessionObj",
    id: string,
    spaceId: string,
    userId: string,
    chapterId: string,
    duration: number,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type DeleteChapterSessionObjMutationVariables = {
  input: DeleteChapterSessionObjInput,
};

export type DeleteChapterSessionObjMutation = {
  deleteChapterSessionObj?:  {
    __typename: "ChapterSessionObj",
    id: string,
    spaceId: string,
    userId: string,
    chapterId: string,
    duration: number,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type CreateChapterSessionUpdateObjMutationVariables = {
  input: CreateChapterSessionUpdateObjInput,
};

export type CreateChapterSessionUpdateObjMutation = {
  createChapterSessionUpdateObj?:  {
    __typename: "ChapterSessionUpdateObj",
    id: string,
    userId: string,
    spaceId: string,
    chapterId: string,
    sessionId?: string | null,
    added: boolean,
    title: string,
    description: string,
    created: string,
    variant: string,
    conversationId?: string | null,
    sceneId?: string | null,
    ideaId?: string | null,
    postId?: string | null,
    logId?: string | null,
    commentId?: string | null,
    attachmentId?: string | null,
    memberId?: string | null,
  } | null,
};

export type UpdateChapterSessionUpdateObjMutationVariables = {
  input: UpdateChapterSessionUpdateObjInput,
};

export type UpdateChapterSessionUpdateObjMutation = {
  updateChapterSessionUpdateObj?:  {
    __typename: "ChapterSessionUpdateObj",
    id: string,
    userId: string,
    spaceId: string,
    chapterId: string,
    sessionId?: string | null,
    added: boolean,
    title: string,
    description: string,
    created: string,
    variant: string,
    conversationId?: string | null,
    sceneId?: string | null,
    ideaId?: string | null,
    postId?: string | null,
    logId?: string | null,
    commentId?: string | null,
    attachmentId?: string | null,
    memberId?: string | null,
  } | null,
};

export type DeleteChapterSessionUpdateObjMutationVariables = {
  input: DeleteChapterSessionUpdateObjInput,
};

export type DeleteChapterSessionUpdateObjMutation = {
  deleteChapterSessionUpdateObj?:  {
    __typename: "ChapterSessionUpdateObj",
    id: string,
    userId: string,
    spaceId: string,
    chapterId: string,
    sessionId?: string | null,
    added: boolean,
    title: string,
    description: string,
    created: string,
    variant: string,
    conversationId?: string | null,
    sceneId?: string | null,
    ideaId?: string | null,
    postId?: string | null,
    logId?: string | null,
    commentId?: string | null,
    attachmentId?: string | null,
    memberId?: string | null,
  } | null,
};

export type CreateChapterSessionUpdateMemberObjMutationVariables = {
  input: CreateChapterSessionUpdateMemberObjInput,
};

export type CreateChapterSessionUpdateMemberObjMutation = {
  createChapterSessionUpdateMemberObj?:  {
    __typename: "ChapterSessionUpdateMemberObj",
    id: string,
    updateId: string,
    userId: string,
    created: string,
  } | null,
};

export type UpdateChapterSessionUpdateMemberObjMutationVariables = {
  input: UpdateChapterSessionUpdateMemberObjInput,
};

export type UpdateChapterSessionUpdateMemberObjMutation = {
  updateChapterSessionUpdateMemberObj?:  {
    __typename: "ChapterSessionUpdateMemberObj",
    id: string,
    updateId: string,
    userId: string,
    created: string,
  } | null,
};

export type DeleteChapterSessionUpdateMemberObjMutationVariables = {
  input: DeleteChapterSessionUpdateMemberObjInput,
};

export type DeleteChapterSessionUpdateMemberObjMutation = {
  deleteChapterSessionUpdateMemberObj?:  {
    __typename: "ChapterSessionUpdateMemberObj",
    id: string,
    updateId: string,
    userId: string,
    created: string,
  } | null,
};

export type CreateUserBackerObjMutationVariables = {
  input: CreateUserBackerObjInput,
};

export type CreateUserBackerObjMutation = {
  createUserBackerObj?:  {
    __typename: "UserBackerObj",
    id: string,
    backedId: string,
    userId: string,
    created: string,
  } | null,
};

export type UpdateUserBackerObjMutationVariables = {
  input: UpdateUserBackerObjInput,
};

export type UpdateUserBackerObjMutation = {
  updateUserBackerObj?:  {
    __typename: "UserBackerObj",
    id: string,
    backedId: string,
    userId: string,
    created: string,
  } | null,
};

export type DeleteUserBackerObjMutationVariables = {
  input: DeleteUserBackerObjInput,
};

export type DeleteUserBackerObjMutation = {
  deleteUserBackerObj?:  {
    __typename: "UserBackerObj",
    id: string,
    backedId: string,
    userId: string,
    created: string,
  } | null,
};

export type CreateUserConnectionObjMutationVariables = {
  input: CreateUserConnectionObjInput,
};

export type CreateUserConnectionObjMutation = {
  createUserConnectionObj?:  {
    __typename: "UserConnectionObj",
    id: string,
    sourceId: string,
    destinationId: string,
    created: string,
  } | null,
};

export type UpdateUserConnectionObjMutationVariables = {
  input: UpdateUserConnectionObjInput,
};

export type UpdateUserConnectionObjMutation = {
  updateUserConnectionObj?:  {
    __typename: "UserConnectionObj",
    id: string,
    sourceId: string,
    destinationId: string,
    created: string,
  } | null,
};

export type DeleteUserConnectionObjMutationVariables = {
  input: DeleteUserConnectionObjInput,
};

export type DeleteUserConnectionObjMutation = {
  deleteUserConnectionObj?:  {
    __typename: "UserConnectionObj",
    id: string,
    sourceId: string,
    destinationId: string,
    created: string,
  } | null,
};

export type CreateChapterSessionContributorObjMutationVariables = {
  input: CreateChapterSessionContributorObjInput,
};

export type CreateChapterSessionContributorObjMutation = {
  createChapterSessionContributorObj?:  {
    __typename: "ChapterSessionContributorObj",
    id: string,
    sessionId: string,
    userId: string,
    created: string,
  } | null,
};

export type UpdateChapterSessionContributorObjMutationVariables = {
  input: UpdateChapterSessionContributorObjInput,
};

export type UpdateChapterSessionContributorObjMutation = {
  updateChapterSessionContributorObj?:  {
    __typename: "ChapterSessionContributorObj",
    id: string,
    sessionId: string,
    userId: string,
    created: string,
  } | null,
};

export type DeleteChapterSessionContributorObjMutationVariables = {
  input: DeleteChapterSessionContributorObjInput,
};

export type DeleteChapterSessionContributorObjMutation = {
  deleteChapterSessionContributorObj?:  {
    __typename: "ChapterSessionContributorObj",
    id: string,
    sessionId: string,
    userId: string,
    created: string,
  } | null,
};

export type CreateSceneMemberObjMutationVariables = {
  input: CreateSceneMemberObjInput,
};

export type CreateSceneMemberObjMutation = {
  createSceneMemberObj?:  {
    __typename: "SceneMemberObj",
    id: string,
    sceneId: string,
    userId: string,
    created: string,
  } | null,
};

export type UpdateSceneMemberObjMutationVariables = {
  input: UpdateSceneMemberObjInput,
};

export type UpdateSceneMemberObjMutation = {
  updateSceneMemberObj?:  {
    __typename: "SceneMemberObj",
    id: string,
    sceneId: string,
    userId: string,
    created: string,
  } | null,
};

export type DeleteSceneMemberObjMutationVariables = {
  input: DeleteSceneMemberObjInput,
};

export type DeleteSceneMemberObjMutation = {
  deleteSceneMemberObj?:  {
    __typename: "SceneMemberObj",
    id: string,
    sceneId: string,
    userId: string,
    created: string,
  } | null,
};

export type CreateSpaceIdeaRelationshipObjMutationVariables = {
  input: CreateSpaceIdeaRelationshipObjInput,
};

export type CreateSpaceIdeaRelationshipObjMutation = {
  createSpaceIdeaRelationshipObj?:  {
    __typename: "SpaceIdeaRelationshipObj",
    id: string,
    fromUserId: string,
    spaceId: string,
    fromChapterId: string,
    fromSceneId: string,
    fromIdeaId: string,
    toUserId: string,
    toChapterId: string,
    toSceneId: string,
    toIdeaId: string,
    weight: number,
    created: string,
  } | null,
};

export type UpdateSpaceIdeaRelationshipObjMutationVariables = {
  input: UpdateSpaceIdeaRelationshipObjInput,
};

export type UpdateSpaceIdeaRelationshipObjMutation = {
  updateSpaceIdeaRelationshipObj?:  {
    __typename: "SpaceIdeaRelationshipObj",
    id: string,
    fromUserId: string,
    spaceId: string,
    fromChapterId: string,
    fromSceneId: string,
    fromIdeaId: string,
    toUserId: string,
    toChapterId: string,
    toSceneId: string,
    toIdeaId: string,
    weight: number,
    created: string,
  } | null,
};

export type DeleteSpaceIdeaRelationshipObjMutationVariables = {
  input: DeleteSpaceIdeaRelationshipObjInput,
};

export type DeleteSpaceIdeaRelationshipObjMutation = {
  deleteSpaceIdeaRelationshipObj?:  {
    __typename: "SpaceIdeaRelationshipObj",
    id: string,
    fromUserId: string,
    spaceId: string,
    fromChapterId: string,
    fromSceneId: string,
    fromIdeaId: string,
    toUserId: string,
    toChapterId: string,
    toSceneId: string,
    toIdeaId: string,
    weight: number,
    created: string,
  } | null,
};

export type CreateCommentKarmaObjMutationVariables = {
  input: CreateCommentKarmaObjInput,
};

export type CreateCommentKarmaObjMutation = {
  createCommentKarmaObj?:  {
    __typename: "CommentKarmaObj",
    id: string,
    userId?: string | null,
    commentId: string,
    created: string,
    neutrality: boolean,
  } | null,
};

export type UpdateCommentKarmaObjMutationVariables = {
  input: UpdateCommentKarmaObjInput,
};

export type UpdateCommentKarmaObjMutation = {
  updateCommentKarmaObj?:  {
    __typename: "CommentKarmaObj",
    id: string,
    userId?: string | null,
    commentId: string,
    created: string,
    neutrality: boolean,
  } | null,
};

export type DeleteCommentKarmaObjMutationVariables = {
  input: DeleteCommentKarmaObjInput,
};

export type DeleteCommentKarmaObjMutation = {
  deleteCommentKarmaObj?:  {
    __typename: "CommentKarmaObj",
    id: string,
    userId?: string | null,
    commentId: string,
    created: string,
    neutrality: boolean,
  } | null,
};

export type CreateSpaceChapterMemberObjMutationVariables = {
  input: CreateSpaceChapterMemberObjInput,
};

export type CreateSpaceChapterMemberObjMutation = {
  createSpaceChapterMemberObj?:  {
    __typename: "SpaceChapterMemberObj",
    id: string,
    spaceId: string,
    userId: string,
    created: string,
  } | null,
};

export type UpdateSpaceChapterMemberObjMutationVariables = {
  input: UpdateSpaceChapterMemberObjInput,
};

export type UpdateSpaceChapterMemberObjMutation = {
  updateSpaceChapterMemberObj?:  {
    __typename: "SpaceChapterMemberObj",
    id: string,
    spaceId: string,
    userId: string,
    created: string,
  } | null,
};

export type DeleteSpaceChapterMemberObjMutationVariables = {
  input: DeleteSpaceChapterMemberObjInput,
};

export type DeleteSpaceChapterMemberObjMutation = {
  deleteSpaceChapterMemberObj?:  {
    __typename: "SpaceChapterMemberObj",
    id: string,
    spaceId: string,
    userId: string,
    created: string,
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
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    created: string,
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
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    created: string,
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
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    created: string,
  } | null,
};

export type CreateGalleryCollectionObjMutationVariables = {
  input: CreateGalleryCollectionObjInput,
};

export type CreateGalleryCollectionObjMutation = {
  createGalleryCollectionObj?:  {
    __typename: "GalleryCollectionObj",
    id: string,
    galleryId: string,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type UpdateGalleryCollectionObjMutationVariables = {
  input: UpdateGalleryCollectionObjInput,
};

export type UpdateGalleryCollectionObjMutation = {
  updateGalleryCollectionObj?:  {
    __typename: "GalleryCollectionObj",
    id: string,
    galleryId: string,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type DeleteGalleryCollectionObjMutationVariables = {
  input: DeleteGalleryCollectionObjInput,
};

export type DeleteGalleryCollectionObjMutation = {
  deleteGalleryCollectionObj?:  {
    __typename: "GalleryCollectionObj",
    id: string,
    galleryId: string,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type CreateGalleryMemberObjMutationVariables = {
  input: CreateGalleryMemberObjInput,
};

export type CreateGalleryMemberObjMutation = {
  createGalleryMemberObj?:  {
    __typename: "GalleryMemberObj",
    id: string,
    galleryId: string,
    userId: string,
    created: string,
  } | null,
};

export type UpdateGalleryMemberObjMutationVariables = {
  input: UpdateGalleryMemberObjInput,
};

export type UpdateGalleryMemberObjMutation = {
  updateGalleryMemberObj?:  {
    __typename: "GalleryMemberObj",
    id: string,
    galleryId: string,
    userId: string,
    created: string,
  } | null,
};

export type DeleteGalleryMemberObjMutationVariables = {
  input: DeleteGalleryMemberObjInput,
};

export type DeleteGalleryMemberObjMutation = {
  deleteGalleryMemberObj?:  {
    __typename: "GalleryMemberObj",
    id: string,
    galleryId: string,
    userId: string,
    created: string,
  } | null,
};

export type CreateUserActivityObjMutationVariables = {
  input: CreateUserActivityObjInput,
};

export type CreateUserActivityObjMutation = {
  createUserActivityObj?:  {
    __typename: "UserActivityObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    spaceId?: string | null,
    horizonId?: string | null,
    acitivtyId?: string | null,
    added: boolean,
    title: string,
    description: string,
    created: string,
    variant: string,
    conversationId?: string | null,
    sceneId?: string | null,
    ideaId?: string | null,
    postId?: string | null,
    taskId?: string | null,
    commentId?: string | null,
    attachmentId?: string | null,
    contributorId?: string | null,
  } | null,
};

export type UpdateUserActivityObjMutationVariables = {
  input: UpdateUserActivityObjInput,
};

export type UpdateUserActivityObjMutation = {
  updateUserActivityObj?:  {
    __typename: "UserActivityObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    spaceId?: string | null,
    horizonId?: string | null,
    acitivtyId?: string | null,
    added: boolean,
    title: string,
    description: string,
    created: string,
    variant: string,
    conversationId?: string | null,
    sceneId?: string | null,
    ideaId?: string | null,
    postId?: string | null,
    taskId?: string | null,
    commentId?: string | null,
    attachmentId?: string | null,
    contributorId?: string | null,
  } | null,
};

export type DeleteUserActivityObjMutationVariables = {
  input: DeleteUserActivityObjInput,
};

export type DeleteUserActivityObjMutation = {
  deleteUserActivityObj?:  {
    __typename: "UserActivityObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    spaceId?: string | null,
    horizonId?: string | null,
    acitivtyId?: string | null,
    added: boolean,
    title: string,
    description: string,
    created: string,
    variant: string,
    conversationId?: string | null,
    sceneId?: string | null,
    ideaId?: string | null,
    postId?: string | null,
    taskId?: string | null,
    commentId?: string | null,
    attachmentId?: string | null,
    contributorId?: string | null,
  } | null,
};

export type CreatePostAttachmentObjMutationVariables = {
  input: CreatePostAttachmentObjInput,
};

export type CreatePostAttachmentObjMutation = {
  createPostAttachmentObj?:  {
    __typename: "PostAttachmentObj",
    id: string,
    userId?: string | null,
    postId: string,
    ideaId?: string | null,
    created: string,
    variant: string,
    title: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type UpdatePostAttachmentObjMutationVariables = {
  input: UpdatePostAttachmentObjInput,
};

export type UpdatePostAttachmentObjMutation = {
  updatePostAttachmentObj?:  {
    __typename: "PostAttachmentObj",
    id: string,
    userId?: string | null,
    postId: string,
    ideaId?: string | null,
    created: string,
    variant: string,
    title: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type DeletePostAttachmentObjMutationVariables = {
  input: DeletePostAttachmentObjInput,
};

export type DeletePostAttachmentObjMutation = {
  deletePostAttachmentObj?:  {
    __typename: "PostAttachmentObj",
    id: string,
    userId?: string | null,
    postId: string,
    ideaId?: string | null,
    created: string,
    variant: string,
    title: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type CreatePostCommentObjMutationVariables = {
  input: CreatePostCommentObjInput,
};

export type CreatePostCommentObjMutation = {
  createPostCommentObj?:  {
    __typename: "PostCommentObj",
    id: string,
    userId?: string | null,
    postId: string,
    created: string,
    message: string,
  } | null,
};

export type UpdatePostCommentObjMutationVariables = {
  input: UpdatePostCommentObjInput,
};

export type UpdatePostCommentObjMutation = {
  updatePostCommentObj?:  {
    __typename: "PostCommentObj",
    id: string,
    userId?: string | null,
    postId: string,
    created: string,
    message: string,
  } | null,
};

export type DeletePostCommentObjMutationVariables = {
  input: DeletePostCommentObjInput,
};

export type DeletePostCommentObjMutation = {
  deletePostCommentObj?:  {
    __typename: "PostCommentObj",
    id: string,
    userId?: string | null,
    postId: string,
    created: string,
    message: string,
  } | null,
};

export type CreatePostKarmaObjMutationVariables = {
  input: CreatePostKarmaObjInput,
};

export type CreatePostKarmaObjMutation = {
  createPostKarmaObj?:  {
    __typename: "PostKarmaObj",
    id: string,
    userId?: string | null,
    postId: string,
    created: string,
    neutrality: boolean,
  } | null,
};

export type UpdatePostKarmaObjMutationVariables = {
  input: UpdatePostKarmaObjInput,
};

export type UpdatePostKarmaObjMutation = {
  updatePostKarmaObj?:  {
    __typename: "PostKarmaObj",
    id: string,
    userId?: string | null,
    postId: string,
    created: string,
    neutrality: boolean,
  } | null,
};

export type DeletePostKarmaObjMutationVariables = {
  input: DeletePostKarmaObjInput,
};

export type DeletePostKarmaObjMutation = {
  deletePostKarmaObj?:  {
    __typename: "PostKarmaObj",
    id: string,
    userId?: string | null,
    postId: string,
    created: string,
    neutrality: boolean,
  } | null,
};

export type CreatePostMemberObjMutationVariables = {
  input: CreatePostMemberObjInput,
};

export type CreatePostMemberObjMutation = {
  createPostMemberObj?:  {
    __typename: "PostMemberObj",
    id: string,
    postId: string,
    userId: string,
    created: string,
  } | null,
};

export type UpdatePostMemberObjMutationVariables = {
  input: UpdatePostMemberObjInput,
};

export type UpdatePostMemberObjMutation = {
  updatePostMemberObj?:  {
    __typename: "PostMemberObj",
    id: string,
    postId: string,
    userId: string,
    created: string,
  } | null,
};

export type DeletePostMemberObjMutationVariables = {
  input: DeletePostMemberObjInput,
};

export type DeletePostMemberObjMutation = {
  deletePostMemberObj?:  {
    __typename: "PostMemberObj",
    id: string,
    postId: string,
    userId: string,
    created: string,
  } | null,
};

export type CreateUserPostObjMutationVariables = {
  input: CreateUserPostObjInput,
};

export type CreateUserPostObjMutation = {
  createUserPostObj?:  {
    __typename: "UserPostObj",
    id: string,
    userId: string,
    chapterId: string,
    spaceId: string,
    title: string,
    description: string,
    created: string,
    postStatus: string,
    summary: string,
  } | null,
};

export type UpdateUserPostObjMutationVariables = {
  input: UpdateUserPostObjInput,
};

export type UpdateUserPostObjMutation = {
  updateUserPostObj?:  {
    __typename: "UserPostObj",
    id: string,
    userId: string,
    chapterId: string,
    spaceId: string,
    title: string,
    description: string,
    created: string,
    postStatus: string,
    summary: string,
  } | null,
};

export type DeleteUserPostObjMutationVariables = {
  input: DeleteUserPostObjInput,
};

export type DeleteUserPostObjMutation = {
  deleteUserPostObj?:  {
    __typename: "UserPostObj",
    id: string,
    userId: string,
    chapterId: string,
    spaceId: string,
    title: string,
    description: string,
    created: string,
    postStatus: string,
    summary: string,
  } | null,
};

export type CreateIdeaRelationshipObjMutationVariables = {
  input: CreateIdeaRelationshipObjInput,
};

export type CreateIdeaRelationshipObjMutation = {
  createIdeaRelationshipObj?:  {
    __typename: "IdeaRelationshipObj",
    id: string,
    spaceId?: string | null,
    horizonId?: string | null,
    fromUserId?: string | null,
    fromChapterId?: string | null,
    fromSceneId?: string | null,
    fromIdeaId?: string | null,
    toUserId?: string | null,
    toChapterId?: string | null,
    toSceneId?: string | null,
    toIdeaId?: string | null,
    weight: number,
    created: string,
  } | null,
};

export type UpdateIdeaRelationshipObjMutationVariables = {
  input: UpdateIdeaRelationshipObjInput,
};

export type UpdateIdeaRelationshipObjMutation = {
  updateIdeaRelationshipObj?:  {
    __typename: "IdeaRelationshipObj",
    id: string,
    spaceId?: string | null,
    horizonId?: string | null,
    fromUserId?: string | null,
    fromChapterId?: string | null,
    fromSceneId?: string | null,
    fromIdeaId?: string | null,
    toUserId?: string | null,
    toChapterId?: string | null,
    toSceneId?: string | null,
    toIdeaId?: string | null,
    weight: number,
    created: string,
  } | null,
};

export type DeleteIdeaRelationshipObjMutationVariables = {
  input: DeleteIdeaRelationshipObjInput,
};

export type DeleteIdeaRelationshipObjMutation = {
  deleteIdeaRelationshipObj?:  {
    __typename: "IdeaRelationshipObj",
    id: string,
    spaceId?: string | null,
    horizonId?: string | null,
    fromUserId?: string | null,
    fromChapterId?: string | null,
    fromSceneId?: string | null,
    fromIdeaId?: string | null,
    toUserId?: string | null,
    toChapterId?: string | null,
    toSceneId?: string | null,
    toIdeaId?: string | null,
    weight: number,
    created: string,
  } | null,
};

export type CreateIdeaObjMutationVariables = {
  input: CreateIdeaObjInput,
};

export type CreateIdeaObjMutation = {
  createIdeaObj?:  {
    __typename: "IdeaObj",
    id: string,
    idx: number,
    userId: string,
    sceneId?: string | null,
    pageId?: string | null,
    title: string,
    description: string,
    column: string,
    visible: boolean,
    x: number,
    y: number,
    width: number,
    height: number,
    scale: number,
    rotation: number,
    variant: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    created: string,
  } | null,
};

export type UpdateIdeaObjMutationVariables = {
  input: UpdateIdeaObjInput,
};

export type UpdateIdeaObjMutation = {
  updateIdeaObj?:  {
    __typename: "IdeaObj",
    id: string,
    idx: number,
    userId: string,
    sceneId?: string | null,
    pageId?: string | null,
    title: string,
    description: string,
    column: string,
    visible: boolean,
    x: number,
    y: number,
    width: number,
    height: number,
    scale: number,
    rotation: number,
    variant: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    created: string,
  } | null,
};

export type DeleteIdeaObjMutationVariables = {
  input: DeleteIdeaObjInput,
};

export type DeleteIdeaObjMutation = {
  deleteIdeaObj?:  {
    __typename: "IdeaObj",
    id: string,
    idx: number,
    userId: string,
    sceneId?: string | null,
    pageId?: string | null,
    title: string,
    description: string,
    column: string,
    visible: boolean,
    x: number,
    y: number,
    width: number,
    height: number,
    scale: number,
    rotation: number,
    variant: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    created: string,
  } | null,
};

export type CreateIdeaSceneObjMutationVariables = {
  input: CreateIdeaSceneObjInput,
};

export type CreateIdeaSceneObjMutation = {
  createIdeaSceneObj?:  {
    __typename: "IdeaSceneObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    arcId?: string | null,
    title: string,
    summary: string,
    objective: string,
    created: string,
  } | null,
};

export type UpdateIdeaSceneObjMutationVariables = {
  input: UpdateIdeaSceneObjInput,
};

export type UpdateIdeaSceneObjMutation = {
  updateIdeaSceneObj?:  {
    __typename: "IdeaSceneObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    arcId?: string | null,
    title: string,
    summary: string,
    objective: string,
    created: string,
  } | null,
};

export type DeleteIdeaSceneObjMutationVariables = {
  input: DeleteIdeaSceneObjInput,
};

export type DeleteIdeaSceneObjMutation = {
  deleteIdeaSceneObj?:  {
    __typename: "IdeaSceneObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    arcId?: string | null,
    title: string,
    summary: string,
    objective: string,
    created: string,
  } | null,
};

export type CreateTaskMemberObjMutationVariables = {
  input: CreateTaskMemberObjInput,
};

export type CreateTaskMemberObjMutation = {
  createTaskMemberObj?:  {
    __typename: "TaskMemberObj",
    id: string,
    taskId: string,
    userId: string,
    created: string,
  } | null,
};

export type UpdateTaskMemberObjMutationVariables = {
  input: UpdateTaskMemberObjInput,
};

export type UpdateTaskMemberObjMutation = {
  updateTaskMemberObj?:  {
    __typename: "TaskMemberObj",
    id: string,
    taskId: string,
    userId: string,
    created: string,
  } | null,
};

export type DeleteTaskMemberObjMutationVariables = {
  input: DeleteTaskMemberObjInput,
};

export type DeleteTaskMemberObjMutation = {
  deleteTaskMemberObj?:  {
    __typename: "TaskMemberObj",
    id: string,
    taskId: string,
    userId: string,
    created: string,
  } | null,
};

export type CreateTaskObjMutationVariables = {
  input: CreateTaskObjInput,
};

export type CreateTaskObjMutation = {
  createTaskObj?:  {
    __typename: "TaskObj",
    id: string,
    userId: string,
    chapterId: string,
    spaceId: string,
    title: string,
    description: string,
    taskStatus: string,
    created: string,
  } | null,
};

export type UpdateTaskObjMutationVariables = {
  input: UpdateTaskObjInput,
};

export type UpdateTaskObjMutation = {
  updateTaskObj?:  {
    __typename: "TaskObj",
    id: string,
    userId: string,
    chapterId: string,
    spaceId: string,
    title: string,
    description: string,
    taskStatus: string,
    created: string,
  } | null,
};

export type DeleteTaskObjMutationVariables = {
  input: DeleteTaskObjInput,
};

export type DeleteTaskObjMutation = {
  deleteTaskObj?:  {
    __typename: "TaskObj",
    id: string,
    userId: string,
    chapterId: string,
    spaceId: string,
    title: string,
    description: string,
    taskStatus: string,
    created: string,
  } | null,
};

export type CreateConversationObjMutationVariables = {
  input: CreateConversationObjInput,
};

export type CreateConversationObjMutation = {
  createConversationObj?:  {
    __typename: "ConversationObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    decisionId?: string | null,
    toUserId?: string | null,
    toAgentId?: string | null,
    summary: string,
    title: string,
    created: string,
  } | null,
};

export type UpdateConversationObjMutationVariables = {
  input: UpdateConversationObjInput,
};

export type UpdateConversationObjMutation = {
  updateConversationObj?:  {
    __typename: "ConversationObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    decisionId?: string | null,
    toUserId?: string | null,
    toAgentId?: string | null,
    summary: string,
    title: string,
    created: string,
  } | null,
};

export type DeleteConversationObjMutationVariables = {
  input: DeleteConversationObjInput,
};

export type DeleteConversationObjMutation = {
  deleteConversationObj?:  {
    __typename: "ConversationObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    decisionId?: string | null,
    toUserId?: string | null,
    toAgentId?: string | null,
    summary: string,
    title: string,
    created: string,
  } | null,
};

export type CreateHorizonObjMutationVariables = {
  input: CreateHorizonObjInput,
};

export type CreateHorizonObjMutation = {
  createHorizonObj?:  {
    __typename: "HorizonObj",
    id: string,
    userId: string,
    title: string,
    created: string,
    description: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    category: string,
  } | null,
};

export type UpdateHorizonObjMutationVariables = {
  input: UpdateHorizonObjInput,
};

export type UpdateHorizonObjMutation = {
  updateHorizonObj?:  {
    __typename: "HorizonObj",
    id: string,
    userId: string,
    title: string,
    created: string,
    description: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    category: string,
  } | null,
};

export type DeleteHorizonObjMutationVariables = {
  input: DeleteHorizonObjInput,
};

export type DeleteHorizonObjMutation = {
  deleteHorizonObj?:  {
    __typename: "HorizonObj",
    id: string,
    userId: string,
    title: string,
    created: string,
    description: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    category: string,
  } | null,
};

export type CreateQuadrantMemberObjMutationVariables = {
  input: CreateQuadrantMemberObjInput,
};

export type CreateQuadrantMemberObjMutation = {
  createQuadrantMemberObj?:  {
    __typename: "QuadrantMemberObj",
    id: string,
    quadrantId: string,
    userId: string,
    created: string,
  } | null,
};

export type UpdateQuadrantMemberObjMutationVariables = {
  input: UpdateQuadrantMemberObjInput,
};

export type UpdateQuadrantMemberObjMutation = {
  updateQuadrantMemberObj?:  {
    __typename: "QuadrantMemberObj",
    id: string,
    quadrantId: string,
    userId: string,
    created: string,
  } | null,
};

export type DeleteQuadrantMemberObjMutationVariables = {
  input: DeleteQuadrantMemberObjInput,
};

export type DeleteQuadrantMemberObjMutation = {
  deleteQuadrantMemberObj?:  {
    __typename: "QuadrantMemberObj",
    id: string,
    quadrantId: string,
    userId: string,
    created: string,
  } | null,
};

export type CreateDecisionQuadrantObjMutationVariables = {
  input: CreateDecisionQuadrantObjInput,
};

export type CreateDecisionQuadrantObjMutation = {
  createDecisionQuadrantObj?:  {
    __typename: "DecisionQuadrantObj",
    id: string,
    decisionId: string,
    title: string,
    description: string,
    variant: string,
    created: string,
  } | null,
};

export type UpdateDecisionQuadrantObjMutationVariables = {
  input: UpdateDecisionQuadrantObjInput,
};

export type UpdateDecisionQuadrantObjMutation = {
  updateDecisionQuadrantObj?:  {
    __typename: "DecisionQuadrantObj",
    id: string,
    decisionId: string,
    title: string,
    description: string,
    variant: string,
    created: string,
  } | null,
};

export type DeleteDecisionQuadrantObjMutationVariables = {
  input: DeleteDecisionQuadrantObjInput,
};

export type DeleteDecisionQuadrantObjMutation = {
  deleteDecisionQuadrantObj?:  {
    __typename: "DecisionQuadrantObj",
    id: string,
    decisionId: string,
    title: string,
    description: string,
    variant: string,
    created: string,
  } | null,
};

export type CreateHorizonDecisionObjMutationVariables = {
  input: CreateHorizonDecisionObjInput,
};

export type CreateHorizonDecisionObjMutation = {
  createHorizonDecisionObj?:  {
    __typename: "HorizonDecisionObj",
    id: string,
    horizonId: string,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type UpdateHorizonDecisionObjMutationVariables = {
  input: UpdateHorizonDecisionObjInput,
};

export type UpdateHorizonDecisionObjMutation = {
  updateHorizonDecisionObj?:  {
    __typename: "HorizonDecisionObj",
    id: string,
    horizonId: string,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type DeleteHorizonDecisionObjMutationVariables = {
  input: DeleteHorizonDecisionObjInput,
};

export type DeleteHorizonDecisionObjMutation = {
  deleteHorizonDecisionObj?:  {
    __typename: "HorizonDecisionObj",
    id: string,
    horizonId: string,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type CreateHorizonSpaceMemberObjMutationVariables = {
  input: CreateHorizonSpaceMemberObjInput,
};

export type CreateHorizonSpaceMemberObjMutation = {
  createHorizonSpaceMemberObj?:  {
    __typename: "HorizonSpaceMemberObj",
    id: string,
    horizonId: string,
    spaceId: string,
    created: string,
  } | null,
};

export type UpdateHorizonSpaceMemberObjMutationVariables = {
  input: UpdateHorizonSpaceMemberObjInput,
};

export type UpdateHorizonSpaceMemberObjMutation = {
  updateHorizonSpaceMemberObj?:  {
    __typename: "HorizonSpaceMemberObj",
    id: string,
    horizonId: string,
    spaceId: string,
    created: string,
  } | null,
};

export type DeleteHorizonSpaceMemberObjMutationVariables = {
  input: DeleteHorizonSpaceMemberObjInput,
};

export type DeleteHorizonSpaceMemberObjMutation = {
  deleteHorizonSpaceMemberObj?:  {
    __typename: "HorizonSpaceMemberObj",
    id: string,
    horizonId: string,
    spaceId: string,
    created: string,
  } | null,
};

export type CreateHorizonUserMemberObjMutationVariables = {
  input: CreateHorizonUserMemberObjInput,
};

export type CreateHorizonUserMemberObjMutation = {
  createHorizonUserMemberObj?:  {
    __typename: "HorizonUserMemberObj",
    id: string,
    horizonId: string,
    userId: string,
    created: string,
  } | null,
};

export type UpdateHorizonUserMemberObjMutationVariables = {
  input: UpdateHorizonUserMemberObjInput,
};

export type UpdateHorizonUserMemberObjMutation = {
  updateHorizonUserMemberObj?:  {
    __typename: "HorizonUserMemberObj",
    id: string,
    horizonId: string,
    userId: string,
    created: string,
  } | null,
};

export type DeleteHorizonUserMemberObjMutationVariables = {
  input: DeleteHorizonUserMemberObjInput,
};

export type DeleteHorizonUserMemberObjMutation = {
  deleteHorizonUserMemberObj?:  {
    __typename: "HorizonUserMemberObj",
    id: string,
    horizonId: string,
    userId: string,
    created: string,
  } | null,
};

export type CreateArcSectionObjMutationVariables = {
  input: CreateArcSectionObjInput,
};

export type CreateArcSectionObjMutation = {
  createArcSectionObj?:  {
    __typename: "ArcSectionObj",
    id: string,
    userId: string,
    arcId: string,
    title: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type UpdateArcSectionObjMutationVariables = {
  input: UpdateArcSectionObjInput,
};

export type UpdateArcSectionObjMutation = {
  updateArcSectionObj?:  {
    __typename: "ArcSectionObj",
    id: string,
    userId: string,
    arcId: string,
    title: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type DeleteArcSectionObjMutationVariables = {
  input: DeleteArcSectionObjInput,
};

export type DeleteArcSectionObjMutation = {
  deleteArcSectionObj?:  {
    __typename: "ArcSectionObj",
    id: string,
    userId: string,
    arcId: string,
    title: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type CreateHorizonArcObjMutationVariables = {
  input: CreateHorizonArcObjInput,
};

export type CreateHorizonArcObjMutation = {
  createHorizonArcObj?:  {
    __typename: "HorizonArcObj",
    id: string,
    userId: string,
    horizonId: string,
    title: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type UpdateHorizonArcObjMutationVariables = {
  input: UpdateHorizonArcObjInput,
};

export type UpdateHorizonArcObjMutation = {
  updateHorizonArcObj?:  {
    __typename: "HorizonArcObj",
    id: string,
    userId: string,
    horizonId: string,
    title: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type DeleteHorizonArcObjMutationVariables = {
  input: DeleteHorizonArcObjInput,
};

export type DeleteHorizonArcObjMutation = {
  deleteHorizonArcObj?:  {
    __typename: "HorizonArcObj",
    id: string,
    userId: string,
    horizonId: string,
    title: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type CreateFlowObjMutationVariables = {
  input: CreateFlowObjInput,
};

export type CreateFlowObjMutation = {
  createFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    created: string,
    target: string,
    completed: boolean,
  } | null,
};

export type UpdateFlowObjMutationVariables = {
  input: UpdateFlowObjInput,
};

export type UpdateFlowObjMutation = {
  updateFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    created: string,
    target: string,
    completed: boolean,
  } | null,
};

export type DeleteFlowObjMutationVariables = {
  input: DeleteFlowObjInput,
};

export type DeleteFlowObjMutation = {
  deleteFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    created: string,
    target: string,
    completed: boolean,
  } | null,
};

export type GetUserQueryVariables = {
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "UserObj",
    id: string,
    displayName: string,
    fname: string,
    lname: string,
    email: string,
    bio: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    visibility: string,
    role: string,
    passwordHash?: string | null,
    customerId?: string | null,
    subscriptionId?: string | null,
    productId?: string | null,
    priceId?: string | null,
    created: string,
    journalId: string,
    clientId?: string | null,
  } | null,
};

export type GetChapterSceneObjQueryVariables = {
  id: string,
};

export type GetChapterSceneObjQuery = {
  getChapterSceneObj?:  {
    __typename: "ChapterSceneObj",
    id: string,
    userId: string,
    chapterId: string,
    summary: string,
    title: string,
    created: string,
    objective: string,
  } | null,
};

export type ListChapterSceneObjsQueryVariables = {
  filter?: TableChapterSceneObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChapterSceneObjsQuery = {
  listChapterSceneObjs?:  {
    __typename: "ChapterSceneObjConnection",
    items?:  Array< {
      __typename: "ChapterSceneObj",
      id: string,
      userId: string,
      chapterId: string,
      summary: string,
      title: string,
      created: string,
      objective: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetConversationMessageObjQueryVariables = {
  id: string,
};

export type GetConversationMessageObjQuery = {
  getConversationMessageObj?:  {
    __typename: "ConversationMessageObj",
    id: string,
    userId?: string | null,
    agentId?: string | null,
    conversationId: string,
    sceneId: string,
    created: string,
    message: string,
    hasAttachment: boolean,
    variant?: string | null,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type ListConversationMessageObjsQueryVariables = {
  filter?: TableConversationMessageObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationMessageObjsQuery = {
  listConversationMessageObjs?:  {
    __typename: "ConversationMessageObjConnection",
    items?:  Array< {
      __typename: "ConversationMessageObj",
      id: string,
      userId?: string | null,
      agentId?: string | null,
      conversationId: string,
      sceneId: string,
      created: string,
      message: string,
      hasAttachment: boolean,
      variant?: string | null,
      fileElem?:  {
        __typename: "FileElem",
        id: string,
        src?: string | null,
        ext?: string | null,
        title?: string | null,
        size?: number | null,
        variant?: string | null,
      } | null,
      textElem?:  {
        __typename: "TextElem",
        id: string,
        title?: string | null,
        text?: string | null,
        variant?: string | null,
      } | null,
      urlElem?:  {
        __typename: "UrlElem",
        id: string,
        url?: string | null,
        title?: string | null,
        variant?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSceneIdeaObjQueryVariables = {
  id: string,
};

export type GetSceneIdeaObjQuery = {
  getSceneIdeaObj?:  {
    __typename: "SceneIdeaObj",
    id: string,
    userId: string,
    sceneId: string,
    idx: number,
    column: string,
    title: string,
    description: string,
    x: number,
    y: number,
    visible: boolean,
    width: number,
    height: number,
    scale: number,
    rotation: number,
    variant: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    created: string,
  } | null,
};

export type ListSceneIdeaObjsQueryVariables = {
  filter?: TableSceneIdeaObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSceneIdeaObjsQuery = {
  listSceneIdeaObjs?:  {
    __typename: "SceneIdeaObjConnection",
    items?:  Array< {
      __typename: "SceneIdeaObj",
      id: string,
      userId: string,
      sceneId: string,
      idx: number,
      column: string,
      title: string,
      description: string,
      x: number,
      y: number,
      visible: boolean,
      width: number,
      height: number,
      scale: number,
      rotation: number,
      variant: string,
      fileElem?:  {
        __typename: "FileElem",
        id: string,
        src?: string | null,
        ext?: string | null,
        title?: string | null,
        size?: number | null,
        variant?: string | null,
      } | null,
      textElem?:  {
        __typename: "TextElem",
        id: string,
        title?: string | null,
        text?: string | null,
        variant?: string | null,
      } | null,
      urlElem?:  {
        __typename: "UrlElem",
        id: string,
        url?: string | null,
        title?: string | null,
        variant?: string | null,
      } | null,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCollectionResourceObjQueryVariables = {
  id: string,
};

export type GetCollectionResourceObjQuery = {
  getCollectionResourceObj?:  {
    __typename: "CollectionResourceObj",
    id: string,
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    variant: string,
    created: string,
  } | null,
};

export type ListCollectionResourceObjsQueryVariables = {
  filter?: TableCollectionResourceObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCollectionResourceObjsQuery = {
  listCollectionResourceObjs?:  {
    __typename: "CollectionResourceObjConnection",
    items?:  Array< {
      __typename: "CollectionResourceObj",
      id: string,
      userId: string,
      collectionId: string,
      title: string,
      description: string,
      fileElem?:  {
        __typename: "FileElem",
        id: string,
        src?: string | null,
        ext?: string | null,
        title?: string | null,
        size?: number | null,
        variant?: string | null,
      } | null,
      textElem?:  {
        __typename: "TextElem",
        id: string,
        title?: string | null,
        text?: string | null,
        variant?: string | null,
      } | null,
      urlElem?:  {
        __typename: "UrlElem",
        id: string,
        url?: string | null,
        title?: string | null,
        variant?: string | null,
      } | null,
      variant: string,
      created: string,
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
    displayName: string,
    fname: string,
    lname: string,
    email: string,
    bio: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    visibility: string,
    role: string,
    passwordHash?: string | null,
    customerId?: string | null,
    subscriptionId?: string | null,
    productId?: string | null,
    priceId?: string | null,
    created: string,
    journalId: string,
    clientId?: string | null,
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
      displayName: string,
      fname: string,
      lname: string,
      email: string,
      bio: string,
      dp:  {
        __typename: "FileElem",
        id: string,
        src?: string | null,
        ext?: string | null,
        title?: string | null,
        size?: number | null,
        variant?: string | null,
      },
      visibility: string,
      role: string,
      passwordHash?: string | null,
      customerId?: string | null,
      subscriptionId?: string | null,
      productId?: string | null,
      priceId?: string | null,
      created: string,
      journalId: string,
      clientId?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSpaceChapterObjQueryVariables = {
  id: string,
};

export type GetSpaceChapterObjQuery = {
  getSpaceChapterObj?:  {
    __typename: "SpaceChapterObj",
    id: string,
    spaceId: string,
    title: string,
    userId: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type ListSpaceChapterObjsQueryVariables = {
  filter?: TableSpaceChapterObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpaceChapterObjsQuery = {
  listSpaceChapterObjs?:  {
    __typename: "SpaceChapterObjConnection",
    items?:  Array< {
      __typename: "SpaceChapterObj",
      id: string,
      spaceId: string,
      title: string,
      userId: string,
      description: string,
      objective: string,
      idx: number,
      created: string,
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
    created: string,
    description: string,
    objective: string,
    summary: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    category: string,
    target: string,
    flowId?: string | null,
    starred: boolean,
    visibility: string,
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
      created: string,
      description: string,
      objective: string,
      summary: string,
      thumbnail:  {
        __typename: "FileElem",
        id: string,
        src?: string | null,
        ext?: string | null,
        title?: string | null,
        size?: number | null,
        variant?: string | null,
      },
      category: string,
      target: string,
      flowId?: string | null,
      starred: boolean,
      visibility: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSpaceMemberObjQueryVariables = {
  id: string,
};

export type GetSpaceMemberObjQuery = {
  getSpaceMemberObj?:  {
    __typename: "SpaceMemberObj",
    id: string,
    spaceId: string,
    userId: string,
    created: string,
  } | null,
};

export type ListSpaceMemberObjsQueryVariables = {
  filter?: TableSpaceMemberObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpaceMemberObjsQuery = {
  listSpaceMemberObjs?:  {
    __typename: "SpaceMemberObjConnection",
    items?:  Array< {
      __typename: "SpaceMemberObj",
      id: string,
      spaceId: string,
      userId: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserReservationObjQueryVariables = {
  id: string,
};

export type GetUserReservationObjQuery = {
  getUserReservationObj?:  {
    __typename: "UserReservationObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
    role: string,
    created: string,
  } | null,
};

export type ListUserReservationObjsQueryVariables = {
  filter?: TableUserReservationObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserReservationObjsQuery = {
  listUserReservationObjs?:  {
    __typename: "UserReservationObjConnection",
    items?:  Array< {
      __typename: "UserReservationObj",
      id: string,
      fname: string,
      lname: string,
      email: string,
      role: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAgentObjQueryVariables = {
  id: string,
};

export type GetAgentObjQuery = {
  getAgentObj?:  {
    __typename: "AgentObj",
    id: string,
    name: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    role: string,
    bio: string,
    created: string,
  } | null,
};

export type ListAgentObjsQueryVariables = {
  filter?: TableAgentObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAgentObjsQuery = {
  listAgentObjs?:  {
    __typename: "AgentObjConnection",
    items?:  Array< {
      __typename: "AgentObj",
      id: string,
      name: string,
      dp:  {
        __typename: "FileElem",
        id: string,
        src?: string | null,
        ext?: string | null,
        title?: string | null,
        size?: number | null,
        variant?: string | null,
      },
      role: string,
      bio: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChapterSessionObjQueryVariables = {
  id: string,
};

export type GetChapterSessionObjQuery = {
  getChapterSessionObj?:  {
    __typename: "ChapterSessionObj",
    id: string,
    spaceId: string,
    userId: string,
    chapterId: string,
    duration: number,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type ListChapterSessionObjsQueryVariables = {
  filter?: TableChapterSessionObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChapterSessionObjsQuery = {
  listChapterSessionObjs?:  {
    __typename: "ChapterSessionObjConnection",
    items?:  Array< {
      __typename: "ChapterSessionObj",
      id: string,
      spaceId: string,
      userId: string,
      chapterId: string,
      duration: number,
      title: string,
      description: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChapterSessionUpdateObjQueryVariables = {
  id: string,
};

export type GetChapterSessionUpdateObjQuery = {
  getChapterSessionUpdateObj?:  {
    __typename: "ChapterSessionUpdateObj",
    id: string,
    userId: string,
    spaceId: string,
    chapterId: string,
    sessionId?: string | null,
    added: boolean,
    title: string,
    description: string,
    created: string,
    variant: string,
    conversationId?: string | null,
    sceneId?: string | null,
    ideaId?: string | null,
    postId?: string | null,
    logId?: string | null,
    commentId?: string | null,
    attachmentId?: string | null,
    memberId?: string | null,
  } | null,
};

export type ListChapterSessionUpdateObjsQueryVariables = {
  filter?: TableChapterSessionUpdateObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChapterSessionUpdateObjsQuery = {
  listChapterSessionUpdateObjs?:  {
    __typename: "ChapterSessionUpdateObjConnection",
    items?:  Array< {
      __typename: "ChapterSessionUpdateObj",
      id: string,
      userId: string,
      spaceId: string,
      chapterId: string,
      sessionId?: string | null,
      added: boolean,
      title: string,
      description: string,
      created: string,
      variant: string,
      conversationId?: string | null,
      sceneId?: string | null,
      ideaId?: string | null,
      postId?: string | null,
      logId?: string | null,
      commentId?: string | null,
      attachmentId?: string | null,
      memberId?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChapterSessionUpdateMemberObjQueryVariables = {
  id: string,
};

export type GetChapterSessionUpdateMemberObjQuery = {
  getChapterSessionUpdateMemberObj?:  {
    __typename: "ChapterSessionUpdateMemberObj",
    id: string,
    updateId: string,
    userId: string,
    created: string,
  } | null,
};

export type ListChapterSessionUpdateMemberObjsQueryVariables = {
  filter?: TableChapterSessionUpdateMemberObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChapterSessionUpdateMemberObjsQuery = {
  listChapterSessionUpdateMemberObjs?:  {
    __typename: "ChapterSessionUpdateMemberObjConnection",
    items?:  Array< {
      __typename: "ChapterSessionUpdateMemberObj",
      id: string,
      updateId: string,
      userId: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserBackerObjQueryVariables = {
  id: string,
};

export type GetUserBackerObjQuery = {
  getUserBackerObj?:  {
    __typename: "UserBackerObj",
    id: string,
    backedId: string,
    userId: string,
    created: string,
  } | null,
};

export type ListUserBackerObjsQueryVariables = {
  filter?: TableUserBackerObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserBackerObjsQuery = {
  listUserBackerObjs?:  {
    __typename: "UserBackerObjConnection",
    items?:  Array< {
      __typename: "UserBackerObj",
      id: string,
      backedId: string,
      userId: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserConnectionObjQueryVariables = {
  id: string,
};

export type GetUserConnectionObjQuery = {
  getUserConnectionObj?:  {
    __typename: "UserConnectionObj",
    id: string,
    sourceId: string,
    destinationId: string,
    created: string,
  } | null,
};

export type ListUserConnectionObjsQueryVariables = {
  filter?: TableUserConnectionObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserConnectionObjsQuery = {
  listUserConnectionObjs?:  {
    __typename: "UserConnectionObjConnection",
    items?:  Array< {
      __typename: "UserConnectionObj",
      id: string,
      sourceId: string,
      destinationId: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChapterSessionContributorObjQueryVariables = {
  id: string,
};

export type GetChapterSessionContributorObjQuery = {
  getChapterSessionContributorObj?:  {
    __typename: "ChapterSessionContributorObj",
    id: string,
    sessionId: string,
    userId: string,
    created: string,
  } | null,
};

export type ListChapterSessionContributorObjsQueryVariables = {
  filter?: TableChapterSessionContributorObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChapterSessionContributorObjsQuery = {
  listChapterSessionContributorObjs?:  {
    __typename: "ChapterSessionContributorObjConnection",
    items?:  Array< {
      __typename: "ChapterSessionContributorObj",
      id: string,
      sessionId: string,
      userId: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSceneMemberObjQueryVariables = {
  id: string,
};

export type GetSceneMemberObjQuery = {
  getSceneMemberObj?:  {
    __typename: "SceneMemberObj",
    id: string,
    sceneId: string,
    userId: string,
    created: string,
  } | null,
};

export type ListSceneMemberObjsQueryVariables = {
  filter?: TableSceneMemberObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSceneMemberObjsQuery = {
  listSceneMemberObjs?:  {
    __typename: "SceneMemberObjConnection",
    items?:  Array< {
      __typename: "SceneMemberObj",
      id: string,
      sceneId: string,
      userId: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSpaceIdeaRelationshipObjQueryVariables = {
  id: string,
};

export type GetSpaceIdeaRelationshipObjQuery = {
  getSpaceIdeaRelationshipObj?:  {
    __typename: "SpaceIdeaRelationshipObj",
    id: string,
    fromUserId: string,
    spaceId: string,
    fromChapterId: string,
    fromSceneId: string,
    fromIdeaId: string,
    toUserId: string,
    toChapterId: string,
    toSceneId: string,
    toIdeaId: string,
    weight: number,
    created: string,
  } | null,
};

export type ListSpaceIdeaRelationshipObjsQueryVariables = {
  filter?: TableSpaceIdeaRelationshipObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpaceIdeaRelationshipObjsQuery = {
  listSpaceIdeaRelationshipObjs?:  {
    __typename: "SpaceIdeaRelationshipObjConnection",
    items?:  Array< {
      __typename: "SpaceIdeaRelationshipObj",
      id: string,
      fromUserId: string,
      spaceId: string,
      fromChapterId: string,
      fromSceneId: string,
      fromIdeaId: string,
      toUserId: string,
      toChapterId: string,
      toSceneId: string,
      toIdeaId: string,
      weight: number,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentKarmaObjQueryVariables = {
  id: string,
};

export type GetCommentKarmaObjQuery = {
  getCommentKarmaObj?:  {
    __typename: "CommentKarmaObj",
    id: string,
    userId?: string | null,
    commentId: string,
    created: string,
    neutrality: boolean,
  } | null,
};

export type ListCommentKarmaObjsQueryVariables = {
  filter?: TableCommentKarmaObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentKarmaObjsQuery = {
  listCommentKarmaObjs?:  {
    __typename: "CommentKarmaObjConnection",
    items?:  Array< {
      __typename: "CommentKarmaObj",
      id: string,
      userId?: string | null,
      commentId: string,
      created: string,
      neutrality: boolean,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSpaceChapterMemberObjQueryVariables = {
  id: string,
};

export type GetSpaceChapterMemberObjQuery = {
  getSpaceChapterMemberObj?:  {
    __typename: "SpaceChapterMemberObj",
    id: string,
    spaceId: string,
    userId: string,
    created: string,
  } | null,
};

export type ListSpaceChapterMemberObjsQueryVariables = {
  filter?: TableSpaceChapterMemberObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpaceChapterMemberObjsQuery = {
  listSpaceChapterMemberObjs?:  {
    __typename: "SpaceChapterMemberObjConnection",
    items?:  Array< {
      __typename: "SpaceChapterMemberObj",
      id: string,
      spaceId: string,
      userId: string,
      created: string,
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
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    created: string,
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
        __typename: "FileElem",
        id: string,
        src?: string | null,
        ext?: string | null,
        title?: string | null,
        size?: number | null,
        variant?: string | null,
      },
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGalleryCollectionObjQueryVariables = {
  id: string,
};

export type GetGalleryCollectionObjQuery = {
  getGalleryCollectionObj?:  {
    __typename: "GalleryCollectionObj",
    id: string,
    galleryId: string,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type ListGalleryCollectionObjsQueryVariables = {
  filter?: TableGalleryCollectionObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGalleryCollectionObjsQuery = {
  listGalleryCollectionObjs?:  {
    __typename: "GalleryCollectionObjConnection",
    items?:  Array< {
      __typename: "GalleryCollectionObj",
      id: string,
      galleryId: string,
      title: string,
      description: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGalleryMemberObjQueryVariables = {
  id: string,
};

export type GetGalleryMemberObjQuery = {
  getGalleryMemberObj?:  {
    __typename: "GalleryMemberObj",
    id: string,
    galleryId: string,
    userId: string,
    created: string,
  } | null,
};

export type ListGalleryMemberObjsQueryVariables = {
  filter?: TableGalleryMemberObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGalleryMemberObjsQuery = {
  listGalleryMemberObjs?:  {
    __typename: "GalleryMemberObjConnection",
    items?:  Array< {
      __typename: "GalleryMemberObj",
      id: string,
      galleryId: string,
      userId: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserActivityObjQueryVariables = {
  id: string,
};

export type GetUserActivityObjQuery = {
  getUserActivityObj?:  {
    __typename: "UserActivityObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    spaceId?: string | null,
    horizonId?: string | null,
    acitivtyId?: string | null,
    added: boolean,
    title: string,
    description: string,
    created: string,
    variant: string,
    conversationId?: string | null,
    sceneId?: string | null,
    ideaId?: string | null,
    postId?: string | null,
    taskId?: string | null,
    commentId?: string | null,
    attachmentId?: string | null,
    contributorId?: string | null,
  } | null,
};

export type ListUserActivityObjsQueryVariables = {
  filter?: TableUserActivityObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserActivityObjsQuery = {
  listUserActivityObjs?:  {
    __typename: "UserActivityObjConnection",
    items?:  Array< {
      __typename: "UserActivityObj",
      id: string,
      userId: string,
      chapterId?: string | null,
      spaceId?: string | null,
      horizonId?: string | null,
      acitivtyId?: string | null,
      added: boolean,
      title: string,
      description: string,
      created: string,
      variant: string,
      conversationId?: string | null,
      sceneId?: string | null,
      ideaId?: string | null,
      postId?: string | null,
      taskId?: string | null,
      commentId?: string | null,
      attachmentId?: string | null,
      contributorId?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPostAttachmentObjQueryVariables = {
  id: string,
};

export type GetPostAttachmentObjQuery = {
  getPostAttachmentObj?:  {
    __typename: "PostAttachmentObj",
    id: string,
    userId?: string | null,
    postId: string,
    ideaId?: string | null,
    created: string,
    variant: string,
    title: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type ListPostAttachmentObjsQueryVariables = {
  filter?: TablePostAttachmentObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostAttachmentObjsQuery = {
  listPostAttachmentObjs?:  {
    __typename: "PostAttachmentObjConnection",
    items?:  Array< {
      __typename: "PostAttachmentObj",
      id: string,
      userId?: string | null,
      postId: string,
      ideaId?: string | null,
      created: string,
      variant: string,
      title: string,
      fileElem?:  {
        __typename: "FileElem",
        id: string,
        src?: string | null,
        ext?: string | null,
        title?: string | null,
        size?: number | null,
        variant?: string | null,
      } | null,
      textElem?:  {
        __typename: "TextElem",
        id: string,
        title?: string | null,
        text?: string | null,
        variant?: string | null,
      } | null,
      urlElem?:  {
        __typename: "UrlElem",
        id: string,
        url?: string | null,
        title?: string | null,
        variant?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPostCommentObjQueryVariables = {
  id: string,
};

export type GetPostCommentObjQuery = {
  getPostCommentObj?:  {
    __typename: "PostCommentObj",
    id: string,
    userId?: string | null,
    postId: string,
    created: string,
    message: string,
  } | null,
};

export type ListPostCommentObjsQueryVariables = {
  filter?: TablePostCommentObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostCommentObjsQuery = {
  listPostCommentObjs?:  {
    __typename: "PostCommentObjConnection",
    items?:  Array< {
      __typename: "PostCommentObj",
      id: string,
      userId?: string | null,
      postId: string,
      created: string,
      message: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPostKarmaObjQueryVariables = {
  id: string,
};

export type GetPostKarmaObjQuery = {
  getPostKarmaObj?:  {
    __typename: "PostKarmaObj",
    id: string,
    userId?: string | null,
    postId: string,
    created: string,
    neutrality: boolean,
  } | null,
};

export type ListPostKarmaObjsQueryVariables = {
  filter?: TablePostKarmaObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostKarmaObjsQuery = {
  listPostKarmaObjs?:  {
    __typename: "PostKarmaObjConnection",
    items?:  Array< {
      __typename: "PostKarmaObj",
      id: string,
      userId?: string | null,
      postId: string,
      created: string,
      neutrality: boolean,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPostMemberObjQueryVariables = {
  id: string,
};

export type GetPostMemberObjQuery = {
  getPostMemberObj?:  {
    __typename: "PostMemberObj",
    id: string,
    postId: string,
    userId: string,
    created: string,
  } | null,
};

export type ListPostMemberObjsQueryVariables = {
  filter?: TablePostMemberObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostMemberObjsQuery = {
  listPostMemberObjs?:  {
    __typename: "PostMemberObjConnection",
    items?:  Array< {
      __typename: "PostMemberObj",
      id: string,
      postId: string,
      userId: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserPostObjQueryVariables = {
  id: string,
};

export type GetUserPostObjQuery = {
  getUserPostObj?:  {
    __typename: "UserPostObj",
    id: string,
    userId: string,
    chapterId: string,
    spaceId: string,
    title: string,
    description: string,
    created: string,
    postStatus: string,
    summary: string,
  } | null,
};

export type ListUserPostObjsQueryVariables = {
  filter?: TableUserPostObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserPostObjsQuery = {
  listUserPostObjs?:  {
    __typename: "UserPostObjConnection",
    items?:  Array< {
      __typename: "UserPostObj",
      id: string,
      userId: string,
      chapterId: string,
      spaceId: string,
      title: string,
      description: string,
      created: string,
      postStatus: string,
      summary: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetIdeaRelationshipObjQueryVariables = {
  id: string,
};

export type GetIdeaRelationshipObjQuery = {
  getIdeaRelationshipObj?:  {
    __typename: "IdeaRelationshipObj",
    id: string,
    spaceId?: string | null,
    horizonId?: string | null,
    fromUserId?: string | null,
    fromChapterId?: string | null,
    fromSceneId?: string | null,
    fromIdeaId?: string | null,
    toUserId?: string | null,
    toChapterId?: string | null,
    toSceneId?: string | null,
    toIdeaId?: string | null,
    weight: number,
    created: string,
  } | null,
};

export type ListIdeaRelationshipObjsQueryVariables = {
  filter?: TableIdeaRelationshipObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIdeaRelationshipObjsQuery = {
  listIdeaRelationshipObjs?:  {
    __typename: "IdeaRelationshipObjConnection",
    items?:  Array< {
      __typename: "IdeaRelationshipObj",
      id: string,
      spaceId?: string | null,
      horizonId?: string | null,
      fromUserId?: string | null,
      fromChapterId?: string | null,
      fromSceneId?: string | null,
      fromIdeaId?: string | null,
      toUserId?: string | null,
      toChapterId?: string | null,
      toSceneId?: string | null,
      toIdeaId?: string | null,
      weight: number,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetIdeaObjQueryVariables = {
  id: string,
};

export type GetIdeaObjQuery = {
  getIdeaObj?:  {
    __typename: "IdeaObj",
    id: string,
    idx: number,
    userId: string,
    sceneId?: string | null,
    pageId?: string | null,
    title: string,
    description: string,
    column: string,
    visible: boolean,
    x: number,
    y: number,
    width: number,
    height: number,
    scale: number,
    rotation: number,
    variant: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    created: string,
  } | null,
};

export type ListIdeaObjsQueryVariables = {
  filter?: TableIdeaObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIdeaObjsQuery = {
  listIdeaObjs?:  {
    __typename: "IdeaObjConnection",
    items?:  Array< {
      __typename: "IdeaObj",
      id: string,
      idx: number,
      userId: string,
      sceneId?: string | null,
      pageId?: string | null,
      title: string,
      description: string,
      column: string,
      visible: boolean,
      x: number,
      y: number,
      width: number,
      height: number,
      scale: number,
      rotation: number,
      variant: string,
      fileElem?:  {
        __typename: "FileElem",
        id: string,
        src?: string | null,
        ext?: string | null,
        title?: string | null,
        size?: number | null,
        variant?: string | null,
      } | null,
      textElem?:  {
        __typename: "TextElem",
        id: string,
        title?: string | null,
        text?: string | null,
        variant?: string | null,
      } | null,
      urlElem?:  {
        __typename: "UrlElem",
        id: string,
        url?: string | null,
        title?: string | null,
        variant?: string | null,
      } | null,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetIdeaSceneObjQueryVariables = {
  id: string,
};

export type GetIdeaSceneObjQuery = {
  getIdeaSceneObj?:  {
    __typename: "IdeaSceneObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    arcId?: string | null,
    title: string,
    summary: string,
    objective: string,
    created: string,
  } | null,
};

export type ListIdeaSceneObjsQueryVariables = {
  filter?: TableIdeaSceneObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIdeaSceneObjsQuery = {
  listIdeaSceneObjs?:  {
    __typename: "IdeaSceneObjConnection",
    items?:  Array< {
      __typename: "IdeaSceneObj",
      id: string,
      userId: string,
      chapterId?: string | null,
      arcId?: string | null,
      title: string,
      summary: string,
      objective: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTaskMemberObjQueryVariables = {
  id: string,
};

export type GetTaskMemberObjQuery = {
  getTaskMemberObj?:  {
    __typename: "TaskMemberObj",
    id: string,
    taskId: string,
    userId: string,
    created: string,
  } | null,
};

export type ListTaskMemberObjsQueryVariables = {
  filter?: TableTaskMemberObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTaskMemberObjsQuery = {
  listTaskMemberObjs?:  {
    __typename: "TaskMemberObjConnection",
    items?:  Array< {
      __typename: "TaskMemberObj",
      id: string,
      taskId: string,
      userId: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTaskObjQueryVariables = {
  id: string,
};

export type GetTaskObjQuery = {
  getTaskObj?:  {
    __typename: "TaskObj",
    id: string,
    userId: string,
    chapterId: string,
    spaceId: string,
    title: string,
    description: string,
    taskStatus: string,
    created: string,
  } | null,
};

export type ListTaskObjsQueryVariables = {
  filter?: TableTaskObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTaskObjsQuery = {
  listTaskObjs?:  {
    __typename: "TaskObjConnection",
    items?:  Array< {
      __typename: "TaskObj",
      id: string,
      userId: string,
      chapterId: string,
      spaceId: string,
      title: string,
      description: string,
      taskStatus: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetConversationObjQueryVariables = {
  id: string,
};

export type GetConversationObjQuery = {
  getConversationObj?:  {
    __typename: "ConversationObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    decisionId?: string | null,
    toUserId?: string | null,
    toAgentId?: string | null,
    summary: string,
    title: string,
    created: string,
  } | null,
};

export type ListConversationObjsQueryVariables = {
  filter?: TableConversationObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationObjsQuery = {
  listConversationObjs?:  {
    __typename: "ConversationObjConnection",
    items?:  Array< {
      __typename: "ConversationObj",
      id: string,
      userId: string,
      chapterId?: string | null,
      decisionId?: string | null,
      toUserId?: string | null,
      toAgentId?: string | null,
      summary: string,
      title: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetHorizonObjQueryVariables = {
  id: string,
};

export type GetHorizonObjQuery = {
  getHorizonObj?:  {
    __typename: "HorizonObj",
    id: string,
    userId: string,
    title: string,
    created: string,
    description: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    category: string,
  } | null,
};

export type ListHorizonObjsQueryVariables = {
  filter?: TableHorizonObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHorizonObjsQuery = {
  listHorizonObjs?:  {
    __typename: "HorizonObjConnection",
    items?:  Array< {
      __typename: "HorizonObj",
      id: string,
      userId: string,
      title: string,
      created: string,
      description: string,
      thumbnail:  {
        __typename: "FileElem",
        id: string,
        src?: string | null,
        ext?: string | null,
        title?: string | null,
        size?: number | null,
        variant?: string | null,
      },
      category: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetQuadrantMemberObjQueryVariables = {
  id: string,
};

export type GetQuadrantMemberObjQuery = {
  getQuadrantMemberObj?:  {
    __typename: "QuadrantMemberObj",
    id: string,
    quadrantId: string,
    userId: string,
    created: string,
  } | null,
};

export type ListQuadrantMemberObjsQueryVariables = {
  filter?: TableQuadrantMemberObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuadrantMemberObjsQuery = {
  listQuadrantMemberObjs?:  {
    __typename: "QuadrantMemberObjConnection",
    items?:  Array< {
      __typename: "QuadrantMemberObj",
      id: string,
      quadrantId: string,
      userId: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDecisionQuadrantObjQueryVariables = {
  id: string,
};

export type GetDecisionQuadrantObjQuery = {
  getDecisionQuadrantObj?:  {
    __typename: "DecisionQuadrantObj",
    id: string,
    decisionId: string,
    title: string,
    description: string,
    variant: string,
    created: string,
  } | null,
};

export type ListDecisionQuadrantObjsQueryVariables = {
  filter?: TableDecisionQuadrantObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDecisionQuadrantObjsQuery = {
  listDecisionQuadrantObjs?:  {
    __typename: "DecisionQuadrantObjConnection",
    items?:  Array< {
      __typename: "DecisionQuadrantObj",
      id: string,
      decisionId: string,
      title: string,
      description: string,
      variant: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetHorizonDecisionObjQueryVariables = {
  id: string,
};

export type GetHorizonDecisionObjQuery = {
  getHorizonDecisionObj?:  {
    __typename: "HorizonDecisionObj",
    id: string,
    horizonId: string,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type ListHorizonDecisionObjsQueryVariables = {
  filter?: TableHorizonDecisionObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHorizonDecisionObjsQuery = {
  listHorizonDecisionObjs?:  {
    __typename: "HorizonDecisionObjConnection",
    items?:  Array< {
      __typename: "HorizonDecisionObj",
      id: string,
      horizonId: string,
      title: string,
      description: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetHorizonSpaceMemberObjQueryVariables = {
  id: string,
};

export type GetHorizonSpaceMemberObjQuery = {
  getHorizonSpaceMemberObj?:  {
    __typename: "HorizonSpaceMemberObj",
    id: string,
    horizonId: string,
    spaceId: string,
    created: string,
  } | null,
};

export type ListHorizonSpaceMemberObjsQueryVariables = {
  filter?: TableHorizonSpaceMemberObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHorizonSpaceMemberObjsQuery = {
  listHorizonSpaceMemberObjs?:  {
    __typename: "HorizonSpaceMemberObjConnection",
    items?:  Array< {
      __typename: "HorizonSpaceMemberObj",
      id: string,
      horizonId: string,
      spaceId: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetHorizonUserMemberObjQueryVariables = {
  id: string,
};

export type GetHorizonUserMemberObjQuery = {
  getHorizonUserMemberObj?:  {
    __typename: "HorizonUserMemberObj",
    id: string,
    horizonId: string,
    userId: string,
    created: string,
  } | null,
};

export type ListHorizonUserMemberObjsQueryVariables = {
  filter?: TableHorizonUserMemberObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHorizonUserMemberObjsQuery = {
  listHorizonUserMemberObjs?:  {
    __typename: "HorizonUserMemberObjConnection",
    items?:  Array< {
      __typename: "HorizonUserMemberObj",
      id: string,
      horizonId: string,
      userId: string,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetArcSectionObjQueryVariables = {
  id: string,
};

export type GetArcSectionObjQuery = {
  getArcSectionObj?:  {
    __typename: "ArcSectionObj",
    id: string,
    userId: string,
    arcId: string,
    title: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type ListArcSectionObjsQueryVariables = {
  filter?: TableArcSectionObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArcSectionObjsQuery = {
  listArcSectionObjs?:  {
    __typename: "ArcSectionObjConnection",
    items?:  Array< {
      __typename: "ArcSectionObj",
      id: string,
      userId: string,
      arcId: string,
      title: string,
      description: string,
      objective: string,
      idx: number,
      created: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetHorizonArcObjQueryVariables = {
  id: string,
};

export type GetHorizonArcObjQuery = {
  getHorizonArcObj?:  {
    __typename: "HorizonArcObj",
    id: string,
    userId: string,
    horizonId: string,
    title: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type ListHorizonArcObjsQueryVariables = {
  filter?: TableHorizonArcObjFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHorizonArcObjsQuery = {
  listHorizonArcObjs?:  {
    __typename: "HorizonArcObjConnection",
    items?:  Array< {
      __typename: "HorizonArcObj",
      id: string,
      userId: string,
      horizonId: string,
      title: string,
      description: string,
      objective: string,
      idx: number,
      created: string,
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
    userId: string,
    title: string,
    description: string,
    created: string,
    target: string,
    completed: boolean,
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
      userId: string,
      title: string,
      description: string,
      created: string,
      target: string,
      completed: boolean,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateChapterSceneObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
  title?: string | null,
  description?: string | null,
  variant?: string | null,
};

export type OnCreateChapterSceneObjSubscription = {
  onCreateChapterSceneObj?:  {
    __typename: "ChapterSceneObj",
    id: string,
    userId: string,
    chapterId: string,
    summary: string,
    title: string,
    created: string,
    objective: string,
  } | null,
};

export type OnUpdateChapterSceneObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
  title?: string | null,
  description?: string | null,
  variant?: string | null,
};

export type OnUpdateChapterSceneObjSubscription = {
  onUpdateChapterSceneObj?:  {
    __typename: "ChapterSceneObj",
    id: string,
    userId: string,
    chapterId: string,
    summary: string,
    title: string,
    created: string,
    objective: string,
  } | null,
};

export type OnDeleteChapterSceneObjSubscriptionVariables = {
  id?: string | null,
  chapterId?: string | null,
  title?: string | null,
  description?: string | null,
  variant?: string | null,
};

export type OnDeleteChapterSceneObjSubscription = {
  onDeleteChapterSceneObj?:  {
    __typename: "ChapterSceneObj",
    id: string,
    userId: string,
    chapterId: string,
    summary: string,
    title: string,
    created: string,
    objective: string,
  } | null,
};

export type OnCreateConversationMessageObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  conversationId?: string | null,
  created?: string | null,
};

export type OnCreateConversationMessageObjSubscription = {
  onCreateConversationMessageObj?:  {
    __typename: "ConversationMessageObj",
    id: string,
    userId?: string | null,
    agentId?: string | null,
    conversationId: string,
    sceneId: string,
    created: string,
    message: string,
    hasAttachment: boolean,
    variant?: string | null,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type OnUpdateConversationMessageObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  conversationId?: string | null,
  created?: string | null,
};

export type OnUpdateConversationMessageObjSubscription = {
  onUpdateConversationMessageObj?:  {
    __typename: "ConversationMessageObj",
    id: string,
    userId?: string | null,
    agentId?: string | null,
    conversationId: string,
    sceneId: string,
    created: string,
    message: string,
    hasAttachment: boolean,
    variant?: string | null,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type OnDeleteConversationMessageObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  conversationId?: string | null,
  created?: string | null,
};

export type OnDeleteConversationMessageObjSubscription = {
  onDeleteConversationMessageObj?:  {
    __typename: "ConversationMessageObj",
    id: string,
    userId?: string | null,
    agentId?: string | null,
    conversationId: string,
    sceneId: string,
    created: string,
    message: string,
    hasAttachment: boolean,
    variant?: string | null,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type OnCreateSceneIdeaObjSubscriptionVariables = {
  id?: string | null,
  sceneId?: string | null,
  title?: string | null,
  description?: string | null,
  x?: number | null,
};

export type OnCreateSceneIdeaObjSubscription = {
  onCreateSceneIdeaObj?:  {
    __typename: "SceneIdeaObj",
    id: string,
    userId: string,
    sceneId: string,
    idx: number,
    column: string,
    title: string,
    description: string,
    x: number,
    y: number,
    visible: boolean,
    width: number,
    height: number,
    scale: number,
    rotation: number,
    variant: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    created: string,
  } | null,
};

export type OnUpdateSceneIdeaObjSubscriptionVariables = {
  id?: string | null,
  sceneId?: string | null,
  title?: string | null,
  description?: string | null,
  x?: number | null,
};

export type OnUpdateSceneIdeaObjSubscription = {
  onUpdateSceneIdeaObj?:  {
    __typename: "SceneIdeaObj",
    id: string,
    userId: string,
    sceneId: string,
    idx: number,
    column: string,
    title: string,
    description: string,
    x: number,
    y: number,
    visible: boolean,
    width: number,
    height: number,
    scale: number,
    rotation: number,
    variant: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    created: string,
  } | null,
};

export type OnDeleteSceneIdeaObjSubscriptionVariables = {
  id?: string | null,
  sceneId?: string | null,
  title?: string | null,
  description?: string | null,
  x?: number | null,
};

export type OnDeleteSceneIdeaObjSubscription = {
  onDeleteSceneIdeaObj?:  {
    __typename: "SceneIdeaObj",
    id: string,
    userId: string,
    sceneId: string,
    idx: number,
    column: string,
    title: string,
    description: string,
    x: number,
    y: number,
    visible: boolean,
    width: number,
    height: number,
    scale: number,
    rotation: number,
    variant: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    created: string,
  } | null,
};

export type OnCreateCollectionResourceObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  collectionId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateCollectionResourceObjSubscription = {
  onCreateCollectionResourceObj?:  {
    __typename: "CollectionResourceObj",
    id: string,
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    variant: string,
    created: string,
  } | null,
};

export type OnUpdateCollectionResourceObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  collectionId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateCollectionResourceObjSubscription = {
  onUpdateCollectionResourceObj?:  {
    __typename: "CollectionResourceObj",
    id: string,
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    variant: string,
    created: string,
  } | null,
};

export type OnDeleteCollectionResourceObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  collectionId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnDeleteCollectionResourceObjSubscription = {
  onDeleteCollectionResourceObj?:  {
    __typename: "CollectionResourceObj",
    id: string,
    userId: string,
    collectionId: string,
    title: string,
    description: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    variant: string,
    created: string,
  } | null,
};

export type OnCreateUserObjSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  passwordHash?: string | null,
  email?: string | null,
};

export type OnCreateUserObjSubscription = {
  onCreateUserObj?:  {
    __typename: "UserObj",
    id: string,
    displayName: string,
    fname: string,
    lname: string,
    email: string,
    bio: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    visibility: string,
    role: string,
    passwordHash?: string | null,
    customerId?: string | null,
    subscriptionId?: string | null,
    productId?: string | null,
    priceId?: string | null,
    created: string,
    journalId: string,
    clientId?: string | null,
  } | null,
};

export type OnUpdateUserObjSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  passwordHash?: string | null,
  email?: string | null,
};

export type OnUpdateUserObjSubscription = {
  onUpdateUserObj?:  {
    __typename: "UserObj",
    id: string,
    displayName: string,
    fname: string,
    lname: string,
    email: string,
    bio: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    visibility: string,
    role: string,
    passwordHash?: string | null,
    customerId?: string | null,
    subscriptionId?: string | null,
    productId?: string | null,
    priceId?: string | null,
    created: string,
    journalId: string,
    clientId?: string | null,
  } | null,
};

export type OnDeleteUserObjSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  passwordHash?: string | null,
  email?: string | null,
};

export type OnDeleteUserObjSubscription = {
  onDeleteUserObj?:  {
    __typename: "UserObj",
    id: string,
    displayName: string,
    fname: string,
    lname: string,
    email: string,
    bio: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    visibility: string,
    role: string,
    passwordHash?: string | null,
    customerId?: string | null,
    subscriptionId?: string | null,
    productId?: string | null,
    priceId?: string | null,
    created: string,
    journalId: string,
    clientId?: string | null,
  } | null,
};

export type OnCreateSpaceChapterObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  title?: string | null,
  description?: string | null,
  idx?: number | null,
};

export type OnCreateSpaceChapterObjSubscription = {
  onCreateSpaceChapterObj?:  {
    __typename: "SpaceChapterObj",
    id: string,
    spaceId: string,
    title: string,
    userId: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type OnUpdateSpaceChapterObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  title?: string | null,
  description?: string | null,
  idx?: number | null,
};

export type OnUpdateSpaceChapterObjSubscription = {
  onUpdateSpaceChapterObj?:  {
    __typename: "SpaceChapterObj",
    id: string,
    spaceId: string,
    title: string,
    userId: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type OnDeleteSpaceChapterObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  title?: string | null,
  description?: string | null,
  idx?: number | null,
};

export type OnDeleteSpaceChapterObjSubscription = {
  onDeleteSpaceChapterObj?:  {
    __typename: "SpaceChapterObj",
    id: string,
    spaceId: string,
    title: string,
    userId: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type OnCreateSpaceObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  created?: string | null,
  description?: string | null,
};

export type OnCreateSpaceObjSubscription = {
  onCreateSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    userId: string,
    title: string,
    created: string,
    description: string,
    objective: string,
    summary: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    category: string,
    target: string,
    flowId?: string | null,
    starred: boolean,
    visibility: string,
  } | null,
};

export type OnUpdateSpaceObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  created?: string | null,
  description?: string | null,
};

export type OnUpdateSpaceObjSubscription = {
  onUpdateSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    userId: string,
    title: string,
    created: string,
    description: string,
    objective: string,
    summary: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    category: string,
    target: string,
    flowId?: string | null,
    starred: boolean,
    visibility: string,
  } | null,
};

export type OnDeleteSpaceObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  created?: string | null,
  description?: string | null,
};

export type OnDeleteSpaceObjSubscription = {
  onDeleteSpaceObj?:  {
    __typename: "SpaceObj",
    id: string,
    userId: string,
    title: string,
    created: string,
    description: string,
    objective: string,
    summary: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    category: string,
    target: string,
    flowId?: string | null,
    starred: boolean,
    visibility: string,
  } | null,
};

export type OnCreateSpaceMemberObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  userId?: string | null,
};

export type OnCreateSpaceMemberObjSubscription = {
  onCreateSpaceMemberObj?:  {
    __typename: "SpaceMemberObj",
    id: string,
    spaceId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnUpdateSpaceMemberObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  userId?: string | null,
};

export type OnUpdateSpaceMemberObjSubscription = {
  onUpdateSpaceMemberObj?:  {
    __typename: "SpaceMemberObj",
    id: string,
    spaceId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnDeleteSpaceMemberObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  userId?: string | null,
};

export type OnDeleteSpaceMemberObjSubscription = {
  onDeleteSpaceMemberObj?:  {
    __typename: "SpaceMemberObj",
    id: string,
    spaceId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnCreateUserReservationObjSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  email?: string | null,
  role?: string | null,
};

export type OnCreateUserReservationObjSubscription = {
  onCreateUserReservationObj?:  {
    __typename: "UserReservationObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
    role: string,
    created: string,
  } | null,
};

export type OnUpdateUserReservationObjSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  email?: string | null,
  role?: string | null,
};

export type OnUpdateUserReservationObjSubscription = {
  onUpdateUserReservationObj?:  {
    __typename: "UserReservationObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
    role: string,
    created: string,
  } | null,
};

export type OnDeleteUserReservationObjSubscriptionVariables = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  email?: string | null,
  role?: string | null,
};

export type OnDeleteUserReservationObjSubscription = {
  onDeleteUserReservationObj?:  {
    __typename: "UserReservationObj",
    id: string,
    fname: string,
    lname: string,
    email: string,
    role: string,
    created: string,
  } | null,
};

export type OnCreateAgentObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  role?: string | null,
  created?: string | null,
  bio?: string | null,
};

export type OnCreateAgentObjSubscription = {
  onCreateAgentObj?:  {
    __typename: "AgentObj",
    id: string,
    name: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    role: string,
    bio: string,
    created: string,
  } | null,
};

export type OnUpdateAgentObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  role?: string | null,
  created?: string | null,
  bio?: string | null,
};

export type OnUpdateAgentObjSubscription = {
  onUpdateAgentObj?:  {
    __typename: "AgentObj",
    id: string,
    name: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    role: string,
    bio: string,
    created: string,
  } | null,
};

export type OnDeleteAgentObjSubscriptionVariables = {
  id?: string | null,
  name?: string | null,
  role?: string | null,
  created?: string | null,
  bio?: string | null,
};

export type OnDeleteAgentObjSubscription = {
  onDeleteAgentObj?:  {
    __typename: "AgentObj",
    id: string,
    name: string,
    dp:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    role: string,
    bio: string,
    created: string,
  } | null,
};

export type OnCreateChapterSessionObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  title?: string | null,
};

export type OnCreateChapterSessionObjSubscription = {
  onCreateChapterSessionObj?:  {
    __typename: "ChapterSessionObj",
    id: string,
    spaceId: string,
    userId: string,
    chapterId: string,
    duration: number,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type OnUpdateChapterSessionObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  title?: string | null,
};

export type OnUpdateChapterSessionObjSubscription = {
  onUpdateChapterSessionObj?:  {
    __typename: "ChapterSessionObj",
    id: string,
    spaceId: string,
    userId: string,
    chapterId: string,
    duration: number,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type OnDeleteChapterSessionObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  title?: string | null,
};

export type OnDeleteChapterSessionObjSubscription = {
  onDeleteChapterSessionObj?:  {
    __typename: "ChapterSessionObj",
    id: string,
    spaceId: string,
    userId: string,
    chapterId: string,
    duration: number,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type OnCreateChapterSessionUpdateObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  sessionId?: string | null,
  added?: boolean | null,
};

export type OnCreateChapterSessionUpdateObjSubscription = {
  onCreateChapterSessionUpdateObj?:  {
    __typename: "ChapterSessionUpdateObj",
    id: string,
    userId: string,
    spaceId: string,
    chapterId: string,
    sessionId?: string | null,
    added: boolean,
    title: string,
    description: string,
    created: string,
    variant: string,
    conversationId?: string | null,
    sceneId?: string | null,
    ideaId?: string | null,
    postId?: string | null,
    logId?: string | null,
    commentId?: string | null,
    attachmentId?: string | null,
    memberId?: string | null,
  } | null,
};

export type OnUpdateChapterSessionUpdateObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  sessionId?: string | null,
  added?: boolean | null,
};

export type OnUpdateChapterSessionUpdateObjSubscription = {
  onUpdateChapterSessionUpdateObj?:  {
    __typename: "ChapterSessionUpdateObj",
    id: string,
    userId: string,
    spaceId: string,
    chapterId: string,
    sessionId?: string | null,
    added: boolean,
    title: string,
    description: string,
    created: string,
    variant: string,
    conversationId?: string | null,
    sceneId?: string | null,
    ideaId?: string | null,
    postId?: string | null,
    logId?: string | null,
    commentId?: string | null,
    attachmentId?: string | null,
    memberId?: string | null,
  } | null,
};

export type OnDeleteChapterSessionUpdateObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  sessionId?: string | null,
  added?: boolean | null,
};

export type OnDeleteChapterSessionUpdateObjSubscription = {
  onDeleteChapterSessionUpdateObj?:  {
    __typename: "ChapterSessionUpdateObj",
    id: string,
    userId: string,
    spaceId: string,
    chapterId: string,
    sessionId?: string | null,
    added: boolean,
    title: string,
    description: string,
    created: string,
    variant: string,
    conversationId?: string | null,
    sceneId?: string | null,
    ideaId?: string | null,
    postId?: string | null,
    logId?: string | null,
    commentId?: string | null,
    attachmentId?: string | null,
    memberId?: string | null,
  } | null,
};

export type OnCreateChapterSessionUpdateMemberObjSubscriptionVariables = {
  id?: string | null,
  updateId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnCreateChapterSessionUpdateMemberObjSubscription = {
  onCreateChapterSessionUpdateMemberObj?:  {
    __typename: "ChapterSessionUpdateMemberObj",
    id: string,
    updateId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnUpdateChapterSessionUpdateMemberObjSubscriptionVariables = {
  id?: string | null,
  updateId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnUpdateChapterSessionUpdateMemberObjSubscription = {
  onUpdateChapterSessionUpdateMemberObj?:  {
    __typename: "ChapterSessionUpdateMemberObj",
    id: string,
    updateId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnDeleteChapterSessionUpdateMemberObjSubscriptionVariables = {
  id?: string | null,
  updateId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnDeleteChapterSessionUpdateMemberObjSubscription = {
  onDeleteChapterSessionUpdateMemberObj?:  {
    __typename: "ChapterSessionUpdateMemberObj",
    id: string,
    updateId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnCreateUserBackerObjSubscriptionVariables = {
  id?: string | null,
  backedId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnCreateUserBackerObjSubscription = {
  onCreateUserBackerObj?:  {
    __typename: "UserBackerObj",
    id: string,
    backedId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnUpdateUserBackerObjSubscriptionVariables = {
  id?: string | null,
  backedId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnUpdateUserBackerObjSubscription = {
  onUpdateUserBackerObj?:  {
    __typename: "UserBackerObj",
    id: string,
    backedId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnDeleteUserBackerObjSubscriptionVariables = {
  id?: string | null,
  backedId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnDeleteUserBackerObjSubscription = {
  onDeleteUserBackerObj?:  {
    __typename: "UserBackerObj",
    id: string,
    backedId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnCreateUserConnectionObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  connectedId?: string | null,
  created?: string | null,
};

export type OnCreateUserConnectionObjSubscription = {
  onCreateUserConnectionObj?:  {
    __typename: "UserConnectionObj",
    id: string,
    sourceId: string,
    destinationId: string,
    created: string,
  } | null,
};

export type OnUpdateUserConnectionObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  connectedId?: string | null,
  created?: string | null,
};

export type OnUpdateUserConnectionObjSubscription = {
  onUpdateUserConnectionObj?:  {
    __typename: "UserConnectionObj",
    id: string,
    sourceId: string,
    destinationId: string,
    created: string,
  } | null,
};

export type OnDeleteUserConnectionObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  connectedId?: string | null,
  created?: string | null,
};

export type OnDeleteUserConnectionObjSubscription = {
  onDeleteUserConnectionObj?:  {
    __typename: "UserConnectionObj",
    id: string,
    sourceId: string,
    destinationId: string,
    created: string,
  } | null,
};

export type OnCreateChapterSessionContributorObjSubscriptionVariables = {
  id?: string | null,
  sessionId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnCreateChapterSessionContributorObjSubscription = {
  onCreateChapterSessionContributorObj?:  {
    __typename: "ChapterSessionContributorObj",
    id: string,
    sessionId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnUpdateChapterSessionContributorObjSubscriptionVariables = {
  id?: string | null,
  sessionId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnUpdateChapterSessionContributorObjSubscription = {
  onUpdateChapterSessionContributorObj?:  {
    __typename: "ChapterSessionContributorObj",
    id: string,
    sessionId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnDeleteChapterSessionContributorObjSubscriptionVariables = {
  id?: string | null,
  sessionId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnDeleteChapterSessionContributorObjSubscription = {
  onDeleteChapterSessionContributorObj?:  {
    __typename: "ChapterSessionContributorObj",
    id: string,
    sessionId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnCreateSceneMemberObjSubscriptionVariables = {
  id?: string | null,
  sceneId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnCreateSceneMemberObjSubscription = {
  onCreateSceneMemberObj?:  {
    __typename: "SceneMemberObj",
    id: string,
    sceneId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnUpdateSceneMemberObjSubscriptionVariables = {
  id?: string | null,
  sceneId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnUpdateSceneMemberObjSubscription = {
  onUpdateSceneMemberObj?:  {
    __typename: "SceneMemberObj",
    id: string,
    sceneId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnDeleteSceneMemberObjSubscriptionVariables = {
  id?: string | null,
  sceneId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnDeleteSceneMemberObjSubscription = {
  onDeleteSceneMemberObj?:  {
    __typename: "SceneMemberObj",
    id: string,
    sceneId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnCreateSpaceIdeaRelationshipObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  spaceId?: string | null,
  fromChapterId?: string | null,
  fromSceneId?: string | null,
};

export type OnCreateSpaceIdeaRelationshipObjSubscription = {
  onCreateSpaceIdeaRelationshipObj?:  {
    __typename: "SpaceIdeaRelationshipObj",
    id: string,
    fromUserId: string,
    spaceId: string,
    fromChapterId: string,
    fromSceneId: string,
    fromIdeaId: string,
    toUserId: string,
    toChapterId: string,
    toSceneId: string,
    toIdeaId: string,
    weight: number,
    created: string,
  } | null,
};

export type OnUpdateSpaceIdeaRelationshipObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  spaceId?: string | null,
  fromChapterId?: string | null,
  fromSceneId?: string | null,
};

export type OnUpdateSpaceIdeaRelationshipObjSubscription = {
  onUpdateSpaceIdeaRelationshipObj?:  {
    __typename: "SpaceIdeaRelationshipObj",
    id: string,
    fromUserId: string,
    spaceId: string,
    fromChapterId: string,
    fromSceneId: string,
    fromIdeaId: string,
    toUserId: string,
    toChapterId: string,
    toSceneId: string,
    toIdeaId: string,
    weight: number,
    created: string,
  } | null,
};

export type OnDeleteSpaceIdeaRelationshipObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  spaceId?: string | null,
  fromChapterId?: string | null,
  fromSceneId?: string | null,
};

export type OnDeleteSpaceIdeaRelationshipObjSubscription = {
  onDeleteSpaceIdeaRelationshipObj?:  {
    __typename: "SpaceIdeaRelationshipObj",
    id: string,
    fromUserId: string,
    spaceId: string,
    fromChapterId: string,
    fromSceneId: string,
    fromIdeaId: string,
    toUserId: string,
    toChapterId: string,
    toSceneId: string,
    toIdeaId: string,
    weight: number,
    created: string,
  } | null,
};

export type OnCreateCommentKarmaObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  commentId?: string | null,
  created?: string | null,
  neutrality?: boolean | null,
};

export type OnCreateCommentKarmaObjSubscription = {
  onCreateCommentKarmaObj?:  {
    __typename: "CommentKarmaObj",
    id: string,
    userId?: string | null,
    commentId: string,
    created: string,
    neutrality: boolean,
  } | null,
};

export type OnUpdateCommentKarmaObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  commentId?: string | null,
  created?: string | null,
  neutrality?: boolean | null,
};

export type OnUpdateCommentKarmaObjSubscription = {
  onUpdateCommentKarmaObj?:  {
    __typename: "CommentKarmaObj",
    id: string,
    userId?: string | null,
    commentId: string,
    created: string,
    neutrality: boolean,
  } | null,
};

export type OnDeleteCommentKarmaObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  commentId?: string | null,
  created?: string | null,
  neutrality?: boolean | null,
};

export type OnDeleteCommentKarmaObjSubscription = {
  onDeleteCommentKarmaObj?:  {
    __typename: "CommentKarmaObj",
    id: string,
    userId?: string | null,
    commentId: string,
    created: string,
    neutrality: boolean,
  } | null,
};

export type OnCreateSpaceChapterMemberObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnCreateSpaceChapterMemberObjSubscription = {
  onCreateSpaceChapterMemberObj?:  {
    __typename: "SpaceChapterMemberObj",
    id: string,
    spaceId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnUpdateSpaceChapterMemberObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnUpdateSpaceChapterMemberObjSubscription = {
  onUpdateSpaceChapterMemberObj?:  {
    __typename: "SpaceChapterMemberObj",
    id: string,
    spaceId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnDeleteSpaceChapterMemberObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnDeleteSpaceChapterMemberObjSubscription = {
  onDeleteSpaceChapterMemberObj?:  {
    __typename: "SpaceChapterMemberObj",
    id: string,
    spaceId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnCreateGalleryObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type OnCreateGalleryObjSubscription = {
  onCreateGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    created: string,
  } | null,
};

export type OnUpdateGalleryObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type OnUpdateGalleryObjSubscription = {
  onUpdateGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    created: string,
  } | null,
};

export type OnDeleteGalleryObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type OnDeleteGalleryObjSubscription = {
  onDeleteGalleryObj?:  {
    __typename: "GalleryObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    created: string,
  } | null,
};

export type OnCreateGalleryCollectionObjSubscriptionVariables = {
  id?: string | null,
  galleryId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type OnCreateGalleryCollectionObjSubscription = {
  onCreateGalleryCollectionObj?:  {
    __typename: "GalleryCollectionObj",
    id: string,
    galleryId: string,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type OnUpdateGalleryCollectionObjSubscriptionVariables = {
  id?: string | null,
  galleryId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type OnUpdateGalleryCollectionObjSubscription = {
  onUpdateGalleryCollectionObj?:  {
    __typename: "GalleryCollectionObj",
    id: string,
    galleryId: string,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type OnDeleteGalleryCollectionObjSubscriptionVariables = {
  id?: string | null,
  galleryId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type OnDeleteGalleryCollectionObjSubscription = {
  onDeleteGalleryCollectionObj?:  {
    __typename: "GalleryCollectionObj",
    id: string,
    galleryId: string,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type OnCreateGalleryMemberObjSubscriptionVariables = {
  id?: string | null,
  galleryId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnCreateGalleryMemberObjSubscription = {
  onCreateGalleryMemberObj?:  {
    __typename: "GalleryMemberObj",
    id: string,
    galleryId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnUpdateGalleryMemberObjSubscriptionVariables = {
  id?: string | null,
  galleryId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnUpdateGalleryMemberObjSubscription = {
  onUpdateGalleryMemberObj?:  {
    __typename: "GalleryMemberObj",
    id: string,
    galleryId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnDeleteGalleryMemberObjSubscriptionVariables = {
  id?: string | null,
  galleryId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnDeleteGalleryMemberObjSubscription = {
  onDeleteGalleryMemberObj?:  {
    __typename: "GalleryMemberObj",
    id: string,
    galleryId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnCreateUserActivityObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  spaceId?: string | null,
  horizonId?: string | null,
};

export type OnCreateUserActivityObjSubscription = {
  onCreateUserActivityObj?:  {
    __typename: "UserActivityObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    spaceId?: string | null,
    horizonId?: string | null,
    acitivtyId?: string | null,
    added: boolean,
    title: string,
    description: string,
    created: string,
    variant: string,
    conversationId?: string | null,
    sceneId?: string | null,
    ideaId?: string | null,
    postId?: string | null,
    taskId?: string | null,
    commentId?: string | null,
    attachmentId?: string | null,
    contributorId?: string | null,
  } | null,
};

export type OnUpdateUserActivityObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  spaceId?: string | null,
  horizonId?: string | null,
};

export type OnUpdateUserActivityObjSubscription = {
  onUpdateUserActivityObj?:  {
    __typename: "UserActivityObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    spaceId?: string | null,
    horizonId?: string | null,
    acitivtyId?: string | null,
    added: boolean,
    title: string,
    description: string,
    created: string,
    variant: string,
    conversationId?: string | null,
    sceneId?: string | null,
    ideaId?: string | null,
    postId?: string | null,
    taskId?: string | null,
    commentId?: string | null,
    attachmentId?: string | null,
    contributorId?: string | null,
  } | null,
};

export type OnDeleteUserActivityObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  spaceId?: string | null,
  horizonId?: string | null,
};

export type OnDeleteUserActivityObjSubscription = {
  onDeleteUserActivityObj?:  {
    __typename: "UserActivityObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    spaceId?: string | null,
    horizonId?: string | null,
    acitivtyId?: string | null,
    added: boolean,
    title: string,
    description: string,
    created: string,
    variant: string,
    conversationId?: string | null,
    sceneId?: string | null,
    ideaId?: string | null,
    postId?: string | null,
    taskId?: string | null,
    commentId?: string | null,
    attachmentId?: string | null,
    contributorId?: string | null,
  } | null,
};

export type OnCreatePostAttachmentObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  postId?: string | null,
  created?: string | null,
  variant?: string | null,
};

export type OnCreatePostAttachmentObjSubscription = {
  onCreatePostAttachmentObj?:  {
    __typename: "PostAttachmentObj",
    id: string,
    userId?: string | null,
    postId: string,
    ideaId?: string | null,
    created: string,
    variant: string,
    title: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostAttachmentObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  postId?: string | null,
  created?: string | null,
  variant?: string | null,
};

export type OnUpdatePostAttachmentObjSubscription = {
  onUpdatePostAttachmentObj?:  {
    __typename: "PostAttachmentObj",
    id: string,
    userId?: string | null,
    postId: string,
    ideaId?: string | null,
    created: string,
    variant: string,
    title: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type OnDeletePostAttachmentObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  postId?: string | null,
  created?: string | null,
  variant?: string | null,
};

export type OnDeletePostAttachmentObjSubscription = {
  onDeletePostAttachmentObj?:  {
    __typename: "PostAttachmentObj",
    id: string,
    userId?: string | null,
    postId: string,
    ideaId?: string | null,
    created: string,
    variant: string,
    title: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type OnCreatePostCommentObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  postId?: string | null,
  created?: string | null,
  message?: string | null,
};

export type OnCreatePostCommentObjSubscription = {
  onCreatePostCommentObj?:  {
    __typename: "PostCommentObj",
    id: string,
    userId?: string | null,
    postId: string,
    created: string,
    message: string,
  } | null,
};

export type OnUpdatePostCommentObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  postId?: string | null,
  created?: string | null,
  message?: string | null,
};

export type OnUpdatePostCommentObjSubscription = {
  onUpdatePostCommentObj?:  {
    __typename: "PostCommentObj",
    id: string,
    userId?: string | null,
    postId: string,
    created: string,
    message: string,
  } | null,
};

export type OnDeletePostCommentObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  postId?: string | null,
  created?: string | null,
  message?: string | null,
};

export type OnDeletePostCommentObjSubscription = {
  onDeletePostCommentObj?:  {
    __typename: "PostCommentObj",
    id: string,
    userId?: string | null,
    postId: string,
    created: string,
    message: string,
  } | null,
};

export type OnCreatePostKarmaObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  postId?: string | null,
  created?: string | null,
  neutrality?: boolean | null,
};

export type OnCreatePostKarmaObjSubscription = {
  onCreatePostKarmaObj?:  {
    __typename: "PostKarmaObj",
    id: string,
    userId?: string | null,
    postId: string,
    created: string,
    neutrality: boolean,
  } | null,
};

export type OnUpdatePostKarmaObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  postId?: string | null,
  created?: string | null,
  neutrality?: boolean | null,
};

export type OnUpdatePostKarmaObjSubscription = {
  onUpdatePostKarmaObj?:  {
    __typename: "PostKarmaObj",
    id: string,
    userId?: string | null,
    postId: string,
    created: string,
    neutrality: boolean,
  } | null,
};

export type OnDeletePostKarmaObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  postId?: string | null,
  created?: string | null,
  neutrality?: boolean | null,
};

export type OnDeletePostKarmaObjSubscription = {
  onDeletePostKarmaObj?:  {
    __typename: "PostKarmaObj",
    id: string,
    userId?: string | null,
    postId: string,
    created: string,
    neutrality: boolean,
  } | null,
};

export type OnCreatePostMemberObjSubscriptionVariables = {
  id?: string | null,
  postId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnCreatePostMemberObjSubscription = {
  onCreatePostMemberObj?:  {
    __typename: "PostMemberObj",
    id: string,
    postId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnUpdatePostMemberObjSubscriptionVariables = {
  id?: string | null,
  postId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnUpdatePostMemberObjSubscription = {
  onUpdatePostMemberObj?:  {
    __typename: "PostMemberObj",
    id: string,
    postId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnDeletePostMemberObjSubscriptionVariables = {
  id?: string | null,
  postId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnDeletePostMemberObjSubscription = {
  onDeletePostMemberObj?:  {
    __typename: "PostMemberObj",
    id: string,
    postId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnCreateUserPostObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateUserPostObjSubscription = {
  onCreateUserPostObj?:  {
    __typename: "UserPostObj",
    id: string,
    userId: string,
    chapterId: string,
    spaceId: string,
    title: string,
    description: string,
    created: string,
    postStatus: string,
    summary: string,
  } | null,
};

export type OnUpdateUserPostObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateUserPostObjSubscription = {
  onUpdateUserPostObj?:  {
    __typename: "UserPostObj",
    id: string,
    userId: string,
    chapterId: string,
    spaceId: string,
    title: string,
    description: string,
    created: string,
    postStatus: string,
    summary: string,
  } | null,
};

export type OnDeleteUserPostObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnDeleteUserPostObjSubscription = {
  onDeleteUserPostObj?:  {
    __typename: "UserPostObj",
    id: string,
    userId: string,
    chapterId: string,
    spaceId: string,
    title: string,
    description: string,
    created: string,
    postStatus: string,
    summary: string,
  } | null,
};

export type OnCreateIdeaRelationshipObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  horizonId?: string | null,
  fromUserId?: string | null,
  fromChapterId?: string | null,
};

export type OnCreateIdeaRelationshipObjSubscription = {
  onCreateIdeaRelationshipObj?:  {
    __typename: "IdeaRelationshipObj",
    id: string,
    spaceId?: string | null,
    horizonId?: string | null,
    fromUserId?: string | null,
    fromChapterId?: string | null,
    fromSceneId?: string | null,
    fromIdeaId?: string | null,
    toUserId?: string | null,
    toChapterId?: string | null,
    toSceneId?: string | null,
    toIdeaId?: string | null,
    weight: number,
    created: string,
  } | null,
};

export type OnUpdateIdeaRelationshipObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  horizonId?: string | null,
  fromUserId?: string | null,
  fromChapterId?: string | null,
};

export type OnUpdateIdeaRelationshipObjSubscription = {
  onUpdateIdeaRelationshipObj?:  {
    __typename: "IdeaRelationshipObj",
    id: string,
    spaceId?: string | null,
    horizonId?: string | null,
    fromUserId?: string | null,
    fromChapterId?: string | null,
    fromSceneId?: string | null,
    fromIdeaId?: string | null,
    toUserId?: string | null,
    toChapterId?: string | null,
    toSceneId?: string | null,
    toIdeaId?: string | null,
    weight: number,
    created: string,
  } | null,
};

export type OnDeleteIdeaRelationshipObjSubscriptionVariables = {
  id?: string | null,
  spaceId?: string | null,
  horizonId?: string | null,
  fromUserId?: string | null,
  fromChapterId?: string | null,
};

export type OnDeleteIdeaRelationshipObjSubscription = {
  onDeleteIdeaRelationshipObj?:  {
    __typename: "IdeaRelationshipObj",
    id: string,
    spaceId?: string | null,
    horizonId?: string | null,
    fromUserId?: string | null,
    fromChapterId?: string | null,
    fromSceneId?: string | null,
    fromIdeaId?: string | null,
    toUserId?: string | null,
    toChapterId?: string | null,
    toSceneId?: string | null,
    toIdeaId?: string | null,
    weight: number,
    created: string,
  } | null,
};

export type OnCreateIdeaObjSubscriptionVariables = {
  id?: string | null,
  idx?: number | null,
  userId?: string | null,
  sceneId?: string | null,
  title?: string | null,
};

export type OnCreateIdeaObjSubscription = {
  onCreateIdeaObj?:  {
    __typename: "IdeaObj",
    id: string,
    idx: number,
    userId: string,
    sceneId?: string | null,
    pageId?: string | null,
    title: string,
    description: string,
    column: string,
    visible: boolean,
    x: number,
    y: number,
    width: number,
    height: number,
    scale: number,
    rotation: number,
    variant: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    created: string,
  } | null,
};

export type OnUpdateIdeaObjSubscriptionVariables = {
  id?: string | null,
  idx?: number | null,
  userId?: string | null,
  sceneId?: string | null,
  title?: string | null,
};

export type OnUpdateIdeaObjSubscription = {
  onUpdateIdeaObj?:  {
    __typename: "IdeaObj",
    id: string,
    idx: number,
    userId: string,
    sceneId?: string | null,
    pageId?: string | null,
    title: string,
    description: string,
    column: string,
    visible: boolean,
    x: number,
    y: number,
    width: number,
    height: number,
    scale: number,
    rotation: number,
    variant: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    created: string,
  } | null,
};

export type OnDeleteIdeaObjSubscriptionVariables = {
  id?: string | null,
  idx?: number | null,
  userId?: string | null,
  sceneId?: string | null,
  title?: string | null,
};

export type OnDeleteIdeaObjSubscription = {
  onDeleteIdeaObj?:  {
    __typename: "IdeaObj",
    id: string,
    idx: number,
    userId: string,
    sceneId?: string | null,
    pageId?: string | null,
    title: string,
    description: string,
    column: string,
    visible: boolean,
    x: number,
    y: number,
    width: number,
    height: number,
    scale: number,
    rotation: number,
    variant: string,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
    created: string,
  } | null,
};

export type OnCreateIdeaSceneObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  arcId?: string | null,
  title?: string | null,
};

export type OnCreateIdeaSceneObjSubscription = {
  onCreateIdeaSceneObj?:  {
    __typename: "IdeaSceneObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    arcId?: string | null,
    title: string,
    summary: string,
    objective: string,
    created: string,
  } | null,
};

export type OnUpdateIdeaSceneObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  arcId?: string | null,
  title?: string | null,
};

export type OnUpdateIdeaSceneObjSubscription = {
  onUpdateIdeaSceneObj?:  {
    __typename: "IdeaSceneObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    arcId?: string | null,
    title: string,
    summary: string,
    objective: string,
    created: string,
  } | null,
};

export type OnDeleteIdeaSceneObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  arcId?: string | null,
  title?: string | null,
};

export type OnDeleteIdeaSceneObjSubscription = {
  onDeleteIdeaSceneObj?:  {
    __typename: "IdeaSceneObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    arcId?: string | null,
    title: string,
    summary: string,
    objective: string,
    created: string,
  } | null,
};

export type OnCreateTaskMemberObjSubscriptionVariables = {
  id?: string | null,
  taskId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnCreateTaskMemberObjSubscription = {
  onCreateTaskMemberObj?:  {
    __typename: "TaskMemberObj",
    id: string,
    taskId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnUpdateTaskMemberObjSubscriptionVariables = {
  id?: string | null,
  taskId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnUpdateTaskMemberObjSubscription = {
  onUpdateTaskMemberObj?:  {
    __typename: "TaskMemberObj",
    id: string,
    taskId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnDeleteTaskMemberObjSubscriptionVariables = {
  id?: string | null,
  taskId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnDeleteTaskMemberObjSubscription = {
  onDeleteTaskMemberObj?:  {
    __typename: "TaskMemberObj",
    id: string,
    taskId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnCreateTaskObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateTaskObjSubscription = {
  onCreateTaskObj?:  {
    __typename: "TaskObj",
    id: string,
    userId: string,
    chapterId: string,
    spaceId: string,
    title: string,
    description: string,
    taskStatus: string,
    created: string,
  } | null,
};

export type OnUpdateTaskObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateTaskObjSubscription = {
  onUpdateTaskObj?:  {
    __typename: "TaskObj",
    id: string,
    userId: string,
    chapterId: string,
    spaceId: string,
    title: string,
    description: string,
    taskStatus: string,
    created: string,
  } | null,
};

export type OnDeleteTaskObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnDeleteTaskObjSubscription = {
  onDeleteTaskObj?:  {
    __typename: "TaskObj",
    id: string,
    userId: string,
    chapterId: string,
    spaceId: string,
    title: string,
    description: string,
    taskStatus: string,
    created: string,
  } | null,
};

export type OnCreateConversationObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  decisionId?: string | null,
  toUserId?: string | null,
};

export type OnCreateConversationObjSubscription = {
  onCreateConversationObj?:  {
    __typename: "ConversationObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    decisionId?: string | null,
    toUserId?: string | null,
    toAgentId?: string | null,
    summary: string,
    title: string,
    created: string,
  } | null,
};

export type OnUpdateConversationObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  decisionId?: string | null,
  toUserId?: string | null,
};

export type OnUpdateConversationObjSubscription = {
  onUpdateConversationObj?:  {
    __typename: "ConversationObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    decisionId?: string | null,
    toUserId?: string | null,
    toAgentId?: string | null,
    summary: string,
    title: string,
    created: string,
  } | null,
};

export type OnDeleteConversationObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  chapterId?: string | null,
  decisionId?: string | null,
  toUserId?: string | null,
};

export type OnDeleteConversationObjSubscription = {
  onDeleteConversationObj?:  {
    __typename: "ConversationObj",
    id: string,
    userId: string,
    chapterId?: string | null,
    decisionId?: string | null,
    toUserId?: string | null,
    toAgentId?: string | null,
    summary: string,
    title: string,
    created: string,
  } | null,
};

export type OnCreateHorizonObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  created?: string | null,
  description?: string | null,
};

export type OnCreateHorizonObjSubscription = {
  onCreateHorizonObj?:  {
    __typename: "HorizonObj",
    id: string,
    userId: string,
    title: string,
    created: string,
    description: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    category: string,
  } | null,
};

export type OnUpdateHorizonObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  created?: string | null,
  description?: string | null,
};

export type OnUpdateHorizonObjSubscription = {
  onUpdateHorizonObj?:  {
    __typename: "HorizonObj",
    id: string,
    userId: string,
    title: string,
    created: string,
    description: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    category: string,
  } | null,
};

export type OnDeleteHorizonObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  created?: string | null,
  description?: string | null,
};

export type OnDeleteHorizonObjSubscription = {
  onDeleteHorizonObj?:  {
    __typename: "HorizonObj",
    id: string,
    userId: string,
    title: string,
    created: string,
    description: string,
    thumbnail:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    },
    category: string,
  } | null,
};

export type OnCreateQuadrantMemberObjSubscriptionVariables = {
  id?: string | null,
  quadrantId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnCreateQuadrantMemberObjSubscription = {
  onCreateQuadrantMemberObj?:  {
    __typename: "QuadrantMemberObj",
    id: string,
    quadrantId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnUpdateQuadrantMemberObjSubscriptionVariables = {
  id?: string | null,
  quadrantId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnUpdateQuadrantMemberObjSubscription = {
  onUpdateQuadrantMemberObj?:  {
    __typename: "QuadrantMemberObj",
    id: string,
    quadrantId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnDeleteQuadrantMemberObjSubscriptionVariables = {
  id?: string | null,
  quadrantId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnDeleteQuadrantMemberObjSubscription = {
  onDeleteQuadrantMemberObj?:  {
    __typename: "QuadrantMemberObj",
    id: string,
    quadrantId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnCreateDecisionQuadrantObjSubscriptionVariables = {
  id?: string | null,
  decisionId?: string | null,
  title?: string | null,
  description?: string | null,
  variant?: string | null,
};

export type OnCreateDecisionQuadrantObjSubscription = {
  onCreateDecisionQuadrantObj?:  {
    __typename: "DecisionQuadrantObj",
    id: string,
    decisionId: string,
    title: string,
    description: string,
    variant: string,
    created: string,
  } | null,
};

export type OnUpdateDecisionQuadrantObjSubscriptionVariables = {
  id?: string | null,
  decisionId?: string | null,
  title?: string | null,
  description?: string | null,
  variant?: string | null,
};

export type OnUpdateDecisionQuadrantObjSubscription = {
  onUpdateDecisionQuadrantObj?:  {
    __typename: "DecisionQuadrantObj",
    id: string,
    decisionId: string,
    title: string,
    description: string,
    variant: string,
    created: string,
  } | null,
};

export type OnDeleteDecisionQuadrantObjSubscriptionVariables = {
  id?: string | null,
  decisionId?: string | null,
  title?: string | null,
  description?: string | null,
  variant?: string | null,
};

export type OnDeleteDecisionQuadrantObjSubscription = {
  onDeleteDecisionQuadrantObj?:  {
    __typename: "DecisionQuadrantObj",
    id: string,
    decisionId: string,
    title: string,
    description: string,
    variant: string,
    created: string,
  } | null,
};

export type OnCreateHorizonDecisionObjSubscriptionVariables = {
  id?: string | null,
  horizonId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type OnCreateHorizonDecisionObjSubscription = {
  onCreateHorizonDecisionObj?:  {
    __typename: "HorizonDecisionObj",
    id: string,
    horizonId: string,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type OnUpdateHorizonDecisionObjSubscriptionVariables = {
  id?: string | null,
  horizonId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type OnUpdateHorizonDecisionObjSubscription = {
  onUpdateHorizonDecisionObj?:  {
    __typename: "HorizonDecisionObj",
    id: string,
    horizonId: string,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type OnDeleteHorizonDecisionObjSubscriptionVariables = {
  id?: string | null,
  horizonId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type OnDeleteHorizonDecisionObjSubscription = {
  onDeleteHorizonDecisionObj?:  {
    __typename: "HorizonDecisionObj",
    id: string,
    horizonId: string,
    title: string,
    description: string,
    created: string,
  } | null,
};

export type OnCreateHorizonSpaceMemberObjSubscriptionVariables = {
  id?: string | null,
  horizonId?: string | null,
  spaceId?: string | null,
  created?: string | null,
};

export type OnCreateHorizonSpaceMemberObjSubscription = {
  onCreateHorizonSpaceMemberObj?:  {
    __typename: "HorizonSpaceMemberObj",
    id: string,
    horizonId: string,
    spaceId: string,
    created: string,
  } | null,
};

export type OnUpdateHorizonSpaceMemberObjSubscriptionVariables = {
  id?: string | null,
  horizonId?: string | null,
  spaceId?: string | null,
  created?: string | null,
};

export type OnUpdateHorizonSpaceMemberObjSubscription = {
  onUpdateHorizonSpaceMemberObj?:  {
    __typename: "HorizonSpaceMemberObj",
    id: string,
    horizonId: string,
    spaceId: string,
    created: string,
  } | null,
};

export type OnDeleteHorizonSpaceMemberObjSubscriptionVariables = {
  id?: string | null,
  horizonId?: string | null,
  spaceId?: string | null,
  created?: string | null,
};

export type OnDeleteHorizonSpaceMemberObjSubscription = {
  onDeleteHorizonSpaceMemberObj?:  {
    __typename: "HorizonSpaceMemberObj",
    id: string,
    horizonId: string,
    spaceId: string,
    created: string,
  } | null,
};

export type OnCreateHorizonUserMemberObjSubscriptionVariables = {
  id?: string | null,
  horizonId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnCreateHorizonUserMemberObjSubscription = {
  onCreateHorizonUserMemberObj?:  {
    __typename: "HorizonUserMemberObj",
    id: string,
    horizonId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnUpdateHorizonUserMemberObjSubscriptionVariables = {
  id?: string | null,
  horizonId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnUpdateHorizonUserMemberObjSubscription = {
  onUpdateHorizonUserMemberObj?:  {
    __typename: "HorizonUserMemberObj",
    id: string,
    horizonId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnDeleteHorizonUserMemberObjSubscriptionVariables = {
  id?: string | null,
  horizonId?: string | null,
  userId?: string | null,
  created?: string | null,
};

export type OnDeleteHorizonUserMemberObjSubscription = {
  onDeleteHorizonUserMemberObj?:  {
    __typename: "HorizonUserMemberObj",
    id: string,
    horizonId: string,
    userId: string,
    created: string,
  } | null,
};

export type OnCreateArcSectionObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  arcId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateArcSectionObjSubscription = {
  onCreateArcSectionObj?:  {
    __typename: "ArcSectionObj",
    id: string,
    userId: string,
    arcId: string,
    title: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type OnUpdateArcSectionObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  arcId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateArcSectionObjSubscription = {
  onUpdateArcSectionObj?:  {
    __typename: "ArcSectionObj",
    id: string,
    userId: string,
    arcId: string,
    title: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type OnDeleteArcSectionObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  arcId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnDeleteArcSectionObjSubscription = {
  onDeleteArcSectionObj?:  {
    __typename: "ArcSectionObj",
    id: string,
    userId: string,
    arcId: string,
    title: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type OnCreateHorizonArcObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  horizonId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnCreateHorizonArcObjSubscription = {
  onCreateHorizonArcObj?:  {
    __typename: "HorizonArcObj",
    id: string,
    userId: string,
    horizonId: string,
    title: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type OnUpdateHorizonArcObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  horizonId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnUpdateHorizonArcObjSubscription = {
  onUpdateHorizonArcObj?:  {
    __typename: "HorizonArcObj",
    id: string,
    userId: string,
    horizonId: string,
    title: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type OnDeleteHorizonArcObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  horizonId?: string | null,
  title?: string | null,
  description?: string | null,
};

export type OnDeleteHorizonArcObjSubscription = {
  onDeleteHorizonArcObj?:  {
    __typename: "HorizonArcObj",
    id: string,
    userId: string,
    horizonId: string,
    title: string,
    description: string,
    objective: string,
    idx: number,
    created: string,
  } | null,
};

export type SubscribeToMessagesSubscriptionVariables = {
};

export type SubscribeToMessagesSubscription = {
  subscribeToMessages?:  {
    __typename: "ConversationMessageObj",
    id: string,
    userId?: string | null,
    agentId?: string | null,
    conversationId: string,
    sceneId: string,
    created: string,
    message: string,
    hasAttachment: boolean,
    variant?: string | null,
    fileElem?:  {
      __typename: "FileElem",
      id: string,
      src?: string | null,
      ext?: string | null,
      title?: string | null,
      size?: number | null,
      variant?: string | null,
    } | null,
    textElem?:  {
      __typename: "TextElem",
      id: string,
      title?: string | null,
      text?: string | null,
      variant?: string | null,
    } | null,
    urlElem?:  {
      __typename: "UrlElem",
      id: string,
      url?: string | null,
      title?: string | null,
      variant?: string | null,
    } | null,
  } | null,
};

export type OnCreateFlowObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type OnCreateFlowObjSubscription = {
  onCreateFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    created: string,
    target: string,
    completed: boolean,
  } | null,
};

export type OnUpdateFlowObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type OnUpdateFlowObjSubscription = {
  onUpdateFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    created: string,
    target: string,
    completed: boolean,
  } | null,
};

export type OnDeleteFlowObjSubscriptionVariables = {
  id?: string | null,
  userId?: string | null,
  title?: string | null,
  description?: string | null,
  created?: string | null,
};

export type OnDeleteFlowObjSubscription = {
  onDeleteFlowObj?:  {
    __typename: "FlowObj",
    id: string,
    userId: string,
    title: string,
    description: string,
    created: string,
    target: string,
    completed: boolean,
  } | null,
};
