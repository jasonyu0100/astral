import { postAttachmentDbWrapper } from '@/server/client/post/attachment/main';
import { commentKarmaDbWrapper } from '@/server/client/post/comment/karma/main';
import { postCommentDbWrapper } from '@/server/client/post/comment/main';
import { postKarmaDbWrapper } from '@/server/client/post/karma/main';
import { userPostDbWrapper } from '@/server/client/post/main';
import { postAttachmentModel } from '@/server/model/post/attachment/main';
import { commentKarmaModel } from '@/server/model/post/comment/karma/main';
import { postCommentModel } from '@/server/model/post/comment/main';
import { postKarmaModel } from '@/server/model/post/karma/main';
import { userPostModel } from '@/server/model/post/main';
import {
  postMemberGql,
  postMemberModel,
} from '@/server/model/post/member/main';

export const postMap = {
  db: userPostDbWrapper,
  model: userPostModel,
  member: {
    db: postMemberGql,
    model: postMemberModel,
  },
  comment: {
    model: postCommentModel,
    db: postCommentDbWrapper,
    karma: {
      model: commentKarmaModel,
      db: commentKarmaDbWrapper,
    },
  },
  attachment: {
    model: postAttachmentModel,
    db: postAttachmentDbWrapper,
  },
  link: {
    db: postLinkDbWrapper,
  },
  karma: {
    model: postKarmaModel,
    db: postKarmaDbWrapper,
  },
};
