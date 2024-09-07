import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForSpaceFlightModals } from '../../../../../modal/controller/main';

export function SpaceFlightHeaderLeft() {
  const modalController = useContext(ContextForSpaceFlightModals);

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
