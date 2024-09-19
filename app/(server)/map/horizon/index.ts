import { arcForumDbWrapper } from '@/(server)/client/horizon/arc/forum/main';
import { forumMemberDbWrapper } from '@/(server)/client/horizon/arc/forum/member/main';
import { postCommentDbWrapper } from '@/(server)/client/horizon/arc/forum/post/comment/main';
import { forumPostDbWrapper } from '@/(server)/client/horizon/arc/forum/post/main';
import { horizonArcDbWrapper } from '@/(server)/client/horizon/arc/main';
import { arcPointDbWrapper } from '@/(server)/client/horizon/arc/point/main';
import { horizonGroupDbWrapper } from '@/(server)/client/horizon/group/main';
import { horizonGroupMemberDbWrapper } from '@/(server)/client/horizon/group/member/main';
import { horizonGroupSessionDbWrapper } from '@/(server)/client/horizon/group/session/main';
import { horizonDbWrapper } from '@/(server)/client/horizon/main';
import { horizonMemberDbWrapper } from '@/(server)/client/horizon/member/main';
import { horizonMemberTermsDbWrapper } from '@/(server)/client/horizon/member/terms/main';
import { horizonSessionContributorDbWrapper } from '@/(server)/client/horizon/session/contributor/main';
import { horizonSessionDbWrapper } from '@/(server)/client/horizon/session/main';
import { arcForumModel } from '@/(server)/model/horizon/arc/forum/main';
import { forumMemberModel } from '@/(server)/model/horizon/arc/forum/member/main';
import { postCommentGql } from '@/(server)/model/horizon/arc/forum/post/comment/main';
import { forumPostModel } from '@/(server)/model/horizon/arc/forum/post/main';
import { horizonArcModel } from '@/(server)/model/horizon/arc/main';
import { arcPointModel } from '@/(server)/model/horizon/arc/point/main';
import { horizonGroupModel } from '@/(server)/model/horizon/group/main';
import { horizonGroupMemberModel } from '@/(server)/model/horizon/group/member/main';
import { horizonGroupMemberTermsModel } from '@/(server)/model/horizon/group/member/terms/main';
import {
  horizonGroupReviewContributorGql,
  horizonGroupReviewContributorModel,
} from '@/(server)/model/horizon/group/review/contributor/main';
import { horizonGroupReviewModel } from '@/(server)/model/horizon/group/review/main';
import { horizonGroupReviewUpdateModel } from '@/(server)/model/horizon/group/review/update/main';
import { horizonModel } from '@/(server)/model/horizon/main';
import { horizonMemberModel } from '@/(server)/model/horizon/member/main';
import { horizonMemberTermsModel } from '@/(server)/model/horizon/member/terms/main';
import { horizonSessionContributorModel } from '@/(server)/model/horizon/session/contributor/main';
import { horizonSessionModel } from '@/(server)/model/horizon/session/main';

export const horizonMap = {
  model: horizonModel,
  db: horizonDbWrapper,
  arc: {
    model: horizonArcModel,
    db: horizonArcDbWrapper,
    point: {
      model: arcPointModel,
      db: arcPointDbWrapper,
    },
    forum: {
      model: arcForumModel,
      db: arcForumDbWrapper,
      member: {
        model: forumMemberModel,
        db: forumMemberDbWrapper,
      },
      post: {
        model: forumPostModel,
        db: forumPostDbWrapper,
        comment: {
          model: postCommentGql,
          db: postCommentDbWrapper,
        },
      },
    },
  },
  group: {
    model: horizonGroupModel,
    db: horizonGroupDbWrapper,
    member: {
      model: horizonGroupMemberModel,
      db: horizonGroupMemberDbWrapper,
      terms: {
        model: horizonGroupMemberTermsModel,
        db: horizonGroupMemberDbWrapper,
      },
    },
    session: {
      model: horizonGroupReviewModel,
      db: horizonGroupSessionDbWrapper,
      update: {
        model: horizonGroupReviewUpdateModel,
        db: horizonGroupSessionDbWrapper,
      },
      contributor: {
        model: horizonGroupReviewContributorModel,
        db: horizonGroupReviewContributorGql,
      },
    },
  },
  session: {
    model: horizonSessionModel,
    db: horizonSessionDbWrapper,
    contributor: {
      model: horizonSessionContributorModel,
      db: horizonSessionContributorDbWrapper,
    },
  },
  member: {
    model: horizonMemberModel,
    db: horizonMemberDbWrapper,
    terms: {
      model: horizonMemberTermsModel,
      db: horizonMemberTermsDbWrapper,
    },
  },
};
