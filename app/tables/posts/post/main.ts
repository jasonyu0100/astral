import { FileObj, exampleFile } from "../../collection/file/main";
import { PostCommentObj, exampleComments } from "./comment/main";

export interface PostObj {
  id: string;
  authorId: string;
  description: string;
  date: string;
  visibility: string;
  comments: PostCommentObj[];
  thumbnail: FileObj;
}

export const examplePost: PostObj = {
    id: "0",
    authorId: "0",
    description: "Hello world",
    date: new Date("2023-12-19").toISOString(),
    visibility: "Explore",
    comments: exampleComments,
    thumbnail: exampleFile
}

export const examplePosts: PostObj[] = [
  {
      id: "0",
      authorId: "0",
      description: "Hello world",
      date: new Date("2023-12-19").toISOString(),
      visibility: "Explore",
      comments: exampleComments,
      thumbnail: exampleFile
  }
]