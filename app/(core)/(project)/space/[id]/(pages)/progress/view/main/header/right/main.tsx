import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { useContext } from 'react';
import { ContextForSpaceProgressModals } from '../../../../modal/controller/main';

export function SpaceProgressHeaderRight() {
  const modalController = useContext(ContextForSpaceProgressModals);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <button
        className='flex flex-row items-center space-x-[1rem] rounded-md bg-blue-500 px-[1rem] py-[0.5rem]'
        onClick={() => {
          modalController.addSpotlightController.open();
        }}
      >
        <p className='font-bold text-slate-300'>Spotlight</p>
        <AstralArrowForwardIcon />
      </button>
    </div>
  );
}
