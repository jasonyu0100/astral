import { ContextForFlippable } from '@/(logic)/contexts/flippable/main';
import { useState } from 'react';
import { GallerySidebarBack } from './back/main';
import { GallerySidebarCover } from './front/main';
import { GalleryContainer } from '../common/container/main';

export function SidebarHomeGallery() {
  const [flipped, changeFlipped] = useState(false);

  const context = {
    flipped,
    flip: () => changeFlipped(!flipped),
  };

  return (
    <ContextForFlippable.Provider value={context}>
      <GalleryContainer className="w-full">
        {flipped ? <GallerySidebarBack /> : <GallerySidebarCover />}
      </GalleryContainer>
    </ContextForFlippable.Provider>
  );
}

