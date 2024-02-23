import { FlipContext } from '@/(logic)/contexts/flip/main';
import { useState } from 'react';
import { GalleryContainer } from '../common/container/main';
import { GallerySidebarBack } from './back/main';
import { GallerySidebarCover } from './cover/main';

export function SidebarHomeGallery() {
  const [flipped, changeFlipped] = useState(false);

  const context = {
    flipped,
    flip: () => changeFlipped(!flipped),
  };

  return (
    <FlipContext.Provider value={context}>
      <GalleryContainer>
        {flipped ? <GallerySidebarBack /> : <GallerySidebarCover />}
      </GalleryContainer>
    </FlipContext.Provider>
  );
}

