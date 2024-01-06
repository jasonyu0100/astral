export interface LinkPostComment {
  id: string;
  content: string;
  postId: string;
  authorId: string;
}

export const exampleLinkPostComment = {
    id: "0",
    postId: "0",
    authorId: "0",
    content: "Hello World"
}

export const exampleLinkPostComments = [
    exampleLinkPostComment
]