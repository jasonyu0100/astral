import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { useContext } from 'react';
import { ContextForSpacesProgress } from '../../../../controller/main';

export function SpacesProgressHeaderRight() {
  const spacesProgressController = useContext(ContextForSpacesProgress);

  return (
    <div className='flex w-1/3 flex-row items-center justify-end'>
      {spacesProgressController.state.selectedTasks.length === 0 && (
        <p className='animate-pulse-slow font-bold text-slate-500'>
          Not selected
        </p>
      )}
      {spacesProgressController.state.selectedTasks.length > 0 && (
        <button
          className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
          onClick={() => {
            alert('Nothing yet');
          }}
        >
          <p className='font-bold text-slate-300'>
            Generate Chaper (
            {spacesProgressController.state.selectedTasks.length})
          </p>
          <AstralArrowForwardIcon />
        </button>
      )}
    </div>
  );
}
