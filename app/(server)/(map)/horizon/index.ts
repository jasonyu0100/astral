import { comment } from 'postcss';
import { horizonArcGql } from '../../(model)/horizon/arc/main';
import { arcPointGql } from '../../(model)/horizon/arc/point/main';
import { horizonClusterGql } from '../../(model)/horizon/cluster/main';
import { clusterUpdateGql } from '../../(model)/horizon/cluster/update/main';
import { arcForumGql } from '../../(model)/horizon/arc/forum/main';
import { forumPostGql } from '../../(model)/horizon/arc/forum/post/main';
import { postCommentGql } from '../../(model)/horizon/arc/forum/post/comment/main';
import { horizonUpdateGql } from '../../(model)/horizon/update/main';
import { horizonGql } from '../../(model)/horizon/main';
import { horizonDbWrapper } from '@/(server)/(db)/horizon/main';
import { horizonArcDbWrapper } from '@/(server)/(db)/horizon/arc/main';
import { arcPointDbWrapper } from '@/(server)/(db)/horizon/arc/point/main';
import { horizonClusterDbWrapper } from '@/(server)/(db)/horizon/cluster/main';
import { clusterUpdateDbWrapper } from '@/(server)/(db)/horizon/cluster/update/main';
import { forumPostDbWrapper } from '@/(server)/(db)/horizon/arc/forum/post/main';
import { postCommentDbWrapper } from '@/(server)/(db)/horizon/arc/forum/post/comment/main';
import { horizonUpdateDbWrapper } from '@/(server)/(db)/horizon/update/main';
import { horizonMemberGql } from '@/(server)/(model)/horizon/member/main';
import { clusterMemberGql } from '@/(server)/(model)/horizon/cluster/member/main';
import { forumMemberGql } from '@/(server)/(model)/horizon/arc/forum/member/main';
import { clusterUpdateAddGql } from '@/(server)/(model)/horizon/cluster/update/add/main';
import { clusterUpdateMemberGql } from '@/(server)/(model)/horizon/cluster/update/member/main';
import { horizonUpdateAddGql } from '@/(server)/(model)/horizon/update/add/main';
import { horizonUpdateMemberGql } from '@/(server)/(model)/horizon/update/member/main';
import { horizonUpdateMemberDbWrapper } from '@/(server)/(db)/horizon/update/member/main';
import { horizonMemberDbWrapper } from '@/(server)/(db)/horizon/member/main';
import { arcForumDbWrapper } from '@/(server)/(db)/horizon/arc/forum/main';
import { forumMemberDbWrapper } from '@/(server)/(db)/horizon/arc/forum/member/main';
import { clusterMemberDbWrapper } from '@/(server)/(db)/horizon/cluster/member/main';

export const horizonMap = {
  children: ['arc', 'cluster', 'update', 'member'],
  gql: horizonGql,
  db: horizonDbWrapper,
  member: {
    children: [],
    gql: horizonMemberGql,
    db: horizonMemberDbWrapper,
  },
  arc: {
    children: ['point', 'forum'],
    gql: horizonArcGql,
    db: horizonArcDbWrapper,
    point: {
      children: [],
      gql: arcPointGql,
      db: arcPointDbWrapper,
    },
    forum: {
      children: ['post', 'member'],
      db: arcForumDbWrapper,
      gql: arcForumGql,
      member: {
        children: [],
        gql: forumMemberGql,
        db: forumMemberDbWrapper,
      },
      post: {
        children: ['comment'],
        db: forumPostDbWrapper,
        gql: forumPostGql,
        comment: {
          children: [],
          db: postCommentDbWrapper,
          gql: postCommentGql,
        },
      },
    },
  },
  cluster: {
    gql: horizonClusterGql,
    db: horizonClusterDbWrapper,
    children: ['update', 'member'],
    member: {
      children: [],
      gql: clusterMemberGql,
      db: clusterMemberDbWrapper,
    },
    update: {
      children: ['add', 'member'],
      gql: clusterUpdateGql,
      db: clusterUpdateDbWrapper,
      add: {
        children: [],
        gql: clusterUpdateAddGql,
        db: clusterUpdateDbWrapper,
      },
      member: {
        children: [],
        gql: clusterUpdateMemberGql,
        db: clusterUpdateMemberGql,
      },
    },
  },
  update: {
    children: ['add', 'member'],
    db: horizonUpdateDbWrapper,
    gql: horizonUpdateGql,
    add: {
      children: [],
      gql: horizonUpdateAddGql,
      db: horizonUpdateDbWrapper,
    },
    member: {
      children: [],
      gql: horizonUpdateMemberGql,
      db: horizonUpdateMemberDbWrapper,
    },
  },
};
