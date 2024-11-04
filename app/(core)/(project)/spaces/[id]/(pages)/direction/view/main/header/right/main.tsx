import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { useContext } from 'react';
import { ContextForSpacesDirection } from '../../../../controller/main';

export function SpacesDirectionHeaderRight() {
  const spacesDirectionController = useContext(ContextForSpacesDirection);

  return (
    <div className='flex w-1/3 flex-row items-center justify-end'>
      {spacesDirectionController.state.selectedTasks.length === 0 && (
        <p className='animate-pulse-slow font-bold text-slate-500'>
          No tasks selected
        </p>
      )}
      {spacesDirectionController.state.selectedTasks.length > 0 && (
        <button
          className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
          onClick={() => {
            alert('Nothing yet');
          }}
        >
          <p className='font-bold text-slate-300'>
            Generate Conversation (
            {spacesDirectionController.state.selectedTasks.length})
          </p>
          <AstralArrowForwardIcon />
        </button>
      )}
    </div>
  );
}
