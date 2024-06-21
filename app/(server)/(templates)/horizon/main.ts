// HORIZON

import { ArcForumObj } from '@/(server)/(model)/horizon/arc/forum/main';
import { HorizonArcObj } from '@/(server)/(model)/horizon/arc/main';
import { ArcPointObj } from '@/(server)/(model)/horizon/arc/point/main';
import { HorizonGroupObj } from '@/(server)/(model)/horizon/group/main';
import { HorizonGroupSessionObj } from '@/(server)/(model)/horizon/group/session/main';
import { HorizonSessionObj } from '@/(server)/(model)/horizon/session/main';
import { ForumPostObj } from '@/graphql/API';
import { albumHorizonTemplate } from './album/main';
import { bookHorizonTemplate } from './book/main';
import { gameHorizonTemplate } from './game/main';
import { movieHorizonTemplate } from './movie/main';

export type _TemplateHorizonObj = Omit<ArcForumObj, 'id' | 'arcId' | 'created'>;
export interface TemplateHorizonObj extends _TemplateHorizonObj {
  forums: TemplateForumObj[];
  arcs: TemplateArcObj[];
  clusters: TemplateClusterObj[];
  updates: TemplateUpdateObj[];
}

// FORUM

export type _TemplateForumObj = Omit<ArcForumObj, 'id' | 'horizonId' | 'time'>;
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
export type _TemplateClusterObj = Omit<
  HorizonGroupObj,
  'id' | 'horizonId' | 'time'
>;

export type _TemplateUpdateObj = Omit<
  HorizonGroupSessionObj,
  'id' | 'clusterId' | 'userId' | 'time'
>;

export interface TemplateUpdateObj extends _TemplateUpdateObj {}

export interface TemplateClusterObj extends _TemplateClusterObj {
  updates: TemplateUpdateObj[];
}

// UPDATE

export type _TemplateHorizonSessionObj = Omit<
  HorizonSessionObj,
  'id' | 'horizonId' | 'userId' | 'time'
>;

export interface TemplateHorizonSessionObj extends _TemplateHorizonSessionObj {}

// TEMPLATES

export enum HorizonTemplate {
  MOVIE = 'MOVIE',
  BOOK = 'BOOK',
  ALBUM = 'ALBUM',
  GAME = 'GAME',
}

export function getHorizonTemplates(
  variant: HorizonTemplate,
): TemplateHorizonObj {
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
