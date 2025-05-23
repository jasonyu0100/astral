import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForSpacesIdeasModals } from '../../../../../../modal/controller/main';

export function SpacesIdeasAddResource() {
  const modalController = useContext(ContextForSpacesIdeasModals);

  return (
    <div
      onClick={() => modalController.addResourceController.open()}
      className='flex h-[3rem] w-[3rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'
    >
      <AstralAddIcon />
    </div>
  );
}
