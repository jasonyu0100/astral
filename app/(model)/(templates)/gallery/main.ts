// GALLERY

import { GalleryCollectionObj } from "@/(model)/gallery/collection/main";
import { CollectionResourceObj } from "@/(model)/gallery/collection/resource/main";
import { GalleryObj } from "@/(model)/gallery/main";
import { moodGalleryTemplate } from "./mood/main";
import { reelGalleryTemplate } from "./reel/main";
import { vibeGalleryTemplate } from "./vibe/main";

export type _TemplateGalleryObj = Omit<GalleryObj, 'id' | 'userId'>

export interface TemplateGalleryObj extends _TemplateGalleryObj {
    collections: TemplateCollectionObj[];
}

// COLLECTION

export type _TemplateCollectionObj = Omit<GalleryCollectionObj, 'id' | 'galleryId'>

export interface TemplateCollectionObj extends _TemplateCollectionObj {
    resources: TemplateResourceObj[];
}


// RESOURCE

export type _TemplateResourceObj = Omit<CollectionResourceObj, 'id' | 'userId' | 'collectionId'>

export interface TemplateResourceObj extends _TemplateResourceObj {

}

// TEMPLATES

export enum GalleryTemplate {
    MOOD = 'MOOD',
    VIBE = 'VIBE',
    REEL = 'REEL',
}

export function getGalleryTemplates(variant: GalleryTemplate): TemplateGalleryObj {
    switch (variant) {
        case GalleryTemplate.MOOD:
            return moodGalleryTemplate;
        case GalleryTemplate.VIBE:
            return vibeGalleryTemplate;
        case GalleryTemplate.REEL:
            return reelGalleryTemplate;
    }
    return reelGalleryTemplate;
}