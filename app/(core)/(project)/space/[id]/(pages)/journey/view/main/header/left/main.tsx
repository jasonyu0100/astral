import { AstralAddIcon } from '@/icons/add/main';
import { AstralColumnsIcon } from '@/icons/columns/main';
import { AstralTableIcon } from '@/icons/table/main';
import { PipIndicator } from '@/ui/indicator/pip/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpaceJourney,
  SpaceJourneyDataMode,
} from '../../../../controller/main';
import { ContextForSpaceJourneyModals } from '../../../../modal/controller/main';

export function SpaceJourneyHeaderLeft() {
  const {
    state: { dataMode },
    actions: { updateDataMode },
  } = useContext(ContextForSpaceJourney);
  const modalController = useContext(ContextForSpaceJourneyModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralAddIcon onClick={() => modalController.addLogController.open()} />
      <PipIndicator />
      <AstralTableIcon
        onClick={() => {
          if (dataMode === SpaceJourneyDataMode.COLUMNS) {
            updateDataMode(SpaceJourneyDataMode.TABLE);
          } else {
            updateDataMode(SpaceJourneyDataMode.COLUMNS);
          }
        }}
        className={cn('fill-slate-300', {
          'fill-blue-500': dataMode === SpaceJourneyDataMode.TABLE,
        })}
      />
      <AstralColumnsIcon
        onClick={() => {
          if (dataMode === SpaceJourneyDataMode.COLUMNS) {
            updateDataMode(SpaceJourneyDataMode.TABLE);
          } else {
            updateDataMode(SpaceJourneyDataMode.COLUMNS);
          }
        }}
        className={cn('fill-slate-300', {
          'fill-blue-500': dataMode === SpaceJourneyDataMode.COLUMNS,
        })}
      />
    </div>
  );
}
