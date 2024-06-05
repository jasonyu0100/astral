import { comment } from 'postcss';
import { horizonArcGql } from './arc/main';
import { arcPointGql } from './arc/point/main';
import { horizonClusterGql } from './cluster/main';
import { clusterUpdateGql } from './cluster/update/main';
import { horizonForumGql } from './forum/main';
import { forumPostGql } from './forum/post/main';
import { postCommentGql } from './forum/post/comment/main';
import { horizonPointGql } from './point/main';
import { horizonGql } from './main';

export const horizonGqlMap = {
  horizon: {
    gql: horizonGql,
    arc: {
      gql: horizonArcGql,
      point: { gql: arcPointGql },
    },
    cluster: {
      gql: horizonClusterGql,
      update: { gql: clusterUpdateGql },
    },
    forum: {
      gql: horizonForumGql,
      post: {
        gql: forumPostGql,
        comment: {
          gql: postCommentGql,
        },
      },
    },
    point: {
      gql: horizonPointGql,
    },
  },
};
