import { GalleryExplorerCover } from './cover/main';
import { GalleryPhoto } from '../common/photo/main';
import { useState } from 'react';
import { GalleryExplorerBack } from './back/main';
import { FlipContext } from '@/(logic)/contexts/flip/main';
export function HomeGallery() {
  const [flipped, changeFlipped] = useState(false);

  const context = {
    flipped,
    flip: () => changeFlipped(!flipped),
  };

  return (
    <FlipContext.Provider value={context}>
      <GalleryPhoto>
        {flipped ? <GalleryExplorerBack /> : <GalleryExplorerCover />}
      </GalleryPhoto>
    </FlipContext.Provider>
  );
}
