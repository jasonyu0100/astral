import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles, roundedStyles } from '@/(design)/(styles)/data';
import React from 'react';
import { GallerysBreadcrumbs } from './breadcrumbs/main';
import { GallerysGrid } from './grid/main';

export function GallerysBody() {
  return (
    <GlassAreaContainer
      displayName={GallerysBody.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      glassStyle={glassStyles['glass-5']}
      roundedStyle={roundedStyles['rounded-container-sm']}
    >
      <GallerysBreadcrumbs />
      <GallerysGrid />
    </GlassAreaContainer>
  );
}
