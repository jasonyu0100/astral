import { GalleryExplorerFront } from './front/main';
import { GalleryContainer } from '../common/container/main';
import { useState } from 'react';
import { GalleryExplorerBack } from './back/main';
import { FlipContext } from '@/(logic)/internal/contexts/flip/main';

export function ExplorerGallery() {
  const [flipped, changeFlipped] = useState(false);

  const context = {
    flipped,
    flip: () => changeFlipped(!flipped),
  };

  return (
    <FlipContext.Provider value={context}>
      <GalleryContainer className="w-[300px]">
        {flipped ? <GalleryExplorerBack /> : <GalleryExplorerFront />}
      </GalleryContainer>
    </FlipContext.Provider>
  );
}
