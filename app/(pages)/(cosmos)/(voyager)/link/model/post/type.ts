import { LinkPostComment } from "./comment/type";

export interface LinkPost {
  id: string;
  authorId: string;
  description: string;
  date: string;
  visibility: string;
  comments: LinkPostComment[];
  thumbnail: {
    src: string;
  };
}
