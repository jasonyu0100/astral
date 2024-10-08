import { AstralAddIcon } from '@/icons/add/main';
import { AstralColumnsIcon } from '@/icons/columns/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { AstralTableIcon } from '@/icons/table/main';
import { BarDividerIndicator } from '@/ui/indicator/bar/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesJourney,
  SpacesJourneyDataMode,
  SpacesJourneySidebarVisibility,
} from '../../../../controller/main';
import { ContextForSpacesJourneyModals } from '../../../../modal/controller/main';

export function SpacesJourneyHeaderLeft() {
  const {
    state: { dataMode, sidebarVisibility },
    actions: { updateDataMode, updateSidebarVisibility },
  } = useContext(ContextForSpacesJourney);
  const modalController = useContext(ContextForSpacesJourneyModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            sidebarVisibility === SpacesJourneySidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesJourneySidebarVisibility.CLOSED
              ? SpacesJourneySidebarVisibility.OPEN
              : SpacesJourneySidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralTableIcon
        onClick={() => {
          if (dataMode === SpacesJourneyDataMode.COLUMNS) {
            updateDataMode(SpacesJourneyDataMode.TABLE);
          } else {
            updateDataMode(SpacesJourneyDataMode.COLUMNS);
          }
        }}
        className={ctwn('fill-slate-300', {
          'fill-blue-500': dataMode === SpacesJourneyDataMode.TABLE,
        })}
      />
      <AstralColumnsIcon
        onClick={() => {
          if (dataMode === SpacesJourneyDataMode.COLUMNS) {
            updateDataMode(SpacesJourneyDataMode.TABLE);
          } else {
            updateDataMode(SpacesJourneyDataMode.COLUMNS);
          }
        }}
        className={ctwn('fill-slate-300', {
          'fill-blue-500': dataMode === SpacesJourneyDataMode.COLUMNS,
        })}
      />
      <BarDividerIndicator />
      <AstralAddIcon onClick={() => modalController.addLogController.open()} />
    </div>
  );
}
