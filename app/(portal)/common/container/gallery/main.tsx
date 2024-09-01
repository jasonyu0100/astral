import { useContext } from 'react';
import { PolaroidContext } from '../../handler/polaroid/main';
import { PortalGalleryPiece } from './piece/main';
import { PortalGalleryTitle } from './title/main';

export function PortalGalleryView() {
  const {
    transition,
    index,
    categories,
    variant: variant,
    polaroidHandler,
  } = useContext(PolaroidContext);

  return (
    <div
      className='flex h-full w-full cursor-pointer flex-col items-center p-[3rem] pb-0'
      onClick={() => polaroidHandler.tapPolaroid()}
    >
      <PortalGalleryPiece
        imageState={transition}
        src={`/portal/${categories[index]}-${variant}.png`}
      />
      <PortalGalleryTitle>{categories[index]}</PortalGalleryTitle>
    </div>
  );
}
