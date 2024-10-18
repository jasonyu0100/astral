import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { useContext } from 'react';
import { ContextForSpacesBoard } from '../../../../controller/main';
import { ContextForSpacesBoardModals } from '../../../../modal/controller/main';

export function SpacesBoardHeaderRight() {
  const modalController = useContext(ContextForSpacesBoardModals);
  const {
    state: { selectedLogs },
  } = useContext(ContextForSpacesBoard);

  return (
    <div className='flex w-1/3 flex-row items-center justify-end'>
      {selectedLogs.length === 0 && (
        <p className='animate-pulse-slow font-bold text-slate-500'>
          No ways selected
        </p>
      )}
      {selectedLogs.length > 0 && (
        <button
          className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
          onClick={() => {
            modalController.addPostController.open();
          }}
        >
          <p className='font-bold text-slate-300'>
            Prepare Launch ({selectedLogs.length})
          </p>
          <AstralArrowForwardIcon />
        </button>
      )}
    </div>
  );
}
