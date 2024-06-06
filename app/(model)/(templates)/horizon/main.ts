// HORIZON

import { HorizonForumObj } from "@/(model)/horizon/forum/main";
import { ForumPostObj } from "@/graphql/API";

export interface TemplateHorizonObj {
    forums: TemplateForumObj[];
    arcs: TemplateArcObj[];
    clusters: TemplateClusterObj[];
    updates: TemplateUpdateObj[];

}

// FORUM

export type _TemplateForumObj = Omit<HorizonForumObj, 'id' | 'userId' | 'time' >;
export type _TemplatePostObj = Omit<ForumPostObj, 'id' | 'forumId' | 'time' >;
export type _TemplateCommentObj = Omit<ForumPostObj, 'id' | 'userId' | 'forumId' | 'time'>;
export interface TemplateForumObj {
}

// ARC

export interface TemplateArcObj {
}

// CLUSTER

export interface TemplateClusterObj {

}

// UPDATE

export interface TemplateUpdateObj {

}

// TEMPLATES