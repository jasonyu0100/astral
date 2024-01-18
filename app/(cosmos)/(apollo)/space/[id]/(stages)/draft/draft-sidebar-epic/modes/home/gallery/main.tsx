import { Layer } from '@/(common)/layer/main';
import { backgroundStyles } from '@/(common)/styles/data';
import { HomeGridContainer } from '@/(cosmos)/(voyager)/drive/(stages)/explore/home/home-epic/grid/container/main';
import React from 'react';
import { HomeGalleryInfo } from './info/main';
import { HomeGalleryThumbnail } from './thumbnail/main';
import { GalleryObj } from '@/tables/gallery/main';

export function HomeGallery({ gallery }: { gallery: GalleryObj }) {
  return (
    <Layer
      displayName={HomeGridContainer.name}
      sizeStyle='flex-grow aspect-[11/16]'
      backgroundStyle={backgroundStyles['glass-10']}
    >
      <div className='flex flex-col w-full h-full'>
        <HomeGalleryThumbnail gallery={gallery} />
        <HomeGalleryInfo gallery={gallery} />
      </div>
    </Layer>
  );
}
