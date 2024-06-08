// HORIZON

import { HorizonArcObj } from '@/(model)/horizon/arc/main';
import { ArcPointObj } from '@/(model)/horizon/arc/point/main';
import { HorizonClusterObj } from '@/(model)/horizon/cluster/main';
import { ClusterUpdateObj } from '@/(model)/horizon/cluster/update/main';
import { ArcForumObj } from '@/(model)/horizon/arc/forum/main';
import { HorizonUpdateObj } from '@/(model)/horizon/update/main';
import { ForumPostObj } from '@/graphql/API';
import { movieHorizonTemplate } from './movie/main';
import { albumHorizonTemplate } from './album/main';
import { bookHorizonTemplate } from './book/main';
import { gameHorizonTemplate } from './game/main';

export type _TemplateHorizonObj = Omit<ArcForumObj, 'id' | 'horizonId' | 'created'>;
export interface TemplateHorizonObj extends _TemplateHorizonObj {
  forums: TemplateForumObj[];
  arcs: TemplateArcObj[];
  clusters: TemplateClusterObj[];
  updates: TemplateUpdateObj[];
}

// FORUM

export type _TemplateForumObj = Omit<
  ArcForumObj,
  'id' | 'horizonId' | 'time'
>;
export type _TemplatePostObj = Omit<
  ForumPostObj,
  'id' | 'forumId' | 'userId' | 'time'
>;
export type _TemplateCommentObj = Omit<
  ForumPostObj,
  'id' | 'userId' | 'forumId' | 'time'
>;
export interface TemplateCommentObj extends _TemplateCommentObj {}

export interface TemplatePostObj extends _TemplatePostObj {
  comments: TemplateCommentObj[];
}
export interface TemplateForumObj extends _TemplateForumObj {
  posts: TemplatePostObj[];
}

// ARC

export type _TemplateArc = Omit<
  HorizonArcObj,
  'id' | 'horizonId' | 'userId' | 'time' | 'idx'
>;
export type _TemplatePoint = Omit<
  ArcPointObj,
  'id' | 'arcId' | 'userId' | 'time'
>;

export interface TemplatePointObj extends _TemplatePoint {}

export interface TemplateArcObj {
  points: TemplatePointObj[];
}

// CLUSTER
export type _TemplateClusterObj = Omit<HorizonClusterObj, 'id' | 'horizonId' | 'time'>;

export type _TemplateUpdateObj = Omit<
  ClusterUpdateObj,
  'id' | 'clusterId' | 'userId' | 'time'
>;

export interface TemplateUpdateObj extends _TemplateUpdateObj {

}

export interface TemplateClusterObj extends _TemplateClusterObj {
  updates: TemplateUpdateObj[];
}

// UPDATE

export type _TemplateHorizonUpdateObj = Omit<HorizonUpdateObj, 'id' | 'horizonId' | 'userId' | 'time'>;

export interface TemplateHorizonUpdateObj extends _TemplateHorizonUpdateObj {

}

// TEMPLATES

export enum HorizonTemplate {
  MOVIE = 'MOVIE',
  BOOK = 'BOOK',
  ALBUM = 'ALBUM',
  GAME = 'GAME',
}

export function getHorizonTemplates(variant: HorizonTemplate): TemplateHorizonObj {
  switch (variant) {
    case HorizonTemplate.MOVIE:
      return movieHorizonTemplate;
    case HorizonTemplate.BOOK:
      return bookHorizonTemplate;
    case HorizonTemplate.ALBUM:
      return albumHorizonTemplate;
    case HorizonTemplate.GAME:
      return gameHorizonTemplate;
  }
  return movieHorizonTemplate;
}