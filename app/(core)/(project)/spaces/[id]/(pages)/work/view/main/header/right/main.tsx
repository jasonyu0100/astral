import { useContext } from 'react';
import { ContextForSpacesWork } from '../../../../controller/main';

export function SpacesWorkHeaderRight() {
  const spacesWorkController = useContext(ContextForSpacesWork);

  return (
    <div className='flex w-1/3 flex-row items-center justify-end'>
      {/* {spacesWorkController.state.selectedTasks.length === 0 && (
        <p className='animate-pulse-slow font-bold text-slate-500'>
          No tasks selected
        </p>
      )}
      {spacesWorkController.state.selectedTasks.length > 0 && (
        <button
          className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
          onClick={() => {
            alert('Nothing yet');
          }}
        >
          <p className='font-bold text-slate-300'>
            Generate Suggestion (
            {spacesWorkController.state.selectedTasks.length})
          </p>
          <AstralArrowForwardIcon />
        </button>
      )} */}
    </div>
  );
}
