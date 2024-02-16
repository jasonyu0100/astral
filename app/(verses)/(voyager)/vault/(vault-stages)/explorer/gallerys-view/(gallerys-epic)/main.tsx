import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import React from 'react';
import { GallerysBreadcrumbs } from './breadcrumbs/main';
import { GallerysGrid } from './grid/main';

export function GallerysBody() {
  return (
    <Layer
      displayName={GallerysBody.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      <GallerysBreadcrumbs />
      <GallerysGrid />
    </Layer>
  );
}
