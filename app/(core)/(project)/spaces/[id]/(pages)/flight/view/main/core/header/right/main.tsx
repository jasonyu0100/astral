import { AstralSidebarRightIcon } from '@/icons/sidebar-right/main';
import { cn } from '@/lib/utils';
import { useContext } from 'react';
import {
  ContextForSpacesFlight,
  SpacesFlightSidebarVisibility,
} from '../../../../../controller/main';

export function SpacesFlightHeaderRight() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesFlight);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
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
    </div>
  );
}
