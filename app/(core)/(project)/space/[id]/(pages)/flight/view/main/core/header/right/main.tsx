import { AstralSidebarRightIcon } from '@/icons/sidebar-right/main';
import { cn } from '@/lib/utils';
import { useContext } from 'react';
import {
  ContextForSpaceFlight,
  SpaceFlightSidebarVisibility,
} from '../../../../../controller/main';

export function SpaceFlightHeaderRight() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpaceFlight);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <AstralSidebarRightIcon
        className={cn({
          'rotate-180 transform':
            sidebarVisibility === SpaceFlightSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpaceFlightSidebarVisibility.CLOSED
              ? SpaceFlightSidebarVisibility.OPEN
              : SpaceFlightSidebarVisibility.CLOSED,
          );
        }}
      />
    </div>
  );
}
