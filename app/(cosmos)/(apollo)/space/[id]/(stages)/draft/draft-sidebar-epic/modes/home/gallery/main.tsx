import { Layer } from '@/(common)/layer/main';
import { backgroundStyles } from '@/(common)/styles/data';
import React from 'react';
import { HomeGalleryInfo } from './info/main';
import { HomeGalleryThumbnail } from './thumbnail/main';
import { GalleryObj } from '@/tables/gallery/main';

export function HomeGallery({ gallery }: { gallery: GalleryObj }) {
  return (
    <Layer
      displayName={HomeGallery.name}
      sizeStyle='w-full aspect-[11/16]'
      backgroundStyle={backgroundStyles['glass-10']}
    >
      <div className='flex h-full w-full flex-col'>
        <HomeGalleryThumbnail gallery={gallery} />
        <HomeGalleryInfo gallery={gallery} />
      </div>
    </Layer>
  );
}
