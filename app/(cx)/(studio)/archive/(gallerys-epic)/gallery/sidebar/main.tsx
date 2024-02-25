import { FlipContext } from '@/(logic)/internal/contexts/flip/main';
import { useState } from 'react';
import { GallerySidebarBack } from './back/main';
import { GallerySidebarCover } from './cover/main';
import { GalleryPhoto } from './photo/main';

export function SidebarHomeGallery() {
  const [flipped, changeFlipped] = useState(false);

  const context = {
    flipped,
    flip: () => changeFlipped(!flipped),
  };

  return (
    <FlipContext.Provider value={context}>
      <GalleryPhoto>
        {flipped ? <GallerySidebarBack /> : <GallerySidebarCover />}
      </GalleryPhoto>
    </FlipContext.Provider>
  );
}

