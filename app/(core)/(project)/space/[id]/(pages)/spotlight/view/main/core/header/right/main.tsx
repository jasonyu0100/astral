import { AstralShareIcon } from '@/icons/share/main';
import { useContext } from 'react';
import { ContextForSpaceSpotlightModals } from '../../../../../modal/controller/main';

export function SpaceSpotlightHeaderRight() {
  const modalController = useContext(ContextForSpaceSpotlightModals);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <button
        className='flex flex-row items-center space-x-[1rem] rounded-md bg-blue-500 px-[1rem] py-[0.5rem]'
        onClick={() => {
          modalController.shareReviewController.open();
        }}
      >
        <p className='font-bold text-slate-300'>Share Progress</p>
        <AstralShareIcon />
      </button>
    </div>
  );
}
