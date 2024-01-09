import { exampleLinkPostComment, exampleLinkPostComments } from "./post/comment/example";
import { exampleJournalLinkPost, exampleJournalLinkPosts, exampleSocialLinkPost, exampleSocialLinkPosts, exampleExploreLinkPost, exampleExploreLinkPosts } from "./post/example";

export const linkModel = {
  journalPosts: {
    post: {
      comments: {
        comment: {
          example: exampleLinkPostComment,
        },
        example: exampleLinkPostComments,
      },
      example: exampleJournalLinkPost,
    },
    example: exampleJournalLinkPosts,
  },
  socialPosts: {
    post: {
      comments: {
        comment: {
          example: exampleLinkPostComment,
        },
        example: exampleLinkPostComments,
      },
      example: exampleSocialLinkPost,
    },
    example: exampleSocialLinkPosts,
  },
  explorePosts: {
    post: {
      comments: {
        comment: {
          example: exampleLinkPostComment,
        },
        example: exampleLinkPostComments,
      },
      example: exampleExploreLinkPost,
    },
    example: exampleExploreLinkPosts,
  },
};
