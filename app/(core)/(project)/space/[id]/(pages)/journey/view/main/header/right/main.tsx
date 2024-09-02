import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { useContext } from 'react';
import { ContextForSpaceJourney } from '../../../../controller/main';
import { ContextForSpaceJourneyModals } from '../../../../modal/controller/main';

export function SpaceJourneyHeaderRight() {
  const modalController = useContext(ContextForSpaceJourneyModals);
  const journeyController = useContext(ContextForSpaceJourney);

  return (
    <div className='flex w-1/3 flex-row items-center justify-end'>
      {journeyController.selectedLogs.length == 0 && (
        <p className='animate-pulse-slow font-bold text-slate-500'>
          No logs selected
        </p>
      )}
      {journeyController.selectedLogs.length > 0 &&
        journeyController.selectedLogs.length < 3 && (
          <p className='animate-pulse-slow font-bold text-slate-500'>
            {3 - journeyController.selectedLogs.length} more logs needed
          </p>
        )}
      {journeyController.selectedLogs.length >= 3 && (
        <button
          className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
          onClick={() => {
            modalController.addSpotlightController.open();
          }}
        >
          <p className='font-bold text-slate-300'>
            Spotlight ({journeyController.selectedLogs.length})
          </p>
          <AstralArrowForwardIcon />
        </button>
      )}
    </div>
  );
}
