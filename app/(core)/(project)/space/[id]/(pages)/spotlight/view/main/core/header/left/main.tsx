import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForSpaceSpotlightModals } from '../../../../../modal/controller/main';

export function SpaceSpotlightHeaderLeft() {
  const modalController = useContext(ContextForSpaceSpotlightModals);

  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <AstralAddIcon
          onClick={() => modalController.addSpotlightController.open()}
        />
      </div>
    </>
  );
}
