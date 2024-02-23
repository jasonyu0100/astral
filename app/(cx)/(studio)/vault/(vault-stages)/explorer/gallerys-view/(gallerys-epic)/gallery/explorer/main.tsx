import { GalleryExplorerCover } from './cover/main';
import { GalleryContainer } from '../common/container/main';
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
      <GalleryContainer>
        {flipped ? <GalleryExplorerBack /> : <GalleryExplorerCover />}
      </GalleryContainer>
    </FlipContext.Provider>
  );
}
