import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForSpacesMapModals } from '../../../../../../modal/controller/main';

export function SpacesMapCollectionAdd() {
  const modalController = useContext(ContextForSpacesMapModals);

  return (
    <div
      onClick={() => modalController.addCollectionController.open()}
      className='flex h-[3rem] w-[3rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'
    >
      <AstralAddIcon />
    </div>
  );
}
