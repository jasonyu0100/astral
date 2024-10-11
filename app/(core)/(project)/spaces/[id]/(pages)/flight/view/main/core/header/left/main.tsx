import { AstralAddIcon } from '@/icons/add/main';
import { AstralSidebarRightIcon } from '@/icons/sidebar-right/main';
import { BarDividerIndicator } from '@/ui/indicator/bar/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesFlight,
  SpacesFlightSidebarVisibility,
} from '../../../../../controller/main';
import { ContextForSpacesFlightModals } from '../../../../../modal/controller/main';

export function SpacesFlightHeaderLeft() {
  const modalController = useContext(ContextForSpacesFlightModals);
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesFlight);

  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <AstralSidebarRightIcon
          className={cn({
            'rotate-180 transform':
              sidebarVisibility === SpacesFlightSidebarVisibility.CLOSED,
          })}
          onClick={() => {
            updateSidebarVisibility(
              sidebarVisibility === SpacesFlightSidebarVisibility.CLOSED
                ? SpacesFlightSidebarVisibility.OPEN
                : SpacesFlightSidebarVisibility.CLOSED,
            );
          }}
        />
        <BarDividerIndicator />
        <AstralAddIcon
          onClick={() => modalController.addPostController.open()}
        />
      </div>
    </>
  );
}
