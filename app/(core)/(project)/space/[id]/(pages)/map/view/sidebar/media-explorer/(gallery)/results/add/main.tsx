import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForSpaceMapModals } from '../../../../../../modal/controller/main';

export function SpaceMapCollectionAdd() {
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <div
      onClick={() => modalController.addCollectionController.open()}
      className='flex h-[3rem] w-[3rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'
    >
      <AstralAddIcon />
    </div>
  );
}
