import { comment } from 'postcss';
import { horizonArcGql, horizonArcModel } from '../../(model)/horizon/arc/main';
import {
  arcPointGql,
  arcPointModel,
} from '../../(model)/horizon/arc/point/main';
import {
  horizonClusterGql,
  horizonClusterModel,
} from '../../(model)/horizon/cluster/main';
import {
  clusterUpdateGql,
  clusterUpdateModel,
} from '../../(model)/horizon/cluster/update/main';
import {
  arcForumGql,
  arcForumModel,
} from '../../(model)/horizon/arc/forum/main';
import {
  forumPostGql,
  forumPostModel,
} from '../../(model)/horizon/arc/forum/post/main';
import { postCommentGql } from '../../(model)/horizon/arc/forum/post/comment/main';
import {
  horizonUpdateGql,
  horizonUpdateModel,
} from '../../(model)/horizon/update/main';
import { horizonGql, horizonModel } from '../../(model)/horizon/main';
import { horizonDbWrapper } from '@/(server)/(db)/horizon/main';
import { horizonArcDbWrapper } from '@/(server)/(db)/horizon/arc/main';
import { arcPointDbWrapper } from '@/(server)/(db)/horizon/arc/point/main';
import { horizonClusterDbWrapper } from '@/(server)/(db)/horizon/cluster/main';
import { clusterUpdateDbWrapper } from '@/(server)/(db)/horizon/cluster/update/main';
import { forumPostDbWrapper } from '@/(server)/(db)/horizon/arc/forum/post/main';
import { postCommentDbWrapper } from '@/(server)/(db)/horizon/arc/forum/post/comment/main';
import { horizonUpdateDbWrapper } from '@/(server)/(db)/horizon/update/main';
import {
  horizonMemberGql,
  horizonMemberModel,
} from '@/(server)/(model)/horizon/member/main';
import {
  clusterMemberGql,
  clusterMemberModel,
} from '@/(server)/(model)/horizon/cluster/member/main';
import {
  forumMemberGql,
  forumMemberModel,
} from '@/(server)/(model)/horizon/arc/forum/member/main';
import {
  clusterUpdateAddGql,
  clusterUpdateAddModel,
} from '@/(server)/(model)/horizon/cluster/update/add/main';
import {
  clusterUpdateMemberGql,
  clusterUpdateMemberModel,
} from '@/(server)/(model)/horizon/cluster/update/member/main';
import {
  horizonUpdateAddGql,
  horizonUpdateAddModel,
} from '@/(server)/(model)/horizon/update/add/main';
import {
  horizonUpdateMemberGql,
  horizonUpdateMemberModel,
} from '@/(server)/(model)/horizon/update/member/main';
import { horizonUpdateMemberDbWrapper } from '@/(server)/(db)/horizon/update/member/main';
import { horizonMemberDbWrapper } from '@/(server)/(db)/horizon/member/main';
import { arcForumDbWrapper } from '@/(server)/(db)/horizon/arc/forum/main';
import { forumMemberDbWrapper } from '@/(server)/(db)/horizon/arc/forum/member/main';
import { clusterMemberDbWrapper } from '@/(server)/(db)/horizon/cluster/member/main';

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
        model: clusterUpdateAddModel,
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
      model: horizonUpdateAddModel,
      db: horizonUpdateDbWrapper,
    },
    member: {
      model: horizonUpdateMemberModel,
      db: horizonUpdateMemberDbWrapper,
    },
  },
};
