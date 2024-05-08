import { FlipContext } from '@/(logic)/internal/contexts/flip/main';
import { useState } from 'react';
import { GallerySidebarBack } from './back/main';
import { GallerySidebarCover } from './front/main';
import { GalleryContainer } from '../explorer/container/main';

export function SidebarHomeGallery() {
  const [flipped, changeFlipped] = useState(false);

  const context = {
    flipped,
    flip: () => changeFlipped(!flipped),
  };

  return (
    <FlipContext.Provider value={context}>
      <GalleryContainer className="w-full">
        {flipped ? <GallerySidebarBack /> : <GallerySidebarCover />}
      </GalleryContainer>
    </FlipContext.Provider>
  );
}

