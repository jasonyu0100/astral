'use client';
import { GallerysBreadcrumbs } from './breadcrumbs/main';
import { GallerysContainer } from './container/main';
import { GallerysGrid } from './grid/main';
import { GallerysSearch } from './search/main';

export function GallerysView() {
  return (
    <GallerysContainer>
      <GallerysSearch/>
      <GallerysGrid />
      <GallerysBreadcrumbs />
    </GallerysContainer>
  );
}
