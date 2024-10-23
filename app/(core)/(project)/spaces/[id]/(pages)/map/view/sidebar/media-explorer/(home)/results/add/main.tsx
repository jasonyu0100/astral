import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForSpacesMapModals } from '../../../../../../modal/controller/main';

export function SpacesMapGalleryAdd() {
  const modalController = useContext(ContextForSpacesMapModals);

  return (
    <div
      onClick={() => modalController.addGalleryController.open()}
      className='flex h-[3rem] w-[3rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'
    >
      <AstralAddIcon />
    </div>
  );
}
