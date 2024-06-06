import { comment } from 'postcss';
import { horizonArcGql } from '../../horizon/arc/main';
import { arcPointGql } from '../../horizon/arc/point/main';
import { horizonClusterGql } from '../../horizon/cluster/main';
import { clusterUpdateGql } from '../../horizon/cluster/update/main';
import { horizonForumGql } from '../../horizon/forum/main';
import { forumPostGql } from '../../horizon/forum/post/main';
import { postCommentGql } from '../../horizon/forum/post/comment/main';
import { horizonPointGql } from '../../horizon/point/main';
import { horizonGql } from '../../horizon/main';
import { horizonDbWrapper } from '@/(model)/(db)/horizon/main';
import { horizonArcDbWrapper } from '@/(model)/(db)/horizon/arc/main';
import { arcPointDbWrapper } from '@/(model)/(db)/horizon/arc/point/main';
import { horizonClusterDbWrapper } from '@/(model)/(db)/horizon/cluster/main';
import { clusterUpdateDbWrapper } from '@/(model)/(db)/horizon/cluster/update/main';
import { horizonforumDbWrapper } from '@/(model)/(db)/horizon/forum/main';
import { forumPostDbWrapper } from '@/(model)/(db)/horizon/forum/post/main';
import { postCommentDbWrapper } from '@/(model)/(db)/horizon/forum/post/comment/main';
import { horizonPointDbWrapper } from '@/(model)/(db)/horizon/point/main';

export const horizonMap = {
  children: ['arc', 'cluster', 'forum', 'point'],
  gql: horizonGql,
  db: horizonDbWrapper,
  arc: {
    children: ['point'],
    gql: horizonArcGql,
    db: horizonArcDbWrapper,
    point: {
      children: [],
      gql: arcPointGql,
      db: arcPointDbWrapper,
    },
  },
  cluster: {
    gql: horizonClusterGql,
    db: horizonClusterDbWrapper,
    update: {
      children: [],
      gql: clusterUpdateGql,
      db: clusterUpdateDbWrapper,
    },
  },
  forum: {
    children: ['post'],
    db: horizonforumDbWrapper,
    gql: horizonForumGql,
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
  point: {
    children: [],
    db: horizonPointDbWrapper,
    gql: horizonPointGql,
  },
};
