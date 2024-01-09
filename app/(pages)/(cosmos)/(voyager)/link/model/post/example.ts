import { exampleLinkPostComments } from "./comment/example"
import { LinkPost } from "./type"

export const exampleJournalLinkPost : LinkPost= {
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

export const exampleJournalLinkPosts: LinkPost[] = [
    exampleJournalLinkPost
]

export const exampleSocialLinkPost: LinkPost = {
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

export const exampleSocialLinkPosts: LinkPost[] = [
    exampleSocialLinkPost
]

export const exampleExploreLinkPost: LinkPost = {
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

export const exampleExploreLinkPosts: LinkPost[] = [
    exampleExploreLinkPost
]