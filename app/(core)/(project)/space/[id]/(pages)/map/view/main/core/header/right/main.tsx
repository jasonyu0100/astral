import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { useContext } from 'react';
import { ContextForSpaceMap } from '../../../../../controller/map/main';
import { ContextForSpaceMapModals } from '../../../../../modal/controller/main';

export function SpaceMapHeaderRight() {
  const modalController = useContext(ContextForSpaceMapModals);
  const mapController = useContext(ContextForSpaceMap);

  return (
    <div className='flex w-1/3 flex-row justify-end space-x-[1rem]'>
      {mapController.selectedIdeas.length > 0 ? (
        <button
          className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
          onClick={() => {
            alert('Coming soon...');
            // modalController.generatePlanController.open();
          }}
        >
          <p className='font-bold text-slate-300'>
            Create Log ({mapController.selectedIdeas.length})
          </p>
          <AstralArrowForwardIcon />
        </button>
      ) : (
        <p className='animate-pulse-slow font-bold text-slate-400'>
          No ideas selected
        </p>
      )}
    </div>
  );
}
