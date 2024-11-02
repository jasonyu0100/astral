import { postAttachmentDbWrapper } from '@/architecture/client/post/attachment/main';
import { commentKarmaDbWrapper } from '@/architecture/client/post/comment/karma/main';
import { postCommentDbWrapper } from '@/architecture/client/post/comment/main';
import { postKarmaDbWrapper } from '@/architecture/client/post/karma/main';
import { userPostDbWrapper } from '@/architecture/client/post/main';
import { postAttachmentModel } from '@/architecture/model/post/attachment/main';
import { commentKarmaModel } from '@/architecture/model/post/comment/karma/main';
import { postCommentModel } from '@/architecture/model/post/comment/main';
import { postKarmaModel } from '@/architecture/model/post/karma/main';
import { userPostModel } from '@/architecture/model/post/main';
import {
  postMemberGql,
  postMemberModel,
} from '@/architecture/model/post/member/main';

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
