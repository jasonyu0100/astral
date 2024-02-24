import { Glass } from '@/(components)/glass/main';
import { backgroundStyles, containerStyles } from '@/(components)/styles/data';
import React from 'react';
import { GallerysBreadcrumbs } from './breadcrumbs/main';
import { GallerysGrid } from './grid/main';

export function GallerysBody() {
  return (
    <Glass
      displayName={GallerysBody.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      <GallerysBreadcrumbs />
      <GallerysGrid />
    </Glass>
  );
}
