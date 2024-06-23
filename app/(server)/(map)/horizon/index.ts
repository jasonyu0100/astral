import { arcForumDbWrapper } from '@/(server)/(db)/horizon/arc/forum/main';
import { forumMemberDbWrapper } from '@/(server)/(db)/horizon/arc/forum/member/main';
import { postCommentDbWrapper } from '@/(server)/(db)/horizon/arc/forum/post/comment/main';
import { forumPostDbWrapper } from '@/(server)/(db)/horizon/arc/forum/post/main';
import { horizonArcDbWrapper } from '@/(server)/(db)/horizon/arc/main';
import { arcPointDbWrapper } from '@/(server)/(db)/horizon/arc/point/main';
import { horizonGroupDbWrapper } from '@/(server)/(db)/horizon/group/main';
import { horizonGroupMemberDbWrapper } from '@/(server)/(db)/horizon/group/member/main';
import { horizonGroupSessionDbWrapper } from '@/(server)/(db)/horizon/group/session/main';
import { horizonDbWrapper } from '@/(server)/(db)/horizon/main';
import { horizonMemberDbWrapper } from '@/(server)/(db)/horizon/member/main';
import { horizonMemberTermsDbWrapper } from '@/(server)/(db)/horizon/member/terms/main';
import { horizonSessionContributorDbWrapper } from '@/(server)/(db)/horizon/session/contributor/main';
import { horizonSessionDbWrapper } from '@/(server)/(db)/horizon/session/main';
import { forumMemberModel } from '@/(server)/(model)/horizon/arc/forum/member/main';
import { horizonGroupMemberModel } from '@/(server)/(model)/horizon/group/member/main';
import { horizonGroupMemberTermsModel } from '@/(server)/(model)/horizon/group/member/terms/main';
import {
  horizonGroupSessionContributorGql,
  horizonGroupSessionContributorModel,
} from '@/(server)/(model)/horizon/group/session/contributor/main';
import { horizonGroupSessionUpdateModel } from '@/(server)/(model)/horizon/group/session/update/main';
import { horizonMemberModel } from '@/(server)/(model)/horizon/member/main';
import { horizonMemberTermsModel } from '@/(server)/(model)/horizon/member/terms/main';
import { horizonSessionContributorModel } from '@/(server)/(model)/horizon/session/contributor/main';
import { horizonSessionUpdateModel } from '@/(server)/(model)/horizon/session/update/main';
import { arcForumModel } from '../../(model)/horizon/arc/forum/main';
import { postCommentGql } from '../../(model)/horizon/arc/forum/post/comment/main';
import { forumPostModel } from '../../(model)/horizon/arc/forum/post/main';
import { horizonArcModel } from '../../(model)/horizon/arc/main';
import { arcPointModel } from '../../(model)/horizon/arc/point/main';
import { horizonGroupModel } from '../../(model)/horizon/group/main';
import { horizonGroupSessionModel } from '../../(model)/horizon/group/session/main';
import { horizonModel } from '../../(model)/horizon/main';
import { horizonSessionModel } from '../../(model)/horizon/session/main';

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
      model: horizonGroupSessionModel,
      db: horizonGroupSessionDbWrapper,
      update: {
        model: horizonGroupSessionUpdateModel,
        db: horizonGroupSessionDbWrapper,
      },
      contributor: {
        model: horizonGroupSessionContributorModel,
        db: horizonGroupSessionContributorGql,
      },
    },
  },
  session: {
    model: horizonSessionModel,
    db: horizonSessionDbWrapper,
    update: {
      model: horizonSessionUpdateModel,
      db: horizonSessionDbWrapper,
      member: {
        model: horizonSessionContributorModel,
        db: horizonSessionContributorDbWrapper,
      },
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
