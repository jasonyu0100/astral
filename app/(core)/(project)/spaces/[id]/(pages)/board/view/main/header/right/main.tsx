import { useContext } from 'react';
import { ContextForSpacesBoard } from '../../../../controller/main';
import { ContextForSpacesBoardModals } from '../../../../modal/controller/main';

export function SpacesBoardHeaderRight() {
  const modalController = useContext(ContextForSpacesBoardModals);
  const {
    state: { selectedTasks: selectedLogs },
  } = useContext(ContextForSpacesBoard);

  return (
    <div className='flex w-1/3 flex-row items-center justify-end'>
      {/* {selectedLogs.length === 0 && (
        <p className='animate-pulse-slow font-bold text-slate-500'>
          No ways selected
        </p>
      )}
      {selectedLogs.length > 0 && (
        <button
          className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
          onClick={() => {
            alert('Nothing yet');
          }}
        >
          <p className='font-bold text-slate-300'>
            Prepare Chat ({selectedLogs.length})
          </p>
          <AstralArrowForwardIcon />
        </button>
      )} */}
    </div>
  );
}
