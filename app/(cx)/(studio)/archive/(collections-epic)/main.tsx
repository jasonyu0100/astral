import { Glass } from '@/(components)/glass/main';
import { backgroundStyles, containerStyles } from '@/(components)/styles/data';
import React, { useContext } from 'react';
import { CollectionsBreadcrumbs } from './breadcrumbs/main';
import { GalleryCollectionGrid } from './grid/main';
import { ExploreGalleryContext } from '../(archive-stages)/explorer/collections-view/[id]/page';

export function CollectionsBody() {
  const { gallery } = useContext(ExploreGalleryContext);
  
  return (
    <Glass
      displayName={CollectionsBody.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      <CollectionsBreadcrumbs />
      {gallery !== null && <GalleryCollectionGrid />}
    </Glass>
  );
}
