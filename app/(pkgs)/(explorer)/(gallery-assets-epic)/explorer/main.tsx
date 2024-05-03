import { GalleryExplorerFront } from './front/main';
import { GalleryPhoto } from './photo/main';
import { useState } from 'react';
import { GalleryExplorerBack } from './back/main';
import { FlipContext } from '@/(lgx)/internal/contexts/flip/main';

export function ExplorerGallery() {
  const [flipped, changeFlipped] = useState(false);

  const context = {
    flipped,
    flip: () => changeFlipped(!flipped),
  };

  return (
    <FlipContext.Provider value={context}>
      <GalleryPhoto>
        {flipped ? <GalleryExplorerBack /> : <GalleryExplorerFront />}
      </GalleryPhoto>
    </FlipContext.Provider>
  );
}
