import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import React, { useContext } from 'react';
import { CollectionsBreadcrumbs } from './breadcrumbs/main';
import { GalleryCollectionGrid } from './grid/main';
import { ExploreGalleryContext } from '../page';

export function CollectionsBody() {
  const { gallery } = useContext(ExploreGalleryContext);
  
  return (
    <Layer
      displayName={CollectionsBody.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      <CollectionsBreadcrumbs />
      {gallery !== null && <GalleryCollectionGrid />}
    </Layer>
  );
}
