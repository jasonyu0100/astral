import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { useContext } from 'react';
import { ContextForSpacesSpace } from '../../../../../controller/main';
import { ContextForSpacesSpaceModals } from '../../../../../modal/controller/main';

export function SpacesSpaceHeaderRight() {
  const modalController = useContext(ContextForSpacesSpaceModals);
  const {
    state: { selectedIdeas },
  } = useContext(ContextForSpacesSpace);

  return (
    <div className='flex w-1/3 flex-row justify-end space-x-[1rem]'>
      {selectedIdeas.length === 0 && (
        <p className='animate-pulse-slow font-bold text-slate-400'>
          No ideas selected
        </p>
      )}
      {selectedIdeas.length > 0 && (
        <button
          className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
          onClick={() => {
            modalController.generatePlanController.open();
          }}
        >
          <p className='font-bold text-slate-300'>
            Create Release ({selectedIdeas.length})
          </p>
          <AstralArrowForwardIcon />
        </button>
      )}
    </div>
  );
}
