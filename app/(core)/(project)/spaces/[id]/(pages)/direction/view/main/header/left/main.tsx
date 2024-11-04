import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralEditSquareIcon } from '@/icons/edit-square/main';
import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesDirection,
  SpacesDirectionSidebarVisibility,
} from '../../../../controller/main';
import { ContextForSpacesDirectionModals } from '../../../../modal/controller/main';

export function SpacesDirectionHeaderLeft() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesDirection);
  const modalController = useContext(ContextForSpacesDirectionModals);

  return (
    <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            sidebarVisibility === SpacesDirectionSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesDirectionSidebarVisibility.CLOSED
              ? SpacesDirectionSidebarVisibility.OPEN
              : SpacesDirectionSidebarVisibility.CLOSED,
          );
        }}
      />
      <BarDividerIndicator />
      <AstralAddIcon onClick={() => modalController.addTaskController.open()} />
      <AstralEditSquareIcon
        onClick={() => alert('Task generation coming soon')}
      />
    </div>
  );
}
