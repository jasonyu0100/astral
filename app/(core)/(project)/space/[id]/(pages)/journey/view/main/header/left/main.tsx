import { AstralColumnsIcon } from '@/icons/columns/main';
import { AstralTableIcon } from '@/icons/table/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpaceJourney,
  SpaceJourneyDataMode,
} from '../../../../controller/main';

export function SpaceJourneyHeaderLeft() {
  const journeyController = useContext(ContextForSpaceJourney);

  return (
    <div className='flex w-1/3 flex-row space-x-[1rem]'>
      <AstralTableIcon
        onClick={() => {
          if (journeyController.dataMode === SpaceJourneyDataMode.COLUMNS) {
            journeyController.updateDataMode(SpaceJourneyDataMode.TABLE);
          } else {
            journeyController.updateDataMode(SpaceJourneyDataMode.COLUMNS);
          }
        }}
        className={cn('fill-slate-300', {
          'fill-blue-500':
            journeyController.dataMode === SpaceJourneyDataMode.TABLE,
        })}
      />
      <AstralColumnsIcon
        onClick={() => {
          if (journeyController.dataMode === SpaceJourneyDataMode.COLUMNS) {
            journeyController.updateDataMode(SpaceJourneyDataMode.TABLE);
          } else {
            journeyController.updateDataMode(SpaceJourneyDataMode.COLUMNS);
          }
        }}
        className={cn('fill-slate-300', {
          'fill-blue-500':
            journeyController.dataMode === SpaceJourneyDataMode.COLUMNS,
        })}
      />
    </div>
  );
}
