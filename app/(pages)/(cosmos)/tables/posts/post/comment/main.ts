export interface PostCommentObj {
  id: string;
  content: string;
  postId: string;
  authorId: string;
}

export const exampleComment: PostCommentObj = {
    id: "0",
    postId: "0",
    authorId: "0",
    content: "Hello World"
}

export const exampleComments: PostCommentObj[] = [
    exampleComment
]