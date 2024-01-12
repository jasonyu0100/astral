export interface MomentCommentObj {
  id: string;
  content: string;
  postId: string;
  authorId: string;
}

export const exampleComment: MomentCommentObj = {
    id: "0",
    postId: "0",
    authorId: "0",
    content: "Hello World"
}

export const exampleComments: MomentCommentObj[] = [
    exampleComment
]