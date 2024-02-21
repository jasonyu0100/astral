import { GalleryCover } from './cover/main';
import { GalleryContainer } from './container/main';
import { GalleryContext } from '@/(ouros)/(model)/gallery/main';
import { useState } from 'react';
import { GalleryBack } from './back/main';

export function HomeGallery() {
  const [flipped, changeFlipped] = useState(false);

  return (
    <GalleryContainer>
      {flipped ? (
        <>
          <GalleryBack
            onClick={() => {
              changeFlipped(!flipped);
            }}
          />
        </>
      ) : (
        <>
          <GalleryCover
            onClick={() => {
              changeFlipped(!flipped);
            }}
          />
        </>
      )}
    </GalleryContainer>
  );
}
