import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import React, { useContext } from 'react';
import { CollectionsBreadcrumbs } from './breadcrumbs/main';
import { GalleryCollectionGrid } from './grid/main';
import { ExploreGalleryContext } from '../(archive-stages)/explorer/collections-view/[id]/page';

export function CollectionsBody() {
  const { gallery } = useContext(ExploreGalleryContext);
  
  return (
    <GlassContainer
      displayName={CollectionsBody.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      glassStyle={backgroundStyles['glass-5']}
    >
      <CollectionsBreadcrumbs />
      {gallery !== null && <GalleryCollectionGrid />}
    </GlassContainer>
  );
}
