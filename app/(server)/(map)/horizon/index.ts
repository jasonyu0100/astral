import { arcForumDbWrapper } from '@/(server)/(db)/horizon/arc/forum/main';
import { forumMemberDbWrapper } from '@/(server)/(db)/horizon/arc/forum/member/main';
import { postCommentDbWrapper } from '@/(server)/(db)/horizon/arc/forum/post/comment/main';
import { forumPostDbWrapper } from '@/(server)/(db)/horizon/arc/forum/post/main';
import { horizonArcDbWrapper } from '@/(server)/(db)/horizon/arc/main';
import { arcPointDbWrapper } from '@/(server)/(db)/horizon/arc/point/main';
import { horizonClusterDbWrapper } from '@/(server)/(db)/horizon/cluster/main';
import { clusterMemberDbWrapper } from '@/(server)/(db)/horizon/cluster/member/main';
import { clusterUpdateDbWrapper } from '@/(server)/(db)/horizon/cluster/update/main';
import { horizonDbWrapper } from '@/(server)/(db)/horizon/main';
import { horizonMemberDbWrapper } from '@/(server)/(db)/horizon/member/main';
import { horizonSessionDbWrapper } from '@/(server)/(db)/horizon/session/main';
import { horizonSessionUpdateMemberDbWrapper } from '@/(server)/(db)/horizon/session/update/member/main';
import { forumMemberModel } from '@/(server)/(model)/horizon/arc/forum/member/main';
import { horizonGroupMemberModel } from '@/(server)/(model)/horizon/group/member/main';
import { horizonGroupSessionUpdateModel } from '@/(server)/(model)/horizon/group/session/update/main';
import {
  horizonGroupSessionUpdateMemberGql,
  horizonGroupSessionUpdateMemberModel,
} from '@/(server)/(model)/horizon/group/session/update/member/main';
import { horizonMemberModel } from '@/(server)/(model)/horizon/member/main';
import { horizonSessionUpdateModel } from '@/(server)/(model)/horizon/session/update/main';
import { horizonSessionUpdateMemberModel } from '@/(server)/(model)/horizon/session/update/member/main';
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
    db: horizonClusterDbWrapper,
    member: {
      model: horizonGroupMemberModel,
      db: clusterMemberDbWrapper,
    },
    session: {
      model: horizonGroupSessionModel,
      db: clusterUpdateDbWrapper,
      update: {
        model: horizonGroupSessionUpdateModel,
        db: clusterUpdateDbWrapper,
      },
      member: {
        model: horizonGroupSessionUpdateMemberModel,
        db: horizonGroupSessionUpdateMemberGql,
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
        model: horizonSessionUpdateMemberModel,
        db: horizonSessionUpdateMemberDbWrapper,
      },
    },
  },
  member: {
    model: horizonMemberModel,
    db: horizonMemberDbWrapper,
  },
};
