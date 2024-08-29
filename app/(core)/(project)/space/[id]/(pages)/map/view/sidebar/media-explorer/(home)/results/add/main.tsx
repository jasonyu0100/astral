import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForSpaceMapModals } from '../../../../../../modal/controller/main';

export function SpaceMapGalleryAdd() {
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <div
      onClick={() => modalController.addGalleryController.open()}
      className='flex h-[3rem] w-[3rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'
    >
      <AstralAddIcon />
    </div>
  );
}
