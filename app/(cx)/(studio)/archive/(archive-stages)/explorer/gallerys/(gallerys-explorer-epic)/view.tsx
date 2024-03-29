'use client';
import { GallerysBreadcrumbs } from './breadcrumbs/main';
import { GallerysContainer } from './container/main';
import { GallerysGrid } from './grid/main';

export function GallerysView() {
  return (
    <GallerysContainer>
      <GallerysBreadcrumbs />
      <GallerysGrid />
    </GallerysContainer>
  );
}
