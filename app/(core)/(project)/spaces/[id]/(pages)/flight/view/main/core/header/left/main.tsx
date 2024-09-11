import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForSpacesFlightModals } from '../../../../../modal/controller/main';

export function SpacesFlightHeaderLeft() {
  const modalController = useContext(ContextForSpacesFlightModals);

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
