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

export const horizonMap = {
    children: ['arc', 'cluster', 'forum', 'point'],
    gql: horizonGql,
    arc: {
      children: ['point'],
      gql: horizonArcGql,
      point: { 
        children: [],
        gql: arcPointGql 
      },
    },
    cluster: {
      gql: horizonClusterGql,
      update: { 
        children: [],
        gql: clusterUpdateGql 
      },
    },
    forum: {
      children: ['post'],
      gql: horizonForumGql,
      post: {
      children: ['comment'],
        gql: forumPostGql,
        comment: {
          children: [],
          gql: postCommentGql,
        },
      },
    },
    point: {
      children: [],
      gql: horizonPointGql,
    },
};
