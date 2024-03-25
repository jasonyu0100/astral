import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { glassStyles, containerStyles, roundedStyles } from '@/(design)/(styles)/data';
import React, { useContext } from 'react';
import { CollectionsBreadcrumbs } from './breadcrumbs/main';
import { CollectionsGrid } from './grid/main';
import { GalleryContext } from '@/(logic)/internal/model/gallery/main';

export function CollectionsBody() {
  const gallery = useContext(GalleryContext);
  
  return (
    <GlassContainer
      displayName={CollectionsBody.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      glassStyle={glassStyles['glass-5']}
      roundedStyle={roundedStyles['rounded-container-sm']}
    >
      <CollectionsBreadcrumbs />
      {gallery !== null && <CollectionsGrid />}
    </GlassContainer>
  );
}
