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
      className='flex h-full w-full flex-shrink-0 cursor-pointer flex-col items-center space-y-[1rem] p-[3rem]'
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
