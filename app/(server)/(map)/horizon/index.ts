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
import { horizonUpdateDbWrapper } from '@/(server)/(db)/horizon/update/main';
import { horizonUpdateMemberDbWrapper } from '@/(server)/(db)/horizon/update/member/main';
import { forumMemberModel } from '@/(server)/(model)/horizon/arc/forum/member/main';
import { clusterMemberModel } from '@/(server)/(model)/horizon/cluster/member/main';
import { clusterUpdateItemModel } from '@/(server)/(model)/horizon/cluster/update/add/main';
import {
  clusterUpdateMemberGql,
  clusterUpdateMemberModel,
} from '@/(server)/(model)/horizon/cluster/update/member/main';
import { horizonMemberModel } from '@/(server)/(model)/horizon/member/main';
import { horizonUpdateItemModel } from '@/(server)/(model)/horizon/update/add/main';
import { horizonUpdateMemberModel } from '@/(server)/(model)/horizon/update/member/main';
import { arcForumModel } from '../../(model)/horizon/arc/forum/main';
import { postCommentGql } from '../../(model)/horizon/arc/forum/post/comment/main';
import { forumPostModel } from '../../(model)/horizon/arc/forum/post/main';
import { horizonArcModel } from '../../(model)/horizon/arc/main';
import { arcPointModel } from '../../(model)/horizon/arc/point/main';
import { horizonClusterModel } from '../../(model)/horizon/cluster/main';
import { clusterUpdateModel } from '../../(model)/horizon/cluster/update/main';
import { horizonModel } from '../../(model)/horizon/main';
import { horizonUpdateModel } from '../../(model)/horizon/update/main';

export const horizonMap = {
  model: horizonModel,
  db: horizonDbWrapper,
  member: {
    model: horizonMemberModel,
    db: horizonMemberDbWrapper,
  },
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
  cluster: {
    model: horizonClusterModel,
    db: horizonClusterDbWrapper,
    member: {
      model: clusterMemberModel,
      db: clusterMemberDbWrapper,
    },
    update: {
      model: clusterUpdateModel,
      db: clusterUpdateDbWrapper,
      add: {
        model: clusterUpdateItemModel,
        db: clusterUpdateDbWrapper,
      },
      member: {
        model: clusterUpdateMemberModel,
        db: clusterUpdateMemberGql,
      },
    },
  },
  update: {
    model: horizonUpdateModel,
    db: horizonUpdateDbWrapper,
    add: {
      model: horizonUpdateItemModel,
      db: horizonUpdateDbWrapper,
    },
    member: {
      model: horizonUpdateMemberModel,
      db: horizonUpdateMemberDbWrapper,
    },
  },
};
