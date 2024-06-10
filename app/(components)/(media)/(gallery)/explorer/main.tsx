import { GalleryExplorerFront } from './front/main';
import { GalleryContainer } from '../common/container/main';
import { useState } from 'react';
import { GalleryExplorerBack } from './back/main';
import { ContextForFlippable, useControllerForFlippable } from '@/(logic)/contexts/flippable/main';

export function ExplorerGallery() {
  const flippableController = useControllerForFlippable();

  return (
    <ContextForFlippable.Provider value={flippableController}>
      <GalleryContainer className="w-[300px]">
        {flippableController.flipped ? <GalleryExplorerBack /> : <GalleryExplorerFront />}
      </GalleryContainer>
    </ContextForFlippable.Provider>
  );
}
