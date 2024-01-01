import {
  LinkPostComment,
  exampleLinkPostComment,
  exampleLinkPostComments,
} from "./post/comment/main";
import {
  LinkPost,
  exampleExploreLinkPost,
  exampleExploreLinkPosts,
  exampleJournalLinkPost,
  exampleJournalLinkPosts,
  exampleSocialLinkPost,
  exampleSocialLinkPosts,
} from "./post/main";

export const linkModel: {
  journalPosts: {
    post: {
      comments: {
        comment: {
          example: LinkPostComment;
        };
        example: LinkPostComment[];
      };
      example: LinkPost;
    };
    example: LinkPost[];
  };
  socialPosts: {
    post: {
      comments: {
        comment: {
          example: LinkPostComment;
        };
        example: LinkPostComment[];
      };
      example: LinkPost;
    };
    example: LinkPost[];
  };
  explorePosts: {
    post: {
      comments: {
        comment: {
          example: LinkPostComment;
        };
        example: LinkPostComment[];
      };
      example: LinkPost;
    };
    example: LinkPost[];
  };
} = {
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
