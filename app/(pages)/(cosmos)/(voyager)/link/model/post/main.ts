import { LinkPostComment, exampleLinkPostComments } from "./comment/main";

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

export const exampleJournalLinkPost = {
    id: "0",
    authorId: "0",
    description: "Hello world",
    date: new Date("2023-12-19").toISOString(),
    visibility: "Journal",
    comments: exampleLinkPostComments,
    thumbnail: {
        src: "/voyager/link/day-26.png"
    }
}

export const exampleJournalLinkPosts = [
    exampleJournalLinkPost
]

export const exampleSocialLinkPost = {
    id: "0",
    authorId: "0",
    description: "Hello world",
    date: new Date("2023-12-19").toISOString(),
    visibility: "Social",
    comments: exampleLinkPostComments,
    thumbnail: {
        src: "/voyager/link/day-26.png"
    }
}

export const exampleSocialLinkPosts = [
    exampleSocialLinkPost
]

export const exampleExploreLinkPost = {
    id: "0",
    authorId: "0",
    description: "Hello world",
    date: new Date("2023-12-19").toISOString(),
    visibility: "Explore",
    comments: exampleLinkPostComments,
    thumbnail: {
        src: "/voyager/link/day-26.png"
    }
}

export const exampleExploreLinkPosts = [
    exampleExploreLinkPost
]