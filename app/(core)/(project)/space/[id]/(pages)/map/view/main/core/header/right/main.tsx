import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { useContext } from 'react';
import { ContextForSpaceMapModals } from '../../../../../modal/controller/main';

export function SpaceMapHeaderRight() {
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <div className='flex w-1/3 flex-row justify-end space-x-[1rem]'>
      <button
        className='flex flex-row items-center space-x-[1rem] rounded-md bg-blue-500 px-[1rem] py-[0.5rem]'
        onClick={() => {
          modalController.prioritiseController.open();
        }}
      >
        <p className='font-bold text-slate-300'>Prioritise</p>
        <AstralArrowForwardIcon />
      </button>
    </div>
  );
}
