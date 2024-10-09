import { postAttachmentDbWrapper } from '@/(server)/client/space/chapter/spotlight/attachment/main';
import { commentKarmaDbWrapper } from '@/(server)/client/space/chapter/spotlight/comment/karma/main';
import { postCommentDbWrapper } from '@/(server)/client/space/chapter/spotlight/comment/main';
import { postKarmaDbWrapper } from '@/(server)/client/space/chapter/spotlight/karma/main';
import { postLinkDbWrapper } from '@/(server)/client/space/chapter/spotlight/link/main';
import { userPostDbWrapper } from '@/(server)/client/space/chapter/spotlight/main';
import { postAttachmentModel } from '@/(server)/model/post/attachment/main';
import { commentKarmaModel } from '@/(server)/model/post/comment/karma/main';
import { postCommentModel } from '@/(server)/model/post/comment/main';
import { postKarmaModel } from '@/(server)/model/post/karma/main';
import { postLinkModel } from '@/(server)/model/post/link/main';
import { userPostModel } from '@/(server)/model/post/main';
import {
  postMemberGql,
  postMemberModel,
} from '@/(server)/model/post/member/main';

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
    model: postLinkModel,
    db: postLinkDbWrapper,
  },
  karma: {
    model: postKarmaModel,
    db: postKarmaDbWrapper,
  },
};
