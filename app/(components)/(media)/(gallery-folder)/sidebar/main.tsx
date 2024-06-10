import { ContextForFlippable, useControllerForFlippable } from '@/(logic)/contexts/flippable/main';
import { useState } from 'react';
import { GallerySidebarBack } from './back/main';
import { GallerySidebarCover } from './front/main';
import { GalleryContainer } from '../common/container/main';

export function SidebarHomeGallery() {
  const flippableController = useControllerForFlippable();

  return (
    <ContextForFlippable.Provider value={flippableController}>
      <GalleryContainer className="w-full">
        {flippableController.flipped ? <GallerySidebarBack /> : <GallerySidebarCover />}
      </GalleryContainer>
    </ContextForFlippable.Provider>
  );
}

