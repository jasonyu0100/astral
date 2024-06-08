import { comment } from 'postcss';
import { horizonArcGql } from '../../horizon/arc/main';
import { arcPointGql } from '../../horizon/arc/point/main';
import { horizonClusterGql } from '../../horizon/cluster/main';
import { clusterUpdateGql } from '../../horizon/cluster/update/main';
import { arcForumGql } from '../../horizon/arc/forum/main';
import { forumPostGql } from '../../horizon/arc/forum/post/main';
import { postCommentGql } from '../../horizon/arc/forum/post/comment/main';
import { horizonUpdateGql } from '../../horizon/update/main';
import { horizonGql } from '../../horizon/main';
import { horizonDbWrapper } from '@/(model)/(db)/horizon/main';
import { horizonArcDbWrapper } from '@/(model)/(db)/horizon/arc/main';
import { arcPointDbWrapper } from '@/(model)/(db)/horizon/arc/point/main';
import { horizonClusterDbWrapper } from '@/(model)/(db)/horizon/cluster/main';
import { clusterUpdateDbWrapper } from '@/(model)/(db)/horizon/cluster/update/main';
import { forumPostDbWrapper } from '@/(model)/(db)/horizon/arc/forum/post/main';
import { postCommentDbWrapper } from '@/(model)/(db)/horizon/arc/forum/post/comment/main';
import { horizonUpdateDbWrapper } from '@/(model)/(db)/horizon/update/main';
import { horizonMemberGql } from '@/(model)/horizon/member/main';
import { clusterMemberGql } from '@/(model)/horizon/cluster/member/main';
import { forumMemberGql } from '@/(model)/horizon/arc/forum/member/main';
import { clusterUpdateAddGql } from '@/(model)/horizon/cluster/update/add/main';
import { clusterUpdateMemberGql } from '@/(model)/horizon/cluster/update/member/main';
import { horizonUpdateAddGql } from '@/(model)/horizon/update/add/main';
import { horizonUpdateMemberGql } from '@/(model)/horizon/update/member/main';
import { horizonUpdateMemberDbWrapper } from '@/(model)/(db)/horizon/update/member/main';
import { horizonMemberDbWrapper } from '@/(model)/(db)/horizon/member/main';
import { arcForumDbWrapper } from '@/(model)/(db)/horizon/arc/forum/main';
import { forumMemberDbWrapper } from '@/(model)/(db)/horizon/arc/forum/member/main';
import { clusterMemberDbWrapper } from '@/(model)/(db)/horizon/cluster/member/main';

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
