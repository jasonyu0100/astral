import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesSpace,
  SpacesSpaceSidebarVisibility,
} from '../../../../../controller/main';

export function SpacesSpaceHeaderLeft() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesSpace);
  return (
    <div className='flex w-1/3 flex-row'>
      <AstralSidebarLeftIcon
        className={cn({
          'rotate-180 transform':
            sidebarVisibility === SpacesSpaceSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesSpaceSidebarVisibility.CLOSED
              ? SpacesSpaceSidebarVisibility.OPEN
              : SpacesSpaceSidebarVisibility.CLOSED,
          );
        }}
      />
    </div>
  );
}
